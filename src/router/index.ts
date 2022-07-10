import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
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
  { // 数据展示
    path: '/logData',
    name: 'logData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/logData/index.vue'),
  },
  { // 对话数据
    path: '/chatData',
    name: 'chatData',
    component: () => import(/* webpackChunkName: "about" */ '@/views/chatData/index.vue'),
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
