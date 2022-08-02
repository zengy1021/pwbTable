import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/eApi' : ''
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 获取数据
  getDataList(params:any){
    const pageNum:number = params.pageNum
    const pageSize:number = params.pageSize
    let pathParams:any
    if(params.startDate&&params.endDate){
      pathParams = {
        startDate:params.startDate,
        endDate:params.endDate
      }
    }
    return request.get(`/extension/chat/list/${pageNum}/${pageSize}`,{})(pathParams)
  },
  // 转接记录
  getTransferList(param: any) {
    return request.get('/extension/chat/transfer', {})(param)
  },
  // 客服对话kpi数据
  getStaffKpiList(param: any) {
    return request.get('/extension/chat/staffkpi', {})(param)
  },
  // 清空日志
  delDataList(){
    return request.delete('/extension/chat', {})(null)
  }
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
} 
