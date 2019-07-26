<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key=item.id>
        <img class="swiper-img" alt="images" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'Carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true
        },
        list: [{
          "id": "0001",
          "imgUrl": "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"
        },{
          "id": "0002",
          "imgUrl": "https://gw.alicdn.com/imgextra/i1/185/O1CN01o5BNhC1DEloiZMW4K_!!185-0-lubanu.jpg"
        },{
          "id": "0003",
          "imgUrl": "https://gw.alicdn.com/imgextra/i3/38/O1CN01CnOGam1C9Ratl6XgN_!!38-0-lubanu.jpg"
        }]
      }
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff !important;
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 25.6%;
    background: #eee;
    .swiper-img {
      width: 100%
    } 
  }
</style>


