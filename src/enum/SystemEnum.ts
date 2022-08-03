import qs from 'qs'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {

  // 工单属性
  setJobAttribute(row: any, column: any) {
    return this.getJobAttribute(row.jobAttribute);
  },
  getJobAttribute(val: Number) {
    switch (val) {
      case 1:
        return "内部工单";
      case 2:
        return "外部工单";
      default:
        return val;
    }
  },
  // 工单状态
  setJobStatus(row: any, column: any) {
    return this.getJobStatus(row.status);
  },
  getJobStatus(val: Number) {
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
  },
  // 回复类型
  setJobReplyType(row: any, column: any) {
    return this.getJobReplyType(row.status);
  },
  getJobReplyType(val: Number) {
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
  },
  // 工单类型
  getJobPriority(val: Number) {
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
  },
  // 工单优先级
  getJobType(val: Number) {
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
  },
  // 请求者
  getJobRequesterUserType(val: Number) {
    switch (val) {
      case -1:
        return "客服";
      case 0:
        return "访客";
      default:
        return val;
    }
  },
  // 满意度评价等级
  getJobMainItem(val: Number) {
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
  },
  // 访客身份类型 todo:公共
  getVisitorType(val: Number) {
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
  },
  // 客户端没接 todo:公共
  getVisitorMedia(val: Number) {
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
  },
  // 关键词类型 todo:公共
  getKeywordType(val: Number) {
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
  },
  // 接入对话的路由ID todo:公共
  getRouteId(val: Number) {
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
  },
  // 性别 todo:公共
  getGender(val: Number) {
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
  },
  // 婚姻状况 todo:公共
  getMaritalStatus(val: Number) {
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
},
}
