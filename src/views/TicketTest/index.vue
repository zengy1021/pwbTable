<template>
  <div class="apiTest">
    <el-button @click="goTest" type="primary">演示</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class TicketTest extends Vue {
  private title = ''
  private goTest() {
    this.$router.push('/test')
  }
  
}
</script>
<style lang="scss" scoped>
  .apiTest{
    padding: 20px;
  }
</style>
