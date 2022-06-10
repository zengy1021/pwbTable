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
    return request.get(flag + `/echatserver/system/config/wechat/list`,{})(compId)
  },
  //微信配置-根据id查看详情
  getWechatConfigDataByCompId(compId:string){
    return request.get(flag + `/echatserver/system/config/wechat/${compId}`,{})(compId)
  },
  //微信配置-更新数据
  updateWechatConfigDataByCompId(val: any){
    return request.put(flag + `/echatserver/system/config/wechat`,{})(val)
  },
  // getDataList: request.get(flag + '/echatserver/reqinfo/list/{pageNum}/{pageSize}', {})
} 
