<template>
  <div class="layout">
    <div class="z_aside">
      <Menu />
    </div>
    <div class="z_content">呢哦让</div>
  </div>
</template>
<script lang="ts">
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
// import Footer from "@/components/Footer";
export default {
  components: {
    Menu,
    Header
    // Footer
  },
  data() {
    return {
      a: 'dsa '
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .z_aside {
    width: 200px;
  }
  .z_content {
    flex: 1 1 0%;
  }
}
</style>
