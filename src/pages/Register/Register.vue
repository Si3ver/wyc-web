<template>
  <div class="regis-pannel">

    <router-link to='/login'>
      <a-icon type="left" />
    </router-link>

    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <!-- 姓名 -->
      <div class="names">
      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
        <a-col :span="5">
          姓名
        </a-col>
        <a-col :span="18">
          <a-input
            style="border:0;background:transparent;"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入您的姓名' }]}
            ]"
            placeholder="请输入姓名"
          />
        </a-col>
      </a-form-item>
      </div>
      <a-divider />

      <!-- 身份证号 -->
      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
        <a-col :span="5">
          身份证号
        </a-col>
        <a-col :span="18">
          <a-input
            style="border:0;background:transparent;"
            v-decorator="[
              'ID_card',
              {rules: [{ required: true, message: '请输入您的身份证号' }]}
            ]"
            placeholder="请输入11位身份证号"
          />
        </a-col>
      </a-form-item>

      <a-divider />

      <!-- 手机号 -->
      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
        <a-col :span="5">
          手机号
        </a-col>
        <a-col :span="18">
          <a-input
            style="border:0;background:transparent;"
            v-decorator="[
              'phone',
              {rules: [{ required: true, message: '请输入您的手机号' }]}
            ]"
            placeholder="请输入13位手机号"
          />
        </a-col>
      </a-form-item>

      <a-divider />

      <!-- 短信验证码 -->
      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
        <a-col :span="5">
          验证码
        </a-col>
        <a-col :span="18">
          <a-row :gutter="8">
          <a-col :span="12">
            <a-input
              style="border:0;background:transparent;"
              v-decorator="[
                'code',
                {rules: [{ required: true, message: '请输入短信验证码' }]}
              ]"
              placeholder="请输入验证码"
            />
          </a-col>
          <a-col :span="12">
            <a-button>获取验证码</a-button>
          </a-col>
          </a-row>
        </a-col>
      </a-form-item>

      <a-divider />

      <!-- 密码 -->
      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
        <a-col :span="5">
          密码
        </a-col>
        <a-col :span="18">
          <a-input
            style="border:0;background:transparent;"
            v-decorator="[
              'password',
              {rules: [{ required: true, message: '请输入密码' }]}
            ]"
            placeholder="请输入最少6位密码"
          />
        </a-col>
      </a-form-item>

      <a-divider />

      <!-- 确认密码 -->
      <a-form-item
        label=""
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 4 }"
      >
        <a-col :span="5">
          确认密码
        </a-col>
        <a-col :span="18">
          <a-input
            style="border:0;background:transparent;"
            v-decorator="[
              're_password',
              {rules: [{ required: true, message: '请输入确认密码' }]}
            ]"
            placeholder="请再次输入密码以确认"
          />
        </a-col>
      </a-form-item>

      <a-divider />

      <div>选择平台</div>

      <!-- 选择平台 -->
      <a-radio-group @change="onChange" v-model="value">
        <a-radio :style="radioStyle" :value="1">滴滴</a-radio>
        <a-radio :style="radioStyle" :value="2">美团</a-radio>
        <a-radio :style="radioStyle" :value="3">神州</a-radio>
        <a-radio :style="radioStyle" :value="4">
          More...
          <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
        </a-radio>
      </a-radio-group>

      <a-divider />

      <!-- 同意协议 -->
      <div class="links-box">
        注册即表示您同意
        <router-link to="#">《司机信息授权协议》</router-link>
      </div>
      
      <!-- 提交按钮 -->
      <a-form-item
        :wrapper-col="{ span: 12, offset: 5 }"
      >
        <a-button
          type="primary"
          html-type="submit"
          class="submit-btn"
        >
          注册
        </a-button>
      </a-form-item>

    </a-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values);
          this.$router.push('/qualauth')
        }
      });
    },
    onChange (e) {
      // eslint-disable-next-line no-console
      console.log('radio checked', e.target.value)
    },
  },
};
</script>


<style lang="less" scoped>
  .regis-pannel {
    padding: .3rem;
    .names{
      margin-top: .2rem;
    }
    .ant-form-item{
      margin-bottom: 1px;
    }
    .ant-divider{
      margin-top: 1px;
      margin-bottom: 1px;
    }
    .links-box {
      margin-left: .1rem;
      color: #ccc;
      font-size: 10px;
    }
    .submit-btn {
      color: #fff;
      background-color:rgba(249, 127, 126, 1);
      width: 55%;
    }
  }
</style>
