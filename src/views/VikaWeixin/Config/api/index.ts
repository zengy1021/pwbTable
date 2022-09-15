import request from '@/assets/api/request'
import qs from 'qs'
import { data } from 'browserslist';
const flag2 = process.env.NODE_ENV !== 'development' ? '/extension' : '/eApi'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 企微-vika表配置
  getWeixinCompanyInfo() {
    return request.get(flag2 + `/weixin/companyInfo`, {})(null)
  },
  //一洽配置-更新数据
  saveWeixinCompanyInfo(val: any) {
    return request.post(flag2 + `/weixin/companyInfo`, {})(val)
  },
}
