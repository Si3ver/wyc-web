<template >
  <div class="user-pannel">

    <div class="avatar">
      <img src="./../../../static/user/avatar.jpg" alt="avatar">
    </div>

    <div class="userinfo">
      <div class="name">{{ userinfo.name }}</div>
      <div class="tel">{{ userinfo.tel }}</div>
    </div>

    <div class="points">
      我的积分: <br/>
      {{ userinfo.points }}
    </div>

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {
        name: "用户A",
        tel: "17512341234",
        lastLoginTime: '2019-07-25 16:45:09',
        stars: 4.5,
        points: 12888
      }
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.user-pannel {
  width: 100%;
  display: flex;
  .avatar {
    width: 6rem;
    height: 6rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
