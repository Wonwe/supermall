<template>
  <mt-swipe :auto="4000" class="detail-swipe">
    <mt-swipe-item v-for="item in topImages" :key="item.id">
      <img :src="item" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.detail-swipe {
  height: 438px;
  text-align: center;
  background-color: #fff;
}

.detail-swipe img {
  height: 100%;
}

.detail-swipe >>> .mint-swipe-indicator {
    background: #fff;
    opacity: 0.5;
}

.detail-swipe >>> .mint-swipe-indicator.is-active {
    background: #ee7322;
    opacity: 0.9;
}
</style>
