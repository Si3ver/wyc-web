<template>
  <div class="good-pannel" :class="good.id===4 ? 'no-bottom' : ''">
    <div class="img">
      <img :src="good.url" alt="">
    </div>
    <div class="detail">
      <div class="title">
        <span class="name">{{ good.name }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="price">{{ good.price }} 积分</span>
      </div>
      <div class="select">
        兑换数量: <a-input-number :min="0" :max="10" v-model="nums" />
      </div>
      <div class="consume">
        需&nbsp;<span class="digit">{{ nums * good.price }}</span>&nbsp;积分
      </div>
      <a-button type="primary" class="exchange-btn" @click=handleOk :disabled="nums === 0">兑换</a-button>
    </div>
  </div>
</template>

<script>
// import request from './../../../utils/request'
import axios from 'axios'

export default {
  name: "Good",
  props: {
    points: {
      type: Number,
      default: 0
    },
    good: {
      type: Object
    }
  },
  data () {
    return {
      nums: 0,
      disabled: false
    }
  },
  methods: {
    handleOk () {
      if (this.points < this.nums * this.good.price) {
        this.$message.error('积分不足!')
      } else {
        this.$message.success('兑换成功!');
        this.$emit("consumePoints", this.nums * this.good.price)

        // POST请求
        // request ({
        //   url: '/api/driver/item',
        //   methods: 'post',
        //   data: {
        //     driverId: 3,
        //     itemId: this.good.id,
        //     num: this.nums
        //   }
        // }).then(response => {
        //   this.points = Number(response.data.data)
        // })

        var bodyFormData = new FormData()
        bodyFormData.set('driverId', 3)
        bodyFormData.set('itemId', this.good.id)
        bodyFormData.set('num', this.nums)
        axios({
          method: 'post',
          // url: 'http://193.112.151.166:8080/api/driver/item',
          url: '/api/driver/item',
          config: { headers: {'Content-Type': 'multipart/form-data' }},
          data: bodyFormData
        })



        // 增加背包中的商品数量
        let purc = localStorage.getItem('purchasedGoods').split(',').map(item=>Number(item))
        purc[Number(this.good.id-1)] += this.nums
        localStorage.setItem('purchasedGoods', purc)
        // 增加一条购买记录
        let records = JSON.parse(localStorage.getItem('purchaseRecords'))
        records.push({
          id: this.good.id,
          num: this.nums
        })
        localStorage.setItem('purchaseRecords', JSON.stringify(records))
        // 清零
        this.nums = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.select /deep/ .ant-input-number {
  width: 1rem;
}
.good-pannel {
  width: 7rem;
  height: 2.6rem;
  margin: .2rem;
  padding: 12px 6px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: top;
  .img {
    width: 2rem;
    img {
      height: 2rem;
      width: 2rem;
    }
  }
  .detail {
    margin-left: .2rem;
    width: 4.3rem;
    // background: lightgoldenrodyellow;
    .title {
      .name {
        font-size: 20px;
        font-weight: bolder;
      }
      .price {
        color: red;
      }
    }
    .select {
      margin-top: .2rem;
      font-size: 16px;
    }
    .consume {
      .digit {
        color: red;
      }
    }
    .exchange-btn {
      // margin-left: 3rem;
      float: right;
      margin-top: -.5rem;
    }
  }
}
.no-bottom {
  border-bottom: none;
}
</style>
