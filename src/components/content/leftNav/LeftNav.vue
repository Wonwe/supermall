<!-- 分类页左侧导航 -->
<template>
  <ul class="left-nav-ul">
    <li class="left-nav-li"
        v-for="(item, index) in navList" 
        :key="index"
        :class="{selected: currentIndex === index}"
        @click="navClick(index, item.maitKey)">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    navClick(index, maitKey) {
      this.currentIndex = index
      this.$emit('navClick', maitKey)
    }
  },
}
</script>

<style scoped>
.left-nav-ul {
  width: 100%;
  background-color: #f6f6f6;
}

.left-nav-li {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.selected {
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-tint);
}
</style>
