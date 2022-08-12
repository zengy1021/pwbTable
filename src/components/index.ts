import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/eApi' : '/eApi'
// let paramsSerializer = function (p: any) {
//   return qs.stringify(p, { arrayFormat: 'repeat' })
// }
export default {
  // 获取数据
  getCompanyList: request.get(`/extension/companyconfig/infolist`, {})
}
