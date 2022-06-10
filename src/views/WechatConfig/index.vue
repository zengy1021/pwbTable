<template>
  <div class="admin_list">
    <el-row :gutter="60" style="height: 100%">
      <el-col :span="10" style="height: 100%">
        <div class="table_content">
          <el-table
              ref="singleTable"
              :data="data"
              border
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 100%">
            <el-table-column
                type="index"
                width="100">
            </el-table-column>
            <el-table-column
                prop="compId"
                label="compId"
                width="400">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="10" style="height: 100%">
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
  private form: any = {
    compId: '',
    corpId: '',
    aesKey: '',
    token: '',
    secret: '',
    mediaId: '',
    mediaUrl: ''
  }
  private rules: any = {
    corpId: [
      { required: true, message: 'corpId不能为空', trigger:'blur'}
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
   * 根据点击选中的公司id 查询详情
   * @param val
   * @private
   */
  private async handleCurrentChange(val: any) {
    const res: any = await api.getWechatConfigDataByCompId(val.compId);
    if (res.code == 200) {
      this.form.compId = res.data.compId;
      this.form.corpId = res.data.corpId;
      this.form.aesKey = res.data.aesKey;
      this.form.token = res.data.token;
      this.form.secret = res.data.secret;
      this.form.mediaId = res.data.mediaId;
      this.form.mediaUrl = res.data.mediaUrl;
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
    this.$refs.configForm.validate(async (valid: boolean) => {
      if (valid) {
        // 调用更新接口
        const result: any = await api.updateWechatConfigDataByCompId(form);
        console.log(result.code)
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
