<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    // message: {
    //   type: String,
    //   default: ''
    // },
    // show: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration=2000) {
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 7px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
}
</style>
