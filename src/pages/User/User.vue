<template >
  <div class="user-pannel">
    <!-- <div class="pannel-title">司机信息</div> -->
    <div class="pannel1">
      <div class="avatar">
        <img src="./../../../static/user/avatar.jpg" alt="avatar">
      </div>
      <div class="detailinfo">
        <div class="info-line1">
          <span class="name">{{ userinfo.name }}&nbsp;&nbsp;</span>
        </div>
        <div class="info-line2">
          <span class="tel">{{ userinfo.tel }}</span>
        </div>
      </div>
      <div class="driverstars">
        <a-icon type="star" theme="filled" />
        <a-icon type="star" theme="filled" />
        <a-icon type="star" theme="filled" />
        <a-icon type="star" />
        <a-icon type="star" />
      </div>
    </div>

    <div class="addr">
      <div class="desc">司机链上地址:</div>
      <div class="detail">0x70a619d4f301823d98c295a107b465644398a166</div>
    </div>

    <div class="points-box">
      <div class="my-points-header">我的积分</div>
      <div class="points">{{ points }}</div>
      <div class="tip">上述积分数据可能会存在滞后情况，请刷新</div>
    </div>

    <div class="other">
      <!-- <router-link to="/knapsack"> -->
        <div class="knapack">
          <div class="logo">
            <img src="./../../../static/user/pack.svg" alt="">
          </div>
          我的背包
        </div>
      <!-- </router-link> -->
      <div class="rights">
        <div class="logo">
          <img src="./../../../static/user/rights.svg" alt="">
        </div>
        专属权益
      </div>
    </div>

    <!-- <router-link to='/'>
      <a-button class="login-btn" @click=handleLogout>退出登录</a-button>
    </router-link> -->
    <router-link to='/home'>
      <div class="back">返回积分商城</div>
    </router-link>

  </div>
</template>

<script>
import request from './../../utils/request'
export default {
  data () {
    return {
      points: 600,
      userinfo: {
        name: "Diran An",
        tel: "13812345678",
        lastLoginTime: '2019-07-27 21:35:09',
        stars: 4.5
      }
    }
  },
  components: {
  },
  methods: {
    handleLogout () {
      this.$attrs.isLogin = false
      // eslint-disable-next-line no-console
      console.log("agc")
    },
    getPoints () {
      request ({
        url: '/api/deploy/point/34',
        methods: 'get',
        params: {}
      }).then(response => {
        this.points = Number(response.data.data)
      })
    }
  },
  mounted () {
    this.getPoints()
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
    .detailinfo {
      width: 3rem;
      .info-line1 {
        line-height: 20px;
        .name {
          font-size: 24px;
          font-weight: bolder;
        }
      }
      .info-line2 {
        .tel {
          color: #ccc;
        }
      }
    }
    .driverstars {
      width: 2rem;
    }
  }

  .addr {
    margin-top: .2rem;
    .desc {
      font-size: 16px;
    }
    .detail {
      font-size: 12px;
      color: #aaa;
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
        width: .8rem;
        height: .8rem;
        img {
          width: .8rem;
          height: .8rem;
        }
      }
    }
  }
  .back {
    width: 100%;
    margin: 4px .2rem;
    text-align: center;
  }
}
</style>
