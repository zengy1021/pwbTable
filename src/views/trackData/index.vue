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
              <el-row>
                <el-form-item label="trackRecordId">
                  <template slot="label">
                    <span class="expand_label">{{ 'trackRecordId（此次浏览轨迹的ID，浏览记录唯一值） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.trackRecordId }}</span>
                </el-form-item>
                <el-form-item label="myData">
                  <template slot="label">
                    <span class="expand_label">{{ 'myData（开发者自定义扩展数据） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.myData }}</span>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="">
                  <template slot="label">
                    <span class="tt_label">{{'MetaData 会员数据'}}</span>
                  </template>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="metaUId">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaUId（会员的唯一值） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaUId }}</span>
                </el-form-item>
                <el-form-item label="metaGrade">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaGrade（会员级别） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaGrade }}</span>
                </el-form-item>
                <el-form-item label="metaCategory">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaCategory（会员类别） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaCategory }}</span>
                </el-form-item>
                <el-form-item label="metaName">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaName（会员姓名） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaName }}</span>
                </el-form-item>
                <el-form-item label="metaNickName">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaNickName（会员昵称） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaNickName }}</span>
                </el-form-item>
                <el-form-item label="metaGender">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaGender（会员性别） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaGender }}</span>
                </el-form-item>
                <el-form-item label="metaAge">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaAge（会员年龄） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaAge }}</span>
                </el-form-item>
                <el-form-item label="metaBirthday">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaBirthday（会员生日） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaBirthday }}</span>
                </el-form-item>
                <el-form-item label="metaMaritalStatus">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaMaritalStatus（会员婚姻状况。0：未知 1：未婚 2：已婚） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaMaritalStatus }}</span>
                </el-form-item>
                <el-form-item label="metaPhone">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaPhone（会员联系电话） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaPhone }}</span>
                </el-form-item>
                <el-form-item label="metaQq">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaQq（会员QQ） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaQq }}</span>
                </el-form-item>
                <el-form-item label="metaWechat">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaWechat（会员微信） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaWechat }}</span>
                </el-form-item>
                <el-form-item label="metaEmail">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaEmail（会员邮件地址） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaEmail }}</span>
                </el-form-item>
                <el-form-item label="metaNation">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaNation（会员国家） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaNation }}</span>
                </el-form-item>
                <el-form-item label="metaProvince">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaProvince（会员省份） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaProvince }}</span>
                </el-form-item>
                <el-form-item label="metaCity">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaCity（会员城市） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaCity }}</span>
                </el-form-item>
                <el-form-item label="metaAddress">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaAddress（会员地址） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaAddress }}</span>
                </el-form-item>
                <el-form-item label="metaPhoto">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaPhoto（会员头像地址） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaPhoto }}</span>
                </el-form-item>
                <el-form-item label="metaMemo">
                  <template slot="label">
                    <span class="expand_label">{{ 'metaMemo（会员备注信息） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.metaMemo }}</span>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="">
                  <template slot="label">
                    <span class="tt_label">{{'VisitorData 访客数据'}}</span>
                  </template>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="visitorEnterTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorEnterTime（访客进入的时间） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorEnterTime }}</span>
                </el-form-item>
                <el-form-item label="visitorMedia">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorMedia（客户端媒介。1：PC网页 2：手机网页 5：微信 6：sdk 200：自定义渠道） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorMedia }}</span>
                </el-form-item>
                <el-form-item label="visitorType">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorType（访客身份类型。-1：未知 0：游客(web) 1：会员(vip) 2：SDK游客(sdk) 4：微信（wechat) 5：自定义接口(custom)） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorType }}</span>
                </el-form-item>
                <el-form-item label="mediaId">
                  <template slot="label">
                    <span class="expand_label">{{ 'mediaId（   * 渠道ID。type=5，自定义渠道时有效） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.mediaId }}</span>
                </el-form-item>
                <el-form-item label="visitorId">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorId（   * 访客ID。身份描述+ID） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorId }}</span>
                </el-form-item>
                <el-form-item label="visitorName">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorName（访客姓名） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorName }}</span>
                </el-form-item>
                <el-form-item label="visitorPhoto">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorPhoto（访客头像） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorPhoto }}</span>
                </el-form-item>
                <el-form-item label="visitTimes">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitTimes（访客来访次数） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitTimes }}</span>
                </el-form-item>
                <el-form-item label="visitorLan">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorLan（访问者语言） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorLan }}</span>
                </el-form-item>
                <el-form-item label="visitorIp">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorIp（访客来访IP） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorIp }}</span>
                </el-form-item>
                <el-form-item label="visitorCountry">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorCountry（访客所在国家） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorCountry }}</span>
                </el-form-item>
                <el-form-item label="visitorProvince">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorProvince（访客所在省份） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorProvince }}</span>
                </el-form-item>
                <el-form-item label="visitorCity">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorCity（访客所在城市） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorCity }}</span>
                </el-form-item>
                <el-form-item label="browserName">
                  <template slot="label">
                    <span class="expand_label">{{ 'browserName（访客的浏览器） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.browserName }}</span>
                </el-form-item>
                <el-form-item label="browserVersion">
                  <template slot="label">
                    <span class="expand_label">{{ 'browserVersion（访客的浏览器版本） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.browserVersion }}</span>
                </el-form-item>
                <el-form-item label="screenResolution">
                  <template slot="label">
                    <span class="expand_label">{{ 'screenResolution（访客的屏幕分辨率） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.screenResolution }}</span>
                </el-form-item>
                <el-form-item label="osName">
                  <template slot="label">
                    <span class="expand_label">{{ 'osName（访客操作系统） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.osName }}</span>
                </el-form-item>
                <el-form-item label="osVersion">
                  <template slot="label">
                    <span class="expand_label">{{ 'osVersion（操作系统版本） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.osVersion }}</span>
                </el-form-item>
                <el-form-item label="se">
                  <template slot="label">
                    <span class="expand_label">{{ 'se（访客来访的搜索引擎） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.se }}</span>
                </el-form-item>
                <el-form-item label="keyword">
                  <template slot="label">
                    <span class="expand_label">{{ 'keyword（访客来访的搜索关键字） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.keyword }}</span>
                </el-form-item>
                <el-form-item label="biddingWord">
                  <template slot="label">
                    <span class="expand_label">{{ 'biddingWord（推广词） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.biddingWord }}</span>
                </el-form-item>
                <el-form-item label="keywordType">
                  <template slot="label">
                    <span class="expand_label">{{ 'keywordType（关键词类型。0：未区分SEO、推广 1：自然优化 2： 推广） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.keywordType }}</span>
                </el-form-item>
                <el-form-item label="referPage">
                  <template slot="label">
                    <span class="expand_label">{{ 'referPage（访客来源的URL。如果是微信，就是公众号名） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.referPage }}</span>
                </el-form-item>
                <el-form-item label="firstTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstTime（进入网站的时间） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.firstTime }}</span>
                </el-form-item>
                <el-form-item label="firstPage">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstPage（落地页） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.firstPage }}</span>
                </el-form-item>
                <el-form-item label="firstPageTitle">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstPageTitle（落地页面标题） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.firstPageTitle }}</span>
                </el-form-item>
                <el-form-item label="firstPageAliae">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstPageAliae（落地页面别名） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.firstPageAliae }}</span>
                </el-form-item>
                <el-form-item label="lastChatTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatTime（上次对话时间） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatTime }}</span>
                </el-form-item>
                <el-form-item label="lastChatStaffId">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatStaffId（上次对话客服ID） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatStaffId }}</span>
                </el-form-item>
                <el-form-item label="lastChatStaffLogName">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatStaffLogName（上次对话客服账号） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatStaffLogName }}</span>
                </el-form-item>
                <el-form-item label="lastChatStaffName">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatStaffName（上次对话客服姓名） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatStaffName }}</span>
                </el-form-item>
                <el-form-item label="indexVisitTimes">
                  <template slot="label">
                    <span class="expand_label">{{ 'indexVisitTimes（当前访客此次是第几次来访） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.indexVisitTimes }}</span>
                </el-form-item>
                <el-form-item label="visitPageCount">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitPageCount（访客退出时此次浏览页面的数量） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitPageCount }}</span>
                </el-form-item>
                <el-form-item label="visitTotalTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitTotalTime（   * 此次浏览页面访客的总浏览时长 单位：秒） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitTotalTime }}</span>
                </el-form-item>
                <el-form-item label="chatRecordId">
                  <template slot="label">
                    <span class="expand_label">{{ 'chatRecordId（整个会话范围过程产生的人工对话的ID、机器人对话的ID、留言对话的ID列表） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.chatRecordId }}</span>
                </el-form-item>
                <el-form-item label="giveUpRecordId">
                  <template slot="label">
                    <span class="expand_label">{{ 'giveUpRecordId（整个会话范围过程中，访客点击对话，弹出信息收集框但访客最终未进入对话的，放弃的记录ID，记录ID是点击的ID，和对话记录留言记录的ID不是同一个数据） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.giveUpRecordId }}</span>
                </el-form-item>
                <el-form-item label="visitorOutTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorOutTime（访客的离开的时间） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.visitorOutTime }}</span>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="">
                  <template slot="label">
                    <span class="tt_label">{{'RouteData 路由数据'}}</span>
                  </template>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="routeId">
                  <template slot="label">
                    <span class="expand_label">{{ 'routeId（接入对话的路由ID。-1：web访客的默认路由 -2：微信对话的默认路由 -3：SDK对话的默认路由） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.routeId }}</span>
                </el-form-item>
                <el-form-item label="routeName">
                  <template slot="label">
                    <span class="expand_label">{{ 'routeName（路由名称） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.routeName }}</span>
                </el-form-item>
                <el-form-item label="styleId">
                  <template slot="label">
                    <span class="expand_label">{{ 'styleId（路由所使用的样式ID） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.styleId }}</span>
                </el-form-item>
                <el-form-item label="styleName">
                  <template slot="label">
                    <span class="expand_label">{{ 'styleName（路由所使用样式的名称） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.styleName }}</span>
                </el-form-item>
                <el-form-item label="routeStatus">
                  <template slot="label">
                    <span class="expand_label">{{ 'routeStatus（   * 指定路由的状态。1：在线 2：离线） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.routeStatus }}</span>
                </el-form-item>
                <el-form-item label="chatDepartmentId">
                  <template slot="label">
                    <span class="expand_label">{{ 'chatDepartmentId（本次分配对话的分组ID，如果是全部人员可接待则ID为0） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.chatDepartmentId }}</span>
                </el-form-item>
                <el-form-item label="chatDepartmentName">
                  <template slot="label">
                    <span class="expand_label">{{ 'chatDepartmentName（本地分配对话的分组名称） '}}</span>
                  </template>
                  <span class="break_all">{{ props.row.chatDepartmentName }}</span>
                </el-form-item>
              </el-row>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column width="120" prop="companyId" label="companyId"> </el-table-column>
        <el-table-column width="120" prop="trackRecordId" label="trackRecordId"> </el-table-column>
        <el-table-column width="160" prop="visitorEnterTime" label="访客进入时间"> </el-table-column>
        <el-table-column width="160" prop="visitorOutTime" label="访客离开时间"> </el-table-column>
        <el-table-column width="160" prop="visitorName" label="访客"></el-table-column>
        <el-table-column width="160" prop="createBy" label="创建事件"></el-table-column>
        <el-table-column prop="updateBy" label="更新事件"></el-table-column>
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
.tt_label{
  font-weight: 700;
  color: #58a237;
}
</style>
