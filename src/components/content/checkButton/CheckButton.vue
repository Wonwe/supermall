<!-- 购物车商品选择按钮 -->
<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.check-button {
  padding: 1px;
  border-radius: 50%;
  border: 2px solid #ccc;
}

.check {
  background-color: orangered;
  border-color: orangered;
}
</style>
