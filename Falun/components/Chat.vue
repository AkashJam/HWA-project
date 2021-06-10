<template>
  <div class="chat">
    <div v-if="prev" class="chat-prev">
      <div class="x" @click="prev = 0">X</div>
      <p class="prev-txt">Welcom to Falun. How can I help you?</p>
    </div>
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
    </div>
    <input
      v-if="isOpen"
      v-model="messageToSend"
      class="in-chat"
      type="text"
      placeholder="Type a message..."
      @keypress.enter="sendMessage"
    />
    <div
      class="button"
      @click="
        isOpen = !isOpen
        prev = 0
      "
    >
      <img v-if="!isOpen" src="~/assets/chatbot.svg" alt="" />
      <img v-else src="~/assets/xicon.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: false,
      prev: 1,
    }
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
      setTimeout(() => {
        const elem = document.getElementById('chat-window')
        elem.scrollTop = elem.scrollHeight
      }, 100)
    },
  },
}
</script>

<style>
.button {
  height: 60px;
  width: 60px;
  border-radius: 100%;
  padding: 10px;
  float: right;
  bottom: 0;
  right: 0;
  margin-right: 25px;
  margin-bottom: 25px;
  position: fixed;
  cursor: pointer;
  background-color: rgba(252, 252, 252);
  border: 1px solid;
  border-color: rgb(200, 200, 200, 0.5);
  z-index: 100;
}
.button img {
  width: 100%;
}
.x {
  position: fixed;
  bottom: 6px;
  right: 0px;
  margin-right: 10px;
  margin-bottom: 70px;
  z-index: 20;
  cursor: pointer;
}
.chat-prev {
  position: fixed;
  height: 100px;
  width: 200px;
  bottom: 6px;
  right: 0px;
  margin-right: 25px;
  margin-bottom: 85px;
  z-index: 20;
  background-color: rgb(252, 252, 252, 0.25);
  border: 1px solid;
  border-color: rgb(200, 200, 200, 0.25);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}
.prev-txt {
  text-align: center;
  max-height: 100px;
  max-width: 180px;
  padding: 20px;
  margin-left: 9px;
  color: black;
}
.chat-container {
  border-radius: 40px 40px 0px 0px;
  height: 40vh;
  width: 25vw;
  min-width: 200px;
  min-height: 200px;
  max-width: 400px;
  bottom: 60px;
  right: 0px;
  z-index: 20;
  background-color: rgb(252, 252, 252, 0.25);
  margin-right: 25px;
  margin-bottom: 85px;
  position: fixed;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid;
  border-color: rgb(200, 200, 200, 0.25);
}
.chat-window {
  overflow-y: scroll;
  /* height: calc(100% - 34px); */
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}
.message {
  display: flex;
  justify-content: flex-end;
}
.message.sender {
  justify-content: flex-start;
}
.message-content {
  padding: 15px 20px;
  margin: 5px 15px 5px 15px;
  width: fit-content;
  max-width: 20vw;
  min-width: 100px;
  background: rgba(200, 200, 200, 0.75);
  color: black;
  border-radius: 30px;
  text-align: right;
  font-weight: 425;
}
.message-content.sender {
  background: rgb(252, 252, 252, 0.75);
  color: black;
  text-align: left;
  min-width: 100px;
  max-width: 300px;
}
.in-chat {
  width: 25vw;
  min-width: 200px;
  max-width: 400px;
  position: fixed;
  z-index: 20;
  height: 45px;
  border: transparent;
  border-radius: 0 0 40px 40px;
  font-size: inherit;
  bottom: 0;
  right: 0;
  margin-bottom: 100px;
  margin-right: 25px;
  background-color: rgba(200, 200, 200, 0.75);
  padding-left: 35px;
  backdrop-filter: blur(10px);
  outline: none;
}
</style>
