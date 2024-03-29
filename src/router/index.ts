import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home/index.vue'),
  },
  { // 服务器交互数据
    path: '/adminList',
    name: 'AdminList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AdminList/index.vue'),
  },
  { // 枚举配置页面
    path: '/enumList',
    name: 'EnumList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/EnumList/index.vue'),
  },
  { // 表格表头维护页面
    path: '/tableHeaderList',
    name: 'TableHeaderList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TableHeaderList/index.vue'),
  },
  { // 页面使用枚举配置页面
    path: '/moduleEnumList',
    name: 'ModuleEnumList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ModuleEnumList/index.vue'),
  },
  { // 数据展示
    path: '/datalist',
    name: 'DataList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/DataList/index.vue'),
  },
  { // 数据日志
    path: '/logData',
    name: 'logData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/logData/index.vue'),
  },
  { // 公司状态
    path: '/companyStatus',
    name: 'companyStatus',
    component: () => import(/* webpackChunkName: "about" */ '@/views/status/companyStatus/index.vue'),
  },
  { // 路由状态
    path: '/routeStatus',
    name: 'routeStatus',
    component: () => import(/* webpackChunkName: "about" */ '@/views/status/routeStatus/index.vue'),
  },
  { // 接待组状态
    path: '/skillStatus',
    name: 'skillStatus',
    component: () => import(/* webpackChunkName: "about" */ '@/views/status/skillStatus/index.vue'),
  },
  { // 客服状态
    path: '/staffStatus',
    name: 'staffStatus',
    component: () => import(/* webpackChunkName: "about" */ '@/views/status/staffStatus/index.vue'),
  },
  { // 对话数据
    path: '/chatData',
    name: 'chatData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/chatData/index.vue'),
  },
  { // 浏览数据
    path: '/trackData',
    name: 'trackData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/trackData/index.vue'),
  },
  { // 工单数据
    path: '/ticketData',
    name: 'ticketData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ticketData/index.vue'),
  },
  { // 工单数据
    path: '/crmData',
    name: 'crmData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/crmData/index.vue'),
  },
  { // 数据展示
    path: '/messageList',
    name: 'MessageList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MessageList/index.vue'),
  },
  { // 一洽配置
    path: '/echatConfig',
    name: 'EchatConfig',
    component: () => import(/* webpackChunkName: "about" */ '@/views/EchatConfig/index.vue'),
  },
  { // 一洽配置
    path: '/systemUser',
    name: 'systemUser',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SystemUser/index.vue'),
  },

  //  =========业务应用===========
  { // vika-weixin公司配置
    path: '/vikaConfig',
    name: 'vikaConfig',
    component: () => import(/* webpackChunkName: "about" */ '@/views/VikaWeixin/Config/index.vue'),
  },
  { // vika-weixin用户
    path: '/vikaUser',
    name: 'vikaUser',
    component: () => import(/* webpackChunkName: "about" */ '@/views/VikaWeixin/User/index.vue'),
  },

  //  =========工具===========
  { // 加解密工具
    path: '/AESCoding',
    name: 'AESCoding',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AESCode/index.vue'),
  },
  { // 微信配置
    path: '/wechatConfig',
    name: 'WechatConfig',
    component: () => import(/* webpackChunkName: "about" */ '@/views/WechatConfig/index.vue'),
  },
  { // 工具
    path: '/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Tools/index.vue'),
  },
  { // ts联系页面
    path: '/tsTestPage',
    name: 'TsTestPage',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TsTestPage/index.vue'),
  },
  { // 接口演示页面
    path: '/ticketTest',
    name: 'TicketTest',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TicketTest/index.vue'),
  },
  { // 接口演示页面
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Test/index.vue'),
  },
  { // 
    path: '/zyEchat',
    name: 'ZyEchat',
    component: () => import(/* webpackChunkName: "about" */ '@/views/zyEchat/index.vue'),
  },
  { // 
    path: '/AEchat1',
    name: 'AEchat1',
    component: () => import(/* webpackChunkName: "about" */ '@/views/zyEchat/index1.vue'),
  },
  { // 
    path: '/BEchat2',
    name: 'BEchat2',
    component: () => import(/* webpackChunkName: "about" */ '@/views/zyEchat/index2.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
