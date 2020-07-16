<!-- 购物车商品列表 -->
<template>
  <div>
    <scroll ref="scroll" class="cart-list">
      <div class="cart-empty" v-show="isEmpty">
        <p>你的购物车是空的~</p>
        <img src="~assets/img/cart/shibushisha.gif" alt="">
      </div>
      <cart-list-item v-for="(item, index) in cartList" 
                      :key="index"
                      :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  components: {
    Scroll,
    CartListItem
  },
  data() {
    return {
      
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed: {
    ...mapGetters(['cartList']),
    isEmpty() {
      return this.cartList.length === 0 ? true : false 
    }
  },
}
</script>

<style scoped>
.cart-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 89px;
  overflow: hidden;
}

.cart-empty {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  text-align: center;
}
</style>
