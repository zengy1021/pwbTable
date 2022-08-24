<template>
  <div class="admin_list">
    <el-row style="height: 100%">
      <el-col :span="8" style="height: 100%" class="leftBg">
        <el-form
            ref="configForm"
            :model="form"
            :rules="rules"
            label-width="160px"
            label-position="right"
            label-suffix="："
            size="medium"
        >
          <div style="font-size: 36px" class="main_title" >明文</div>
          <el-form-item label="json" prop="plainText">
            <el-input type="textarea" :rows="8" v-model="form.plainText" clearable></el-input>
          </el-form-item>
        </el-form>
        <div style="display: flex;justify-content: space-between" class="btn-warp">
          <el-button @click="save" type="success">加密</el-button>
          <el-button @click="del" type="danger">清空</el-button>
        </div>
        <el-form
            ref="configForm"
            :model="decodeForm"
            label-width="160px"
            label-position="right"
            label-suffix="："
            size="medium"
            disabled
        >
          <div style="font-size: 36px" class="main_title" >Access_toekn</div>
          <el-form-item label="" prop="plainText">
            <el-input type="textarea" :rows="8" v-model="decodeForm.plainText" clearable></el-input>
          </el-form-item>
        </el-form>
        <div style="width: 600px" class="btn-warp">
          <el-button @click="getAccessToken" type="success">获取AccessToken</el-button>
        </div>
        <el-form
            ref="configForm"
            :model="encryptForm"
            :rules="rules"
            label-width="160px"
            label-position="right"
            label-suffix="："
            size="medium"
        >
          <div style="font-size: 36px" class="main_title" >密文</div>
          <el-form-item label="code" prop="encrypt">
            <el-input type="textarea" :rows="8" v-model="encryptForm.encrypt" clearable></el-input>
          </el-form-item>
        </el-form>
        <div style="display: flex;justify-content: space-between" class="btn-warp">
          <el-button @click="decode" type="success">解密</el-button>
          <el-button @click="encryptDel" type="danger">清空</el-button>
        </div>
      </el-col>
      <el-col :offset="1" :span="15" style="height: 100%" class="rightBg">
        <div style="font-size: 36px" class="main_title">密文</div>
        <template>
          <div class="demo-collapse" :data="form">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>json</span>
                </div>
              </template>
              <div  style="white-space: pre-wrap;" >{{ form.encrypt }}</div>
            </el-card>
          </div>
        </template>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div style="font-size: 36px" class="main_title">明文</div>
        <template>
          <div class="demo-collapse" :data="encryptForm">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>json</span>
                </div>
              </template>
              <div  style="white-space: pre-wrap;" >{{ encryptForm.plainText }}</div>
            </el-card>
          </div>
        </template>
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
    encrypt: '',
    plainText:'{\n' +
        '   "hello":"hello"' +
        '\n}'
  }
  private encryptForm: any = {
    encrypt: '',
    plainText:''
  }
  private decodeForm: any = {
    plainText: ''
  }
  private metaData: any = {
    uid: '',
    grade: '',
    category: '',
    name: '',
    nickName: '',
    gender: '',
    age: '',
    birthday: '',
    maritalStatus: '',
    phone: '',
    qq: '',
    wechat: '',
    email: '',
    nation: '',
    province: '',
    city: '',
    address: '',
    photo: '',
    memo: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
    c9: '',
    c10: '',
    c11: '',
    c12: '',
    c13: '',
    c14: '',
    c15: '',
    c16: '',
    c17: '',
    c18: '',
    c19: '',
    c20: ''
  }

  private rules: any = {
    plainText: [
      { required: true, message: '明文不能为空', trigger:'blur'}
    ],
  }
  private created() {
    this.requestData()

  }
  private async requestData() {
    const res: any = await api.getEchatConfigDataList()
    if (res.code === 200) {
      this.data = res.data.list;
    }
    this.form.companyId = "123";
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
        this.form.aesKey = this.data[i].aesKey;
        this.form.token = this.data[i].token;
      }
    }
  }

  /**
   * 更新操作
   * @private
   */
  private async save() {
    const result: any = await api.getEncode({code:this.form.plainText});
    this.form.encrypt = result.data;
  }

  /**
   * 解密
   * @private
   */
  private async decode() {
    const result: any = await api.getDecode({code:this.encryptForm.encrypt});
    this.encryptForm.plainText = result.data;
  }

  /**
   * 获取Access_token
   * @private
   */
  private async getAccessToken() {
    const result: any = await api.getAccessToken();
    this.decodeForm.plainText = result.data;
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
      let compId : string = val.value;
      let echatConfig = new EchatConfig();
      echatConfig.setCompId(compId);
      const result: any = await api.addEchatConfigDataByCompId(echatConfig);
      if (result.code == 200) {
        this.$message({
          type:'success',
          message:'保存成功'
        });
        // 刷新公司id列表
        this.requestData();
        // 刷新公司配置
        this.form.companyId = compId;
        this.form.appid = '';
        this.form.companyName = '';
        this.form.aesKey = '';
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
      // 刷新公司配置
      this.form.encrypt = '';
      this.form.plainText = '';
  }

  /**
   * 刷新加密工具
   * @private
   */
  private async encryptDel() {
    // 刷新公司配置
    this.encryptForm.encrypt = '';
    this.encryptForm.plainText = '';
  }
}

class EchatConfig {
  // 公司id
  private compId: string = '';

  setCompId(compId: string): void {
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 6px;
}

.box-card {
  min-width: 480px;
}
.leftBg{
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 4px;
  overflow-y: auto;
}
.rightBg{
  // background: #fff;
  // padding: 0 20px;
  box-sizing: border-box;
  border-radius: 4px;
  overflow-y: auto;
}
.main_title{
  margin-bottom: 10px;
  font-weight: 700;
}
</style>
