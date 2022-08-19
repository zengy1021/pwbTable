<template>
  <div>
    <div class="image_box">
      <div class="image_item"
           v-for="(item,index) in srcList"
           :key="item">
        <div class="remark">{{index==0?'目前系统报表':'可视化数据报表'}}</div>
        <el-image style="width: 100%; height: 100%"
                  :src="item"
                  fit="contain"
                  :preview-src-list="srcList">
        </el-image>
        <div class="remark"
             style="margin-top:20px;"
             v-if="index==0">{{'数据统计分析类型比较多，一眼无法看到整体关键数据分析'}}</div>
        <div class="remark"
             style="margin-top:20px;"
             v-else>{{'提供整体数据分析页面，抽取关键数据字段展示、汇总。详细统计进入具体类型数据分析页面查看'}}</div>
        <el-button v-if="index==1">
          <el-image style="width: 50px; height: 20px"
                    :src="afterImg"
                    fit="contain"
                    :preview-src-list="[afterImg]">
          </el-image>
        </el-button>
        <el-button v-if="index==1"
                   @click="openMap">
          地图功能页面
        </el-button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Step extends Vue {
  private srcList: Array<string> = [
    require('../img/6/bb.jpg'),
    require('../img/6/dsjksh.jpg'),
  ]
  private afterImg: string = require('../img/6/3dmap.jpg')
  private openMap() {
    window.open('http://sz.safewaychina.cn:23208/h5/ext/advanced/#/map')
  }
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
  margin-bottom: 30px;
}
.image_box {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 500px;
  justify-content: space-between;
  .image_item {
    width: 45%;
  }
}
</style>