<template>
  <div>
    <el-carousel style="margin-top:100px"
                 type="card"
                 trigger="click"
                 :autoplay="false"
                 height="500px">
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
  private srcList: Array<string> = [require('../img/ywjg.jpg')]
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