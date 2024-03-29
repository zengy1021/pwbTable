import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/extension' : '/eApi'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {

  // 获取已配置的员工列表
  getUserRels(){
    return request.get(flag + '/weixin/users/rel', {})(null)
  },

  // 刷新员工数据
  getUserRelsFlash() {
    return request.get( flag + '/weixin/users/rel/flash', {})(null)
  } ,


  syncUserRel(){
    return request.get(flag + '/weixin/sync/users', {})(null)
  },

  // 挨个同步
  syncDataByWeixinUserId(param: any) {
    return request.get(flag + `/weixin/syncData/${param}`, {})(param)
  },

  // 企微-vika表配置
  getWeixinCompanyInfo() {
    return request.get(flag + `/weixin/companyInfo`, {})(null)
  },


}
