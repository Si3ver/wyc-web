<template>
  <div>
    <h1>主页</h1>
    <p>{{ msg }}</p>
    <router-link to="City">路由测试</router-link>
  </div>
</template>

<script>
import request from './../../utils/request'

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
        url: '/api/test/string',
        method: 'get',
        params: { }
      }).then(response => {
        this.msg = response.data
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
</style>
