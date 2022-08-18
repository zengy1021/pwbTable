<template>
  <div>
    <div class="remark">根据不同的业务场景做业务分割</div>
    <div class="remark">配置不同业务场景的样式、接待方式和接待组</div>
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
    require('../img/2/ly.jpg'),
    require('../img/2/lypz.jpg'),
    require('../img/2/jdz.jpg'),
    require('../img/2/yspz.jpg'),
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