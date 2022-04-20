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
import api from './api/index.js'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.requestData()
  },
  methods: {
    async requestData() {
      let params = {
        dataType: 'chatStart'
      }
      let res = await api.getDataList(params)
      console.log(res)
      if (res.errorCode == 200) {
        this.list = res.date || []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.admin_list {
  margin-top: 20px;
}
</style>
