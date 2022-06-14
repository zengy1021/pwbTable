import request from '@/assets/api/request'
import qs from 'qs'
import {data} from 'browserslist';
const flag = process.env.NODE_ENV !== 'development' ? '/api' : '/api'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  //微信配置-查询所有数据
  getWechatConfigDataList(compId:string){
    return request.get(flag + `/echatserver/system/config/echat/list`,{})(compId)
  },
  //微信配置-根据公司id查看详情
  getWechatConfigDataByCompId(compId:string){
    return request.get(flag + `/echatserver/system/config/wechat/compId/${compId}`,{})(compId)
  },
  //微信配置-根据id查看详情
  getWechatConfigDataById(id:string){
    return request.get(flag + `/echatserver/system/config/wechat/${id}`,{})(id)
  },
  //微信配置-添加应用
  addWechatConfig(val: any){
    return request.post(flag + `/echatserver/system/config/wechat`,{})(val)
  },
  //微信配置-更新数据
  updateWechatConfigDataByCompId(val: any){
    return request.put(flag + `/echatserver/system/config/wechat`,{})(val)
  },
  //微信配置-删除数据
  deleteWechatConfigById(val: any) {
    return request.delete(flag + `/echatserver/system/config/wechat`,{})(val)
  }
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
} 
