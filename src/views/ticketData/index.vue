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
                  开发者自定义扩展数据<br>(myData)
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
            <el-descriptions size="medium" title="工单数据（jobData）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  工单标题<br>(title)
                </template>
                {{ props.row.title }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单内容<br>(content)
                </template>
                <div v-html="props.row.content"></div>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单主题ID<br>(jobTopic)
                </template>
                {{ props.row.jobTopic }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单主题名称<br>(jobTopicName)
                </template>
                {{ props.row.jobTopicName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者语言<br>(requesterLan)
                </template>
                {{ props.row.requesterLan }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者ID<br>(requesterUserId)
                </template>
                {{ props.row.requesterUserId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者类型<br>(requesterUserType)
                </template>
                {{ getJobRequesterUserType(props.row.requesterUserType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求者姓名<br>(requesterUserName)
                </template>
                {{ props.row.requesterUserName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  样式ID<br>(styleId)
                </template>
                {{ props.row.styleId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单类型<br>(jobType)
                </template>
                {{ getJobPriority(props.row.jobType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派分组ID<br>(departmentId)
                </template>
                {{ getJobDepartmentId(props.row.departmentId) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派分组<br>(departmentName)
                </template>
                {{ props.row.departmentName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服ID<br>(distributeUserId)
                </template>
                {{ getJobDistributeUserId(props.row.distributeUserId) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服姓名<br>(distributeUserName)
                </template>
                {{ props.row.distributeUserName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服角色名<br>(distributeUserRole)
                </template>
                {{ props.row.distributeUserRole }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单指派客服账号<br>(distributeUserLogname)
                </template>
                {{ props.row.distributeUserLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  更新人类型<br>(updatorType)
                </template>
                {{ getJobUpdaterType(props.row.updatorType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单更新人ID<br>(updatorId)
                </template>
                {{ props.row.updatorId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单更新人姓名<br>(updatorName)
                </template>
                {{ props.row.updatorName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单跟踪人ID<br>(jobFollowerIds)
                </template>
                {{ props.row.jobFollowerIds }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单跟踪人姓名<br>(jobFollowerNames)
                </template>
                {{ props.row.jobFollowerNames }}
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
                  工单回复邮箱<br>(replyEmail)
                </template>
                {{ props.row.replyEmail }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单回复电话<br>(replyPhone)
                </template>
                {{ props.row.replyPhone }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单备注<br>(jobMemo)
                </template>
                {{ props.row.jobMemo }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t1)
                </template>
                {{ props.row.t1 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t2)
                </template>
                {{ props.row.t2 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t3)
                </template>
                {{ props.row.t3 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t4)
                </template>
                {{ props.row.t4 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t5)
                </template>
                {{ props.row.t5 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t6)
                </template>
                {{ props.row.t6 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t7)
                </template>
                {{ props.row.t7 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t8)
                </template>
                {{ props.row.t8 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t9)
                </template>
                {{ props.row.t9 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t10)
                </template>
                {{ props.row.t10 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t11)
                </template>
                {{ props.row.t11 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t12)
                </template>
                {{ props.row.t12 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t13)
                </template>
                {{ props.row.t13 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t14)
                </template>
                {{ props.row.t14 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t15)
                </template>
                {{ props.row.t15 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t16)
                </template>
                {{ props.row.t16 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t17)
                </template>
                {{ props.row.t17 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t18)
                </template>
                {{ props.row.t18 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t19)
                </template>
                {{ props.row.t19 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  工单自定义字段<br>(t20)
                </template>
                {{ props.row.t20 }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="工单附件（attachments）" class="margin-top" :column="1" border>
              <el-descriptions-item>
                <template slot="label">
                  工单附件信息，JSON字符串<br>(attachments)
                </template>
                {{ props.row.attachments }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="工单满意度数据（evaluate）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  用户评价时间。时间戳格式<br>(evaluateDatetime)
                </template>
                {{ props.row.evaluateDatetime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价满意度<br>(mainItem)
                </template>
                {{ getJobMainItem(props.row.mainItem) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  访客评价备注内容<br>(comment)
                </template>
                {{ props.row.comment }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价子项<br>(subItems)
                </template>
                {{ props.row.subItems }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="访客数据（visitorData）" class="margin-top" :column="3" border>
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
                  访客的来访次数<br>(visitTimes)
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
                  上次对话的客服ID.0：首次对话<br>(lastChatStaffId)
                </template>
                {{ props.row.lastChatStaffId }}
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
            </el-descriptions>
            <el-descriptions size="medium" title="客户数据（crmData）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户ID<br>(crmId)
                </template>
                {{ props.row.crmId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户姓名<br>(name)
                </template>
                {{ props.row.name }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户类别<br>(category)
                </template>
                {{ props.row.category }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户昵称<br>(nickName)
                </template>
                {{ props.row.nickName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户性别<br>(gender)
                </template>
                {{ getGender(props.row.gender) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户年龄<br>(age)
                </template>
                {{ props.row.age }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户生日<br>(birthday)
                </template>
                {{ props.row.birthday }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户婚姻状况<br>(maritalStatus)
                </template>
                {{ getMaritalStatus(props.row.maritalStatus) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户电话<br>(phone)
                </template>
                {{ props.row.phone }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户qq<br>(qq)
                </template>
                {{ props.row.qq }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户微信<br>(wechat)
                </template>
                {{ props.row.wechat }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户邮箱<br>(email)
                </template>
                {{ props.row.email }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户所在国家<br>(nation)
                </template>
                {{ props.row.nation }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户所在省份<br>(province)
                </template>
                {{ props.row.province }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户所在城市<br>(city)
                </template>
                {{ props.row.city }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户地址<br>(address)
                </template>
                {{ props.row.address }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-客户头像地址<br>(photo)
                </template>
                {{ props.row.photo }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM字段-备注<br>(memo)
                </template>
                {{ props.row.memo }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c1)
                </template>
                {{ props.row.c1 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c2)
                </template>
                {{ props.row.c2 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c3)
                </template>
                {{ props.row.c3 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c4)
                </template>
                {{ props.row.c4 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c5)
                </template>
                {{ props.row.c5 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c6)
                </template>
                {{ props.row.c6 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c7)
                </template>
                {{ props.row.c7 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c8)
                </template>
                {{ props.row.c8 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c9)
                </template>
                {{ props.row.c9 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c10)
                </template>
                {{ props.row.c10 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c11)
                </template>
                {{ props.row.c11 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c12)
                </template>
                {{ props.row.c12 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c13)
                </template>
                {{ props.row.c13 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c14)
                </template>
                {{ props.row.c14 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c15)
                </template>
                {{ props.row.c15 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c16)
                </template>
                {{ props.row.c16 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c17)
                </template>
                {{ props.row.c17 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c18)
                </template>
                {{ props.row.c18 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c19)
                </template>
                {{ props.row.c19 }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  CRM自定义字段<br>(c20)
                </template>
                {{ props.row.c20 }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="路由数据（routeData）" class="margin-top" :column="3" border>
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
                  路由所使用的样式ID<br>(routeStyleId)
                </template>
                {{ props.row.routeStyleId }}
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
                width="1000"
                trigger="click">
              <el-table :data="contentList">
                <el-table-column width="170" property="createTime" label="工单回复时间"></el-table-column>
                <el-table-column width="100" property="replyType" label="回复类型" :formatter="setJobReplyType"></el-table-column>
                <el-table-column align="center" label="工单回复数据变化">
                  <el-table-column align="center" width="200" label="工单回复内容">
                    <template slot-scope="scope">
                      <div v-html="scope.row.replyContent"></div>
                    </template>
                  </el-table-column>
                  <el-table-column width="170" property="replyEmail" label="工单回复邮箱"></el-table-column>
                  <el-table-column width="170" property="replyPhone" label="工单回复电话"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="工单属性数据变化">
                  <el-table-column width="170" property="status" label="工单状态" :formatter="setJobStatus"></el-table-column>
                  <el-table-column width="170" property="priority" label="工单优先级" :formatter="setJobPriority"></el-table-column>
                  <el-table-column width="170" property="jobType" label="工单类型" :formatter="setJobType"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="工单主题变化">
                  <el-table-column width="170" property="topicId" label="工单主题ID"></el-table-column>
                  <el-table-column width="170" property="topicName" label="工单主题名称"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="工单指派信息变化">
                  <el-table-column width="170" property="distributeStaffId" label="工单指派客服ID"></el-table-column>
                  <el-table-column width="170" property="distributeStaffName" label="工单指派客服姓名"></el-table-column>
                  <el-table-column width="170" property="distributeStaffRole" label="工单指派客服角色名"></el-table-column>
                  <el-table-column width="170" property="distributeStaffLogname" label="工单指派客服账号"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="工单更新人数据">
                  <el-table-column width="170" property="updaterType" label="更新人类型" :formatter="setJobUpdaterType"></el-table-column>
                  <el-table-column width="170" property="updaterId" label="客服ID或访客ID"></el-table-column>
                  <el-table-column width="170" property="updaterName" label="客服姓名或访客姓名"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="自定义字段">
                  <el-table-column width="170" property="t1" label="工单自定义字段(t1)"></el-table-column>
                  <el-table-column width="170" property="t2" label="工单自定义字段(t2)"></el-table-column>
                  <el-table-column width="170" property="t3" label="工单自定义字段(t3)"></el-table-column>
                  <el-table-column width="170" property="t4" label="工单自定义字段(t4)"></el-table-column>
                  <el-table-column width="170" property="t5" label="工单自定义字段(t5)"></el-table-column>
                  <el-table-column width="170" property="t6" label="工单自定义字段(t6)"></el-table-column>
                  <el-table-column width="170" property="t7" label="工单自定义字段(t7)"></el-table-column>
                  <el-table-column width="170" property="t8" label="工单自定义字段(t8)"></el-table-column>
                  <el-table-column width="170" property="t9" label="工单自定义字段(t9)"></el-table-column>
                  <el-table-column width="170" property="t10" label="工单自定义字段(t10)"></el-table-column>
                  <el-table-column width="170" property="t11" label="工单自定义字段(t11)"></el-table-column>
                  <el-table-column width="170" property="t12" label="工单自定义字段(t12)"></el-table-column>
                  <el-table-column width="170" property="t13" label="工单自定义字段(t13)"></el-table-column>
                  <el-table-column width="170" property="t14" label="工单自定义字段(t14)"></el-table-column>
                  <el-table-column width="170" property="t15" label="工单自定义字段(t15)"></el-table-column>
                  <el-table-column width="170" property="t16" label="工单自定义字段(t16)"></el-table-column>
                  <el-table-column width="170" property="t17" label="工单自定义字段(t17)"></el-table-column>
                  <el-table-column width="170" property="t18" label="工单自定义字段(t18)"></el-table-column>
                  <el-table-column width="170" property="t19" label="工单自定义字段(t19)"></el-table-column>
                  <el-table-column width="170" property="t20" label="工单自定义字段(t20)"></el-table-column>
                </el-table-column>
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
  private setJobPriority(row: any, column: any) {
    return this.getJobReplyType(row.priority);
  }
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
  private setJobType(row: any, column: any) {
    return this.getJobReplyType(row.jobType);
  }
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
  // 分配对话的接待组id
  private getChatDepartmentId(val: Number) {
    switch (val) {
      case 0:
        return "全部人员可接待";
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
  private setJobUpdaterType(row: any, column: any) {
    return this.getJobReplyType(row.updaterType);
  }
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
