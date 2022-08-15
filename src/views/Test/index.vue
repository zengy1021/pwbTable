<template>
  <div class="test" @click="testRequest">
    <!-- <el-button  @click="testRequest">1</el-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api/index'

@Component({
  components: {}
})
export default class Test extends Vue {
  private async testRequest(){
  let res:any =await api.testRequest()
   if(res.code==200){
    this.$message({
        message: "创建成功",
        type: 'success'
      });
    }else{
        this.$message({
          message: JSON.parse(res.data),
          type: 'error'
        });
    }
    
  }
}
</script>
<style lang="scss" scoped>
  .test{
    width: 100%;
    height: 100vh;
    background: url(./img/testImg.png) center top no-repeat;
    background-size: 100%;
  }
</style>
