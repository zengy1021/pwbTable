<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/Layout.vue'
export default Vue.extend({
  components: {
    Layout
  }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
