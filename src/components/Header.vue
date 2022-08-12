<template>
  <div>
    <div class="headerInfo">
      <div class="title">
        <span style="color:#fff;font-size:16px;font-weight:700">companyId：</span>
          <el-select v-model="value" placeholder="请选择" @change="changeCompanyId">
          <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
      </div>
      <div class="userInfo">
        <!-- <i class="userSvg"></i> -->
        <i class="icon iconfont icon-touxiang" style="fontsize: 18px"></i>
        <span style="margin: 0 15px">彭玮标</span>
        <i class="icon iconfont icon-exit"></i>
      </div>
    </div>
  </div>
</template>
<script>
import api from './index'

export default {
  created(){
    api.getCompanyList().then(res=>{
      // console.log(res);
      this.options = res.data || []
      this.value = this.options[0].id || ''
      this.$store.dispatch('updateCompanyId',this.value)
    })
  },
  data() {
    return {
      value:'',
      options:[]
    }
  },
  methods: {
    changeCompanyId(id){
      console.log(id);
       this.$store.dispatch('updateCompanyId',id)
    }
  }
}
</script>
<style lang="scss" scoped>
.headerInfo {
  height: 100%;
  background: rgb(175, 167, 167);
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > div {
    height: 60px;
    line-height: 60px;
  }
}
.userSvg {
  display: inline-block;
  width: 16px;
  height: 16px;
  // background: url("../assets/img/1.svg") center no-repeat;
}
</style>
