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
      points: 12345,
      goods: [{
        url: "https:////img.alicdn.com/img/i2/117239780/O1CN01wyvtP22M7I21Zx3uI_!!0-saturn_solar.jpg_210x210.jpg",
        name: "5折星巴克券",
        price: 20
      },{
        url: "https:////gw3.alicdn.com/bao/uploaded/i3/2757349401/O1CN01AO7Gmg2JJhx7lbtU8_!!0-item_pic.jpg_210x210.jpg",
        name: "8汽油券",
        price: 30
      },{
        url: "https:////img.alicdn.com/img/i2/117239780/O1CN01wyvtP22M7I21Zx3uI_!!0-saturn_solar.jpg_210x210.jpg",
        name: "5折星巴克券",
        price: 20
      },{
        url: "https:////gw3.alicdn.com/bao/uploaded/i3/2757349401/O1CN01AO7Gmg2JJhx7lbtU8_!!0-item_pic.jpg_210x210.jpg",
        name: "8汽油券",
        price: 30
      }]
    }
  },
  methods: {
    consumePoints (usedPoints) {
      // eslint-disable-next-line no-console
      console.log("fuzujian")
      this.points = this.points - usedPoints
    }
  }
}
</script>

<style scoped>
</style>
