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
                  <el-form-item label="chatRecordId">
                    <template slot="label">
                      <span class="expand_label">{{'chatRecordId（对话记录的ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatRecordId }}</span>
                  </el-form-item>
                  <el-form-item label="chatRecordType">
                    <template slot="label">
                      <span class="expand_label">{{'chatRecordType（对话记录类型。1：人工对话 2：机器人对话 3：留言 4：推送）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatRecordType }}</span>
                  </el-form-item>
                  <el-form-item label="myData">
                    <template slot="label">
                      <span class="expand_label">{{'myData（开发者自定义扩展数据）'}}</span>
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
<!--                <el-row>-->
<!--                  <el-form-item label="trackRecordId">-->
<!--                    <template slot="label">-->
<!--                      <span class="expand_label">{{'trackRecordId（访客此次浏览轨迹的ID。浏览记录唯一值）'}}</span>-->
<!--                    </template>-->
<!--                    <span class="break_all">{{ props.row.trackRecordId }}</span>-->
<!--                  </el-form-item>-->
<!--                </el-row>-->
                <el-row>
                  <el-form-item label="metaUId">
                    <template slot="label">
                      <span class="expand_label">{{'metaUId（会员的唯一值）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaUId }}</span>
                  </el-form-item>
                  <el-form-item label="metaGrade">
                    <template slot="label">
                      <span class="expand_label">{{'metaGrade（会员级别）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaGrade }}</span>
                  </el-form-item>
                  <el-form-item label="metaCategory">
                    <template slot="label">
                      <span class="expand_label">{{'metaCategory（会员类别）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaCategory }}</span>
                  </el-form-item>
                  <el-form-item label="metaName">
                    <template slot="label">
                      <span class="expand_label">{{'metaName（会员姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaName }}</span>
                  </el-form-item>
                  <el-form-item label="metaNickName">
                    <template slot="label">
                      <span class="expand_label">{{'metaNickName（会员昵称）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaNickName }}</span>
                  </el-form-item>
                  <el-form-item label="metaGender">
                    <template slot="label">
                      <span class="expand_label">{{'metaGender（会员性别）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaGender }}</span>
                  </el-form-item>
                  <el-form-item label="metaAge">
                    <template slot="label">
                      <span class="expand_label">{{'metaAge（会员年龄）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaAge }}</span>
                  </el-form-item>
                  <el-form-item label="metaBirthday">
                    <template slot="label">
                      <span class="expand_label">{{'metaBirthday（会员生日）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaBirthday }}</span>
                  </el-form-item>
                  <el-form-item label="metaMaritalStatus">
                    <template slot="label">
                      <span class="expand_label">{{'metaMaritalStatus（会员婚姻状况。0：未知 1：未婚 2：已婚）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaMaritalStatus }}</span>
                  </el-form-item>
                  <el-form-item label="metaPhone">
                    <template slot="label">
                      <span class="expand_label">{{'metaPhone（会员联系电话）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaPhone }}</span>
                  </el-form-item>
                  <el-form-item label="metaQq">
                    <template slot="label">
                      <span class="expand_label">{{'metaQq（会员QQ）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaQq }}</span>
                  </el-form-item>
                  <el-form-item label="metaWechat">
                    <template slot="label">
                      <span class="expand_label">{{'metaWechat（会员微信）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaWechat }}</span>
                  </el-form-item>
                  <el-form-item label="metaEmail">
                    <template slot="label">
                      <span class="expand_label">{{'metaEmail（会员邮件地址）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaEmail }}</span>
                  </el-form-item>
                  <el-form-item label="metaNation">
                    <template slot="label">
                      <span class="expand_label">{{'metaNation（会员国家）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaNation }}</span>
                  </el-form-item>
                  <el-form-item label="metaProvince">
                    <template slot="label">
                      <span class="expand_label">{{'metaProvince（会员省份）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaProvince }}</span>
                  </el-form-item>
                  <el-form-item label="metaCity">
                    <template slot="label">
                      <span class="expand_label">{{'metaCity（会员城市）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaCity }}</span>
                  </el-form-item>
                  <el-form-item label="metaAddress">
                    <template slot="label">
                      <span class="expand_label">{{'metaAddress（会员地址）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaAddress }}</span>
                  </el-form-item>
                  <el-form-item label="metaPhoto">
                    <template slot="label">
                      <span class="expand_label">{{'metaPhoto（会员头像地址）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.metaPhoto }}</span>
                  </el-form-item>
                  <el-form-item label="metaMemo">
                    <template slot="label">
                      <span class="expand_label">{{'metaMemo（会员备注信息）'}}</span>
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
                      <span class="expand_label">{{'visitorEnterTime（访客进入的时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorEnterTime }}</span>
                  </el-form-item>
                  <el-form-item label="visitorMedia">
                    <template slot="label">
                      <span class="expand_label">{{'visitorMedia（客户端媒介。1：PC网页 2：手机网页 5：微信 6：sdk 9：自定义渠道）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorMedia }}</span>
                  </el-form-item>
                  <el-form-item label="visitorType">
                    <template slot="label">
                      <span class="expand_label">{{'visitorType（访客身份类型。—1：未知 0：游客(web) 1：会员(vip) 2：SDK游客(sdk) 4：微信(wechat) 5：自定义接口(custom)）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorType }}</span>
                  </el-form-item>
                  <el-form-item label="visitorId">
                    <template slot="label">
                      <span class="expand_label">{{'visitorId（访客唯一值。身份描述+ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorId }}</span>
                  </el-form-item>
                  <el-form-item label="mediaId">
                    <template slot="label">
                      <span class="expand_label">{{'mediaId（渠道ID。type=5，自定义渠道时有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.mediaId }}</span>
                  </el-form-item>
                  <el-form-item label="visitorName">
                    <template slot="label">
                      <span class="expand_label">{{'visitorName（访客姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorName }}</span>
                  </el-form-item>
                  <el-form-item label="visitorPhoto">
                    <template slot="label">
                      <span class="expand_label">{{'visitorPhoto（访客头像）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorPhoto }}</span>
                  </el-form-item>
                  <el-form-item label="visitTimes">
                    <template slot="label">
                      <span class="expand_label">{{'visitTimes（访客来访次数）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitTimes }}</span>
                  </el-form-item>
                  <el-form-item label="visitorLan">
                    <template slot="label">
                      <span class="expand_label">{{'visitorLan（访客语言）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorLan }}</span>
                  </el-form-item>
                  <el-form-item label="visitorIp">
                    <template slot="label">
                      <span class="expand_label">{{'visitorIp（访客来访IP）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorIp }}</span>
                  </el-form-item>
                  <el-form-item label="visitorCountry">
                    <template slot="label">
                      <span class="expand_label">{{'visitorCountry（访客所在国家）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorCountry }}</span>
                  </el-form-item>
                  <el-form-item label="visitorProvince">
                    <template slot="label">
                      <span class="expand_label">{{'visitorProvince（访客所在省份）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorProvince }}</span>
                  </el-form-item>
                  <el-form-item label="visitorCity">
                    <template slot="label">
                      <span class="expand_label">{{'visitorCity（访客所在城市）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorCity }}</span>
                  </el-form-item>
                  <el-form-item label="browserName">
                    <template slot="label">
                      <span class="expand_label">{{'browserName（访客的浏览器）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.browserName }}</span>
                  </el-form-item>
                  <el-form-item label="browserVersion">
                    <template slot="label">
                      <span class="expand_label">{{'browserVersion（访客的浏览器版本）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.browserVersion }}</span>
                  </el-form-item>
                  <el-form-item label="screenResolution">
                    <template slot="label">
                      <span class="expand_label">{{'screenResolution（访客的屏幕分辨率）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.screenResolution }}</span>
                  </el-form-item>
                  <el-form-item label="osName">
                    <template slot="label">
                      <span class="expand_label">{{'osName（访客操作系统）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.osName }}</span>
                  </el-form-item>
                  <el-form-item label="osVersion">
                    <template slot="label">
                      <span class="expand_label">{{'osVersion（操作系统版本）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.osVersion }}</span>
                  </el-form-item>
                  <el-form-item label="se">
                    <template slot="label">
                      <span class="expand_label">{{'se（访客来访的搜索引擎）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.se }}</span>
                  </el-form-item>
                  <el-form-item label="keyword">
                    <template slot="label">
                      <span class="expand_label">{{'keyword（访客来访的搜索关键字）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.keyword }}</span>
                  </el-form-item>
                  <el-form-item label="biddingWord">
                    <template slot="label">
                      <span class="expand_label">{{'biddingWord（推广词）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.biddingWord }}</span>
                  </el-form-item>
                  <el-form-item label="keywordType">
                    <template slot="label">
                      <span class="expand_label">{{'keywordType（关键词类型。0：未区分SEO、推广 1：自然优化 2： 推广）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.keywordType }}</span>
                  </el-form-item>
                  <el-form-item label="referPage">
                    <template slot="label">
                      <span class="expand_label">{{'referPage（访客来源的URL。如果是微信，就是公众号名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.referPage }}</span>
                  </el-form-item>
                  <el-form-item label="firstTime">
                    <template slot="label">
                      <span class="expand_label">{{'firstTime（进入网站的时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.firstTime }}</span>
                  </el-form-item>
                  <el-form-item label="firstPage">
                    <template slot="label">
                      <span class="expand_label">{{'firstPage（落地页）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.firstPage }}</span>
                  </el-form-item>
                  <el-form-item label="firstPageTitle">
                    <template slot="label">
                      <span class="expand_label">{{'firstPageTitle（落地页面标题）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.firstPageTitle }}</span>
                  </el-form-item>
                  <el-form-item label="firstPageAliae">
                    <template slot="label">
                      <span class="expand_label">{{'firstPageAliae（落地页面别名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.firstPageAliae }}</span>
                  </el-form-item>
                  <el-form-item label="lastChatTime">
                    <template slot="label">
                      <span class="expand_label">{{'lastChatTime（上次对话时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.lastChatTime }}</span>
                  </el-form-item>
                  <el-form-item label="lastChatStaffId">
                    <template slot="label">
                      <span class="expand_label">{{'lastChatStaffId（上次对话客服ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.lastChatStaffId }}</span>
                  </el-form-item>
                  <el-form-item label="lastChatStaffLogName">
                    <template slot="label">
                      <span class="expand_label">{{'lastChatStaffLogName（上次对话客服账号）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.lastChatStaffLogName }}</span>
                  </el-form-item>
                  <el-form-item label="lastChatStaffName">
                    <template slot="label">
                      <span class="expand_label">{{'lastChatStaffName（上次对话客服姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.lastChatStaffName }}</span>
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
                      <span class="expand_label">{{'routeId（接入对话的路由ID。—1：web访客的默认路由 —2：微信对话的默认路由 —3：SDK对话的默认路由）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.routeId }}</span>
                  </el-form-item>
                  <el-form-item label="routeName">
                    <template slot="label">
                      <span class="expand_label">{{'routeName（路由名称）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.routeName }}</span>
                  </el-form-item>
                  <el-form-item label="styleId">
                    <template slot="label">
                      <span class="expand_label">{{'styleId（路由所使用的样式ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.styleId }}</span>
                  </el-form-item>
                  <el-form-item label="styleName">
                    <template slot="label">
                      <span class="expand_label">{{'styleName（路由所使用样式的名称）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.styleName }}</span>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="">
                    <template slot="label">
                      <span class="tt_label">{{'ChatData 对话数据'}}</span>
                    </template>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="chatPage">
                    <template slot="label">
                      <span class="expand_label">{{'chatPage（对话页面）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatPage }}</span>
                  </el-form-item>
                  <el-form-item label="chatPageTitle">
                    <template slot="label">
                      <span class="expand_label">{{'chatPageTitle（对话标题）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatPageTitle }}</span>
                  </el-form-item>
                  <el-form-item label="chatTimes">
                    <template slot="label">
                      <span class="expand_label">{{'chatTimes（对话次数）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatTimes }}</span>
                  </el-form-item>
                  <el-form-item label="chatEvent">
                    <template slot="label">
                      <span class="expand_label">{{'chatEvent（对话发起的方式。1：点击图标 2：接受邀请对话 3：客服主动对话 4：微信输入任意文字接入对话 5：微信点击菜单接入 6：微信输入指定文字接入 7：微信机器人转人工 11：机器人转人工 12：机器人转留言 14：web自动弹屏自动接入 15：web自动弹屏访客输入消息接入 16：商户留言转平台接入 17：微信开发者接入 18：自定义渠道事件接入 19：自定义渠道发送消息接入）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatEvent }}</span>
                  </el-form-item>
                  <el-form-item label="chatRequestTime">
                    <template slot="label">
                      <span class="expand_label">{{'chatRequestTime（请求对话的时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatRequestTime }}</span>
                  </el-form-item>
                  <el-form-item label="chatAnswerTime">
                    <template slot="label">
                      <span class="expand_label">{{'chatAnswerTime（对话接通时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatAnswerTime }}</span>
                  </el-form-item>
                  <el-form-item label="chatType">
                    <template slot="label">
                      <span class="expand_label">{{'chatType（会话类型。1：在线对话 2：忙碌对话3：离线消息 5：机器人对话）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatType }}</span>
                  </el-form-item>
                  <el-form-item label="chatStaffId">
                    <template slot="label">
                      <span class="expand_label">{{'chatStaffId（接待对话的客服ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatStaffId }}</span>
                  </el-form-item>
                  <el-form-item label="chatStaffLogName">
                    <template slot="label">
                      <span class="expand_label">{{'chatStaffLogName（接待对话的客服登录名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatStaffLogName }}</span>
                  </el-form-item>
                  <el-form-item label="chatStaffName">
                    <template slot="label">
                      <span class="expand_label">{{'chatStaffName（接待对话的客服姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatStaffName }}</span>
                  </el-form-item>
                  <el-form-item label="chatStaffRole">
                    <template slot="label">
                      <span class="expand_label">{{'chatStaffRole（接待对话的客服的内部角色名称）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatStaffRole }}</span>
                  </el-form-item>
                  <el-form-item label="chatEntrance">
                    <template slot="label">
                      <span class="expand_label">{{'chatEntrance（对话入口）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatEntrance }}</span>
                  </el-form-item>
                  <el-form-item label="chatWaitTime">
                    <template slot="label">
                      <span class="expand_label">{{'chatWaitTime（访客等待时长。单位：秒）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatWaitTime }}</span>
                  </el-form-item>
                  <el-form-item label="chatDepartmentId">
                    <template slot="label">
                      <span class="expand_label">{{'chatDepartmentId（本次分配对话的分组ID。如果是全部人员可接待则ID为0）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatDepartmentId }}</span>
                  </el-form-item>
                  <el-form-item label="chatDepartmentName">
                    <template slot="label">
                      <span class="expand_label">{{'chatDepartmentName（本地分配对话的分组名称。如果是全部人员可接待则为空）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatDepartmentName }}</span>
                  </el-form-item>
                  <el-form-item label="chatEndTime">
                    <template slot="label">
                      <span class="expand_label">{{'chatEndTime（对话结束时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatEndTime }}</span>
                  </el-form-item>
                  <el-form-item label="chatEndType">
                    <template slot="label">
                      <span class="expand_label">{{'chatEndType（对话结束方式。0：未知 1：访客结束对话 2：客服结束对话 3：访客超时 5：客服退出 6：系统关闭 8：访客长时间未回复结束 12：忙碌放弃结束 14：留言超时结束 15：机器人自动转人工结束 16：机器人手动转人工结束 18：客服主动对话后留言/机器人对话结束）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatEndType }}</span>
                  </el-form-item>
                  <el-form-item label="chatTotalTime">
                    <template slot="label">
                      <span class="expand_label">{{'chatTotalTime（通话时长。单位：毫秒）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatTotalTime }}</span>
                  </el-form-item>
                  <el-form-item label="firstAnswerTime">
                    <template slot="label">
                      <span class="expand_label">{{'firstAnswerTime（首次响应时长。单位：毫秒）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.firstAnswerTime }}</span>
                  </el-form-item>
                  <el-form-item label="avgAnswerTime">
                    <template slot="label">
                      <span class="expand_label">{{'avgAnswerTime（平均响应时长。单位：毫秒）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.avgAnswerTime }}</span>
                  </el-form-item>
                  <el-form-item label="visitorSendMsg">
                    <template slot="label">
                      <span class="expand_label">{{'visitorSendMsg（访客发送消息条数）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.visitorSendMsg }}</span>
                  </el-form-item>
                  <el-form-item label="staffSendMsg">
                    <template slot="label">
                      <span class="expand_label">{{'staffSendMsg（客服发送消息条数）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.staffSendMsg }}</span>
                  </el-form-item>
                  <el-form-item label="activelyInviteEvaluating">
                    <template slot="label">
                      <span class="expand_label">{{'activelyInviteEvaluating（是否邀评。1：是 2：否）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.activelyInviteEvaluating }}</span>
                  </el-form-item>
                  <el-form-item label="perfectMatchs">
                    <template slot="label">
                      <span class="expand_label">{{'perfectMatchs（完美匹配数。机器人对话有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.perfectMatchs }}</span>
                  </el-form-item>
                  <el-form-item label="exactMatchs">
                    <template slot="label">
                      <span class="expand_label">{{'exactMatchs（精准匹配数。机器人对话有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.exactMatchs }}</span>
                  </el-form-item>
                  <el-form-item label="similarityMatchs">
                    <template slot="label">
                      <span class="expand_label">{{'similarityMatchs（相似匹配数。机器人对话有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.similarityMatchs }}</span>
                  </el-form-item>
                  <el-form-item label="misMatchCount">
                    <template slot="label">
                      <span class="expand_label">{{'misMatchCount（未命中数。机器人对话有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.misMatchCount }}</span>
                  </el-form-item>
                  <el-form-item label="solvedCount">
                    <template slot="label">
                      <span class="expand_label">{{'solvedCount（点击解决数。机器人对话有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.solvedCount }}</span>
                  </el-form-item>
                  <el-form-item label="unsolvedCount">
                    <template slot="label">
                      <span class="expand_label">{{'unsolvedCount（点击未解决数。机器人对话有效）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.unsolvedCount }}</span>
                  </el-form-item>
                  <el-form-item label="staffId">
                    <template slot="label">
                      <span class="expand_label">{{'staffId（分配者客服ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.staffId }}</span>
                  </el-form-item>
                  <el-form-item label="staffLogName">
                    <template slot="label">
                      <span class="expand_label">{{'staffLogName（分配者客服账号）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.staffLogName }}</span>
                  </el-form-item>
                  <el-form-item label="staffName">
                    <template slot="label">
                      <span class="expand_label">{{'staffName（分配者客服姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.staffName }}</span>
                  </el-form-item>
                  <el-form-item label="duration">
                    <template slot="label">
                      <span class="expand_label">{{'duration（通话总时长）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.duration }}</span>
                  </el-form-item>
                  <el-form-item label="ownerId">
                    <template slot="label">
                      <span class="expand_label">{{'ownerId（被分配客服ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.ownerId }}</span>
                  </el-form-item>
                  <el-form-item label="ownerLogName">
                    <template slot="label">
                      <span class="expand_label">{{'ownerLogName（被分配客服账号）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.ownerLogName }}</span>
                  </el-form-item>
                  <el-form-item label="ownerName">
                    <template slot="label">
                      <span class="expand_label">{{'ownerName（被分配客服姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.ownerName }}</span>
                  </el-form-item>
                  <el-form-item label="transferTime">
                    <template slot="label">
                      <span class="expand_label">{{'transferTime（对话转接时间）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.transferTime }}</span>
                  </el-form-item>
                  <el-form-item label="fromStaffId">
                    <template slot="label">
                      <span class="expand_label">{{'fromStaffId（发起转接的客服ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.fromStaffId }}</span>
                  </el-form-item>
                  <el-form-item label="fromStaffLogName">
                    <template slot="label">
                      <span class="expand_label">{{'fromStaffLogName（发起转接请求的客服登录名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.fromStaffLogName }}</span>
                  </el-form-item>
                  <el-form-item label="fromStaffName">
                    <template slot="label">
                      <span class="expand_label">{{'fromStaffName（发起转接请求的客服名称）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.fromStaffName }}</span>
                  </el-form-item>
                  <el-form-item label="toStaffId">
                    <template slot="label">
                      <span class="expand_label">{{'toStaffId（接受转接的客服ID）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.toStaffId }}</span>
                  </el-form-item>
                  <el-form-item label="toStaffLogName">
                    <template slot="label">
                      <span class="expand_label">{{'toStaffLogName（接受转接的客服登陆名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.toStaffLogName }}</span>
                  </el-form-item>
                  <el-form-item label="toStaffName">
                    <template slot="label">
                      <span class="expand_label">{{'toStaffName（接受转接的客服名称）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.toStaffName }}</span>
                  </el-form-item>
                  <el-form-item label="chatSubject">
                    <template slot="label">
                      <span class="expand_label">{{'chatSubject（对话评估的主题）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatSubject }}</span>
                  </el-form-item>
                  <el-form-item label="chatSubjectMemo">
                    <template slot="label">
                      <span class="expand_label">{{'chatSubjectMemo（对话评估备注）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatSubjectMemo }}</span>
                  </el-form-item>
                  <el-form-item label="chatScore">
                    <template slot="label">
                      <span class="expand_label">{{'chatScore（满意度评价。1：非常不满意 2：不满意 3：一般 4：满意 5：非常满意）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatScore }}</span>
                  </el-form-item>
                  <el-form-item label="scoreDimension">
                    <template slot="label">
                      <span class="expand_label">{{'scoreDimension（评价维度）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.scoreDimension }}</span>
                  </el-form-item>
                  <el-form-item label="scoreSuggest">
                    <template slot="label">
                      <span class="expand_label">{{'scoreSuggest（评价的内容）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.scoreSuggest }}</span>
                  </el-form-item>
                  <el-form-item label="chatScoreStaffId">
                    <template slot="label">
                      <span class="expand_label">{{'chatScoreStaffId（接待对话的客服ID。评价发生时正在接待对话有效，评价对话结束无此信息）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatScoreStaffId }}</span>
                  </el-form-item>
                  <el-form-item label="chatScoreStaffLogName">
                    <template slot="label">
                      <span class="expand_label">{{'chatScoreStaffLogName（接待对话的客服登录名。评价发生时正在接待对话有效，评价对话结束无此信息）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatScoreStaffLogName }}</span>
                  </el-form-item>
                  <el-form-item label="chatScoreStaffName">
                    <template slot="label">
                      <span class="expand_label">{{'chatScoreStaffName（接待对话的客服姓名。评价发生时正在接待对话有效，评价对话结束无此信息）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatScoreStaffName }}</span>
                  </el-form-item>
                  <el-form-item label="crmName">
                    <template slot="label">
                      <span class="expand_label">{{'crmName（客户姓名）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.crmName }}</span>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="">
                    <template slot="label">
                      <span class="tt_label">{{'ChatData 对话数据'}}</span>
                    </template>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="chatContent">
                    <template slot="label">
                      <span class="expand_label">{{'chatContent（对话内容）'}}</span>
                    </template>
                    <span class="break_all">{{ props.row.chatContent }}</span>
                  </el-form-item>
                </el-row>
              </el-form>
            </template>
        </el-table-column>
        <el-table-column width="120" prop="companyId" label="companyId"> </el-table-column>
        <el-table-column width="120" prop="chatRecordId" label="charRecordId"> </el-table-column>
        <el-table-column width="160" prop="chatAnswerTime" label="对话接通时间"> </el-table-column>
        <el-table-column width="160" prop="chatEndTime" label="对话结束时间"> </el-table-column>
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
