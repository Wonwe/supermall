<!-- 我的购物车、下载APP -->
<template>
  <div class="profile-other">
    <a @click="itemClick">
      <img src="~assets/img/profile/cart.svg" alt="">
      <p>我的购物车</p>
    </a>
    <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.mogujie&ckey=CK1420464319516&acm=3.mce.1_10_1lmzu.134879.0.yd34ms4U5YtdO.pos_0-m_504761-sd_119">
      <img src="~assets/img/profile/shopping.svg" alt="">
      <p>下载购物APP</p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    itemClick() {
      this.$router.replace('/cart')
    }
  },
}
</script>

<style scoped>
.profile-other {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.profile-other a {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
}

.profile-other a:last-child {
  border-bottom: none;
}

.profile-other img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
</style>
