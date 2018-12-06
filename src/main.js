import Vue from 'vue'
import App from '@/App'
import VueRouter from 'vue-router'
import EventBus from '@/plugins/event-bus.js'
import routes from '@/routes.js'
import MstoMm from '@/filters/ms-to-mm.js'
import blur from '@/directives/blur.js'
import store from '@/store.js'
import i18n from '@/i18n.js'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(MstoMm)
Vue.use(blur)

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
