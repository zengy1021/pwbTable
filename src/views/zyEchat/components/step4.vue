<template>
  <div>
    <div class="remark">经过不同的路由筛选以及ACD智能分配规则，客服可以开始服务访客，访客留言或者发布工单</div>
    <div class="remark"></div>
    <el-carousel style="margin-top:100px"
                 type="card"
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Step extends Vue {
  private srcList: Array<string> = [
    require('../img/4/jqr.jpg'),
    require('../img/4/pc.png'),
    require('../img/4/mb.png'),
    require('../img/4/ly.jpg'),
    require('../img/4/bd.jpg'),
    require('../img/4/gd.jpg'),
    require('../img/4/fwxx.png'),
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