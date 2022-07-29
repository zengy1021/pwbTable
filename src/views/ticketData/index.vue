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
            <el-descriptions size="medium" title="基本字段（ticketRecord）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label" >
                  工单ID<br>(id)
                </template>
                {{ props.row.id }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  公司ID<br>(companyId)
                </template>
                {{ props.row.companyId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  创建时间<br>(createTime)
                </template>
                {{ props.row.createTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  创建触发事件<br>(createDataType)
                </template>
                {{ props.row.createDataType }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  更新时间<br>(updateTime)
                </template>
                {{ props.row.updateTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  更新触发事件<br>(updateDataType)
                </template>
                {{ props.row.updateDataType }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  扩展数据<br>(myData)
                </template>
                {{ props.row.myData }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单ID<br>(jobId)
                </template>
                {{ props.row.jobId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单属性<br>(jobAttribute)
                </template>
                {{ getJobAttribute(props.row.jobAttribute) }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="工单数据（JobData）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  工单标题<br>(jobTitle)
                </template>
                {{ props.row.title }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单内容<br>(jobContent)
                </template>
                {{ props.row.content }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单主题ID<br>(jobTopic)
                </template>
                {{ props.row.jobTopic }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单主题名称。工单更新时，主题产生变化才会有值<br>(jobTopicName)
                </template>
                {{ props.row.jobTopicName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单请求语言<br>(jobRequesterLan)
                </template>
                {{ props.row.requesterLan }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  样式ID<br>(jobStyleId)
                </template>
                {{ props.row.styleId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  样式名称<br>(jobStyleName)
                </template>
                {{ props.row.styleName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单类型<br>(jobType)
                </template>
                {{ getJobType(props.row.jobType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单优先级<br>(priority)
                </template>
                {{ getJobPriority(props.row.priority) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单模版ID<br>(jobTemplateId)
                </template>
                {{ props.row.jobTemplateId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单状态<br>(status)
                </template>
                {{ getJobStatus(props.row.status) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单备注<br>(jobMemo)
                </template>
                {{ props.row.jobMemo }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单更新人类型。—1：客服 0：访客<br>(jobUpdaterType)
                </template>
                {{ props.row.jobUpdaterType }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单更新人ID<br>(jobUpdaterId)
                </template>
                {{ props.row.jobUpdaterId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单更新人姓名<br>(jobUpdaterName)
                </template>
                {{ props.row.jobUpdaterName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者ID。访客vipId或客服ID<br>(jobRequesterUserId)
                </template>
                {{ props.row.requesterUserId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者类型<br>(jobRequesterUserType)
                </template>
                {{ getJobRequesterUserType(props.row.requesterUserType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者姓名<br>(jobRequesterUserName)
                </template>
                {{ props.row.requesterUserName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派分组ID<br>(jobDepartmentId)
                </template>
                {{ props.row.departmentId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派分组名称<br>(jobDepartmentName)
                </template>
                {{ props.row.departmentName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服ID<br>(jobDistributeUserId)
                </template>
                {{ props.row.jobDistributeUserId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服姓名<br>(jobDistributeUserName)
                </template>
                {{ props.row.jobDistributeUserName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服角色<br>(jobDistributeUserRole)
                </template>
                {{ props.row.jobDistributeUserRole }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服登录名<br>(jobDistributeUserLogName)
                </template>
                {{ props.row.jobDistributeUserLogName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单跟踪者ID列表<br>(jobFollowerIds)
                </template>
                {{ props.row.jobFollowerIds }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单跟踪者名称列表<br>(jobFollowerNames)
                </template>
                {{ props.row.jobFollowerNames }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  回复邮箱地址<br>(replyEmail)
                </template>
                {{ props.row.replyEmail }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  回复邮箱地址<br>(replyPhone)
                </template>
                {{ props.row.replyPhone }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单回复类型<br>(jobReplyType)
                </template>
                {{ getJobReplyType(props.row.jobReplyType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单回复内容<br>(jobReplyContent)
                </template>
                {{ props.row.jobReplyContent }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  用户评价时间。时间戳<br>(jobEvaluateDatetime)
                </template>
                {{ props.row.jobEvaluateDatetime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  满意度<br>(jobMainItem)
                </template>
                {{ getJobMainItem(props.row.jobMainItem) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价备注内容<br>(jobComment)
                </template>
                {{ props.row.jobComment }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价子项。String数组<br>(jobSubItems)
                </template>
                {{ props.row.jobSubItems }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单链接<br>(jobLink)
                </template>
                {{ props.row.jobLink }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段1<br>(t1)
                </template>
                {{ props.row.t1 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段2<br>(t2)
                </template>
                {{ props.row.t2 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段3<br>(t3)
                </template>
                {{ props.row.t3 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段4<br>(t4)
                </template>
                {{ props.row.t4 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段5<br>(t5)
                </template>
                {{ props.row.t5 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段6<br>(t6)
                </template>
                {{ props.row.t6 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段7<br>(t7)
                </template>
                {{ props.row.t7 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段8<br>(t8)
                </template>
                {{ props.row.t8 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段9<br>(t9)
                </template>
                {{ props.row.t9 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段10<br>(t10)
                </template>
                {{ props.row.t10 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段11<br>(t11)
                </template>
                {{ props.row.t11 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段12<br>(t12)
                </template>
                {{ props.row.t12 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段13<br>(t13)
                </template>
                {{ props.row.t13 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段14<br>(t14)
                </template>
                {{ props.row.t14 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段15<br>(t15)
                </template>
                {{ props.row.t15 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段16<br>(t16)
                </template>
                {{ props.row.t16 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段17<br>(t17)
                </template>
                {{ props.row.t17 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段18<br>(t18)
                </template>
                {{ props.row.t18 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段19<br>(t19)
                </template>
                {{ props.row.t19 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段20<br>(t20)
                </template>
                {{ props.row.t20  }}
              </el-descriptions-item>
            </el-descriptions>
          </template>
        </el-table-column>
        <el-table-column width="120" prop="companyId" label="companyId"> </el-table-column>
        <el-table-column width="120" prop="jobId" label="jobId"> </el-table-column>
        <el-table-column width="160" prop="title" label="工单标题"> </el-table-column>
        <el-table-column width="100" prop="jobAttribute" label="工单属性" :formatter="setJobAttribute"></el-table-column>
        <el-table-column width="160" prop="requesterUserId" label="工单请求人"> </el-table-column>
        <el-table-column width="160" prop="visitorName" label="访客"></el-table-column>
        <el-table-column width="260" prop="createTime" label="创建时间"></el-table-column>
        <el-table-column fixed="right" label="工单回复记录">
          <template slot-scope="scope">
            <el-popover
                placement="right"
                width="600"
                trigger="click">
              <el-table :data="contentList">
                <el-table-column width="170" property="createTime" label="工单回复时间"></el-table-column>
                <el-table-column width="100" property="jobAttribute" label="工单属性" :formatter="setJobAttribute"></el-table-column>
                <el-table-column width="150" property="status" label="变更后的工单状态" :formatter="setJobStatus"></el-table-column>
                <el-table-column width="100" property="replyType" label="回复类型" :formatter="setJobReplyType"></el-table-column>
              </el-table>
              <el-button slot="reference" @click="getTicketContent(list[scope.$index])">查看</el-button>
            </el-popover>
          </template>
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
  private contentList: any = []
  private expandStatus:Boolean = false
  private searchObj:any = {}
  // 枚举类型
  // === Start ====
  // 工单属性
  private setJobAttribute(row: any, column: any) {
    return this.getJobAttribute(row.jobAttribute);
  }
  private getJobAttribute(val: Number) {
    switch (val) {
      case 1:
        return "内部工单";
      case 2:
        return "外部工单";
    }
  }
  // 工单状态
  private setJobStatus(row: any, column: any) {
    return this.getJobStatus(row.status);
  }
  private getJobStatus(val: Number) {
    switch (val) {
      case 1:
        return "新建";
      case 2:
        return "已开启";
      case 3:
        return "待回应";
      case 4:
        return "已挂起";
      case 5:
        return "已解决";
      case 6:
        return "已关闭";
    }
  }
  // 回复类型
  private setJobReplyType(row: any, column: any) {
    return this.getJobReplyType(row.status);
  }
  private getJobReplyType(val: Number) {
    switch (val) {
      case 1:
        return "内部回复";
      case 2:
        return "外部回复";
      case 3:
        return "内部回复和外部回复";
    }
  }
  // 工单类型
  private getJobPriority(val: Number) {
    switch (val) {
      case 1:
        return "低";
      case 2:
        return "正常";
      case 3:
        return "高";
      case 4:
        return "紧急";
    }
  }
  // 工单优先级
  private getJobType(val: Number) {
    switch (val) {
      case 1:
        return "问题";
      case 2:
        return "事务";
      case 3:
        return "故障";
      case 4:
        return "任务";
    }
  }
  // 请求者
  private getJobRequesterUserType(val: Number) {
    switch (val) {
      case -1:
        return "客服";
      case 0:
        return "访客";
    }
  }
  // 满意度评价等级
  private getJobMainItem(val: Number) {
    switch (val) {
      case 1:
        return "非常差评";
      case 2:
        return "不满意";
      case 3:
        return "一般";
      case 4:
        return "满意";
      case 5:
        return "非常满意";
    }
  }
  // 访客身份类型 todo:公共
  private getVisitorType(val: Number) {
    switch (val) {
      case -1:
        return "未知";
      case 0:
        return "游客";
      case 1:
        return "会员";
      case 4:
        return "微信公众号渠道";
      case 5:
        return "自定义渠道";
      case 8:
        return "邮箱渠道";
    }
  }
  // 客户端没接 todo:公共
  private getVisitorMedia(val: Number) {
    switch (val) {
      case 1:
        return "电脑端网页";
      case 2:
        return "移动端网页";
      case 5:
        return "微信";
      case 6:
        return "Android SDK";
      case 9:
        return "自定义渠道";
      case 11:
        return "邮箱渠道";
    }
  }
  // 关键词类型 todo:公共
  private getKeywordType(val: Number) {
    switch (val) {
      case 0:
        return "未区分SEO、推广";
      case 1:
        return "自然优化";
      case 2:
        return "推广";
    }
  }
  // 接入对话的路由ID todo:公共
  private getRouteId(val: Number) {
    switch (val) {
      case -1:
        return "web访客的默认路由";
      case -2:
        return "微信对话的默认路由";
      case -3:
        return "SDK对话的默认路由";
      case -7:
        return "自定义渠道的默认路由";
      default:
        return val;
    }
  }
  // 性别 todo:公共
  private getGender(val: Number) {
    switch (val) {
      case 0:
        return "未知";
      case 1:
        return "男";
      case 2:
        return "女";
      default:
        return val;
    }
  }
  // 婚姻状况 todo:公共
  private getMaritalStatus(val: Number) {
    switch (val) {
      case 0:
        return "未知";
      case 1:
        return "未婚";
      case 2:
        return "已婚";
      default:
        return val;
    }
  }
  // ===  End  ====
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

  private async getTicketContent(val: any ) {
    interface Params {
      jobId:Number
    }
    const params: Params = {
      jobId:val.jobId
    }
    const res: any = await api.ticketContentList(params);
    this.contentList = res.data;
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
.tt_label{
  font-weight: 700;
  color: #58a237;
}
</style>
