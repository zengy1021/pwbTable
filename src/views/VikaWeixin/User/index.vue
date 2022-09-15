<template>
  <div class="admin_list">
    <div class="search_box">
      <div class="form_title">维格表已匹配企微成员列表</div>
      <el-button @click="syncUserRel">同步维格表成员</el-button>
    </div>
    <div class="table_content">
      <el-table ref="table" :data="list" row-key="id" :expand-row-keys="expends"  height="calc(100% - 10px)" highlight-current-row stripe>
        <el-table-column min-width="60" label="维格表头像">
          <template slot-scope="scope">
            <el-avatar style="width: 50px; height: 50px" :src="list[scope.$index].vikaAvatar" :fit="contain" />
          </template>
        </el-table-column>
        <el-table-column min-width="120" prop="weixinUserId" label="企微ID"> </el-table-column>
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
  private list: any = []
  private contentList: any = []
  private expandStatus:Boolean = false
  private searchObj:any = {}


  private expends:Array<String> = []

  private pageInfo:any = {
    pageNum:1,
    pageSize:20,
    total:0
  }
  private created() {
    this.requestData()
  }

  private async requestData() {
    const res: any = await api.getUserRels()
    console.log(res)
    if (res.code === 200) {
      this.list = res.data || []
    }
  }

  private async syncUserRel() {
    const res: any = await api.syncUserRel()
    if (res.code === 200) {
      this.$message({
        type:'success',
        message:'同步成功'
      });
      this.requestData();
    } else {
      this.$message({
        type:'error',
        message: res.msg
      });
    }
  }

  private async getSyncUserExternalUser(val: any ) {
    let weixinUserId: string;
    console.log(val);
    weixinUserId = val.weixinUserId;
    const res: any = await api.syncDataByWeixinUserId(weixinUserId);
    if (res.code == 200) {
      this.$message({
        type: 'success',
        message: '同步成功'
      });
      this.requestData();
    } else {
      this.$message({
        type: 'error',
        message: res.msg
      });
    }
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
