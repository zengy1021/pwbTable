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
            <div style="padding:0 15px">
              <el-descriptions size="medium" title="基本字段（ticketRecord）" :column="3" border>
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
                    开发者自定义扩展数据<br>(myData)
                  </template>
                  {{ props.row.myData }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客本次会话ID<br>(trackRecordId)
                  </template>
                  {{ props.row.trackRecordId }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客进入时的路由状态<br>(enterRouteStatus)
                  </template>
                  {{ getRouteStatus(props.row.enterRouteStatus) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客退出时的路由状态<br>(outRouteStatus)
                  </template>
                  {{ getRouteStatus(props.row.outRouteStatus) }}
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions size="medium" title="会员数据（metaData）" class="mt20" :column="3" border>
                <el-descriptions-item>
                  <template slot="label">
                    会员唯一值<br>(uid)
                  </template>
                  {{ props.row.uid }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员级别<br>(grade)
                  </template>
                  {{ props.row.grade }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员类别<br>(category)
                  </template>
                  {{ props.row.category }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员姓名<br>(name)
                  </template>
                  {{ props.row.name }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员昵称<br>(nickName)
                  </template>
                  {{ props.row.nickName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员性别<br>(gender)
                  </template>
                  {{ getGender(props.row.gender) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员年龄<br>(age)
                  </template>
                  {{ props.row.age }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员生日<br>(birthday)
                  </template>
                  {{ props.row.birthday }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员婚姻状况<br>(maritalStatus)
                  </template>
                  {{ getMaritalStatus(props.row.maritalStatus) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员联系电话<br>(phone)
                  </template>
                  {{ props.row.phone }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员QQ<br>(qq)
                  </template>
                  {{ props.row.qq }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员微信<br>(wechat)
                  </template>
                  {{ props.row.wechat }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员邮箱<br>(email)
                  </template>
                  {{ props.row.email }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员国家<br>(nation)
                  </template>
                  {{ props.row.nation }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员省份<br>(province)
                  </template>
                  {{ props.row.province }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员城市<br>(city)
                  </template>
                  {{ props.row.city }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员地址<br>(address)
                  </template>
                  {{ props.row.address }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员头像地址<br>(photo)
                  </template>
                  {{ props.row.photo }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员备注信息<br>(memo)
                  </template>
                  {{ props.row.memo }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c1)
                  </template>
                  {{ props.row.c1 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c2)
                  </template>
                  {{ props.row.c2 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c3)
                  </template>
                  {{ props.row.c3 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c4)
                  </template>
                  {{ props.row.c4 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c5)
                  </template>
                  {{ props.row.c5 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c6)
                  </template>
                  {{ props.row.c6 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c7)
                  </template>
                  {{ props.row.c7 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c8)
                  </template>
                  {{ props.row.c8 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c9)
                  </template>
                  {{ props.row.c9 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c10)
                  </template>
                  {{ props.row.c10 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c11)
                  </template>
                  {{ props.row.c11 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c12)
                  </template>
                  {{ props.row.c12 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c13)
                  </template>
                  {{ props.row.c13 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c14)
                  </template>
                  {{ props.row.c14 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c15)
                  </template>
                  {{ props.row.c15 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c16)
                  </template>
                  {{ props.row.c16 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c17)
                  </template>
                  {{ props.row.c17 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c18)
                  </template>
                  {{ props.row.c18 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c19)
                  </template>
                  {{ props.row.c19 }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    会员自定义字段<br>(c20)
                  </template>
                  {{ props.row.c20 }}
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions size="medium" title="访客数据（visitorData）" class="mt20" :column="3" border>
                <el-descriptions-item>
                  <template slot="label">
                    访客进入网站的时间<br>(visitorEnterTime)
                  </template>
                  {{ props.row.visitorEnterTime }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客端的媒介<br>(visitorMedia)
                  </template>
                  {{ getVisitorMedia(props.row.visitorMedia) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客类型<br>(visitorType)
                  </template>
                  {{ getVisitorType(props.row.visitorType) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    自定义渠道的渠道ID<br>(mediaId)
                  </template>
                  {{ props.row.mediaId }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客ID<br>(visitorId)
                  </template>
                  {{ props.row.visitorId }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的姓名<br>(visitorName)
                  </template>
                  {{ props.row.visitorName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的头像地址<br>(visitorPhoto)
                  </template>
                  {{ props.row.visitorPhoto }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    当前访客此次是第几次来访<br>(visitTimes)
                  </template>
                  {{ props.row.visitTimes }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的浏览器语言<br>(visitorLan)
                  </template>
                  {{ props.row.visitorLan }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的来源IP<br>(visitorIp)
                  </template>
                  {{ props.row.visitorIp }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的来源国家<br>(visitorCountry)
                  </template>
                  {{ props.row.visitorCountry }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的来源省份<br>(visitorProvince)
                  </template>
                  {{ props.row.visitorProvince }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的来源城市<br>(visitorCity)
                  </template>
                  {{ props.row.visitorCity }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的浏览器名称<br>(browserName)
                  </template>
                  {{ props.row.browserName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客的浏览器版本号<br>(browserVersion)
                  </template>
                  {{ props.row.browserVersion }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客电脑的分辨率<br>(screenResolution)
                  </template>
                  {{ props.row.screenResolution }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客电脑的操作系统<br>(osName)
                  </template>
                  {{ props.row.osName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客电脑的操作系统版本<br>(osVersion)
                  </template>
                  {{ props.row.osVersion }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客来源的搜索引擎<br>(se)
                  </template>
                  {{ props.row.se }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客来源的关键词<br>(keyword)
                  </template>
                  {{ props.row.keyword }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    推广词<br>(biddingWord)
                  </template>
                  {{ props.row.biddingWord }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    关键字类型<br>(keywordType)
                  </template>
                  {{ getKeywordType(props.row.keywordType) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客进入网站的来源页<br>(referPage)
                  </template>
                  {{ props.row.referPage }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    进入网站的时间<br>(firstTime)
                  </template>
                  {{ props.row.firstTime }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客落地页面的URL<br>(firstPage)
                  </template>
                  {{ props.row.firstPage }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客落地页面的标题<br>(firstPageTitle)
                  </template>
                  {{ props.row.firstPageTitle }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客落地页面的别名<br>(firstPageAlias)
                  </template>
                  {{ props.row.firstPageAlias }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    上次对话的时间<br>(lastChatTime)
                  </template>
                  {{ props.row.lastChatTime }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    上次对话的客服ID<br>(lastChatStaffId)
                  </template>
                  {{ getLastChatStaffId(props.row.lastChatStaffId) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    上次对话的客服账号<br>(lastChatStaffLogname)
                  </template>
                  {{ props.row.lastChatStaffLogname }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    上次对话的客服姓名<br>(lastChatStaffName)
                  </template>
                  {{ props.row.lastChatStaffName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客本次会话浏览总页面数量<br>(visitPageCount)
                  </template>
                  {{ props.row.visitPageCount }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客本次会话浏览总时长<br>(visitTotalTime)
                  </template>
                  {{ props.row.visitTotalTime }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客本次会话产生的人工对话记录ID、机器人对话记录ID、留言对话记录ID<br>(chatRecordId)
                  </template>
                  {{ props.row.chatRecordId }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客本次会话点击对话，弹出信息收集框，放弃的记录ID<br>(giveupRecordId)
                  </template>
                  {{ props.row.giveupRecordId }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    访客离开时间<br>(visitorOutTime)
                  </template>
                  {{ props.row.visitorOutTime }}
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions size="medium" title="路由数据（routeData）" class="mt20" :column="3" border>
                <el-descriptions-item>
                  <template slot="label">
                    接入对话的路由ID<br>(routeId)
                  </template>
                  {{ getRouteId(props.row.routeId) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    路由名称<br>(routeName)
                  </template>
                  {{ props.row.routeName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    路由所使用的样式ID<br>(styleId)
                  </template>
                  {{ props.row.styleId }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    路由所使用样式的名称<br>(styleName)
                  </template>
                  {{ props.row.styleName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    本次分配对话的接待组ID<br>(chatDepartmentId)
                  </template>
                  {{ getChatDepartmentId(props.row.chatDepartmentId) }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    本地分配对话的接待组名称<br>(chatDepartmentName)
                  </template>
                  {{ props.row.chatDepartmentName }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
            </template>
        </el-table-column>
        <el-table-column min-width="120" prop="companyId" label="companyId"> </el-table-column>
        <el-table-column min-width="120" prop="trackRecordId" label="trackRecordId"> </el-table-column>
        <el-table-column min-width="120" prop="visitorMedia" label="终端" :formatter="setVisitorMedia"> </el-table-column>
        <el-table-column min-width="120" prop="visitorName" label="姓名"></el-table-column>
        <el-table-column min-width="200" label="位置">
          <template slot-scope="scope"> {{ (scope.row.visitorCountry = scope.row.visitorCountry || '') + (scope.row.visitorProvince = scope.row.visitorProvince || '') + (scope.row.visitorCity = scope.row.visitorCity || '') }} </template>
        </el-table-column>
        <el-table-column min-width="160" prop="visitorEnterTime" label="访客进入时间"> </el-table-column>
        <el-table-column min-width="160" prop="visitorOutTime" label="访客离开时间"> </el-table-column>
        <el-table-column min-width="300" prop="referPage" label="来源页"> </el-table-column>
        <el-table-column min-width="650" prop="firstPage" label="落地页"> </el-table-column>
        <el-table-column fixed="right" label="浏览轨迹">
          <template slot-scope="scope">
            <el-popover placement="right" width="850" trigger="click">
              <el-table :data="pageList">
                <el-table-column width="170" property="visitTime" label="访问时间"></el-table-column>
                <el-table-column width="170" property="pageTitle" label="访问页标题"></el-table-column>
                <el-table-column width="500" property="pageUrl" label="访问页路径"></el-table-column>
              </el-table>
              <el-button slot="reference" @click="getTrackPage(list[scope.$index])" :disabled="isEnd(list[scope.$index])">查看</el-button>
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
  private pageList: any =[]
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
  // 路由状态
  private getRouteStatus(val: Number) {
    switch (val) {
      case 1:
        return "在线";
      case 2:
        return "离线";
      default:
        return val;
    }
  }
  // 上次对话的客服
  private getLastChatStaffId(val: Number) {
    switch (val) {
      case 0:
        return "首次对话";
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
  // 客户端没媒介 todo:公共
  private setVisitorMedia(row: any, column: any) {
    return this.getVisitorMedia(row.visitorMedia);
  }
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
  // 分配对话的接待组id
  private getChatDepartmentId(val: Number) {
    switch (val) {
      case 0:
        return "全部人员可接待";
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
  // 根据浏览记录id 请求浏览轨迹数据
  private async getTrackPage(val: any) {
    interface Params {
      trackRecordId:Number
    }
    const params: Params = {
      trackRecordId:val.trackRecordId
    }
    const res: any = await api.trackPageList(params);
    this.pageList = res.data;
  }

  //判断是否有浏览轨迹
  private isEnd(val: any) {
    return val.visitorOutTime != null ? false : true;
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
