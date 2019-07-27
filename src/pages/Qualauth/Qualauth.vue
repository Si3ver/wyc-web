<template>
  <div class="qual-pannel">
  <div class="pannel-title">司机资质认证</div>

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

      <a-button type="primary" html-type="submit" class="Quamit-btn" @click="handleQualSubmit">
        认证
      </a-button>

      <router-link to='/'>
        <div class="tologin">去登录</div>
      </router-link>
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
      this.$message.success('提交成功!等待5个工作日完成认证');
      // this.$router.push('/')
      // console.log("submit")
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.qual-pannel {
  padding: 1%;
  .pannel-title {
    width: 98%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0 2px #eee;
  }
}
.ant-row{
  position: relative;
  margin-top: 30px;
  
  .ant-col-18{
        width: 98%;
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
        padding-left: 0;
        padding-right: 4px;
    }
     .ant-col-11{
        width: 49%;
        padding-left: 0;
        padding-right: 4px;
    }
  }
.Quamit-btn{
  color: #fff;
  background-color:rgba(249, 127, 126, 1);
  border-color: rgba(249, 127, 126, 1);
  margin: 3% .1rem;
  width: 90%;
}
.tologin {
  // color: #fff;
  // background-color:rgba(249, 127, 126, 1);
  margin: 4px .2rem;
  text-align: center;
  // width: 49%;
}
</style>
