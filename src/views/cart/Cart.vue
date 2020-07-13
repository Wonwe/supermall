<!-- 购物车 -->
<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    
    <cart-list />
    <cart-bottom-bar />
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
      
    }
  },
  computed: {
    /* 两种写法
    ...mapGetters(['cartLength', 'cartList'])
    可以起别名 */
    ...mapGetters({
      cartLength: 'cartLength'
    })
  },
}
</script>

<style scoped>
#cart {
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
