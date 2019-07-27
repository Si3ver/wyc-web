<template>
<div>
  <div class="good-pannel" v-if="nums">
    <div class="img">
      <img :src="img" alt="">
    </div>
    <div class="detail">
      <div class="name">{{ name }}&nbsp;&nbsp;</div>
      <div class="nums">数量: <span class="digit">{{ nums }}</span></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Good",
  props: {
    name: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    nums: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  methods: {
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
  border: 1px solid #eee;
  border-radius: .3rem;
  box-shadow: 10px 5px 5px #eee;
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
    margin-left: .3rem;
    .name {
      font-size: 20px;
      font-weight: bolder;
    }
    .nums {
      font-size: 16px;
      margin-top: .8rem;
      margin-left: 3rem;
      .digit {
        color: red;
      }
    }
    .exchange-btn {
      margin-left: 3rem;
    }
  }
}
</style>
