<template xmlns="http://www.w3.org/1999/html">
  <div class="home">
    <div style="padding:50px 30px">
      服务器交互地址： https://apps.echatsoft.com:9443/extension/api <br>
      IP地址： 120.78.131.169 <br>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  private title = '首页'
}
</script>
