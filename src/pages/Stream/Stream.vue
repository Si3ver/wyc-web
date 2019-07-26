<template>
  <div class="stream-pannel">
  <a-card
  hoverable
  style="width: 100%"
  >
  <img
    alt="example"
    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564727496&di=3951fd510cd420eb1cc927ce403abcf2&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.clm02.com%2Fgoez1.com%2F105187%2F105187_1.jpg"
    slot="cover"
  />
  <a-card-meta
    title="您的积分账户余额">
    <template slot="description"> {{ points }} </template>
  </a-card-meta>
  </a-card>

  <a-divider orientation="left">积分明细</a-divider>
  <!-- <h1>积分明细</h1> -->
  <!-- <p>积分明细</p> -->
  <!-- <a-divider /> -->

  <a-list
    class="demo-loadmore-list"
    :loading="loading"
    itemLayout="horizontal"
    :dataSource="data"
  >
    <div v-if="showLoadingMore" slot="loadMore" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
      <a-spin v-if="loadingMore" />
      <a-button v-else @click="onLoadMore">加载更多</a-button>
    </div>
    <a-list-item slot="renderItem">
      <a slot="actions">详情</a>
      <a-list-item-meta description="消费记录1"> -->
      </a-list-item-meta>
      <div>-1</div>
    </a-list-item>
  </a-list>
  </div>
</template>

<script>
import reqwest from 'reqwest'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

export default {
  name: 'Stream',
  props: {
    points: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: []
    }
  },
  methods: {
    getData  (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: (res) => {
          callback(res)
        },
      })
    },
    onLoadMore () {
      this.loadingMore = true
      this.getData((res) => {
        this.data = this.data.concat(res.results)
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      })
    },
  },
  mounted () {
    this.getData((res) => {
      this.loading = false
      this.data = res.results
    })
  }
}
</script>

<style scoped>
.demo-loadmore-list {
  padding: .2rem;
}
</style>
