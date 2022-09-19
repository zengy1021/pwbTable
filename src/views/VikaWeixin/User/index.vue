<template>
  <div class="admin_list">
    <div class="search_box">
      <div class="form_title">维格表已匹配企微成员列表</div>
      <el-button @click="syncUserRel">同步 - 企微对外员工</el-button>
      <el-button @click="bindingVika">绑定 - 维格表成员账号</el-button>
      <el-button @click="userRelsFlash" style="float: right">刷新</el-button>
    </div>
    <div class="table_content">
      <el-table v-loading = "isPending" ref="table" :data="list" row-key="id" :expand-row-keys="expends"  height="calc(100% - 10px)" highlight-current-row stripe>
        <el-table-column min-width="60" label="维格表头像">
          <template slot-scope="scope">
            <el-avatar style="width: 50px; height: 50px" :src="list[scope.$index].vikaAvatar" :fit="contain" />
          </template>
        </el-table-column>
        <el-table-column min-width="120" prop="weixinUserId" label="企微ID"> </el-table-column>
        <el-table-column min-width="120" prop="valExternalUserCount" label="有效客户数量"> </el-table-column>
        <el-table-column min-width="120" prop="weixinUserName" label="企微名称"> </el-table-column>
        <el-table-column min-width="160" prop="vikaUserName" label="维格表名称"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button slot="reference" @click="getSyncUserExternalUser(list[scope.$index])" >同步</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api'
import dayJs from 'dayjs'

@Component({
  components: {}
})
export default class DataList extends Vue {
  private isPending: boolean = false
  private list: any = []
  private contentList: any = []
  private expandStatus:Boolean = false
  private searchObj:any = {}
  private info: any = {
    secret: '',
    receiveId: '',
    aesKey: '',
    token: '',
    vikaToken: '',
    vikaUserTable: '',
    vikaUserTableUrl: '',
    vikaExternalTable: '',
    companyId: '',
  }


  private expends:Array<String> = []

  private pageInfo:any = {
    pageNum:1,
    pageSize:20,
    total:0
  }
  private created() {
    this.requestData()
  }

  // 获取数据
  private async requestData() {
    this.isPending = true;
    const res: any = await api.getUserRels()
    if (res.code === 200) {
      this.list = res.data || []
    }else {
      this.$alert(res.msg, 'error', {
        confirmButtonText: '关闭'
      });
    }
    const resUrl: any = await api.getWeixinCompanyInfo()
    if (resUrl.code === 200) {
      console.log(resUrl.data)
      this.info = resUrl.data;
    }else {
      this.$alert(res.msg, 'error', {
        confirmButtonText: '关闭'
      });
    }
     this.isPending = false
  }

  // 刷新数据
  private async userRelsFlash() {
    this.isPending = true;
    const res: any = await api.getUserRelsFlash()
    if (res.code === 200) {
      this.list = res.data || []
    }else {
      this.$alert(res.msg, 'error', {
        confirmButtonText: '关闭'
      });
    }
    this.isPending = false;
  }

  private bindingVika() {
    console.log(this.info.vikaUserTableUrl)
    if (this.info.vikaUserTableUrl != null){
      window.open(this.info.vikaUserTableUrl);
    }else {
      this.$alert('您未配置维格表地址，请在「企微同步维格表配置」中配置', 'error', {
        confirmButtonText: '关闭'
      });
    }
  }

  private async syncUserRel() {
    this.isPending = true;
    const res: any = await api.syncUserRel()
    if (res.code === 200) {
      this.$message({
        type:'success',
        message:'同步成功'
      });
    } else {
      this.$alert(res.msg, 'error', {
        confirmButtonText: '关闭'
      });
    }
    this.isPending = false;
  }

  private async getSyncUserExternalUser(val: any ) {
    this.isPending = true;
    let weixinUserId: string;
    weixinUserId = val.weixinUserId;
    const res: any = await api.syncDataByWeixinUserId(weixinUserId);
    if (res.code == 200) {
      this.$message({
        type: 'success',
        message: '同步成功'
      });
      this.requestData();
    } else {
      this.$alert(res.msg, 'error', {
        confirmButtonText: '关闭'
      });
    }
    this.isPending = false;
  }

  private getVikaAvatar(vla: any) {
    return vla.vikaAvatar;
  }


}
</script>

<style lang="scss" scoped>
.mt20{
  margin-top: 20px;
}
.admin_list {
  padding: 20px 0;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  // margin-top: 20px;
  .search_box{
    margin-bottom: 10px;
    height: 120px;
    line-height: 40px;
  }
  .page_info{
    height: 40px;
  }
  .table_content{
    flex: 1 1 0%;
    overflow-y:scroll ;
    overflow-x:hidden;
    .el-table{
      padding: 0;
      width: 100%;
      height: 100% ;
    }
  }
}
.expend_content{
  padding: 20px 60px;
  box-sizing: border-box;
}
.break_all{
  word-break: break-all;
  white-space: pre-wrap;
}
.expand_label{
  font-weight: 700;
  color: #ff7070;
}
.tt_label{
  font-weight: 700;
  color: #58a237;
}
.form_title {
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  color: #333;
}
</style>
