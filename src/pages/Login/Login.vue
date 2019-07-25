<template>
  <div class="login-pannel">

    <div class="avatar">
      <a-avatar :size="64" icon="user" />
    </div>

    <div class="usertel-box">
      <a-input placeholder="请输入您的手机号" v-model="usertel" ref="usertelInput">
        <a-icon slot="prefix" type="user" />
        <a-icon v-if="usertel" slot="suffix" type="close-circle" @click="emittelEmpty" />
      </a-input>
      <a-input placeholder="请输入您的登录密码" v-model="userpwd" ref="userpwdInput" type="password">
        <a-icon slot="prefix" type="lock" />
        <a-icon v-if="userpwd" slot="suffix" type="close-circle" @click="emitpwdEmpty" />
      </a-input>
      <a-button type="primary">登录</a-button>
    </div>

    <div class="links-box">
      <router-link to="register">注册</router-link> | 
      <router-link to="#">忘记密码</router-link> | 
      <router-link to="#">遇到问题</router-link>
    </div>

    <!-- <div class="platform-box"></div>  暂时不要  -->

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
  }
}
</script>

<style lang="less" scoped>
.login-pannel {
  // width: 750px;
  // height: 1000px;
  // .avatar {
  //   width:200px;
  //   margin: 0 auto;
  // }
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
}
</style>
