<template>
  <div>
    <home-header></home-header>
    <h1>主页</h1>
    <a-button type="primary">Button</a-button>
    <p>{{ msg }}</p>
    <router-link to="City">路由测试</router-link>
  </div>
</template>

<script>
import request from './../../utils/request'
import HomeHeader from './components/Header'

export default {
  name: 'Home',
  data () {
    return {
      msg: "testmsg"
    }
  },
  methods: {
    getData () {
      request({
        url: '/test/string',
        method: 'get',
        params: { }
      }).then(response => {
        this.msg = response.data
      })
    }
  },
  mounted () {
    this.getData()
  },
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
@import '~styles/variables.less'

</style>
