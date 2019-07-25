<template>
  <div class="header">
    <div class="header-left">
      <router-link to='/login'>
        <a-icon type="user" />
      </router-link>
    </div>
    <p>HomeHeader</p>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background: lightcyan;
  display: flex;
}
</style>
