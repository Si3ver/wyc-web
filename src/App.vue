<template>
  <div id="app">
    <router-view :isLogin="isLogin"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLogin: false
    }
  },
  mount () {
    localStorage.setItem('hasLogin', true)
    localStorage.setItem('purchasedGoods', '0,0,0,0')
    localStorage.setItem('purchaseRecords', '[]')
  }
}
</script>

<style>
</style>
