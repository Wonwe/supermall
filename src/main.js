import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(VueLazyLoad)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
