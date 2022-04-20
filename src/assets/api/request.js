// 基础的ajax 封装
import axios from 'axios'
import qs from 'qs'
// import store from '@/store.js'
import { Message } from 'element-ui'
// import {
//   proxyKey
// } from '@/const'

const codeMessage = {
  400: '客户端请求错误',
  401: '未认证',
  403: '禁止访问，请登录',
  404: '请求失败，未找到',
  405: '请求方法不允许',
  415: '请求的媒体类型有误',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务器暂时过载或维护',
  504: '网关超时'
}

// const locales = {
//   en: 'en-US',
//   zh: 'zh-CN'
// }
// const getLocale = () => {
//   const locale = localStorage.getItem('locale')
//   // 加en-US默认选项是防止用户浏览器首选语言设置为系统不支持的语言，比如德语之类的
//   return locales[locale] || 'en-US'
// }

// const baseUrl = process.env.NODE_ENV === 'production' ? `${proxyKey}/api` : '/api'
// const localUrl = !(process.env.NODE_ENV === 'production')
let requestFlag = false
// 是否可以请求标识   true：阻止所有请求   false：允许请求
const http = (url, method, options = {}) => {
  const _baseUrl = ''
  return (data, paramsSerializer) => {
    let params = data
    // 数据处理
    const headers = options.headers || {
      contentType: 'application/json'
    }
    // const ignoreMessage = options.ignoreMessage
    const { contentType } = headers
    if (contentType === 'application/x-www-form-urlencoded') {
      // data = qs.stringify(data)
    }
    if (contentType === 'application/json') {
      // debugger
      // params = qs.stringify(data)
    }

    // headers = Object.assign({
    //   'Accept-Language': getLocale()
    // }, headers)
    return new Promise((resolve, reject) => {
      axios({
        url: _baseUrl + url,
        method: method,
        data: method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' || method.toUpperCase() === 'DELETE' ? data : null,
        params: method.toUpperCase() === 'GET' ? params : null,
        headers,
        crossOrigin: true,
        withCredentials: true,
        paramsSerializer: paramsSerializer || null
      })
        .then(response => {
          const res = response.data
          const code = response.status
          if (res.errorCode == 200) {
            requestFlag = false
            resolve(res)
          } else {
            // if (res.error === 'E10017' && requestFlag === false) {
            //   // window.location.href = '' 返回安全眼登录页面 上线需要修改跳转地址
            //   requestFlag = true
            //   const openUrl = process.env.NODE_ENV !== 'development' ? window.location.origin : `${window.location.protocol}//${window.location.hostname}`
            //   let url = localStorage.accessUrl || openUrl
            //   Message.warning(res.message)
            //   window.open(url)
            //   return Promise.reject(res.message)
            // }
            Message.warning(res.message)
            return Promise.reject(res.message)
          }
        })
        .catch(err => {
          const response = err.response || {}
          const resData = response.data || {}
          const errors = resData.errors || []
          const errorText =
            (errors[0] && errors[0].defaultMessage) ||
            codeMessage[response.status] ||
            err.message ||
            err.msg ||
            response.statusText ||
            ''
          // Message.error(errorText)
          reject(err)
        })
    })
  }
}

const httpGet = (url, options) => {
  return http(url, 'get', options)
}

const httpPost = (url, options) => {
  return http(url, 'post', options)
}

const httpPut = (url, options) => {
  return http(url, 'put', options)
}

const httpDelete = (url, options) => {
  return http(url, 'delete', options)
}

export default {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  delete: httpDelete
}
