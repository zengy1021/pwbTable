<template>
  <div class="test_list">
    <h1>TypeScript-test</h1>
    <div class="msgBox">
      <div
        :class="['msgItem', item.user.id == user.id ? 'rightItem' : '']"
        :key="index"
        v-for="(item, index) in content"
      >
        <div
          class="otherMsg"
          v-if="item.type == 'msg' && item.user.id !== user.id"
        >
          <div class="name">{{ item.user.name }}：</div>
          <div class="msg">{{ item.message }}</div>
        </div>
        <div
          :class="['selfMsg']"
          v-if="item.type == 'msg' && item.user.id == user.id"
        >
          <div class="name">：{{ item.user.name }}</div>
          <div class="msg">{{ item.message }}</div>
        </div>
        <div class="tipMsg" v-if="item.type == 'tip'">
          <div>{{ item.user.name }}:{{ item.message }}</div>
        </div>
      </div>
    </div>
    <!-- <el-image :src="src | getDefaultSrc"></el-image> -->
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="msg"
      style="margin: 10px 0; width: 30%"
    >
    </el-input>
    <div>
      <el-button @click="sendMsg">发送数据</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from './api/index'
let ws: any
function createHash(hashLength: number): string {
  // 默认长度 24
  return Array.from(Array(Number(hashLength) || 24), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join('')
}
let randomId = createHash(8)
let user = {
  id: randomId,
  name: randomId
}
@Component({
  components: {},
  filters: {
    getDefaultSrc: function (val: string | null) {
      return val
        ? val
        : 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
    }
  }
})
export default class TsTestPage extends Vue {
  public msg: string = ''
  public content: any = []
  public users: [] = []
  public user: any = user
  private src: string = ''
  private created() {
    // this.initSrc()
    this.initWebsocket()
  }
  initSrc(): void {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        )
      }, 5000)
    }).then((res: any) => {
      this.src = res
    })
  }
  addTotal(num1: number = 1, num2: number = 2): number {
    return num1 + num2
  }
  initWebsocket(): void {
    let _this = this
    ws = new WebSocket('ws://192.168.66.117:3000')
    ws.onopen = function () {
      // Web Socket 已连接上，使用 send() 方法发送数据
      ws.send(JSON.stringify({ user: user, message: '连接成功', type: 'tip' }))
    }

    ws.onmessage = function (evt: any) {
      var received_msg = evt.data
      // alert('数据已接收...')
      var resData = JSON.parse(evt.data)
      console.log('接收消息', resData)
      switch (resData.type) {
        case 'tip': // 连接|关闭
        case 'msg': // 聊天内容
          _this.content.push(resData.data)
          break
        case 'users': // 当前在线人
          _this.users = resData.data
          break
      }
    }

    ws.onclose = function () {
      // 关闭 websocket
      alert('连接已关闭...')
    }
  }
  sendMsg() {
    if (this.msg) {
      ws.send(JSON.stringify({ user: user, message: this.msg, type: 'msg' }))
      this.msg = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.test_list {
  padding: 20px;
  box-sizing: border-box;
  // margin-top: 20px;
}
.msgBox {
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;
  .msgItem {
    display: flex;
    .tipMsg {
      width: 100%;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
    .otherMsg {
      display: flex;
      margin-top: 10px;
      // width: 100%;
      .name {
        width: 120px;
        color: #333;
        font-size: 16px;
        line-height: 40px;
        text-align: right;
        padding-right: 20px;
        box-sizing: border-box;
      }
      .msg {
        flex: 1 1 0%;
        max-width: 70%;
        // flex-wrap: wrap;
        background: #eee;
        padding: 0px 10px;
        line-height: 40px;
        box-sizing: border-box;
        border-radius: 6px;
        color: #999;
      }
    }
    .selfMsg {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 10px;
      // width: 100%;
      .name {
        width: 120px;
        color: #333;
        font-size: 16px;
        line-height: 40px;
        text-align: right;
        padding-right: 20px;
        box-sizing: border-box;
      }
      .msg {
        flex: 1 1 0%;
        background: #eee;
        padding: 0px 10px;
        line-height: 40px;
        box-sizing: border-box;
        border-radius: 6px;
        color: #999;
        text-align: right;
      }
    }
  }
  .rightItem {
    justify-content: flex-end;
  }
}
</style>
