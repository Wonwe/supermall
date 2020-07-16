<!-- 个人中心页 -->
<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的档案</div>
    </nav-bar>

    <profile-user />
    <profile-info />
    <profile-message />
    <profile-other />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileUser from './childComp/ProfileUser'
import ProfileInfo from './childComp/ProfileInfo'
import ProfileMessage from './childComp/ProfileMessage'
import ProfileOther from './childComp/ProfileOther'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileUser,
    ProfileInfo,
    ProfileMessage,
    ProfileOther
  }
}
</script>

<style scoped>
#profile {
  height: 100vh;
  position: relative;
}

.profile-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
