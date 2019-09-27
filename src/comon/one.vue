<template>
     <div id="example">
    <button @click="send" v-bind:disabled="disabledCondition">
      <span v-if="sendMsgDisabled" >{{time+'秒后获取'}}</span>
      <span v-if="!sendMsgDisabled">send</span>
    </button>
  </div>
</template>

<script>
export default {
     el: '#example',
    data() {
      return {
        time: 60, // 发送验证码倒计时
        sendMsgDisabled: false,
        disabledCondition:false
      }
    },
    methods: {
      send() {
        let me = this;
        me.sendMsgDisabled = true;
        me.disabledCondition = true;
        let interval = window.setInterval(function() {
          if ((me.time--) <= 0) {
            me.time = 60;
            me.sendMsgDisabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
      }
    }
}
</script>

<style lang="scss">
   button {
    width: 100px;
    height: 50px;
    background:pink;
  }
</style>