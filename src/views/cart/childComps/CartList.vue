<!-- 购物车商品列表 -->
<template>
  <div>
    <scroll ref="scroll" class="cart-list">
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
    ...mapGetters(['cartList'])
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
</style>
