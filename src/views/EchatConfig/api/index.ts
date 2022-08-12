import request from '@/assets/api/request'
import qs from 'qs'
import {data} from 'browserslist';
const flag = process.env.NODE_ENV !== 'development' ? '/api' : '/api'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 获取数据
  getDataList(params:any,data:any){
    const pageNum:number = params.pageNum
    const pageSize:number = params.pageSize
    let pathParams:any
    if(params.startDate&&params.endDate){
      pathParams = {
        startDate:params.startDate,
        endDate:params.endDate
      }
    }
    return request.get(flag + `/echatserver/reqinfo/list/${pageNum}/${pageSize}`,{})(pathParams?pathParams:data)
  },
  // 一洽配置-查询所有数据
  getEchatConfigDataList(){
    return request.get(`/extension/companyconfig/list/1/1000`,{})(null)
  },
  //一洽配置-根据id查看详情
  getEchatConfigDataByCompId(compId:string){
    return request.get(flag + `/echatserver/system/config/echat/${compId}`,{})(compId)
  },
  //一洽配置-新增公司id
  addEchatConfigDataByCompId(val: any){
    return request.post(`/extension/companyconfig`,{})(val)
  },
  //一洽配置-更新数据
  updateEchatConfigDataByCompId(val: any){
    return request.put(`/extension/companyconfig`,{})(val)
  },
  //一洽配置-删除数据
  deleteEchatConfigDataByCompId(val: any){
    return request.delete(`/extension/companyconfig`,{})(val)
  },
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
} 
