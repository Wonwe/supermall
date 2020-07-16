<!-- 购物车底部工具栏 -->
<template>
  <div class="bottom-bar">
    <div class="check-content" @click="checkAll">
      <CheckButton class="check-button" :isChecked="isAllChecked" />
      <span>全选</span>
    </div>

    <div>合计：{{totalPrice}}</div>

    <div class="calculate" @click="calculate">去结算：{{checkedLength}}</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return (
        '¥' +
        this.cartList.filter(item => {
            return item.isChecked
          }).reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0).toFixed(2)
      )
    },
    checkedLength() {
      return this.cartList.filter(item => item.isChecked).length
    },
    isAllChecked() {
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.isChecked)
    }
  },
  methods: {
    checkAll() {
      if (this.isAllChecked) {
        this.$store.dispatch('changeCartSelectAll', false)
      } else {
        this.$store.dispatch('changeCartSelectAll', true)
      }
    },
    calculate() {
      this.$toast.show('功能未完成！', 1000)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: #f6f6f6;
}

.check-content {
  width: 20%;
  padding-left: 5px;
  display: flex;
  align-items: center;
}

.check-button {
  width: 22px;
  height: 22px;
  line-height: 20px;
  margin-right: 5px;
}

.calculate {
  width: 25%;
  margin-left: auto;
  text-align: center;
  color: #fff;
  background-color: orangered;
}
</style>
