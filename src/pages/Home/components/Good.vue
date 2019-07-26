<template>
  <div class="good-pannel">
    <div class="img">
      <img :src="good.url" alt="">
    </div>
    <div class="detail">
      <div class="title">
        <span class="name">{{ good.name }}&nbsp;&nbsp;</span>
        <span class="price">{{ good.price }} 积分</span>
      </div>
      <div class="select">
        兑换数量: <a-input-number :min="1" :max="10" v-model="nums" />，需{{ nums * good.price }}分
      </div>
      <a-button type="primary" class="exchange-btn" @click=handleOk :disabled="nums === 0">兑换</a-button>
    </div>
  </div>
</template>

<script>
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
        // 增加背包中的商品数量
        let purc = localStorage.getItem('purchasedGoods').split(',').map(item=>Number(item))
        purc[Number(this.good.id)] += this.nums
        localStorage.setItem('purchasedGoods', purc)
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
    width: 4.6rem;
    .title {
      .name {
        font-size: 20px;
      }
      .price {
        color: red;
      }
    }
    .exchange-btn {
      margin-left: 3rem;
    }
  }
}
</style>
