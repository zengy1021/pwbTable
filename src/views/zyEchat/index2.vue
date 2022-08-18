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
      <el-button type="success">渠道接入</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Test extends Vue {
  private back() {
    this.$router.replace('zyEchat')
  }
  private go(type: number) {
    switch (type) {
      case 1:
        this.$router.push('Echat1')
        break
      case 2:
        this.$router.push('Echat2')
        break
    }
  }
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
}
.btn_warp {
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  box-sizing: border-box;
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
}
</style>
