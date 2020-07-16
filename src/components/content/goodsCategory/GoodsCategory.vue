<!-- 分类商品展示 -->
<template>
  <div class="goods-category">
    <goods-category-item v-for="(item, index) in goodsCategory" 
        :key="index" 
        :goodsCategoryItem="item"/>
  </div>
</template>

<script>
import GoodsCategoryItem from './GoodsCategoryItem'

export default {
  components: {
    GoodsCategoryItem
  },
  props: {
    goodsCategory: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.goods-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}

.goods-category::after {
  width: 32%;
	content: "";
}
</style>
