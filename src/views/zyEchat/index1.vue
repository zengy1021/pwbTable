<template>
  <div class="test">
    <div class="btn_warp">
      <el-button type="success"
                 class="btn"
                 icon="el-icon-back"
                 @click="back">
        <span class="font_back">返回</span>
      </el-button>
    </div>
    <div class="rules_box">
      <div class="tab_btn">
        <el-button :type="currentTab=='5'?'success':'primary'"
                   @click="changeTab('5')">业务架构</el-button>
        <i class="line el-icon-right"></i>
        <el-button :type="currentTab=='1'?'success':'primary'"
                   @click="changeTab('1')">渠道接入</el-button>
        <i class="line el-icon-right"></i>
        <el-button :type="currentTab=='2'?'success':'primary'"
                   @click="changeTab('2')">路由匹配</el-button>
        <i class="line el-icon-right"></i>
        <el-button :type="currentTab=='3'?'success':'primary'"
                   @click="changeTab('3')">ACD智能分配</el-button>
        <i class="line el-icon-right"></i>
        <el-button :type="currentTab=='4'?'success':'primary'"
                   @click="changeTab('4')">进入服务</el-button>
      </div>
      <div class="tab_content">
        <!-- <components :is="getCurrentComp"></components> -->
        <Step1 v-if="currentTab=='1'" />
        <Step2 v-if="currentTab=='2'" />
        <Step3 v-if="currentTab=='3'" />
        <Step4 v-if="currentTab=='4'" />
        <Step5 v-if="currentTab=='5'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Step1 from './components/step1.vue'
import Step2 from './components/step2.vue'
import Step3 from './components/step3.vue'
import Step4 from './components/step4.vue'
import Step5 from './components/step5.vue'
@Component({
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
  },
})
export default class Test extends Vue {
  private currentTab: string = '5'
  private changeTab(tab: string) {
    this.currentTab = tab
  }
  private back() {
    this.$router.replace('zyEchat')
  }
  // private getCurrentComp() {
  //   return 'Step' + this.currentTab
  // }
}
</script>
<style lang="scss" scoped>
.test {
  width: 100%;
  height: 100vh;
  // padding: 20px;
  box-sizing: border-box;
  background: url(./img/banner1.jpg) center top no-repeat;
  background-size: 100%;
  background-color: #fbfbfb;
  box-shadow: inset 0px 0px 10px 0px #000;
  display: flex;
  flex-direction: column;
}
.btn_warp {
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  box-sizing: border-box;
  height: 80px;
}
.btn {
  transition: 0.5s;
  .font_back {
    display: none;
  }
  &:hover {
    .font_back {
      display: inline-block;
    }
  }
}
.rules_box {
  padding: 20px;
  box-sizing: border-box;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  .tab_btn {
    margin-left: 120px;
    height: 40px;
  }
  .tab_content {
    flex: 1 1 0%;
    padding: 20px;
    box-sizing: border-box;
    background: transparent;
  }
}
.line {
  margin: 0 15px;
}
</style>
