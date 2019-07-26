import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'
import App from './App.vue'
import routes from './routes'
import './assets/styles/reset.css'
import 'ant-design-vue/dist/antd.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Antd)

const router = new VueRouter({
  // mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
