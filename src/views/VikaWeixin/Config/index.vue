<template>
  <div class="admin_list">
    <el-row :gutter="60" style="height: 100%">
      <el-col :span="20" style="height: 100%">
        <el-form
          ref="weixinForm"
          :model="weixinForm"
          :rules="weixinRules"
          label-width="160px"
          label-position="right"
          label-suffix="："
          size="medium"
        >
          <div class="form_title">企业微信配置</div>
          <div class="form_title_mid">1、企微打开后台管理页面</div>
          <div class="form_title_mid">2、我的企业-企业信息</div>
          <el-form-item label="企业ID" prop="receiveId">
            <el-input v-model="weixinForm.receiveId" clearable></el-input>
          </el-form-item>
          <div class="form_title_mid">2、客户与上下游-客户联系-客户-API</div>
          <el-form-item label="Secret" prop="secret">
            <el-input v-model="weixinForm.secret" clearable></el-input>
          </el-form-item>
          <div class="form_title_mid">3、接收事件服务器-编辑</div>
          <div class="form_title_mid">接收事件服务器地址：https://apps.echatsoft.com:9443/bizvika/weixin?urlFrom=external&companyId={{weixinForm.companyId}}<span class="form_title_mid_warn"> (复制地址，粘贴至URL输入框)</span></div>
          <el-form-item label="Token" prop="token">
            <el-input v-model="weixinForm.token" clearable></el-input>
            <div class="form_title_mid_warn">Token输入框点击随机获取生成，并复制到此输入框（保证一致）</div>
          </el-form-item>
          <el-form-item label="EncodingAESKey" prop="aesKey">
            <el-input v-model="weixinForm.aesKey" clearable></el-input>
            <div class="form_title_mid_warn">EncodingAESKey输入框点击随机获取生成，并复制到此输入框（保证一致）</div>
          </el-form-item>
          <div class="form_title_mid_warn">完成填写后，先点击此处保存，再保存企微-设置接收事件服务器</div>
          <div class="btn-warp">
            <el-button @click="save('weixin')" type="success">保存</el-button>
          </div>
        </el-form>
          <div><br/></div>
        <el-form
            ref="vikaForm"
            :model="vikaForm"
            :rules="vikaRules"
            label-width="160px"
            label-position="right"
            label-suffix="："
            size="medium"
        >
          <div class="form_title">维格表配置</div>
          <el-form-item label="ApiToken" prop="vikaToken">
            <el-input v-model="vikaForm.vikaToken" clearable></el-input>
          </el-form-item>
          <el-form-item label="「员工管理」地址" prop="vikaUserTableUrl">
            <el-input v-model="vikaForm.vikaUserTableUrl" clearable></el-input>
          </el-form-item>
          <el-form-item label="「员工管理」表ID" prop="vikaUserTable">
            <el-input v-model="vikaForm.vikaUserTable" clearable></el-input>
            <div class="form_title_mid_warn">打开该表时，浏览器url中以"dst"开始的即为该表ID</div>
          </el-form-item>
          <el-form-item label="「客户管理」表ID" prop="vikaExternalTable">
            <el-input v-model="vikaForm.vikaExternalTable" clearable></el-input>
            <div class="form_title_mid_warn">打开该表时，浏览器url中以"dst"开始的即为该表ID</div>
          </el-form-item>
<!--          <el-form-item label="mediaId" prop="mediaId">-->
<!--            <el-input v-model="form.mediaId" clearable></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="mediaUrl" prop="mediaUrl">-->
<!--            <el-input v-model="form.mediaUrl" clearable></el-input>-->
<!--          </el-form-item>-->
          <div class="btn-warp">
            <el-button @click="save('vika')" type="success">保存</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api/index'
import dayJs from 'dayjs'

@Component({
  components: {}
})
export default class DataList extends Vue {
  private data: any = []
  private list: any = []
  private weixinForm: any = {
    secret: '',
    receiveId: '',
    aesKey: '',
    token: '',
    companyId: ''
  }
  private vikaForm: any = {
    vikaToken: '',
    vikaUserTable: '',
    vikaUserTableUrl: '',
    vikaExternalTable: ''
  }

  private weixinRules: any = {
    secret: [
      {required: true, message: 'secret不能为空', trigger: 'blur'}
    ],
    receiveId: [
      {required: true, message: '企业ID不能为空', trigger: 'blur'}
    ],
    aesKey: [
      {required: true, message: 'aesKey不能为空', trigger: 'blur'}
    ],
    token: [
      {required: true, message: 'token不能为空', trigger: 'blur'}
    ]
  }

  private vikaRules: any = {
    vikaToken: [
      {required: true, message: 'ApiToken不能为空', trigger: 'blur'}
    ],
    vikaUserTableUrl: [
      {required: true, message: '维格表「员工管理」地址不能为空', trigger: 'blur'}
    ],
    vikaUserTable: [
      {required: true, message: '「员工管理」表ID不能为空', trigger: 'blur'}
    ],
    vikaExternalTable: [
      {required: true, message: '「客户管理」表ID不能为空', trigger: 'blur'}
    ],
  }

  private created() {
    this.requestData()
  }

  private async requestData() {
    const res: any = await api.getWeixinCompanyInfo()
    if (res.code === 200) {
      this.weixinForm.secret = res.data.secret;
      this.weixinForm.receiveId = res.data.receiveId;
      this.weixinForm.aesKey = res.data.aesKey;
      this.weixinForm.token = res.data.token;
      this.weixinForm.companyId = res.data.companyId;
      this.vikaForm.vikaToken = res.data.vikaToken;
      this.vikaForm.vikaUserTable = res.data.vikaUserTable;
      this.vikaForm.vikaUserTableUrl = res.data.vikaUserTableUrl;
      this.vikaForm.vikaExternalTable = res.data.vikaExternalTable;
    }
  }


  /**
   * 更新操作
   * @private
   */
  private async save(type:string) {
    let form : any = {};
    // 表单校验
    let Element: any = {};
    if (type == 'weixin') {
      // 获取表单对象
      form = this.weixinForm;
      Element = this.$refs.weixinForm
    } else if (type == 'vika') {
      // 获取表单对象
      form = this.vikaForm;
      Element = this.$refs.vikaForm
    }
    Element.validate(async (valid: boolean) => {
      if (valid) {
        // 调用更新接口
        const result: any = await api.saveWeixinCompanyInfo(form);
        if (result.code == 200) {
          this.$message({
            type: 'success',
            message: '保存成功'
          });
          this.requestData();
        } else {
          this.$message({
            type: 'error',
            message: '保存失败'
          });
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.admin_list {
  padding: 20px 0;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  // margin-top: 20px;
  .page_info {
    height: 90px;
    .btn-warp-table {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
    }
  }
  .table_content {
    height: calc(100% - 90px);
    overflow-y: auto;
    overflow-x: hidden;
    .el-table {
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.expend_content {
  padding: 20px 60px;
  box-sizing: border-box;
}
.break_all {
  word-break: break-all;
  white-space: pre-wrap;
}
.expand_label {
  font-weight: 700;
  color: #ff7070;
}
.form_title {
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  color: #333;
}
.form_title_mid {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.form_title_mid_warn{
  font-size: 14px;
  font-weight: 700;
  color: #ad0707;
}
.btn-warp {
  width: calc(100% - 160px);
  margin-left: 160px;
  display: flex;
  justify-content: space-between;
}
</style>
