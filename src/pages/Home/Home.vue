<template>
  <div>
    <home-header :points="points" :isLogin="isLogin"></home-header>
    <carrousel></carrousel>
    <div class="goods-pannel">
      <good v-for="(good, idx) in goods" :key="idx" :good="good" :points="points" @consumePoints="consumePoints"></good>
    </div>
  </div>
</template>

<script>
import request from './../../utils/request'
import HomeHeader from './components/Header'
import Carrousel from './components/Carrousel'
import Good from './components/Good'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Carrousel,
    Good,
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      points: 600,
      goods: [{
        id: 1,
        url: "https:////gw3.alicdn.com/bao/uploaded/i3/2757349401/O1CN01AO7Gmg2JJhx7lbtU8_!!0-item_pic.jpg_210x210.jpg",
        name: "加油券",
        price: 100
      },{
        id: 2,
        url: "https:////img.alicdn.com/img/bao/uploaded/i4/i2/528271792/O1CN01XPmok71P6mHLBXEor_!!528271792.jpg_320x320q90.jpg",
        name: "洗车券",
        price: 80
      },{
        id: 3,
        url: "https://img.alicdn.com/img/bao/uploaded/i4/i2/905684367/TB2orweuCtYBeNjSspkXXbU8VXa_!!905684367.jpg_320x320q90.jpg",
        name: "红猪",
        price: 50
      },{
        id: 4,
        url: "https://img.alicdn.com/img/bao/uploaded/i4/i3/406390357/TB2I00qoH1YBuNjSszeXXablFXa_!!406390357.jpg_320x320q90.jpg",
        name: "渔夫帽",
        price: 84
      }]
    }
  },
  methods: {
    consumePoints (usedPoints) {
      this.points = this.points - usedPoints
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
  mount () {
    localStorage.setItem('hasLogin', true)
    localStorage.setItem('purchasedGoods', '0,0,0,0')
    localStorage.setItem('purchaseRecords', '[]')
  },
  mounted () {
    this.getPoints()
  }
}
</script>

<style scoped>
</style>
