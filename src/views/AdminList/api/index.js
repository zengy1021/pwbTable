import request from '@/assets/api/request.js'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '' : '/api'
let paramsSerializer = function (p) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 获取数据
  getDataList: request.get(flag + `/echatserver/api/query`),
}