<template>
  <div class="knap-pannel">
    我的背包
    {{ this.purc }}

    <good-item
      v-for="(good, item) in goods"
      :key="item"
      :name="good.name"
      :img="good.url"
      :nums="purc[item]"
    ></good-item>

    <router-link to="/">返回主页</router-link>
  </div>
</template>

<script>
import GoodItem from './Components/GoodItem'

export default {
  name: 'Knapsack',
  components: {
    GoodItem
  },
  data () {
    return {
      purc: [],
      goods: [{
        id: '0000',
        url: "https:////img.alicdn.com/img/i2/117239780/O1CN01wyvtP22M7I21Zx3uI_!!0-saturn_solar.jpg_210x210.jpg",
        name: "5折星巴克券",
        price: 20
      },{
        id: '0001',
        url: "https:////gw3.alicdn.com/bao/uploaded/i3/2757349401/O1CN01AO7Gmg2JJhx7lbtU8_!!0-item_pic.jpg_210x210.jpg",
        name: "8折汽油券",
        price: 30
      },{
        id: '0002',
        url: "https:////img.alicdn.com/img/i2/117239780/O1CN01wyvtP22M7I21Zx3uI_!!0-saturn_solar.jpg_210x210.jpg",
        name: "7折星巴克券",
        price: 10
      },{
        id: '0003',
        url: "https:////gw3.alicdn.com/bao/uploaded/i3/2757349401/O1CN01AO7Gmg2JJhx7lbtU8_!!0-item_pic.jpg_210x210.jpg",
        name: "9折汽油券",
        price: 10
      }]
    }
  },
  props: {
  },
  methods: {
    
  },
  mounted () {
    this.purc = localStorage.getItem('purchasedGoods').split(',').map(item=>Number(item))
  }
}
</script>

<style lang="less" scoped>
</style>
