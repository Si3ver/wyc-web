<template>
  <div class="stream-pannel">
    
    <a-card hoverable style="width: 100%">
      <img src="https://image1.guazistatic.com/qn19072611035465662bf64819c468b74991a087832293.jpg?imageView2/2" slot="cover" />
      <a-card-meta title="您的积分账户余额">
        <template slot="description"> {{ points }} </template>
      </a-card-meta>
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
        <div :class="item.fluc>0 ? 'green' : 'red'">{{ item.fluc }}</div>
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
      data: [{
          content: '完成安全里程10km',
          fluc: 5
        },
        {
          content: '获得乘客5星好评',
          fluc: 2
        },
        {
          content: '闯红灯1次',
          fluc: -20
        },
        {
          content: '获得乘客1星差评',
          fluc: -5
      }]
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
      })
    }
  },
  mounted () {
    // 从后台拉取积分值
    this.getPoints()

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
