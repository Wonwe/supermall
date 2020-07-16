<!-- 头像、用户名 -->
<template>
  <div class="profile-user">
    <img src="~assets/img/profile/user.png" alt="" class="user-img">
    <p>用户：Wonwe</p>
    <div class="user-level">
      等级：
      <img src="~assets/img/profile/star.png" alt="" 
          v-for="item in 5" :key="item">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.profile-user {
  height: 100px;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: var(--color-tint);
}

.user-img {
  width: 70px;
  height: 70px;
  margin: 0 20px;
  border-radius: 50%;
}

.profile-user p {
  margin-right: 20px;
}

.user-level {
  display: flex;
  align-items: center;
}

.user-level img {
  width: 20px;
  height: 20px;
}
</style>
