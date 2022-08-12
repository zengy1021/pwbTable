<template>
  <div class="layout">
    <el-container direction="horizontal">
      <el-aside width="200px">
        <Menu class="menu" />
      </el-aside>
      <el-container class="colstyle">
        <el-header style="height: 60px">
          <Header class="header"></Header>
        </el-header>
        <el-main class="mainInfo">
          <router-view  v-if="isActiving"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'

// import Footer from "@/components/Footer";
export default {
  components: {
    Menu,
    Header
    // Footer
  },
   data(){
    return {
      isActiving:true // 刷新当前路由标识
    }
  },
    watch:{
      '$store.state.companyId':{
            handler(val){
                if(val){
                  this.isActiving = false
                  this.$nextTick(()=>{
                    this.isActiving = true
                  })
                }
            },
            immediate:false
        }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  .el-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1;
    box-sizing: border-box;
  }
  .menu {
    min-width: 200px;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .el-header {
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }
  .colstyle {
    display: flex;
    flex-direction: column;
    .main {
      flex: 1;
    }
  }
  .mainInfo {
    background: #f5f5fb;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
