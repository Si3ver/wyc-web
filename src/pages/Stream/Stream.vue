<template>
  <div class="stream-pannel">
    
    <!-- <a-card hoverable style="width: 100%">
      <img src="https://image1.guazistatic.com/qn19072611035465662bf64819c468b74991a087832293.jpg?imageView2/2" slot="cover" />
      <a-card-meta title="您的积分账户余额">
        <template slot="description"> {{ points }} </template>
      </a-card-meta>
      <a-button type="primary" class="flush-btn" @click=handleFlush>刷新</a-button>
    </a-card> -->

    <div class="pannel1">
      <img src="https://image1.guazistatic.com/qn19072611035465662bf64819c468b74991a087832293.jpg?imageView2/2" />
    </div>

    <div class="pannel2">
      <div class="title">您的积分账户余额</div>
      <div class="points">{{ points }}</div>
      <div class="desc">积分账户可能存在延迟，请刷新</div>
      <a-button type="primary" class="flush-btn" @click=handleFlush>刷新</a-button>
    </div>

    <a-divider orientation="left">积分明细</a-divider>

    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a slot="actions" @click=handleHash>详情</a>
        <a-list-item-meta :description="item.content"></a-list-item-meta>
        <div :class="item.fluc>0 ? 'green' : 'red'">{{ item.fluc>0 ? '+' : ''}}{{ item.fluc }}</div>
        <!-- <div style="color: #ccc;font-size:1px;"><br/>{{ item.hash }}</div> -->
      </a-list-item>
    </a-list>

    <router-link to='/home'>
      <div class="back">返回积分商城</div>
    </router-link>

  </div>
</template>

<script>
import request from './../../utils/request'

export default {
  name: 'Stream',
  data () {
    return {
      points: 600,
      loading: true,
      loadingMore: true,
      showLoadingMore: false,
      data: [],
      hashMap: [
        "0x88475b911e71a3d5f660ea19799cf3b3 078d1acd53024793d2b56f989cbc3aa5",
        "0x58d17121dd5aa2258d877f36c29cc73a 6ba75be485c794e578e862e7404af07c",
        "0x0c5b0dafb1af5e54077cee89b50da2d0 2d4372264ad110ab65a8ae0e271c7d2e",
        "0xb2d7dca8e3901d9bd1ce6fdd3802a6cc ebae27c312c124f1cccac5c0049f137b",
        "0x0dfbd96355b2ccd939c980944e04bd51 fadbc4d20f0cca7a0c8d1fd4642d9702",
        "0x64f46ffca191141259cb54af98152dc7 1e8cdb93207c148e4a720195f77478a6",
        "0x699c04bfb05880fbd7c0dcd8c06593b3 61ad30ed3f0526cc6612d6757c9d4cee",
        "0xfb7a4f25c831ede28945b19e125d7892 7b4831f8bff7a8f849e78b989c1a241c",
        "0x452d60e8262fe4dab831f79332183465 0da858505a0c5f66b592b3851ad851de",
        "0x560a22b1a2a6335be4d2627651ba80e8 9d51efd5c5fda73b14104d1e88f28f44",
      ]
    }
  },
  methods: {
    getPoints () {
      request ({
        url: '/api/deploy/point/34',
        methods: 'get',
        params: {}
      }).then(response => {
        this.points = Number(response.data.data)

        if (this.points === 500 && this.data.length === 0) {
          this.data.unshift({
            content: '资料审核通过！',
            fluc: 500
          })
        } else if (this.points > 0 && this.points < 500) {  // fakefake  购买过东西！
          this.data = []
          this.data.unshift({
            content: '资料审核通过！',
            fluc: 500
          })
        }

        // 调取localStorage存储的购买记录
        let goodname = ['加油券', '洗车券', '红猪', '渔夫帽'],
            prices = [100, 80, 50, 84]
        let json = localStorage.getItem('purchaseRecords')
        let paseContent = json ? json : '[]'
        let records = JSON.parse(paseContent)

        records.map(item=>{
          this.data.unshift({
            content: `购买${goodname[item.id-1]}*${item.num}`,
            fluc: -1 * item.num * prices[item.id-1]
          })
        })
      })
    },
    handleFlush () {
      this.getPoints()
    },
    handleHash () {
      // this.$message.error('积分不足!')
      this.$notification.open({
        message: '交易哈希',
        description: this.hashMap[Math.floor(Math.random()*10+1)]
      });
    }
  },
  mounted () {
    // 从后台拉取积分值
    this.getPoints()

    // 拉取 历史流水data
    // let streamData = JSON.parse(localStorage.getItem('streamData'))
    // if (streamData)
  }
}
</script>

<style lang="less" scoped>
.pannel1 {
  width: 100%;
  height: 3.4rem;
  img {
    width: 100%;
    height: 100%;
  }
}

.pannel2 {
  width: 100%;
  height: 2rem;
  padding: .3rem;
  .title {
    font-size: 24px;
  }
  .points {
    font-size: 32px;
    font-weight: bolder;
    color: red;
  }
  .desc {
    color: #ccc;
    font-size: 12 px;
  }
  .flush-btn {
    float: right;
    top: -0.8rem;
  }
}

.demo-loadmore-list {
  padding: .2rem;
}
.green {
  color: green;
}
.red {
  color: red;
}
.back {
  margin: 4px .2rem;
  text-align: center;
}
</style>
