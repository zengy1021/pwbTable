import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/extension' : '/eApi'
// let paramsSerializer = function (p: any) {
//   return qs.stringify(p, { arrayFormat: 'repeat' })
// }
export default {
  // 获取数据
  getCompanyList: request.get(flag + `/systemCompany/infoList`, {})
}
