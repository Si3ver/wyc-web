<template>
  <div class="stream-pannel">
    
    <a-card hoverable style="width: 100%">
      <img src="https://image1.guazistatic.com/qn19072611035465662bf64819c468b74991a087832293.jpg?imageView2/2" slot="cover" />
      <a-card-meta title="您的积分账户余额">
        <template slot="description"> {{ points }} </template>
      </a-card-meta>
      <a-button type="primary" class="flush-btn" @click=handleFlush>刷新</a-button>
    </a-card>

    <a-divider orientation="left">积分明细</a-divider>

    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a slot="actions">详情</a>
        <a-list-item-meta :description="item.content"></a-list-item-meta>
        <div :class="item.fluc>0 ? 'green' : 'red'">{{ item.fluc>0 ? '+' : ''}}{{ item.fluc }}</div>
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
      data: []
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

<style scoped>
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
