import request from '@/assets/api/request'
import qs from 'qs'
import {data} from 'browserslist';
const flag = process.env.NODE_ENV !== 'development' ? '/extension' : '/eApi'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  getEncode(param: any) {
    return request.post(flag + '/api/encodeJson', {})(param);
  },
  getDecode(param: any) {
    return request.post(flag + '/api/decodeJson', {})(param);
  },
  getAccessToken() {
    return request.get(flag + '/api/getAccessToken', {})(null);
  }
} 
