<template>
  <div class="admin_list">
    <div class="search_box">
      <el-button @click="del" type="danger" style="margin-left:10px;">清空</el-button>
      <el-button icon="el-icon-refresh" circle @click="refresh"></el-button>

    </div>
    <div class="table_content">
      <el-table ref="table" :data="list" row-key="id" :expand-row-keys="expends"  height="calc(100% - 10px)" highlight-current-row stripe>
        <el-table-column type="expand">
            <template slot="header">
              <el-checkbox :checked="expandStatus" @change="changeExpend"></el-checkbox>
              <!-- <el-button @click="changeExpend">展开/收起</el-button> -->
            </template>
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand expend_content">
<!--                <el-row>-->
<!--                <el-form-item label="ciphertext">-->
<!--                  <template slot="label">-->
<!--                    <span class="expand_label">{{'ciphertext'}}</span>-->
<!--                  </template>-->
<!--                  <span class="break_all" style="white-space: pre-wrap;">{{ props.row.ciphertext }}</span>-->
<!--                </el-form-item>-->
<!--                </el-row>-->
<!--                <el-row>-->
<!--                <el-form-item label="plaintext">-->
<!--                    <template slot="label">-->
<!--                    <span class="expand_label">{{'plaintext'}}</span>-->
<!--                  </template>-->
<!--                  <span class="break_all">{{ props.row.plaintext }}</span>-->
<!--                </el-form-item>-->
<!--                </el-row>-->
<!--                <el-row>-->
<!--                  <el-form-item label="method">-->
<!--                    <template slot="label">-->
<!--                      <span class="expand_label">{{'method'}}</span>-->
<!--                    </template>-->
<!--                    <span class="break_all" style="white-space: pre-wrap;">{{ props.row.method }}</span>-->
<!--                  </el-form-item>-->
<!--                </el-row>-->
<!--                <el-row>-->
<!--                  <el-form-item label="事件发生时间">-->
<!--                    <template slot="label">-->
<!--                      <span class="expand_label">{{'事件发生时间'}}</span>-->
<!--                    </template>-->
<!--                    <span class="break_all" style="white-space: pre-wrap;">{{ props.row.timestamp}}</span>-->
<!--                  </el-form-item>-->
<!--                </el-row>-->
<!--                <el-row>-->
<!--                  <el-form-item label="请求接收时间">-->
<!--                    <template slot="label">-->
<!--                      <span class="expand_label">{{'请求接收时间'}}</span>-->
<!--                    </template>-->
<!--                    <span class="break_all" style="white-space: pre-wrap;">{{ props.row.postTime }}</span>-->
<!--                  </el-form-item>-->
<!--                </el-row>-->
<!--                <el-row>-->
<!--                  <el-form-item label="时间差">-->
<!--                    <template slot="label">-->
<!--                      <span class="expand_label">{{'时间差'}}</span>-->
<!--                    </template>-->
<!--                    <span class="break_all" style="white-space: pre-wrap;">{{ (props.row.postTime - props.row.timestamp)/1000 }} 秒</span>-->
<!--                  </el-form-item>-->
<!--                </el-row>-->
<!--                <el-row>-->
<!--                <el-form-item label="debug">-->
<!--                    <template slot="label">-->
<!--                    <span class="expand_label">{{'debug'}}</span>-->
<!--                  </template>-->
<!--                  <span class="break_all">{{ props.row.debug }}</span>-->
<!--                </el-form-item>-->
<!--                </el-row>-->
              </el-form>
            </template>
        </el-table-column>
        <el-table-column width="120" prop="companyId" label="公司ID"> </el-table-column>
        <el-table-column width="200" prop="companyStatus" label="登陆状态，1：在线 2：离线"> </el-table-column>
          <el-table-column prop="updateTime" label="状态变更时间">
        </el-table-column>
      </el-table>
    </div>
    <div class="page_info">
       <el-pagination
      background
      @current-change="changePage"
      layout="prev, pager, next"
      :total="pageInfo.total"
      :page-size="pageInfo.pageSize">
    </el-pagination>
    </div>
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
  private list: any = []
  private expandStatus:Boolean = false
  private searchObj:any = {}
  private pickerOptions:any = {
          shortcuts: [{
            text: '最近一周',
            onClick(picker:any) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker:any) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker:any) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
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
  private async requestData() {
    interface Params {
      pageNum:Number,
      pageSize:Number,
      startDate?:String,
      endDate?:String
    }
    interface Res {
      errorCode: number // 返回数据类型状态码
      data: any // 返回数据
    }
    const params: Params = {
      pageNum:this.pageInfo.pageNum,
      pageSize:this.pageInfo.pageSize
    }
    const res: any = await api.getDataList(params)
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

  private async del() {
    await api.delDataList();
    this.search()
  }

  private changePage(page:any){
    this.pageInfo.pageNum = page
    this.pageInfo.pageSize = 20
    this.requestData()
  }
  private changeExpend(val:boolean) {
    this.expandStatus = val
    if(!val){
      this.expends = []
    }else{
      this.expends = this.list.map((item:any)=>item.id)
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
  .search_box{
    margin-bottom: 10px;
    height: 40px;
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
</style>
