import request from '@/assets/api/request'
import qs from 'qs'
const flag = process.env.NODE_ENV !== 'development' ? '/api' : ''
let paramsSerializer = function (p: any) {
  return qs.stringify(p, { arrayFormat: 'repeat' })
}
export default {
  // 清空日志
  testRequest(){
    return request.get('/extension/api/ticketTest', {})({})
  }
} 
