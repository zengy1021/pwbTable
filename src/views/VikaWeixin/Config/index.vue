<template>
  <div class="admin_list">
    <el-row :gutter="60" style="height: 100%">
      <el-col :span="20" style="height: 100%">
        <el-form
          ref="configForm"
          :model="form"
          :rules="rules"
          label-width="160px"
          label-position="right"
          label-suffix="："
          size="medium"
        >
          <div class="form_title">企业微信配置</div>
<!--          <el-form-item label="企业ID" prop="companyName">-->
<!--            <el-input v-model="form.receiveId" clearable></el-input>-->
<!--          </el-form-item>-->
          <div class="form_title_mid">客户与上下游-客户联系-API-接收事件服务器配置</div>
          <div class="form_title_mid">接收事件服务器地址：https://apps.echatsoft.com:9443/bizvika/weixin?urlFrom=external&companyId={{form.companyId}}</div>
          <el-form-item label="企业微信企业ID" prop="receiveId">
            <el-input v-model="form.receiveId" clearable></el-input>
          </el-form-item>
          <el-form-item label="企业微信Secret" prop="secret">
            <el-input v-model="form.secret" clearable></el-input>
          </el-form-item>
          <div class="form_title_mid_warn">注：此处secret为客户联系管理页的secret</div>
          <el-form-item label="token" prop="token">
            <el-input v-model="form.token" clearable></el-input>
          </el-form-item>
          <el-form-item label="aeskey" prop="aesKey">sh
            <el-input v-model="form.aesKey" clearable></el-input>
          </el-form-item>
          <div><br/></div>
          <div class="form_title">维格表配置</div>
          <el-form-item label="ApiToken" prop="vikaToken">
            <el-input v-model="form.vikaToken" clearable></el-input>
          </el-form-item>
          <el-form-item label="「员工管理」表ID" prop="vikaUserTable">
            <el-input v-model="form.vikaUserTable" clearable></el-input>
          </el-form-item>
          <el-form-item label="「客户管理」表ID" prop="vikaExternalTable">
            <el-input v-model="form.vikaExternalTable" clearable></el-input>
          </el-form-item>
<!--          <el-form-item label="mediaId" prop="mediaId">-->
<!--            <el-input v-model="form.mediaId" clearable></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="mediaUrl" prop="mediaUrl">-->
<!--            <el-input v-model="form.mediaUrl" clearable></el-input>-->
<!--          </el-form-item>-->
          <div class="btn-warp">
            <el-button @click="save" type="success">保存</el-button>
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
  private form: any = {
    secret: '',
    receiveId: '',
    aesKey: '',
    token: '',
    vikaToken: '',
    vikaUserTable: '',
    vikaExternalTable: '',
    companyId: '',
  }

  private rules: any = {
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
    ],
    vikaToken: [
      {required: true, message: 'ApiToken不能为空', trigger: 'blur'}
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
      this.form = res.data;
    }
  }


  /**
   * 根据点击选中的公司id 查询详情
   * @param val
   * @private
   */
  private async handleCurrentChange(val: any) {
    // 遍历公司信息数组，根据companyId知道到数据
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].companyId == val.companyId) {
        this.form.companyId = this.data[i].companyId;
        this.form.appid = this.data[i].appid;
        this.form.companyName = this.data[i].companyName;
        this.form.aeskey = this.data[i].aeskey;
        this.form.token = this.data[i].token;
        this.form.serverNode = this.data[i].serverNode;
        this.form.serverUrl = this.data[i].serverUrl;
        this.form.visitorUrl = this.data[i].visitorUrl;
      }
    }
  }

  /**
   * 更新操作
   * @private
   */
  private save() {
    // 获取表单对象
    const form = this.form;
    // 表单校验
    const Element: any = this.$refs.configForm
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
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.form_title_mid_warn{
  height: 60px;
  font-size: 20px;
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
