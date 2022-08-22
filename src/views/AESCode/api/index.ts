import request from '@/assets/api/request'
import qs from 'qs'
import {data} from 'browserslist';
const flag = process.env.NODE_ENV !== 'development' ? '/api' : '/api'
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  getDecode(param: any) {
    return request.post('/extension/api/encodeJson', {})(param);
  },
  getAccessToken() {
    return request.get('/extension/api/getAccessToken', {})(null);
  }
} 
