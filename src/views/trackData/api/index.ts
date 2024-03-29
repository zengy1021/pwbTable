import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/api' : '/api'
const flag2 = process.env.NODE_ENV !== 'development' ? '/extension' : '/eApi'

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
    return request.get(flag2+`/track/list/${pageNum}/${pageSize}`, {})(pathParams)
  },
  // 浏览轨迹
  trackPageList(param: any) {
    return request.get(flag2+'/track/page', {})(param)
  },
  // 清空日志
  delDataList() {
    return request.delete(flag2+'/track', {})(null)
  }
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
}
