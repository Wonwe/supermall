<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swipe :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwipe from './childComps/HomeSeipe';
import RecommendView from './childComps/RecommendView'

import { getHomeMultidata } from 'network/home';

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwipe,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 请求数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
