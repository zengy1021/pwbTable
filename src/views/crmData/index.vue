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
                <template slot="label">
                  唯一ID<br>(id)
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
                  客户信息状态<br>(crmStatus)
                </template>
                {{ getCrmStatus(props.row.crmStatus) }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="客服数据（crmData）" class="margin-top" :column="4" border>
              <el-descriptions-item>
                <template slot="label">
                  创建数据的客服ID<br>(createStaffId)
                </template>
                {{ props.row.createStaffId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  创建数据的客服账号<br>(createStaffLogname)
                </template>
                {{ props.row.createStaffLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  创建数据的客服姓名<br>(createStaffName)
                </template>
                {{ props.row.createStaffName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  创建数据的时间<br>(createCrmDate)
                </template>
                {{ props.row.createCrmDate }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  修改数据的客服ID<br>(updateStaffId)
                </template>
                {{ props.row.updateStaffId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  修改数据的客服账号<br>(updateStaffLogname)
                </template>
                {{ props.row.updateStaffLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  修改数据的客服姓名<br>(updateStaffName)
                </template>
                {{ props.row.updateStaffName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  修改数据的时间<br>(updateCrmDate)
                </template>
                {{ props.row.updateCrmDate }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  分配数据的客服ID<br>(distributeStaffId)
                </template>
                {{ props.row.distributeStaffId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  分配数据的客服账号<br>(distributeStaffLogname)
                </template>
                {{ props.row.distributeStaffLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  分配数据的客服姓名<br>(distributeStaffName)
                </template>
                {{ props.row.distributeStaffName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  分配数据的时间<br>(distributeCrmDate)
                </template>
                {{ props.row.distributeCrmDate }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  数据所有者的客服ID<br>(ownerId)
                </template>
                {{ props.row.ownerId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  数据所有者的客服账号<br>(ownerLogname)
                </template>
                {{ props.row.ownerLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  数据所有者的客服姓名<br>(ownerNam)
                </template>
                {{ props.row.ownerName }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="客户数据（crmData）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  访客ID<br>(visitorId)
                </template>
                {{ props.row.visitorId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户类别<br>(category)
                </template>
                {{ props.row.category }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户姓名<br>(name)
                </template>
                {{ props.row.name }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户昵称<br>(nickName)
                </template>
                {{ props.row.nickName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户性别<br>(gender)
                </template>
                {{ getGender(props.row.gender) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户年龄<br>(age)
                </template>
                {{ props.row.age }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户生日<br>(birthday)
                </template>
                {{ props.row.birthday }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  婚姻状况<br>(maritalStatus)
                </template>
                {{ getMaritalStatus(props.row.maritalStatus) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户电话<br>(phone)
                </template>
                {{ props.row.phone }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户qq<br>(qq)
                </template>
                {{ props.row.qq }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户微信<br>(wechat)
                </template>
                {{ props.row.wechat }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户邮箱<br>(email)
                </template>
                {{ props.row.email }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户所在国家<br>(nation)
                </template>
                {{ props.row.nation }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户所在省份<br>(province)
                </template>
                {{ props.row.province }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户所在城市<br>(city)
                </template>
                {{ props.row.city }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户所在地址<br>(address)
                </template>
                {{ props.row.address }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户头像地址<br>(photo)
                </template>
                {{ props.row.photo }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客户备注<br>(memo)
                </template>
                {{ props.row.memo }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c1)
                </template>
                {{ props.row.c1 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c2)
                </template>
                {{ props.row.c2 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c3)
                </template>
                {{ props.row.c3 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c4)
                </template>
                {{ props.row.c4 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c5)
                </template>
                {{ props.row.c5 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c6)
                </template>
                {{ props.row.c6 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c7)
                </template>
                {{ props.row.c7 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c8)
                </template>
                {{ props.row.c8 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c9)
                </template>
                {{ props.row.c9 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c10)
                </template>
                {{ props.row.c10 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c11)
                </template>
                {{ props.row.c11 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c12)
                </template>
                {{ props.row.c12 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c13)
                </template>
                {{ props.row.c13 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c14)
                </template>
                {{ props.row.c14 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c15)
                </template>
                {{ props.row.c15 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c16)
                </template>
                {{ props.row.c16 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c17)
                </template>
                {{ props.row.c17 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c18)
                </template>
                {{ props.row.c18 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c19)
                </template>
                {{ props.row.c19 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  自定义字段<br>(c20)
                </template>
                {{ props.row.c20 }}
              </el-descriptions-item>
            </el-descriptions>
          </template>
        </el-table-column>
        <el-table-column min-width="120" prop="companyId" label="companyId"> </el-table-column>
        <el-table-column min-width="200" prop="id" label="crmId"> </el-table-column>
        <el-table-column min-width="160" prop="name" label="姓名"> </el-table-column>
        <el-table-column min-width="160" label="性别">
          <template slot-scope="scope"> {{ getGender(scope.row.gender) }} </template>
        </el-table-column>
        <el-table-column min-width="160" prop="age" label="年龄"> </el-table-column>
        <el-table-column min-width="160" prop="phone" label="电话"> </el-table-column>
        <el-table-column min-width="160" prop="email" label="邮箱"> </el-table-column>
        <el-table-column min-width="200" label="位置">
          <template slot-scope="scope"> {{ (scope.row.nation = scope.row.nation || '') + (scope.row.province = scope.row.province || '') + (scope.row.city = scope.row.city || '') + (scope.row.address = scope.row.address || '') }} </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
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
      default:
        return val;
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
      default:
        return val;
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
      default:
        return val;
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
      default:
        return val;
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
      default:
        return val;
    }
  }
  // 请求者
  private getJobRequesterUserType(val: Number) {
    switch (val) {
      case -1:
        return "客服";
      case 1:
        return "访客";
      default:
        return val;
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
      default:
        return val;
    }
  }
  // 工单指派分组
  private getJobDepartmentId(val: Number) {
    switch (val) {
      case 0:
        return "全部部门";
      default:
        return val;
    }
  }
  // 工单指派客服id
  private getJobDistributeUserId(val: Number) {
    switch (val) {
      case 0:
        return "由客服创建时，没有指定处理人；由访客创建时，工单自动分配为“手动分配”，即没有指定处理人";
      default:
        return val;
    }
  }
  // 工单更新人类型
  private getJobUpdaterType(val: Number) {
    switch (val) {
      case -1:
        return "客服";
      case 0:
        return "访客";
      default:
        return val;
    }
  }
  // 客户信息状态
  private getCrmStatus(val: String) {
    switch (val) {
      case "1":
        return "访客在信息收集窗口填写了数据，对话开始后自动触发";
      case "2":
        return "客服手动在一洽CRM系统填写了客户信息";
      case "3":
        return "客服分配客户";
      default:
        return val;
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
      default:
        return val;
    }
  }
  // 客户端没媒介 todo:公共
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
      default:
        return val;
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
      default:
        return val;
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
