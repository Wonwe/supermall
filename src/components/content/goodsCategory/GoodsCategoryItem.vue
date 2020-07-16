<!-- 单个分类商品展示 -->
<template>
  <div class="goods-category-item">
    <a :href="goodsCategoryItem.link">
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <div class="goods-category-info">
        <p>{{goodsCategoryItem.title}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    goodsCategoryItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsCategoryItem.image
    }
  },
  methods: {
    imageLoad() {
        this.$bus.$emit('itemImageLoad')
    }
  },
}
</script>

<style scoped>
.goods-category-item {
  width: 32%;
  padding: 20px 0;
  position: relative;
}

.goods-category-item img {
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.goods-category-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
</style>
