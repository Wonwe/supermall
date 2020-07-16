<!-- 详情页 -->
<template>
  <div id="detail">
    <detail-nav-bar ref="navBar" @titleClick="titleClick" />

    <scroll ref="scroll" class="content" :probe-type="3" @scroll="contentScroll">
      <detail-swipe :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwipe from './childComps/DetailSwipe'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from 'network/detail'

import { itemListenerMixin, backTopMixin } from 'common/mixin'
import { debounce } from 'common/utils'

// import { Toast } from 'mint-ui'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopYs: null,
    }
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result

      // 保存顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages
      // 保存商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 保存店铺信息
      this.shop = new Shop(data.shopInfo)
      // 保存商品的详情信息
      this.detailInfo = data.detailInfo
      // 保存商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      // 保存商品评论信息
      if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0]
    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
    // 给getThemeTopYs赋值
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    })
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    detailImageLoad() {
      this.refresh()
      this.getThemeTopYs()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position) {
      // 获取y值
      const positionY = -position.y
      // positionY和主题中值对比
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        // if (this.currentIndex !== i &&
        //   ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) ||
        //   (i === length - 1 && positionY >= this.themeTopYs[i]))) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.$refs.navBar.currentIndex = i
        }
        // 判断BackTop是否显示
        this.listenerShowBackTop(position)
      }
    },
    addToCart() {
      // 获取购物车需要展示的商品信息
      const product = {}
      product.iid = this.iid
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      // 将商品添加到购物车中
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res => {
        // mint-ui中的Toast
        // Toast({
        //   message: res,
        //   duration: 1500
        // })

        // 自己以插件方式封装的Toast
        this.$toast.show(res, 1000)
      })
    }
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 58px;
  overflow: hidden;
}
</style>
