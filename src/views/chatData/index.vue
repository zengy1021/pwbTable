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
            <el-descriptions size="medium" title="基本字段（chatRecord）" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label" >
                  对话ID<br>(id)
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
                  对话记录类型<br>(chatRecordType)
                </template>
                {{ getChatRecordType(props.row.chatRecordType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  扩展数据<br>(myData)
                </template>
                {{ props.row.myData }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话状态<br>(chatStatus)
                </template>
                {{ getChatStatus(props.row.chatStatus) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话是否存在转接<br>(isTransfer)
                </template>
                {{ getChatIsTransfer(props.row.isTransfer) }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="对话数据（chatData）" class="margin-top" :column="3" border>
              <el-descriptions-item >
                <template slot="label">
                  访客的对话次数<br>(chatTimes)
                </template>
                {{ props.row.chatTimes }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话发起的方式<br>(chatEvent)
                </template>
                {{ getChatEvent(props.row.chatEvent) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  请求对话的时间<br>(chatRequestTime)
                </template>
                {{ props.row.chatRequestTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话接通的时间<br>(chatAnswerTime)
                </template>
                {{ props.row.chatAnswerTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  会话类型<br>(chatType)
                </template>
                {{ getChatType(props.row.chatType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  接待对话的客服ID<br>(chatStaffId)
                </template>
                {{ props.row.chatStaffId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  接待对话的客服账号<br>(chatStaffLogname)
                </template>
                {{ props.row.chatStaffLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  接待对话的客服姓名<br>(chatStaffName)
                </template>
                {{ props.row.chatStaffName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  接待对话的客服的内部角色名称<br>(chatStaffRole)
                </template>
                {{ props.row.chatStaffRole }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话入口<br>(chatEntrance)
                </template>
                {{ props.row.chatEntrance }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话记录的ID<br>(chatRecordId)
                </template>
                {{ props.row.chatRecordId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  访客等待时长。单位：毫秒<br>(chatWaiteTime)
                </template>
                {{ props.row.chatWaiteTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  本次分配对话的分组ID<br>(chatDepartmentId)
                </template>
                {{ props.row.chatDepartmentId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  本次分配对话的分组名<br>(chatDepartmentName)
                </template>
                {{ props.row.chatDepartmentName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话结束时间<br>(chatEndTime)
                </template>
                {{ props.row.chatEndTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话结束方式<br>(chatEndType)
                </template>
                {{ getChatEndType(props.row.chatEndType) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  通话时长。单位：毫秒<br>(chatTotalTime)
                </template>
                {{ props.row.chatTotalTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  首次响应时长。单位：毫秒<br>(firstAnswerTime)
                </template>
                {{ props.row.firstAnswerTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  平均响应时长。单位：毫秒<br>(avgAnswerTime)
                </template>
                {{ props.row.avgAnswerTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  访客发送消息条数<br>(visitorSendMsg)
                </template>
                {{ props.row.visitorSendMsg }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客服发送消息条数<br>(staffSendMsg)
                </template>
                {{ props.row.staffSendMsg }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话页面标题<br>(chatPageTitle)
                </template>
                {{ props.row.chatPageTitle }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话页面<br>(chatPage)
                </template>
                {{ props.row.chatPage }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="对话满意度评价数据" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  满意度评价<br>(chatScore)
                </template>
                {{ getChatScore(props.row.chatScore) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价维度<br>(scoreDimension)
                </template>
                {{ props.row.scoreDimension }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价的内容<br>(scoreSuggest)
                </template>
                {{ props.row.scoreSuggest }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价发生时，正在接待对话的客服ID<br>(scoreChatStaffId)
                </template>
                {{ props.row.scoreChatStaffId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价发生时，正在接待对话的客服账号<br>(scoreChatStaffLogname)
                </template>
                {{ props.row.scoreChatStaffLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  评价发生时，正在接待对话的客服姓名<br>(scoreChatStaffName)
                </template>
                {{ props.row.scoreChatStaffName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  是否邀评<br>(activelyinviteEvaluating)
                </template>
                {{ getChatActivelyinviteEvaluating(props.row.activelyinviteEvaluating) }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="对话主题评估数据" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  对话评估主题<br>(chatSubject)
                </template>
                {{ props.row.chatSubject }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  对话评估备注<br>(chatSubjectMemo)
                </template>
                {{ props.row.chatSubjectMemo }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="留言数据" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  客服ID<br>(staffId)
                </template>
                {{ getStaffId(props.row.staffId) }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客服账号<br>(staffLogname)
                </template>
                {{ props.row.staffLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  客服姓名<br>(staffName)
                </template>
                {{ props.row.staffName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  所有者ID<br>(ownerId)
                </template>
                {{ props.row.ownerId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  所有者账号<br>(ownerLogname)
                </template>
                {{ props.row.ownerLogname }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  所有者姓名<br>(ownerName)
                </template>
                {{ props.row.ownerName }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="机器人对话数据" class="margin-top" :column="3" border>
              <el-descriptions-item>
                <template slot="label">
                  完全匹配数<br>(perfectMatchs)
                </template>
                {{ props.row.perfectMatchs }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  精准匹配数<br>(exactMatchs)
                </template>
                {{ props.row.exactMatchs }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  相似匹配数<br>(similarityMatchs)
                </template>
                {{ props.row.similarityMatchs }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  未命中数<br>(misMatchCount)
                </template>
                {{ props.row.misMatchCount }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  点击解决数<br>(solvedCount)
                </template>
                {{ props.row.solvedCount }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  点击未解决数<br>(unsolvedCount)
                </template>
                {{ props.row.unsolvedCount }}
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="对话内容（chatContent）" class="margin-top" :column="1" border>
              <el-descriptions-item>
                <template slot="label">
                  对话内容<br>(chatContent)
                </template>
                <div v-html="props.row.chatContent"></div>
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions size="medium" title="会员数据（metaData）" class="margin-top" :column="3" border>
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
                  推广<br>(biddingWord)
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
              <el-descriptions-item span="1">
                <template slot="label">
                  访客落地页面的URL<br>(firstPage)
                </template>
                {{ props.row.firstPage }}
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
                  本次分配对话的接待组ID<br>(routeChatDepartmentId)
                </template>
                {{ props.row.routeChatDepartmentId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  本地分配对话的接待组名称<br>(routeChatDepartmentName)
                </template>
                {{ props.row.routeChatDepartmentName }}
              </el-descriptions-item>
            </el-descriptions>
          </template>
        </el-table-column>
        <el-table-column width="120" prop="chatRecordId" label="对话ID"> </el-table-column>
        <el-table-column width="140" prop="chatEvent" label="对话事件类型" :formatter="setChatEvent"> </el-table-column>
        <el-table-column width="200" prop="chatRequestTime" label="对话请求时间"> </el-table-column>
        <el-table-column width="200" prop="chatEndTime" label="对话结束时间"></el-table-column>
        <el-table-column width="200" prop="chatRecordType" label="记录类型" :formatter="setChatRecordType"> </el-table-column>
        <el-table-column fixed="right" label="客服Kpi数据">
          <template slot-scope="scope">
            <el-popover placement="right" width="850" trigger="click">
              <el-table :data="pageList">
                <el-table-column align="center" width="100" property="staffId" label="客服ID"></el-table-column>
                <el-table-column align="center" width="170" property="staffLogname" label="客服账号"></el-table-column>
                <el-table-column align="center" width="100" property="staffName" label="客服姓名"></el-table-column>
                <el-table-column align="center" width="120" label="首次响应时长">
                  <template slot-scope="scope"> {{ scope.row.firstAnswerTime+' 秒' }} </template>
                </el-table-column>
                <el-table-column align="center" width="120" label="平均响应时长">
                  <template slot-scope="scope"> {{ scope.row.avgAnswerTime+' 秒' }} </template>
                </el-table-column>
                <el-table-column align="center" width="170" property="visitorSendMsg" label="访客发送消息条数"></el-table-column>
                <el-table-column align="center" width="170" property="staffSendMsg" label="客服发送消息条数"></el-table-column>
                <el-table-column align="center" width="100" label="总通话时长"><
                  <template slot-scope="scope"> {{ scope.row.duration+' 秒' }} </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference" @click="getStaffKpis(list[scope.$index])" :disabled="isTransfer(list[scope.$index])">查看</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column width="150" fixed="right" label="转接记录">
          <template slot-scope="scope">
            <el-popover placement="right" width="850" trigger="click">
              <el-table :data="pageList">
                <el-table-column width="170" property="transferTime" label="转接时间"></el-table-column>
                <el-table-column align="center" label="发起转接的客服">
                  <el-table-column align="center" width="170" property="fromStaffId" label="客服ID"></el-table-column>
                  <el-table-column align="center" width="170" property="fromStaffLogname" label="客服账号"></el-table-column>
                  <el-table-column align="center" width="170" property="fromStaffName" label="客服姓名"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="接受转接的客服">
                  <el-table-column align="center" width="170" property="toStaffId" label="客服ID"></el-table-column>
                  <el-table-column align="center" width="170" property="toStaffLogname" label="客服账号"></el-table-column>
                  <el-table-column align="center" width="170" property="toStaffName" label="客服姓名"></el-table-column>
                </el-table-column>
              </el-table>
              <el-button slot="reference" @click="getTransfers(list[scope.$index])" :disabled="isTransfer(list[scope.$index])">查看</el-button>
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
  // 枚举类型
  // === Start ====
  // 记录类型
  private setChatRecordType(row: any, column: any) {
    return this.getChatRecordType(row.chatRecordType);
  }
  private getChatRecordType(val: Number) {
    switch (val) {
      case 1:
        return "人工对话";
      case 2:
        return "机器人对话";
      case 3:
        return "留言";
      case 4:
        return "推送";
    }
  }
  // 对话事件类型
  private setChatEvent(row: any, column: any) {
    return this.getChatEvent(row.chatEvent);
  }
  private getChatEvent(val: Number) {
    switch (val) {
      case 1:
        return "点击图标";
      case 2:
        return "接受邀请对话";
      case 3:
        return "客服主动对话";
      case 4:
        return "微信输入任意文字接入对话";
      case 5:
        return "微信点击菜单接入";
      case 6:
        return "微信输入指定文字接入";
      case 7:
        return "微信机器人转人工";
      case 11:
        return "机器人转人工";
      case 12:
        return "机器人转留言";
      case 14:
        return "web自动弹屏自动接入";
      case 15:
        return "web自动弹屏访客输入消息接入";
      case 16:
        return "商户留言转平台接入";
      case 17:
        return "微信开发者接入";
      case 18:
        return "自定义渠道事件接入";
      case 19:
        return "自定义渠道发送消息接入";
      case 21:
        return "微信指定路由接入";
      case 26:
        return "邮箱渠道发送留言接入";
    }
  }
  // 对话状态
  private getChatStatus(val: Number) {
    switch (val) {
      case 1:
        return "人工对话开始";
      case 2:
        return "人工对话结束";
      case 3:
        return "留言开始";
      case 4:
        return "留言结束";
      case 5:
        return "机器人对话开始";
      case 6:
        return "机器人对话结束";
    }
  }
  // 是否存在转接
  private getChatIsTransfer(val: Number) {
    switch (val) {
      case 0:
        return "无转接";
      case 1:
        return "有转接";
    }
  }
  // 对话类型
  private getChatType(val: Number) {
    switch (val) {
      case 1:
        return "在线对话";
      case 2:
        return "忙碌对话";
      case 3:
        return "离线消息";
      case 5:
        return "机器人对话";
    }
  }
  // 对话类型
  private getChatScore(val: Number) {
    switch (val) {
      case 1:
        return "非常不满意";
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
  // 对话类型
  private getChatEndType(val: Number) {
    switch (val) {
      case 0:
        return "未知";
      case 1:
        return "访客结束对话";
      case 2:
        return "客服结束对话";
      case 3:
        return "访客超时";
      case 5:
        return "客服退出";
      case 6:
        return "系统关闭";
      case 8:
        return "访客长时间未回复结束";
      case 12:
        return "忙碌放弃结束";
      case 14:
        return "留言超时结束";
      case 15:
        return "机器人自动转人工结束";
      case 16:
        return "机器人手动转人工结束";
      case 18:
        return "客服主动对话后留言/机器人对话结束";
      case 19:
        return "机器人超时结束";
    }
  }
  // 对话类型
  private getChatActivelyinviteEvaluating(val: Number) {
    switch (val) {
      case 0:
        return "没有邀评";
      case 1:
        return "有邀评";
    }
  }
  // 对话分组id
  private getChatDepartmentId(val: Number) {
    switch (val) {
      case 0:
        return "全部人员可接";
    }
  }
  // 对话类型
  private getStaffId(val: Number) {
    switch (val) {
      case -1:
        return "系统自动分配";
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
  // 根据对话记录ID 查询对话转接记录
  private async getTransfers(val: any) {
    interface Params {
      chatRecordId:Number
    }
    const params: Params = {
      chatRecordId:val.chatRecordId
    }
    const res: any = await api.getTransferList(params);
    this.pageList = res.data;
  }

  // 判断对话是否有转接记录
  private isTransfer(val: any) {
    return val.isTransfer == 0 ? true : false;
  }

  // 根据对话记录ID 查询对话客服kpi记录
  private async getStaffKpis(val: any) {
    interface Params {
      chatRecordId:Number
    }
    const params: Params = {
      chatRecordId:val.chatRecordId
    }
    const res: any = await api.getStaffKpiList(params);
    this.pageList = res.data;
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
