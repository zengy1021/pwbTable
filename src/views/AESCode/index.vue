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
          <el-form-item label="公司名称" prop="companyName">
            <el-input type="textarea" :rows="8" v-model="form.companyName" clearable></el-input>
          </el-form-item>
          <el-form-item label="appid" prop="appid">
            <el-input v-model="form.appid" clearable></el-input>
          </el-form-item>
          <el-form-item label="aesKey" prop="aesKey">
            <el-input v-model="form.aesKey" clearable></el-input>
          </el-form-item>
          <el-form-item label="token" prop="token">
            <el-input v-model="form.token" clearable></el-input>
          </el-form-item>
          <div style="font-size: 24px" class="main_title">会员数据(metaData)</div>
          <el-form-item label="会员的唯一值" prop="uid">
            <el-input v-model="metaData.uid" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员级别" prop="grade">
            <el-input v-model="metaData.grade" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员类别" prop="category">
            <el-input v-model="metaData.category" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员姓名" prop="name">
            <el-input v-model="metaData.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员昵称" prop="nickName">
            <el-input v-model="metaData.nickName" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员性别" prop="gender">
            <el-input v-model="metaData.gender" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员年龄" prop="age">
            <el-input v-model="metaData.age" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员生日" prop="birthday">
            <el-input v-model="metaData.birthday" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员婚姻状况" prop="maritalStatus">
            <el-input v-model="metaData.maritalStatus" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员联系电话" prop="phone">
            <el-input v-model="metaData.phone" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员QQ" prop="qq">
            <el-input v-model="metaData.qq" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员微信" prop="wechat">
            <el-input v-model="metaData.wechat" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员邮件地址" prop="email">
            <el-input v-model="metaData.email" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员国家" prop="nation">
            <el-input v-model="metaData.nation" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员省份" prop="province">
            <el-input v-model="metaData.province" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员城市" prop="city">
            <el-input v-model="metaData.city" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员地址" prop="address">
            <el-input v-model="metaData.address" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员头像地址" prop="photo">
            <el-input v-model="metaData.photo" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员备注信息" prop="memo">
            <el-input v-model="metaData.memo" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段1" prop="c1">
            <el-input v-model="metaData.c1" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段2" prop="c2">
            <el-input v-model="metaData.c2" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段3" prop="c3">
            <el-input v-model="metaData.c3" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段4" prop="c4">
            <el-input v-model="metaData.c4" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段5" prop="c5">
            <el-input v-model="metaData.c5" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段6" prop="c6">
            <el-input v-model="metaData.c6" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段7" prop="c7">
            <el-input v-model="metaData.c7" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段8" prop="c8">
            <el-input v-model="metaData.c8" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段9" prop="c9">
            <el-input v-model="metaData.c9" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段10" prop="c10">
            <el-input v-model="metaData.c10" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段11" prop="c11">
            <el-input v-model="metaData.c11" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段12" prop="c12">
            <el-input v-model="metaData.c12" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段13" prop="c13">
            <el-input v-model="metaData.c13" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段14" prop="c14">
            <el-input v-model="metaData.c14" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段15" prop="c15">
            <el-input v-model="metaData.c15" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段16" prop="c16">
            <el-input v-model="metaData.c16" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段17" prop="c17">
            <el-input v-model="metaData.c17" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段18" prop="c18">
            <el-input v-model="metaData.c18" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段19" prop="c19">
            <el-input v-model="metaData.c19" clearable></el-input>
          </el-form-item>
          <el-form-item label="会员自定义字段20" prop="c20">
            <el-input v-model="metaData.c20" clearable></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :offset="1" :span="15" style="height: 100%" class="rightBg">
        <div style="font-size: 36px" class="main_title">密文</div>
        <template>
          <div class="demo-collapse" :data="form">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>解密</span>
                </div>
              </template>
              <div>{{ form.companyId }}</div>
            </el-card>
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>Card name</span>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>Card name</span>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>Card name</span>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
            <div style="width: 600px" class="btn-warp">
              <el-button @click="save" type="success">加密</el-button>
              <el-button @click="del" type="danger">清空</el-button>
            </div>
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
    companyId: '',
    companyName: '',
    appid: '',
    aesKey: '',
    token: ''
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
    appid: [
      { required: true, message: 'appId不能为空', trigger:'blur'}
    ],
    companyName: [
      { required: true, message: '公司名称不能为空', trigger:'blur'}
    ],
    aesKey: [
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
    // 校验删除信息
    if (this.form.compId == undefined || this.form.compId == '') {
      this.$message({
        type:'error',
        message:'compId不存在'
      });
      return;
    }

    const compId: string = this.form.compId;
    // 弹框确认是否执行删除操作
    this.$confirm('此操作将删除账号'+ compId +'公司的所有配置', '提示',{
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
      this.form.aesKey = '';
      this.form.token = '';
    });
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
