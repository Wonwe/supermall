<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    
    <tab-control ref="tabControl1"
                  :titles="['流行', '新款', '精选']"
                  class="tab-control"
                  v-show="isTabFixed"
                  @tabClick="tabClick" />
    <scroll ref="scroll"
            class="content"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swipe :banners="banners" @swipeImageLoad.once="swipeImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control ref="tabControl2"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwipe from './childComps/HomeSwipe'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import { getHomeMultidata, getHomeGoods } from 'network/home'

import { itemListenerMixin, backTopMixin } from 'common/mixin'
import { debounce } from 'common/utils'

export default {
  name: 'Home',
  components: {
    HomeSwipe,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  created() {
    // 请求首页导航数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    // 取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    swipeImageLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性 $el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    contentScroll(position) {
      // 判断BackTop是否显示
      this.listenerShowBackTop(position)
      // 决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}

.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
