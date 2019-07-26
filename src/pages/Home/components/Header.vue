<template>
  <div class="header">
    <div class="header-user">
      <router-link :to="this.isLogin ? '/user' : '/login'">
        <a-icon type="user" />
      </router-link>
    </div>
    <div class="header-points">
      <router-link to='/stream'>
        $ {{ points }}
      </router-link>
    </div>
    <div class="header-input">
      <a-icon type="search" />
      请输入要搜索的商品
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    points: {
      type: Number,
      default: 0
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  line-height: .88rem;
  background: lightblue;
  color: #fff;
  .header-user {
    width: .3rem;
    margin-left: .1rem;
  }
  .header-points {
    width: 1.5rem;
    float: left;
    margin-left: .2rem;
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin: .12rem .2rem .12rem 0;
    padding-left: .1rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
}
</style>
