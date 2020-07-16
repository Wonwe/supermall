<!-- 消息、商城、会员卡 -->
<template>
  <div class="profile-message">
    <div @click="messageClick">
      <img src="~assets/img/profile/message.svg" alt="">
      <p>我的消息</p>
    </div>
    <div @click="pointerClick">
      <img src="~assets/img/profile/pointer.svg" alt="">
      <p>积分商城</p>
    </div>
    <div @click="vipClick">
      <img src="~assets/img/profile/vip.svg" alt="">
      <p>会员卡</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    messageClick() {
      this.$toast.show('没有消息', 500)  
    },
    pointerClick() {
      this.$toast.show('正在建设中', 500)  
    },
    vipClick() {
      this.$toast.show('正在建设中', 500)  
    },
  },
}
</script>

<style scoped>
.profile-message {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-bottom: 15px solid #f6f6f6;
}

.profile-message div {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
}

.profile-message img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
</style>
