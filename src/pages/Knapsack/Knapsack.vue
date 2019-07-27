<template>
  <div class="knap-pannel">
    <div v-if="goods.length >= 0">
      <good-item
        v-for="(good, item) in goods"
        :key="item"
        :name="good.name"
        :img="good.url"
        :nums="purc[item]"
      ></good-item>
    </div>
    <div v-else>
      背包中无商品~
    </div>
    <router-link to="/home" class="back">返回积分商城</router-link>
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
.knap-pannel {
  width: 100%;
}
.back {
  width: 100%;
  margin: 4px .2rem;
  text-align: center;
}
</style>
