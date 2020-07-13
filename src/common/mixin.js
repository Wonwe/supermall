import { debounce } from './utils'
import { BACKTOP_DISTANCE } from "@/common/const"

import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin= {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 监听图片加载完成
    // 对this.$refs.scroll.refresh进行防抖操作
    this.refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImgListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    listenerShowBackTop(position) {
      this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  },
}