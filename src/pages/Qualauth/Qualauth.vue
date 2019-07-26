<template>
  <div>
    <h1>资质认证</h1>
  
  <!--<a-form
      :form="form"
      @submit="handleSubmit">-->

      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
      <!--上传驾驶证-->
            <a-col :span="16" style="color:red">
               *请上传驾驶证
             </a-col>
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> 上传文件
              </a-button>
            </a-upload>
        <a-divider />

        <!--网络预约出租车驾驶员证-->
            <a-col :span="16" style="color:red">
               *网络预约出租车驾驶员证
             </a-col>
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> 上传文件
              </a-button>
            </a-upload>
        <a-divider />

        <!--网络预约出租车行驶证-->
            <a-col :span="16" style="color:red">
               *网络预约出租车行驶证
             </a-col>
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> 上传文件
              </a-button>
            </a-upload>
        <a-divider />

        <!--学历证明-->
            <a-col :span="10">
                学历信息
             </a-col>
             <a-col :span="11" style="color:blue">
               积分+50
             </a-col>
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> 上传文件
              </a-button>
            </a-upload>
        <a-divider />

    <!--配偶信息-->
            <a-col :span="10">
                配偶信息
             </a-col>
             <a-col :span="11" style="color:blue">
               积分+50
             </a-col>

            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button> 
                <a-icon type="upload" /> 上传文件
              </a-button>
            </a-upload>
        <a-divider />

      </a-form-item>

       <!-- 提交按钮 -->
      <a-form-item
        :wrapper-col="{ span: 12, offset: 5 }"
      >
        <a-button 
          type="primary"
          html-type="submit"
          class="Quamit-btn"
          @click="handleQualSubmit"
        >
          资质认证
        </a-button>
      </a-form-item>
    <!--</a-form>-->
    </div>
</template>

<script>
export default {
  name: 'Qualauth',
  data () {
    return {
      headers: {
        authorization: 'authorization-text',
      }
    }
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        //eslint-disable-next-line no-console
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleQualSubmit () {
      this.$message.success('提交成功!等待3~5个工作日完成认证');
      // this.$router.push('/')
      // console.log("submit")
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.ant-row{
  position: relative;
  margin-top: 30px;
  
  .ant-col-18{
        width: 120%;
      }
      .ant-row[data-v-39e0e5bb]{
            position: relative;
            margin-top: 8px;
      }
    .ant-divider{
      margin-top: 1px;
      margin-bottom: 1px;
    }
    .ant-col-10{
        width: 18%;
        padding-left: 4px;
        padding-right: 4px;
    }
     .ant-col-11{
        width: 49%;
        padding-left: 4px;
        padding-right: 4px;
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
