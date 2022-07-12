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
                <el-form-item label="jobId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobId（工单ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobId }}</span>
                </el-form-item>
                <el-form-item label="jobAttribute">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobAttribute（工单属性。1：内部工单 2：外部工单）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobAttribute }}</span>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="">
                  <template slot="label">
                    <span class="tt_label">{{'JobData 访客数据'}}</span>
                  </template>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="jobTitle">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobTitle（工单标题）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobTitle }}</span>
                </el-form-item>
                <el-form-item label="jobContent">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobContent（工单内容）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobContent }}</span>
                </el-form-item>
                <el-form-item label="jobTopic">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobTopic（工单主题ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobTopic }}</span>
                </el-form-item>
                <el-form-item label="jobTopicName">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobTopicName（工单主题名称。工单更新时，主题产生变化才会有值）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobTopicName }}</span>
                </el-form-item>
                <el-form-item label="jobRequesterLan">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobRequesterLan（工单请求语言）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobRequesterLan }}</span>
                </el-form-item>
                <el-form-item label="jobStyleId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobStyleId（样式ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobStyleId }}</span>
                </el-form-item>
                <el-form-item label="jobType">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobType（工单类型。1：问题 2：事务 3：故障 4：任务）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobType }}</span>
                </el-form-item>
                <el-form-item label="jobPriority">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobPriority（工单优先级。1：低 2：正常 3：高 4：紧急）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobPriority }}</span>
                </el-form-item>
                <el-form-item label="jobTemplateId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobTemplateId（工单模版ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobTemplateId }}</span>
                </el-form-item>
                <el-form-item label="jobStatus">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobStatus（工单状态。1：新建 2：已开启 3：待回应 4：已挂起 5：已解决 6：已关闭）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobStatus }}</span>
                </el-form-item>
                <el-form-item label="jobMemo">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobMemo（工单备注）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobMemo }}</span>
                </el-form-item>
                <el-form-item label="jobUpdaterType">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobUpdaterType（工单更新人类型。—1：客服 0：访客）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobUpdaterType }}</span>
                </el-form-item>
                <el-form-item label="jobUpdaterId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobUpdaterId（工单更新人ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobUpdaterId }}</span>
                </el-form-item>
                <el-form-item label="jobUpdaterName">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobUpdaterName（工单更新人姓名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobUpdaterName }}</span>
                </el-form-item>
                <el-form-item label="jobRequesterUserId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobRequesterUserId（请求者ID。访客vipId或客服ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobRequesterUserId }}</span>
                </el-form-item>
                <el-form-item label="jobRequesterUserType">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobRequesterUserType（请求者类型。—1：客服 0：访客）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobRequesterUserType }}</span>
                </el-form-item>
                <el-form-item label="jobRequesterUserName">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobRequesterUserName（请求者姓名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobRequesterUserName }}</span>
                </el-form-item>
                <el-form-item label="jobDepartmentId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobDepartmentId（工单指派分组ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobDepartmentId }}</span>
                </el-form-item>
                <el-form-item label="jobDepartmentName">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobDepartmentName（工单指派分组名称）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobDepartmentName }}</span>
                </el-form-item>
                <el-form-item label="jobDistributeUserId">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobDistributeUserId（工单指派客服ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobDistributeUserId }}</span>
                </el-form-item>
                <el-form-item label="jobDistributeUserName">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobDistributeUserName（工单指派客服姓名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobDistributeUserName }}</span>
                </el-form-item>
                <el-form-item label="jobDistributeUserRole">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobDistributeUserRole（工单指派客服角色）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobDistributeUserRole }}</span>
                </el-form-item>
                <el-form-item label="jobDistributeUserLogName">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobDistributeUserLogName（工单指派客服登录名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobDistributeUserLogName }}</span>
                </el-form-item>
                <el-form-item label="jobFollowerIds">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobFollowerIds（工单跟踪者ID列表）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobFollowerIds }}</span>
                </el-form-item>
                <el-form-item label="jobFollowerNames">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobFollowerNames（工单跟踪者名称列表）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobFollowerNames }}</span>
                </el-form-item>
                <el-form-item label="jobReplyEmail">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobReplyEmail（回复邮箱地址）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobReplyEmail }}</span>
                </el-form-item>
                <el-form-item label="jobReplyPhone">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobReplyPhone（回复邮箱地址）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobReplyPhone }}</span>
                </el-form-item>
                <el-form-item label="jobReplyType">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobReplyType（工单回复类型。1：内部回复 2：外部回复 3：内部回复和外部回复）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobReplyType }}</span>
                </el-form-item>
                <el-form-item label="jobReplyContent">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobReplyContent（工单回复内容）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobReplyContent }}</span>
                </el-form-item>
                <el-form-item label="jobEvaluateDatetime">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobEvaluateDatetime（用户评价时间。时间戳）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobEvaluateDatetime }}</span>
                </el-form-item>
                <el-form-item label="jobMainItem">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobMainItem（满意度。1：非常差评 2：不满意 3：一般 4：满意 5：非常满意）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobMainItem }}</span>
                </el-form-item>
                <el-form-item label="jobComment">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobComment（评价备注内容）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobComment }}</span>
                </el-form-item>
                <el-form-item label="jobSubItems">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobSubItems（评价子项。String数组）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobSubItems }}</span>
                </el-form-item>
                <el-form-item label="jobLink">
                  <template slot="label">
                    <span class="expand_label">{{ 'jobLink（工单链接）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.jobLink }}</span>
                </el-form-item>
                <el-form-item label="t1">
                  <template slot="label">
                    <span class="expand_label">{{ 't1（工单自定义字段1）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t1 }}</span>
                </el-form-item>
                <el-form-item label="t2">
                  <template slot="label">
                    <span class="expand_label">{{ 't2（工单自定义字段2）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t2 }}</span>
                </el-form-item>
                <el-form-item label="t3">
                  <template slot="label">
                    <span class="expand_label">{{ 't3（工单自定义字段3）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t3 }}</span>
                </el-form-item>
                <el-form-item label="t4">
                  <template slot="label">
                    <span class="expand_label">{{ 't4（工单自定义字段4）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t4 }}</span>
                </el-form-item>
                <el-form-item label="t5">
                  <template slot="label">
                    <span class="expand_label">{{ 't5（工单自定义字段5）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t5 }}</span>
                </el-form-item>
                <el-form-item label="t6">
                  <template slot="label">
                    <span class="expand_label">{{ 't6（工单自定义字段6）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t6 }}</span>
                </el-form-item>
                <el-form-item label="t7">
                  <template slot="label">
                    <span class="expand_label">{{ 't7（工单自定义字段7）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t7 }}</span>
                </el-form-item>
                <el-form-item label="t8">
                  <template slot="label">
                    <span class="expand_label">{{ 't8（工单自定义字段8）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t8 }}</span>
                </el-form-item>
                <el-form-item label="t9">
                  <template slot="label">
                    <span class="expand_label">{{ 't9（工单自定义字段9）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t9 }}</span>
                </el-form-item>
                <el-form-item label="t10">
                  <template slot="label">
                    <span class="expand_label">{{ 't10（工单自定义字段10）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t10 }}</span>
                </el-form-item>
                <el-form-item label="t11">
                  <template slot="label">
                    <span class="expand_label">{{ 't11（工单自定义字段11）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t11 }}</span>
                </el-form-item>
                <el-form-item label="t12">
                  <template slot="label">
                    <span class="expand_label">{{ 't12（工单自定义字段12）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t12 }}</span>
                </el-form-item>
                <el-form-item label="t13">
                  <template slot="label">
                    <span class="expand_label">{{ 't13（工单自定义字段13）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t13 }}</span>
                </el-form-item>
                <el-form-item label="t14">
                  <template slot="label">
                    <span class="expand_label">{{ 't14（工单自定义字段14）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t14 }}</span>
                </el-form-item>
                <el-form-item label="t15">
                  <template slot="label">
                    <span class="expand_label">{{ 't15（工单自定义字段15）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t15 }}</span>
                </el-form-item>
                <el-form-item label="t16">
                  <template slot="label">
                    <span class="expand_label">{{ 't16（工单自定义字段16）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t16 }}</span>
                </el-form-item>
                <el-form-item label="t17">
                  <template slot="label">
                    <span class="expand_label">{{ 't17（工单自定义字段17）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t17 }}</span>
                </el-form-item>
                <el-form-item label="t18">
                  <template slot="label">
                    <span class="expand_label">{{ 't18（工单自定义字段18）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t18 }}</span>
                </el-form-item>
                <el-form-item label="t19">
                  <template slot="label">
                    <span class="expand_label">{{ 't19（工单自定义字段19）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t19 }}</span>
                </el-form-item>
                <el-form-item label="t20">
                  <template slot="label">
                    <span class="expand_label">{{ 't20（工单自定义字段20）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.t20 }}</span>
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
                <el-form-item label="visitorId">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorId（访客唯一值。身份描述+ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorId }}</span>
                </el-form-item>
                <el-form-item label="visitorType">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorType（访客身份类型。—1：未知 0：游客(web) 1：会员(vip) 2：SDK游客(sdk) 4：微信（wechat) 5：自定义接口(custom)）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorType }}</span>
                </el-form-item>
                <el-form-item label="visitorName">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorName（访客姓名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorName }}</span>
                </el-form-item>
                <el-form-item label="visitorPhoto">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorPhoto（访客头像）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorPhoto }}</span>
                </el-form-item>
                <el-form-item label="visitorEnterTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorEnterTime（访客进入的时间）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorEnterTime }}</span>
                </el-form-item>
                <el-form-item label="visitorMedia">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorMedia（客户端媒介。1：PC网页 2：手机网页 5：微信 6：sdk 200：自定义渠道）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorMedia }}</span>
                </el-form-item>
                <el-form-item label="visitTimes">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitTimes（访客来访次数）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitTimes }}</span>
                </el-form-item>
                <el-form-item label="visitorLan">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorLan（访问者语言）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorLan }}</span>
                </el-form-item>
                <el-form-item label="visitorIp">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorIp（访客来访IP）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorIp }}</span>
                </el-form-item>
                <el-form-item label="visitorCountry">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorCountry（访客所在国家）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorCountry }}</span>
                </el-form-item>
                <el-form-item label="visitorProvince">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorProvince（访客所在省份）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorProvince }}</span>
                </el-form-item>
                <el-form-item label="visitorCity">
                  <template slot="label">
                    <span class="expand_label">{{ 'visitorCity（访客所在城市）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.visitorCity }}</span>
                </el-form-item>
                <el-form-item label="browserName">
                  <template slot="label">
                    <span class="expand_label">{{ 'browserName（访客的浏览器）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.browserName }}</span>
                </el-form-item>
                <el-form-item label="browserVersion">
                  <template slot="label">
                    <span class="expand_label">{{ 'browserVersion（访客的浏览器版本）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.browserVersion }}</span>
                </el-form-item>
                <el-form-item label="screenResolution">
                  <template slot="label">
                    <span class="expand_label">{{ 'screenResolution（访客的屏幕分辨率）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.screenResolution }}</span>
                </el-form-item>
                <el-form-item label="osName">
                  <template slot="label">
                    <span class="expand_label">{{ 'osName（访客操作系统）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.osName }}</span>
                </el-form-item>
                <el-form-item label="osVersion">
                  <template slot="label">
                    <span class="expand_label">{{ 'osVersion（操作系统版本）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.osVersion }}</span>
                </el-form-item>
                <el-form-item label="se">
                  <template slot="label">
                    <span class="expand_label">{{ 'se（访客来访的搜索引擎）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.se }}</span>
                </el-form-item>
                <el-form-item label="keyword">
                  <template slot="label">
                    <span class="expand_label">{{ 'keyword（访客来访的搜索关键字）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.keyword }}</span>
                </el-form-item>
                <el-form-item label="biddingWord">
                  <template slot="label">
                    <span class="expand_label">{{ 'biddingWord（推广词）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.biddingWord }}</span>
                </el-form-item>
                <el-form-item label="keywordType">
                  <template slot="label">
                    <span class="expand_label">{{ 'keywordType（关键词类型。0：未区分SEO、推广 1：自然优化 2： 推广）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.keywordType }}</span>
                </el-form-item>
                <el-form-item label="referPage">
                  <template slot="label">
                    <span class="expand_label">{{ 'referPage（访客来源的URL。如果是微信，就是公众号名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.referPage }}</span>
                </el-form-item>
                <el-form-item label="firstTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstTime（进入网站的时间）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.firstTime }}</span>
                </el-form-item>
                <el-form-item label="firstPage">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstPage（落地页）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.firstPage }}</span>
                </el-form-item>
                <el-form-item label="firstPageTitle">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstPageTitle（落地页面标题）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.firstPageTitle }}</span>
                </el-form-item>
                <el-form-item label="firstPageAliae">
                  <template slot="label">
                    <span class="expand_label">{{ 'firstPageAliae（落地页面别名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.firstPageAliae }}</span>
                </el-form-item>
                <el-form-item label="lastChatTime">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatTime（上次对话时间）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatTime }}</span>
                </el-form-item>
                <el-form-item label="lastChatStaffId">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatStaffId（上次对话客服ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatStaffId }}</span>
                </el-form-item>
                <el-form-item label="lastChatStaffLogName">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatStaffLogName（上次对话客服账号）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.lastChatStaffLogName }}</span>
                </el-form-item>
                <el-form-item label="lastChatStaffName">
                  <template slot="label">
                    <span class="expand_label">{{ 'lastChatStaffName（上次对话客服姓名）'}} </span>
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
                    <span class="expand_label">{{ 'routeId（接入对话的路由ID。—1：web访客的默认路由 —2：微信对话的默认路由 —3：SDK对话的默认路由）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.routeId }}</span>
                </el-form-item>
                <el-form-item label="routeName">
                  <template slot="label">
                    <span class="expand_label">{{ 'routeName（路由名称）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.routeName }}</span>
                </el-form-item>
                <el-form-item label="styleId">
                  <template slot="label">
                    <span class="expand_label">{{ 'styleId（路由所使用的样式ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.styleId }}</span>
                </el-form-item>
                <el-form-item label="styleName">
                  <template slot="label">
                    <span class="expand_label">{{ 'styleName（路由所使用样式的名称）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.styleName }}</span>
                </el-form-item>
                <el-form-item label="chatDepartmentId">
                  <template slot="label">
                    <span class="expand_label">{{ 'chatDepartmentId（本次分配对话的分组ID。如果是全部人员可接待则ID为0）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.chatDepartmentId }}</span>
                </el-form-item>
                <el-form-item label="chatDepartmentName">
                  <template slot="label">
                    <span class="expand_label">{{ 'chatDepartmentName（本地分配对话的分组名称）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.chatDepartmentName }}</span>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="">
                  <template slot="label">
                    <span class="tt_label">{{'CrmData 客户数据'}}</span>
                  </template>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="crmId">
                  <template slot="label">
                    <span class="expand_label">{{ 'crmId（CRM客户ID）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.crmId }}</span>
                </el-form-item>
                <el-form-item label="name">
                  <template slot="label">
                    <span class="expand_label">{{ 'name（客户姓名）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="phone">
                  <template slot="label">
                    <span class="expand_label">{{ 'phone（客户电话号码）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.phone }}</span>
                </el-form-item>
                <el-form-item label="qq">
                  <template slot="label">
                    <span class="expand_label">{{ 'qq（客户qq号码）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.qq }}</span>
                </el-form-item>
                <el-form-item label="wechat">
                  <template slot="label">
                    <span class="expand_label">{{ 'wechat（客户微信号）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.wechat }}</span>
                </el-form-item>
                <el-form-item label="email">
                  <template slot="label">
                    <span class="expand_label">{{ 'email（客户邮箱地址）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.email }}</span>
                </el-form-item>
                <el-form-item label="address">
                  <template slot="label">
                    <span class="expand_label">{{ 'address（客户地址）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="nickName">
                  <template slot="label">
                    <span class="expand_label">{{ 'nickName（客户的昵称）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.nickName }}</span>
                </el-form-item>
                <el-form-item label="gender">
                  <template slot="label">
                    <span class="expand_label">{{ 'gender（性别。0：未知 1：男 2：女）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.gender }}</span>
                </el-form-item>
                <el-form-item label="memo">
                  <template slot="label">
                    <span class="expand_label">{{ 'memo（客户信息备注）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.memo }}</span>
                </el-form-item>
                <el-form-item label="maritalStatus">
                  <template slot="label">
                    <span class="expand_label">{{ 'maritalStatus（婚姻状况。0：未知 1：未婚 2：已婚）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.maritalStatus }}</span>
                </el-form-item>
                <el-form-item label="age">
                  <template slot="label">
                    <span class="expand_label">{{ 'age（年龄）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.age }}</span>
                </el-form-item>
                <el-form-item label="birthday">
                  <template slot="label">
                    <span class="expand_label">{{ 'birthday（客户生日）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.birthday }}</span>
                </el-form-item>
                <el-form-item label="c1">
                  <template slot="label">
                    <span class="expand_label">{{ 'c1（自定义字段1）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c1 }}</span>
                </el-form-item>
                <el-form-item label="c2">
                  <template slot="label">
                    <span class="expand_label">{{ 'c2（自定义字段2）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c2 }}</span>
                </el-form-item>
                <el-form-item label="c3">
                  <template slot="label">
                    <span class="expand_label">{{ 'c3（自定义字段3）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c3 }}</span>
                </el-form-item>
                <el-form-item label="c4">
                  <template slot="label">
                    <span class="expand_label">{{ 'c4（自定义字段4）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c4 }}</span>
                </el-form-item>
                <el-form-item label="c5">
                  <template slot="label">
                    <span class="expand_label">{{ 'c5（自定义字段5）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c5 }}</span>
                </el-form-item>
                <el-form-item label="c6">
                  <template slot="label">
                    <span class="expand_label">{{ 'c6（自定义字段6）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c6 }}</span>
                </el-form-item>
                <el-form-item label="c7">
                  <template slot="label">
                    <span class="expand_label">{{ 'c7（自定义字段7）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c7 }}</span>
                </el-form-item>
                <el-form-item label="c8">
                  <template slot="label">
                    <span class="expand_label">{{ 'c8（自定义字段8）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c8 }}</span>
                </el-form-item>
                <el-form-item label="c9">
                  <template slot="label">
                    <span class="expand_label">{{ 'c9（自定义字段9）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c9 }}</span>
                </el-form-item>
                <el-form-item label="c10">
                  <template slot="label">
                    <span class="expand_label">{{ 'c10（自定义字段10）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c10 }}</span>
                </el-form-item>
                <el-form-item label="c11">
                  <template slot="label">
                    <span class="expand_label">{{ 'c11（自定义字段11）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c11 }}</span>
                </el-form-item>
                <el-form-item label="c12">
                  <template slot="label">
                    <span class="expand_label">{{ 'c12（自定义字段12）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c12 }}</span>
                </el-form-item>
                <el-form-item label="c13">
                  <template slot="label">
                    <span class="expand_label">{{ 'c13（自定义字段13）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c13 }}</span>
                </el-form-item>
                <el-form-item label="c14">
                  <template slot="label">
                    <span class="expand_label">{{ 'c14（自定义字段14）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c14 }}</span>
                </el-form-item>
                <el-form-item label="c15">
                  <template slot="label">
                    <span class="expand_label">{{ 'c15（自定义字段15）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c15 }}</span>
                </el-form-item>
                <el-form-item label="c16">
                  <template slot="label">
                    <span class="expand_label">{{ 'c16（自定义字段16）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c16 }}</span>
                </el-form-item>
                <el-form-item label="c17">
                  <template slot="label">
                    <span class="expand_label">{{ 'c17（自定义字段17）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c17 }}</span>
                </el-form-item>
                <el-form-item label="c18">
                  <template slot="label">
                    <span class="expand_label">{{ 'c18（自定义字段18）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c18 }}</span>
                </el-form-item>
                <el-form-item label="c19">
                  <template slot="label">
                    <span class="expand_label">{{ 'c19（自定义字段19）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c19 }}</span>
                </el-form-item>
                <el-form-item label="c20">
                  <template slot="label">
                    <span class="expand_label">{{ 'c20（自定义字段20）'}} </span>
                  </template>
                  <span class="break_all">{{ props.row.c20 }}</span>
                </el-form-item>
              </el-row>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column width="120" prop="companyId" label="companyId"> </el-table-column>
        <el-table-column width="120" prop="jobId" label="jobId"> </el-table-column>
        <el-table-column width="160" prop="jobTitle" label="工单标题"> </el-table-column>
        <el-table-column width="160" prop="jobRequesterUserName" label="工单请求人"> </el-table-column>
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
