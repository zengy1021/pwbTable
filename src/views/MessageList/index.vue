<template>
  <div class="admin_list">
    <el-row :gutter="60" style="height: 100%">
      <el-col :span="10" style="height: 100%">
        <el-form
          ref="form"
          :model="form"
          label-width="160px"
          label-position="right"
          label-suffix="："
          size="medium"
        >
          <div class="form_title">发送地址</div>
          <el-form-item label="服务器URL">
            <el-input v-model="form.url" clearable></el-input>
          </el-form-item>
          <div class="form_title">发送内容</div>
          <el-form-item label="userId">
            <el-input v-model="form.userId" clearable></el-input>
          </el-form-item>
          <el-form-item label="userType">
            <el-input v-model="form.userType" clearable></el-input>
          </el-form-item>
          <el-form-item label="userName">
            <el-input v-model="form.userName" clearable></el-input>
          </el-form-item>
          <el-form-item label="echatTag">
            <el-input v-model="form.echatTag" clearable></el-input>
          </el-form-item>
          <el-form-item label="msgType">
            <el-input v-model="form.msgType" clearable></el-input>
          </el-form-item>
          <el-form-item label="chatPolicy">
            <el-input v-model="form.chatPolicy" clearable></el-input>
          </el-form-item>
          <el-form-item label="text">
            <el-input
              v-model="form.text"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 4 }"
            ></el-input>
          </el-form-item>
          <div class="btn-warp">
            <el-button type="info">恢复默认</el-button>
            <el-button type="success">发送消息</el-button>
            <el-button type="danger">结束对话</el-button>
          </div>
        </el-form>
      </el-col>
      <el-col :span="14" style="height: 100%">
        <div class="table_content">
          <el-table
            ref="table"
            :data="list"
            row-key="id"
            :expand-row-keys="expends"
            height="calc(100% - 10px)"
            highlight-current-row
            stripe
          >
            <el-table-column type="expand">
              <template slot="header">
                <el-checkbox
                  :checked="expandStatus"
                  @change="changeExpend"
                ></el-checkbox>
                <!-- <el-button @click="changeExpend">展开/收起</el-button> -->
              </template>
              <template slot-scope="props">
                <el-form
                  label-position="left"
                  inline
                  class="demo-table-expand expend_content"
                >
                  <el-row>
                    <el-form-item label="method">
                      <template slot="label">
                        <span class="expand_label">{{ 'method' }}</span>
                      </template>
                      <span class="break_all" style="white-space: pre-wrap">{{
                        props.row.method
                      }}</span>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item label="ciphertext">
                      <template slot="label">
                        <span class="expand_label">{{ 'ciphertext' }}</span>
                      </template>
                      <span class="break_all" style="white-space: pre-wrap">{{
                        props.row.ciphertext
                      }}</span>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item label="plaintext">
                      <template slot="label">
                        <span class="expand_label">{{ 'plaintext' }}</span>
                      </template>
                      <span class="break_all">{{ props.row.plaintext }}</span>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item label="debug">
                      <template slot="label">
                        <span class="expand_label">{{ 'debug' }}</span>
                      </template>
                      <span class="break_all">{{ props.row.debug }}</span>
                    </el-form-item>
                  </el-row>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column width="120" prop="id" label="ID">
            </el-table-column>
            <el-table-column width="160" prop="time" label="日期">
            </el-table-column>
            <el-table-column prop="gurl" label="url"> </el-table-column>
          </el-table>
        </div>
        <div class="page_info">
          <el-pagination
            background
            @current-change="changePage"
            layout="prev, pager, next"
            :total="pageInfo.total"
            :page-size="pageInfo.pageSize"
          >
          </el-pagination>
          <div class="btn-warp-table">
            <el-button type="info">恢复默认</el-button>
            <el-button type="success">发送消息</el-button>
            <el-button type="danger">结束对话</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api/index'
import dayJs from 'dayJs'

@Component({
  components: {}
})
export default class DataList extends Vue {
  private list: any = []
  private form: any = {
    url: 'https://eapi.echatsoft.com/csm/service/800/bIOkubOORVnBuZAqIfN',
    userId: '123456',
    userName: '彭伟标',
    userType: '1',
    echatTag: '自定义对话',
    msgType: 'text',
    chatPolicy: '111',
    text: 'hello,echat。we will be better'
  }
  private expandStatus: Boolean = false
  private searchObj: any = {}
  private pickerOptions: any = {
    shortcuts: [
      {
        text: '最近一周',
        onClick(picker: any) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', [start, end])
        }
      },
      {
        text: '最近一个月',
        onClick(picker: any) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          picker.$emit('pick', [start, end])
        }
      },
      {
        text: '最近三个月',
        onClick(picker: any) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          picker.$emit('pick', [start, end])
        }
      }
    ]
  }
  private expends: Array<String> = []
  private pageInfo: any = {
    pageNum: 1,
    pageSize: 20,
    total: 0
  }
  private created() {
    this.requestData()
  }
  private async requestData() {
    interface Params {
      pageNum: Number
      pageSize: Number
      startDate?: String
      endDate?: String
    }
    interface Res {
      errorCode: number // 返回数据类型状态码
      data: any // 返回数据
    }
    const params: Params = {
      pageNum: this.pageInfo.pageNum,
      pageSize: this.pageInfo.pageSize
    }
    if (
      this.searchObj.date &&
      this.searchObj.date[0] &&
      this.searchObj.date[1]
    ) {
      params.startDate = dayJs(this.searchObj.date[0]).format(
        'YYYY-MM-DD HH:mm:ss'
      )
      params.endDate = dayJs(this.searchObj.date[1]).format(
        'YYYY-MM-DD HH:mm:ss'
      )
    }
    const res: any = await api.getDataList(params, {})
    // console.log(res)
    if (res.code === 200) {
      this.pageInfo.total = 0
      this.list = res.data.list || []
      this.pageInfo.total = res.data.total
    }
  }
  private search() {
    // console.log(this.searchObj);

    // this.pageInfo.pageNum = 1
    // this.pageInfo.pageSize = 20
    // this.pageInfo.total = 0
    this.requestData()
  }
  private changePage(page: any) {
    this.pageInfo.pageNum = page
    this.pageInfo.pageSize = 20
    this.requestData()
  }
  private changeExpend(val: boolean) {
    this.expandStatus = val
    if (!val) {
      this.expends = []
    } else {
      this.expends = this.list.map((item: any) => item.id)
    }
    // this.$refs.table.toggleRowExpansion()
  }
  private refresh() {
    this.requestData()
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
