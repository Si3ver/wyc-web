<template>
  <div class="good-pannel">
    <div class="img">
      <img :src="goodinfo.url" alt="">
    </div>
    <div class="detail">
      <div class="title">{{ goodinfo.name }}</div>
      <div class="price">{{ goodinfo.price }} 积分</div>
    </div>
    <a-divide></a-divide>
  </div>
</template>

<script>
export default {
  name: "Good",
  data () {
    return {
      goodinfo: {
        url: "http://img.alicdn.com/img/i2/117239780/O1CN01wyvtP22M7I21Zx3uI_!!0-saturn_solar.jpg_210x210.jpg",
        name: "星巴克5折券",
        price: 20
      }
    }
  },
  props: {
    good: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.good-pannel {
  width: 7rem;
  height: 2.6rem;
  padding: 12px 6px;
  border-bottom: 1px solid #ccc;
  // background: pink;
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
  }
}
</style>
