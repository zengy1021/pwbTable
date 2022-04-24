<template>
  <div class="admin_list">
    <el-table :data="list" stripe>
      <el-table-column prop="msgId" label="ID"> </el-table-column>
      <el-table-column prop="metaData.name" label="名称"> </el-table-column>
      <el-table-column prop="metaData.category" label="会员等级">
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small">查看{{ scope.row.id }}</el-button>
          <el-button size="small">删除{{ scope.row.name }}</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api/index'

@Component({
  components: {}
})
export default class AdminList extends Vue {
  private list: any = []
  private created() {
    this.requestData()
  }
  private async requestData() {
    interface Params {
      dataType: string // 请求数据类型参数
    }
    interface Res {
      errorCode: number // 返回数据类型状态码
      data: any // 返回数据
    }
    const params: Params = {
      dataType: 'chatStart'
    }
    const res: any = await api.getDataList(params, {})
    // console.log(res)
    if (res.errorCode === 200) {
      this.list = res.data || []
    }
  }
}
</script>

<style lang="scss" scoped>
.admin_list {
  margin-top: 20px;
}
</style>
