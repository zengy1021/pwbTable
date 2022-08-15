<template>
  <div class="menuBox">
    <div class="logo">
      <el-avatar shape="square" size="large" :src="logoImg"></el-avatar>
      <!-- <span class="name">彭玮标</span> -->
    </div>
    <el-menu
      background-color="#fff"
      text-color="#a8a8b8"
      active-text-color="#2a2a2a"
      :default-active="activeMenu"
    >
      <el-menu-item
        v-for="(item, index) in menuList"
        :index="index + ''"
        :key="item.path"
        @click="gotoMenu(item)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '首页',
          path: '/home',
          icon: 'el-icon-s-home'
        },
        {
          title: '公司配置',
          path: '/echatConfig',
          icon: 'el-icon-s-platform'
        },
        // {
        //   title: 'pwb数据表格',
        //   path: '/adminList',
        //   icon: 'el-icon-smoking'
        // },

        // {
        //   title: '枚举配置',
        //   path: '/enumList',
        //   icon: 'el-icon-menu'
        // },
        // {
        //   title: '表头配置',
        //   path: '/tableHeaderList',
        //   icon: 'el-icon-menu'
        // },
        // {
        //   title: '模块配置',
        //   path: '/moduleEnumList',
        //   icon: 'el-icon-menu'
        // },
        // {
        //   title: '数据日志',
        //   path: '/dataList',
        //   icon: 'el-icon-s-order'
        // },
        {
          title: '数据日志',
          path: '/logData',
          icon: 'el-icon-s-order'
        },
        {
          title: '公司状态',
          path: '/companyStatus',
          icon: 'el-icon-s-order'
        },
        {
          title: '路由状态',
          path: '/routeStatus',
          icon: 'el-icon-s-order'
        },
        {
          title: '接待组状态',
          path: '/skillStatus',
          icon: 'el-icon-s-order'
        },
        {
          title: '客服状态',
          path: '/staffStatus',
          icon: 'el-icon-s-order'
        },
        {
          title: '对话数据',
          path: '/chatData',
          icon: 'el-icon-s-order'
        },
        {
          title: '浏览数据',
          path: '/trackData',
          icon: 'el-icon-s-order'
        },
        {
          title: '工单数据',
          path: '/ticketData',
          icon: 'el-icon-s-order'
        },
        {
          title: '客户数据',
          path: '/crmData',
          icon: 'el-icon-s-order'
        },
        // {
        //   title: '消息测试',
        //   path: '/messageList',
        //   icon: 'el-icon-toilet-paper'
        // },
        // {
        //   title: '微信配置',
        //   path: '/wechatConfig',
        //   icon: 'el-icon-s-platform'
        // },
        {
          title: '加解密工具',
          path: '/AESCoding',
          icon: 'el-icon-s-platform'
        },
        // {
        //   title: '工具',
        //   path: '/tools',
        //   icon: 'el-icon-s-platform'
        // }

        // {
        //   title: '娱乐',
        //   path: '/randomSize',
        //   icon: 'el-icon-s-promotion'
        // }
        {
          title: '演示页面',
          path: '/ticketTest',
          icon: 'el-icon-s-platform'
        },
      ],
      logoImg: 'https://demo.echatsoft.com/mg/images/rainbowred.gif'
    }
  },
  computed: {
    activeMenu() {
      return (
        this.menuList.findIndex((item) => item.path === this.$route.path) + ''
      )
    }
  },
  methods: {
    gotoMenu(item) {
      // console.log(item);
      this.$router.push({ path: item.path })
    }
  }
}
</script>
<style lang="scss" scoped>
.menuBox {
  background: #fff;
  height: 100%;
}
.el-menu {
  border: 0;
  .el-menu-item:focus,
  .el-menu-item:hover {
    background: #fff !important;
  }
  .el-menu-item {
    font-weight: 700;
  }
  .el-menu-item i {
    color: #a8a8b8;
  }
  .el-menu-item.is-active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 3px;
      height: 18px;
      background: #61cad7;
      right: 3px;
      top: 5px;
      bottom: 0;
      margin: auto;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
  }
  .el-menu-item.is-active i {
    color: #61cad7;
  }
}
::v-deep.logo {
  text-align: left;
  height: 100px;
  // border-bottom: 1px solid #666;
  line-height: 100px;
  color: #212123;
  font-weight: 700;
  .el-avatar {
    // margin-left: 50px;
    // text-align: center;
    margin: auto;
    width: 100%;
    background: transparent;
    vertical-align: middle;
    img {
      margin: auto !important;
      // text-align: center;
    }
  }
  // .name {
  //   display: inline-block;
  //   vertical-align: middle;
  //   margin-left: 10px;
  //   height: 40x;
  //   line-height: 40px;
  // }
}
</style>
