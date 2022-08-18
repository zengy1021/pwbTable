<template>
  <div class="test">
    <div class="title_box">
      <div class="main_title"
           @click="go(1)">
        1.对于Echat的理解
      </div>
      <div class="main_title"
           @click="go(2)">
        2.想在Echat中做些什么?
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Test extends Vue {
  private go(type: number) {
    switch (type) {
      case 1:
        this.$router.push('AEchat1')
        break
      case 2:
        this.$router.push('BEchat2')
        break
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  width: 100%;
  height: 100vh;
  // padding: 20px;
  box-sizing: border-box;
  background: url(./img/banner1.jpg) center top no-repeat;
  background-size: 100%;
  background-color: #fbfbfb;
  box-shadow: inset 0px 0px 10px 0px #000;
  // box-shadow: 5px 10px 30px #888888 inset;
}
.title_box {
  width: 550px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 150px;
  > div {
    border-radius: 10px;
    width: 250px;
    height: 100%;
    text-align: center;
    text-transform: uppercase;
    background-size: 200% auto;
    // transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: overMove linear 1s infinite 0s alternate;
    background-image: linear-gradient(
      to right,
      #f6d365 0%,
      #fda085 51%,
      #f6d365 100%
    );
    &:hover {
      // background-position: right center;
      animation-play-state: paused;
    }
  }
}
@keyframes overMove {
  0% {
    background-position: left;
  }
  50% {
    background-position: center;
  }
  100% {
    background-position: right;
  }
}
.main_title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  cursor: pointer;
  &:last-child {
    animation: overMove linear 1s infinite 0.5s alternate;
    background-image: linear-gradient(
      to right,
      #fbc2eb 0%,
      #a6c1ee 51%,
      #fbc2eb 100%
    );
  }
}
</style>
