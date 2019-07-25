<template>
  <div class="union">
    <div v-if="isLogin">
      <user></user>
    </div>
    <div v-else>
      <login></login>
    </div>
  </div>
</template>

<script>
import Login from './../Login/Login'
import User from './../User/User'

export default {
  name: 'Union',
  components: {
    Login,
    User
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
