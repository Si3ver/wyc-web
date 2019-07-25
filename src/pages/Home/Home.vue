<template>
  <div>
    <home-header :isLogin="isLogin"></home-header>
    <p>首页-积分商城页面~~~</p>
  </div>
</template>

<script>
import HomeHeader from './components/Header'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader
  },
  methods: {
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
