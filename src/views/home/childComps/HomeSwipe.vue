<template>
  <mt-swipe :auto="4000" class="home-swipe">
      <mt-swipe-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
 name: "HomeSwipe",
 props: {
   banners: {
     type: Array,
     default() {
       return []
     }
   }
 },
 methods: {
   imageLoad() {
      this.$emit('swipeImageLoad')
   }
 },
}
</script>

<style>
.home-swipe {
  height: 195px;
}

.home-swipe img {
  width: 100%;
}
</style>