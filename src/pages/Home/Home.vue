<template>
  <div>
    <home-header :isLogin="isLogin"></home-header>
    <!-- <p>首页-积分商城页面~~~</p> -->
    <carrousel></carrousel>
    <div class="goods-pannel">
      <good v-for="(good, idx) in goods" :key="idx"></good>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import Carrousel from './components/Carrousel'
import Good from './components/Good'

export default {
  name: 'Home',
  data () {
    return {
      goods: [{
        url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        name: "星巴克5折券",
        price: 20
      },{
        url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        name: "加油8折券",
        price: 30
      }]
    }
  },
  components: {
    HomeHeader,
    Carrousel,
    Good,
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
