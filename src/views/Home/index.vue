<template>
  <div class="home">{{ title }}</div>
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
