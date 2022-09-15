import request from '@/assets/api/request'
import qs from 'qs'
import { data } from 'browserslist';
const flag = process.env.NODE_ENV !== 'development' ? '/api' : '/api'
const flag2 = process.env.NODE_ENV !== 'development' ? '/extension' : '/eApi'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 一洽配置-查询所有数据
  getUserList() {
    return request.get(flag2 + `/systemUser/list/1/1000`, {})(null)
  },
  //一洽配置-根据id查看详情
  getEchatConfigDataByCompId(compId: string) {
    return request.get(flag + `/echatserver/system/config/echat/${compId}`, {})(compId)
  },
  //一洽配置-新增公司id
  addEchatConfigDataByCompId(val: any) {
    return request.post(`/extension/systemCompany`, {})(val)
  },
  //一洽配置-更新数据
  updateEchatConfigDataByCompId(val: any) {
    return request.put(flag2 + `/systemCompany`, {})(val)
  },
  //一洽配置-删除数据
  deleteEchatConfigDataByCompId(val: any) {
    return request.delete(`/extension/systemCompany`, {})(val)
  },
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
} 
