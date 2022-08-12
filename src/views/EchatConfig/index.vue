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
                prop="companyId"
                label="公司ID"
                width="250">
            </el-table-column>
            <el-table-column
                prop="companyName"
                label="公司名称"
                width="250">
            </el-table-column>
          </el-table>
        </div>
        <div style="margin-top: 20px">
          <el-button type="success" @click="addCompId">添加公司</el-button>
        </div>
<!--        <div class="page_info">-->
<!--          <el-pagination-->
<!--              background-->
<!--              @current-change="changePage"-->
<!--              layout="prev, pager, next"-->
<!--              :total="pageInfo.total"-->
<!--              :page-size="pageInfo.pageSize"-->
<!--          >-->
<!--          </el-pagination>-->
<!--          <div class="btn-warp-table">-->
<!--            <el-button type="info">恢复默认</el-button>-->
<!--            <el-button type="success">发送消息</el-button>-->
<!--            <el-button type="danger">结束对话</el-button>-->
<!--          </div>-->
<!--        </div>-->
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
          <el-form-item label="公司名称" prop="companyName">
            <el-input v-model="form.companyName" clearable></el-input>
          </el-form-item>
          <el-form-item label="appid" prop="appid">
            <el-input v-model="form.appid" clearable></el-input>
          </el-form-item>
          <el-form-item label="aeskey" prop="aeskey">
            <el-input v-model="form.aeskey" clearable></el-input>
          </el-form-item>
          <el-form-item label="token" prop="token">
            <el-input v-model="form.token" clearable></el-input>
          </el-form-item>
<!--          <el-form-item label="mediaId" prop="mediaId">-->
<!--            <el-input v-model="form.mediaId" clearable></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="mediaUrl" prop="mediaUrl">-->
<!--            <el-input v-model="form.mediaUrl" clearable></el-input>-->
<!--          </el-form-item>-->
          <div class="btn-warp">
            <el-button @click="save" type="success">保存</el-button>

            <el-button @click="del" type="danger">删除</el-button>
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
    companyId: '',
    companyName: '',
    appid: '',
    aeskey: '',
    token: ''
  }

  private rules: any = {
    appid: [
      { required: true, message: 'appId不能为空', trigger:'blur'}
    ],
    companyName: [
      { required: true, message: '公司名称不能为空', trigger:'blur'}
    ],
    aeskey: [
      { required: true, message: 'aesKey不能为空', trigger:'blur'}
    ],
    token: [
      { required: true, message: 'token不能为空', trigger:'blur'}
    ]
  }
  private created() {
    this.requestData()
  }
  private async requestData() {
    const res: any = await api.getEchatConfigDataList()
    if (res.code === 200) {
      this.data = res.data.list;
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
      if(this.data[i].companyId == val.companyId) {
        this.form.companyId = this.data[i].companyId;
        this.form.appid = this.data[i].appid;
        this.form.companyName = this.data[i].companyName;
        this.form.aeskey = this.data[i].aeskey;
        this.form.token = this.data[i].token;
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
    this.$refs.configForm.validate(async (valid: boolean) => {
      if (valid) {
        // 调用更新接口
        const result: any = await api.updateEchatConfigDataByCompId(form);
        if (result.code == 200) {
          this.$message({
            type:'success',
            message:'保存成功'
          });
          this.requestData();
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
   *  添加操作
   * @private
   */
  private addCompId() {
    this.$prompt('请输入公司ID', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /^[A-Za-z0-9]+$]?/,
      inputErrorMessage: '输入格式只支持数字、英文字母'
    }).then(async (val: any) => {
      let companyId : string = val.value;
      let echatConfig = new EchatConfig();
      echatConfig.setCompId(companyId);
      const result: any = await api.addEchatConfigDataByCompId(echatConfig);
      if (result.code == 200) {
        this.$message({
          type:'success',
          message:'保存成功'
        });
        // 刷新公司id列表
        this.requestData();
        // 刷新公司配置
        this.form.companyId = companyId;
        this.form.appid = '';
        this.form.companyName = '';
        this.form.aeskey = '';
        this.form.token = '';
      }else if (result.code == 400){
        // todo: 公司id已存在
        this.$message({
          type:'error',
          message:'公司Id已存在'
        });
      }
    });
  }

  /**
   * 删除操作
   * @private
   */
  private async del() {
    // 校验删除信息
    if (this.form.companyId == undefined || this.form.companyId == '') {
      this.$message({
        type:'error',
        message:'companyId不存在'
      });
      return;
    }

    const companyId: string = this.form.companyId;
    // 弹框确认是否执行删除操作
    this.$confirm('此操作将删除账号'+ companyId +'公司的所有配置', '提示',{
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      // 删除数据
      const result: any = await api.deleteEchatConfigDataByCompId(this.form);
      if (result.code == 200) {
        this.$message({
          type:'success',
          message:'删除成功'
        });
      }
      // 刷新公司id列表
      this.requestData();
      // 刷新公司配置
      this.form.companyId = '';
      this.form.appid = '';
      this.form.companyName = '';
      this.form.aeskey = '';
      this.form.token = '';
    });
  }
}

class EchatConfig {
  // 公司id
  private companyId: string = '';

  setCompId(companyId: string): void {
    this.companyId = companyId;
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
