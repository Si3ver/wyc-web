<template>
  <div>
    <h1>测试组件</h1>
    <p>{{ testdata }}</p>
  </div>
</template>

<script>
import request from './../../utils/request'

export default {
  name: 'City',
  data () {
    return {
      testdata: "江西南昌"
    }
  },
  methods: {
    getData () {
      request({
        url: '/api/test/city',
        method: 'get',
        params: { ID: 12345 }
      }).then(response => {
        this.testdata = response.data
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
