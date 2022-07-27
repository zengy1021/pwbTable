import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/api' : '/api'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 获取数据
  getDataList(params: any) {
    const pageNum: number = params.pageNum
    const pageSize: number = params.pageSize
    let pathParams: any
    if (params.startDate && params.endDate) {
      pathParams = {
        startDate: params.startDate,
        endDate: params.endDate
      }
    }
    return request.get(`/extension/track/list/${pageNum}/${pageSize}`, {})(pathParams)
  },
  // 清空日志
  delDataList() {
    return request.delete('/extension/track', {})(null)
  }
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
}
