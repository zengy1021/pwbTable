<template>
  <div>
    <div class="qudao"></div>
    <div class="remark">解决问题：将不同渠道的客服系统集成，提高客服处理效率。</div>
    <el-carousel style="margin-top:100px"
                 type="card"
                 :autoplay="false"
                 trigger="click"
                 height="300px">
      <el-carousel-item v-for="item in srcList"
                        :key="item">
        <el-image style="width: 100%; height: 100%"
                  :src="item"
                  fit="contain"
                  :preview-src-list="srcList">
        </el-image>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Step extends Vue {
  private srcList: Array<string> = [
    require('../img/1/pc.jpg'),
    require('../img/1/mb.jpg'),
    require('../img/1/wx.jpg'),
    require('../img/1/dd.jpg'),
  ]
}
</script>

<style lang="scss" scoped>
.qudao {
  height: 120px;
  width: 100%;
  padding-left: 120px;
  background: url(../img/1/qd.jpg) center center no-repeat;
}
.remark {
  font-size: 18px;
  font-weight: 700;
  color: #f76d2b;
  text-align: center;
}
</style>