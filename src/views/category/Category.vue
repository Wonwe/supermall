<!-- 分类页 -->
<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>

    <scroll class="left-scroll" :bounce="false">
      <left-nav @navClick="navClick" :navList="navList" />
    </scroll>
    
    <scroll class="right-scroll">
      <goods-category :goodsCategory="goodsCategory" />
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import LeftNav from 'components/content/leftNav/LeftNav'
import GoodsCategory from 'components/content/goodsCategory/GoodsCategory'

import { getCategory, getSubcategory } from 'network/category'

export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    LeftNav,
    GoodsCategory
  },
  data() {
    return {
      navList: [],
      goodsCategory: []
    }
  },
  created() {
    getCategory().then(res => {
      // 获取大体分类
      this.navList.push(...res.data.category.list)
      // 获取第一条分类的具体分类
      this.navClick(res.data.category.list[0].maitKey)
    })
  },
  computed: {
    // gategoryCompName() {
    //   return this.$store.state.gategoryInfo.compName
    // }
  },
  methods: {
    navClick(maitKey) {
      // 切换至具体分类视图
      // this.$store.dispatch('changeCompName', 'GoodsGategory')
      // 获取具体分类数据
      getSubcategory(maitKey).then(res => {
        this.goodsCategory = []
        this.goodsCategory.push(...res.data.list)
      })
    },
  },
}
</script>

<style scoped>
#category {
  height: 100vh;
  position: relative;
}

.category-nav {
  color: #fff;
  background-color: var(--color-tint);
}

.left-scroll {
  width: 25%;
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.right-scroll {
  width: 75%;
  position: absolute;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.wrapper {
  width: 70%;
  height: 100vh;
  background-color: #999;
  overflow: hidden;
}
</style>
