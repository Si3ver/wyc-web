<template>
  <div class="qualauth-pannel">
  <a-form
      :form="form"
      @submit="handleSubmit">

      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
      <!--上传驾驶证-->
        <a-col :span="18">
          <a-row :gutter="8">
          <a-col :span="12">
            <a-col :span="12" style="color:red">
               *请上传驾驶证
             </a-col>
          </a-col>
          <a-col :span="12">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> "上传文件"
              </a-button>
            </a-upload>
          </a-col>
          </a-row>
        </a-col>
        <a-divider />

        <!--网络预约出租车驾驶员证-->
        <a-col :span="18">
          <a-row :gutter="8">
          <a-col :span="12">
            <a-col :span="18" style="color:red">
               *网络预约出租车驾驶员证
             </a-col>
          </a-col>
          <a-col :span="12">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> "上传文件"
              </a-button>
            </a-upload>
          </a-col>
          </a-row>
        </a-col>
        <a-divider />

        <!--网络预约出租车行驶证-->
        <a-col :span="18">
          <a-row :gutter="8">
          <a-col :span="12">
            <a-col :span="18" style="color:red">
               *网络预约出租车行驶证
             </a-col>
          </a-col>
          <a-col :span="12">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> "上传文件"
              </a-button>
            </a-upload>
          </a-col>
          </a-row>
        </a-col>
        <a-divider />

        <!--学历证明-->
        <a-col :span="18">
          <a-row :gutter="8">
          <a-col :span="12">
            <a-col :span="7">
                学历信息
             </a-col>
             <a-col :span="7" style="color:blue">
               积分+50
             </a-col>
          </a-col>
          <a-col :span="12">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> "上传文件"
              </a-button>
            </a-upload>
          </a-col>
          </a-row>
        </a-col>
        <a-divider />
    
        <!--配偶信息-->
        <a-col :span="18">
          <a-row :gutter="8">
          <a-col :span="12">
            <a-col :span="7">
                配偶信息
             </a-col>
             <a-col :span="7" style="color:blue">
               积分+50
             </a-col>
          </a-col>
          <a-col :span="12">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> "上传文件"
              </a-button>
            </a-upload>
          </a-col>
          </a-row>
        </a-col>
        <a-divider />

      </a-form-item>

       <!-- 提交按钮 -->
      <a-form-item
        :wrapper-col="{ span: 12, offset: 5 }"
      >
        <router-link to="/">
          <a-button 
            type="primary"
            html-type="submit"
            class="Quamit-btn"
          >
            资质认证
          </a-button>
        </router-link>
      </a-form-item>
    </a-form>
    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'Qualauth',
  data () {
    return {
      form: {},
      headers: {}
    }
  },
  methods: {
    handleSubmit () {
      console.log("submit!")
    },
    handleChange () {
      console.log("change!")
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.qualauth-pannel {
  padding: .2rem;
}
.ant-row{
  position: relative;
  margin-top: 30px;
  .ant-col-18{
        width: 130%;
      }
      .ant-row[data-v-39e0e5bb]{
            position: relative;
            margin-top: 8px;
      }
    .ant-divider{
      margin-top: 1px;
      margin-bottom: 1px;
    }
 }
 .Quamit-btn{
  color: #fff;
    background-color:rgba(249, 127, 126, 1);
    border-color: rgba(249, 127, 126, 1);
    position: relative;
    margin-left: -20px;
    margin-top: 90px;
    width: 70%;
}
</style>
