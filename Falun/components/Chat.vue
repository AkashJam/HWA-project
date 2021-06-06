<template>
  <div class="chat">
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
      <input
        v-if="isOpen"
        v-model="messageToSend"
        type="text"
        placeholder="Type a message..."
        @keypress.enter="sendMessage"
      />
    </div>
    <div class="button" @click="isOpen = !isOpen">
      <img src="~/assets/chatbot.svg" alt="" />
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
  background-color: rgba(252, 252, 252, 0.75);
  border: 1px solid;
  border-color: rgb(200, 200, 200, 0.5);
}
.button img {
  width: 100%;
}
.chat-container {
  border-radius: 40px;
  height: 40vh;
  width: 25vw;
  min-width: 200px;
  min-height: 200px;
  bottom: 60px;
  right: 0px;
  z-index: 200;
  background-color: rgb(252, 252, 252, 0.25);
  margin-right: 25px;
  margin-bottom: 40px;
  position: fixed;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid;
  border-color: rgb(200, 200, 200, 0.25);
}
.chat-window {
  overflow-y: scroll;
  /* height: calc(100% - 34px); */
  height: 22.1em; /* 88.7%; */
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
}
input {
  width: 25vw;
  min-width: 200px;
  position: fixed;
  z-index: 20;
  height: 45px;
  border: transparent;
  border-radius: 0 0 40px 40px;
  font-size: inherit;
  /* bottom: 60px; */
  right: 0;
  /* margin-bottom: 40px; */
  /* margin-right: 25px; */
  background-color: rgba(200, 200, 200, 0.75);
  padding-left: 35px;
}
</style>
