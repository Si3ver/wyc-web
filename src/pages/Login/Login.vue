<template>
  <div class="login-pannel">

    <div class="avatar">
      <a-avatar :size="64" icon="user" />
    </div>

    <div class="usertel-box">
      <a-input placeholder="请输入您的手机号" v-model="usertel" ref="usertelInput" style= "background-color:transparent;border:0;"> 
        <a-icon slot="prefix" type="user" />
        <a-icon v-if="usertel" slot="suffix" type="close-circle" @click="emittelEmpty" />
      </a-input>
      <a-input placeholder="请输入您的登录密码" v-model="userpwd" ref="userpwdInput" type="password">
        <a-icon slot="prefix" type="lock" />
        <a-icon v-if="userpwd" slot="suffix" type="close-circle" @click="emitpwdEmpty" />
      </a-input>
    </div>
    <div class="login-button">
      <a-button type="primary" style="background-color: #ff005c59; border-color: #ffffff; width: 22rem;
        margin-left: 3%; position: relative; top: 15px;">登录</a-button>
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

  // .usertel-box{
  //   background-color:transparent;
  //   border:0;
  // }
   .avatar {

     margin:84px auto 44px;
     width:64px;
     
   }
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
 // .components-input-demo-presuffix .anticon-close-circle:hover {
 //   color: #999;
 // }
 // .components-input-demo-presuffix .anticon-close-circle:active {
 //   color: #666;
 // }
 

  
  .links-box{
    position: relative;
    //margin-left: 6rem;
    text-align:center;
    top: 2rem;
    
  }
}
</style>
