<template>
  <div class="admin_list">
    <el-row :gutter="60" style="height: 100%">
      <el-col :span="8" style="height: 100%">
        <div class="table_content">
          <el-table
              ref="singleTable"
              :data="data"
              border
              highlight-current-row
              @current-change="handleCurrentChangeCompId"
              style="width: 100%">
            <el-table-column
                type="index"
                width="100">
            </el-table-column>
            <el-table-column
                prop="compId"
                label="公司ID"
                width="400">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="8" style="height: 100%">
        <div class="table_content">
          <el-table
              ref="singleTable"
              :data="wechatData"
              border
              highlight-current-row
              @current-change="handleCurrentChangeId"
              style="width: 100%">
            <el-table-column
                type="index"
                width="100">
            </el-table-column>
            <el-table-column
                prop="applicationName"
                label="应用名称"
                width="400">
            </el-table-column>
          </el-table>
        </div>
        <div style="margin-top: 20px">
          <el-button type="success" @click="addApplication">添加应用</el-button>
        </div>
      </el-col>
      <el-col :span="8" style="height: 100%">
        <el-form
          ref="configForm"
          :model="form"
          :rules="rules"
          label-width="160px"
          label-position="right"
          label-suffix="："
          size="medium"
        >
          <div class="form_title">公司配置</div>
          <el-form-item label="应用名称" prop="applicationName">
            <el-input v-model="form.applicationName" clearable></el-input>
          </el-form-item>
          <el-form-item label="corpId" prop="corpId">
            <el-input v-model="form.corpId" clearable></el-input>
          </el-form-item>
          <el-form-item label="aesKey" prop="aesKey">
            <el-input v-model="form.aesKey" clearable></el-input>
          </el-form-item>
          <el-form-item label="token" prop="token">
            <el-input v-model="form.token" clearable></el-input>
          </el-form-item>
          <el-form-item label="secret" prop="secret">
            <el-input v-model="form.secret" clearable></el-input>
          </el-form-item>
          <el-form-item label="mediaId" prop="mediaId">
            <el-input v-model="form.mediaId" clearable></el-input>
          </el-form-item>
          <el-form-item label="mediaUrl" prop="mediaUrl">
            <el-input v-model="form.mediaUrl" clearable></el-input>
          </el-form-item>
          <div class="btn-warp">
            <el-button @click="save" type="success">保存</el-button>
            <el-button @click="del" type="danger">删除应用</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api/index'

@Component({
  components: {}
})
export default class DataList extends Vue {
  private data: any = []
  private gbCompId = ''
  private form: any = {
    compId: '',
    applicationName: '',
    corpId: '',
    aesKey: '',
    token: '',
    secret: '',
    mediaId: '',
    mediaUrl: ''
  }
  private wechatData: any = []
  private rules: any = {
    corpId: [
      { required: true, message: 'corpId不能为空', trigger:'blur'}
    ],
    applicationName: [
      { required: true, message: 'applicationName不能为空', trigger:'blur'}
    ],
    aesKey: [
      { required: true, message: 'aesKey不能为空', trigger:'blur'}
    ],
    token: [
      { required: true, message: 'token不能为空', trigger:'blur'}
    ],
    secret: [
      { required: true, message: 'secret不能为空', trigger:'blur'}
    ],
    mediaId: [
      { required: true, message: 'mediaId不能为空', trigger:'blur'}
    ],
    mediaUrl: [
      { required: true, message: 'mediaUrl不能为空', trigger:'blur'}
    ]
  }
  private created() {
    this.requestData()
  }
  private async requestData() {
    const compId: string = "";
    const res: any = await api.getWechatConfigDataList(compId)
    if (res.code === 200) {
      this.data = res.data;
    }
  }


  /**
   * 根据点击选中的id 查询详情
   * @param val
   * @private
   */
  private async handleCurrentChangeId(val: any) {
    const res: any = await api.getWechatConfigDataById(val.id);
    if (res.code == 200) {
      this.form.id = res.data.id;
      this.form.compId = res.data.compId;
      this.form.corpId = res.data.corpId;
      this.form.aesKey = res.data.aesKey;
      this.form.token = res.data.token;
      this.form.secret = res.data.secret;
      this.form.mediaId = res.data.mediaId;
      this.form.mediaUrl = res.data.mediaUrl;
      this.form.applicationName = res.data.applicationName;
    }
  }

  /**
   * 根据点击选中的公司id 查询详情
   * @param val
   * @private
   */
  private async handleCurrentChangeCompId(val: any) {
    const res: any = await api.getWechatConfigDataByCompId(val.compId);
    console.log(res.data);
    if (res.code == 200) {
      this.wechatData = res.data;
      this.gbCompId = val.compId;
    }
    // 清空表单内容
    this.clearFrom();
  }

  /**
   * 清空表单内容
   * @private
   */
  private clearFrom() {
    this.form.id = '';
    this.form.compId = '';
    this.form.corpId = '';
    this.form.aesKey = '';
    this.form.token = '';
    this.form.secret = '';
    this.form.mediaId = '';
    this.form.mediaUrl = '';
    this.form.applicationName = '';
  }

  /**
   *  添加操作
   * @private
   */
  private addApplication() {
    this.$prompt('请输入应用名称', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$]?/,
      inputErrorMessage: '输入格式只支持中文、数字、英文字母'
    }).then(async (val: any) => {
      let applicationName : string = val.value;
      let compId : string = this.gbCompId;
      let wechatConfig = new WechatConfig();
      wechatConfig.setCompId(compId);
      wechatConfig.setApplicationName(applicationName);
      const result = await api.addWechatConfig(wechatConfig);
      if (result.code == 200) {
        this.$message({
          type:'success',
          message:'保存成功'
        });
        this.handleCurrentChangeCompId({compId : this.gbCompId});
        this.handleCurrentChangeId(result.data);
      }else if (result.code == 400){
        this.$message({
          type:'error',
          message:'保存失败'
        });
      }
    });
  }

  /**
   * 更新操作
   * @private
   */
  private save() {
    // 获取表单对象
    const form = this.form;
    // 表单校验
    this.$refs.configForm.validate(async (valid: boolean) => {
      if (valid) {
        // 调用更新接口
        console.log("=========="+form);
        const result: any = await api.updateWechatConfigDataByCompId(form);
        if (result.code == 200) {
          this.$message({
            type:'success',
            message:'保存成功'
          });
        } else {
          this.$message({
            type:'error',
            message:'保存失败'
          });
        }
      }
    });
  }


  /**
   * 删除操作
   * @private
   */
  private async del() {
    // 校验删除信息
    if (this.form.id == undefined || this.form.id == '') {
      this.$message({
        type:'error',
        message:'id不存在'
      });
      return;
    }
    const applicationName: string = this.form.applicationName;
    // 弹框确认是否执行删除操作
    this.$confirm('此操作将删除 '+ applicationName +' 应用的配置', '提示',{
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      // 删除数据
      const result = await api.deleteWechatConfigById(this.form);
      if (result.code == 200) {
        this.$message({
          type:'success',
          message:'删除成功'
        });
        // 刷新页面
        this.handleCurrentChangeCompId({compId:this.gbCompId});
      }
    });
  }
}


class WechatConfig {
  // 公司id
  private applicationName: string;
  private compId: string;

  setApplicationName(applicationName: string): void {
    this.applicationName = applicationName;
  }

  setCompId(compId: string): void{
    this.compId = compId;
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
    overflow-y: scroll;
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
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.btn-warp {
  width: calc(100% - 160px);
  margin-left: 160px;
  display: flex;
  justify-content: space-between;
}
</style>
