<template >
  <div class="user-pannel">

    <div class="pannel1">
      <div class="avatar">
        <img src="./../../../static/user/avatar.jpg" alt="avatar">
      </div>
      <div class="detailinfo">
        <div class="name">{{ userinfo.name }}</div>
        <div class="tel">{{ userinfo.tel }}</div>
      </div>
      <div class="driverstars">
        <a-icon type="star" theme="filled" />
        <a-icon type="star" theme="filled" />
        <a-icon type="star" theme="filled" />
        <a-icon type="star" />
        <a-icon type="star" />
      </div>
    </div>

    <div class="points-box">
      <div class="my-points-header">我的积分</div>
      <div class="points">{{ userinfo.points }}</div>
      <div class="tip">上述积分数据可能会存在滞后情况，请刷新重试</div>
    </div>

    <div class="other">
      <router-link to="/knapsack">
        <div class="knapack">
          <div class="logo"></div>
          我的背包
        </div>
      </router-link>
      <div class="rights">
        <div class="logo"></div>
        专属权益
      </div>
    </div>

    <router-link to='/'>
      <a-button class="login-btn" @click=handleLogout>退出登录</a-button>
    </router-link>

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
    handleLogout () {
      this.$attrs.isLogin = false
    }
  }
}
</script>

<style lang="less" scoped>
.user-pannel {
  padding: .5rem;
  .pannel1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar {
      width: 1rem;
      height: 1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .points-box {
    width: 6.5rem;
    height: 2.12rem;
    margin-top: .4rem;
    border: 1px solid #eee;
    border-radius: .2rem;
    padding: .34rem .26rem;
    box-shadow: 1px 2px 6px 4px rgba(229, 229, 229, 0.6);
    .my-points-header {
      font-size: 12px;
      color: #555;
    }
    .points {
      font-size: 22px;
    }
    .tip {
      font-size: 10px;
      color: #ccc;
    }
  }
  .other {
    width: 6.5rem;
    height: 2.12rem;
    // background: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .knapack, .rights {
      width: 1.4rem;
      height: 1.4rem;
      // background: yellow;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .logo {
        background: green;
        width: .8rem;
        height: .8rem;
      }
    }
  }
  .login-btn {
    color: #fff;
    background-color:rgba(249, 127, 126, 1);
    margin: 3% .2rem;
    width: 94%;
  }
}
</style>
