<template>
  <div class="login-pannel">
    <router-link to='/Home'>
      <div class="close-btn">
        <a-icon type="close" />
      </div>
    </router-link>

    <div class="avatar">
      <a-avatar :size="64" icon="user" />
    </div>

    <div class="usertel-box" style="margin-top:1rem;">
      <a-input placeholder="请输入您的手机号" v-model="usertel" ref="usertelInput"> 
        <a-icon slot="prefix" type="user" />
        <a-icon v-if="usertel" slot="suffix" type="close-circle" @click="emittelEmpty" />
      </a-input>
      <a-input placeholder="请输入您的登录密码" v-model="userpwd" ref="userpwdInput" type="password">
        <a-icon slot="prefix" type="lock" />
        <a-icon v-if="userpwd" slot="suffix" type="close-circle" @click="emitpwdEmpty" />
      </a-input>
    </div>

    <router-link to='/Home'>
      <a-button class="login-btn" @click=handleLogin>登录</a-button>
    </router-link>

    <div class="links-box">
      <router-link to="register">注册</router-link> | 
      <router-link to="#">忘记密码</router-link> | 
      <router-link to="#">遇到问题</router-link>
    </div>
    <div style="width: 100%;height:5rem;margin-top:.5rem;">
      <img src='./../../../static/login/bg.png' style="width: 100%;height:100%;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      usertel: '',
      userpwd: ''
    }
  },
  methods: {
    emittelEmpty () {
      this.$refs.usertelInput.focus()
      this.usertel = ''
    },
    emitpwdEmpty () {
      this.$refs.userpwdInput.focus()
      this.userpwd = ''
    },
    handleLogin () {
      this.$attrs.isLogin = true
    }
  }
}
</script>

<style lang="less" scoped>
.login-pannel {
  // background: #efefef;
  // background: url('./../../../static/login/bg.png');
  // background: pink;
  height: 13.5rem;
  width: 100%;
  .close-btn {
    padding-top: .5rem;
    margin-left: .5rem;
  }
  .avatar {
    margin: .5rem auto .88rem;
    width: 1.28rem;
  }
  .login-btn {
    color: #fff;
    background-color:rgb(42, 83, 159);
    margin: 3% .2rem;
    width: 94%;
  }
  .links-box{
    text-align:center;
  }
}
</style>
