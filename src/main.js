import Vue from 'vue'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
import App from './App.vue'
import routes from './routes'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(VueRouter, Antd)

const router = new VueRouter({
  // mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
