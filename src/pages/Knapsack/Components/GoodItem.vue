<template>
  <div class="good-pannel" v-if="nums">
    <div class="img">
      <img :src="img" alt="">
    </div>
    <div class="detail">
      <div class="title">
        <span class="name">{{ name }}&nbsp;&nbsp;</span>
      </div>
      <div class="title">
        <span class="nums">数量: {{ nums }}</span>
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
