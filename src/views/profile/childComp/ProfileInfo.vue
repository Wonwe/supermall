<!-- 余额、优惠、积分 -->
<template>
  <div class="profile-info">
    <div class="info-item">
      <div>
        <span>99.99</span>元
        <p>我的余额</p>
      </div>
    </div>
    <div class="info-item">
      <div>
        <span>99</span>个
        <p>我的优惠</p>
      </div>
    </div>
    <div class="info-item">
      <div>
        <span>99</span>分
        <p>我的积分</p>
      </div>
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
.profile-info {
  height: 115px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #f6f6f6;
}

.info-item {
  width: 33%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.info-item span {
  font-size: 28px;
  color: orange;
}
</style>
