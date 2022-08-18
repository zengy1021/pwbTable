<template>
  <div>
    <div class="remark">根据ADC智能分配规则，将访客灵活分配给客服</div>
    <div class="remark">对话自动分配、留言自动分配、工单自动分配</div>
    <el-carousel style="margin-top:100px"
                 type="card"
                 trigger="click"
                 :autoplay="false"
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
    <div class="remark">在对话智能分配中，组内设置分配规则优先级最高，若组内未设置高级规则采用全局分配规则</div>
    <!-- <div class="remark">根据ADC智能分配规则,将访客灵活分配给客服</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Step extends Vue {
  private srcList: Array<string> = [
    require('../img/3/znfp.jpg'),
    require('../img/3/gjfp.jpg'),
    require('../img/3/lyfp.jpg'),
    require('../img/3/gdfp.jpg'),
  ]
}
</script>

<style lang="scss" scoped>
.remark {
  font-size: 18px;
  font-weight: 700;
  color: #f76d2b;
  text-align: center;
  margin-top: 15px;
  &:first-child {
    margin-top: 0;
  }
}
</style>