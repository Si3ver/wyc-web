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
  }
}
</script>

<style>
</style>
