<template>
  <div id="bo">
    <Header class="header" />
    <div class="wrapper">
      <Nuxt />
      <chat :chat-list="list" />
    </div>
    <Footer id="foot" />
  </div>
</template>
<script>
import Chat from '~/components/Chat'
import MMCCMixin from '~/mixins/mmcc-mixin'
export default {
  components: {
    Chat,
  },
  mixins: [MMCCMixin],
  data() {
    return {
      mobile: false,
    }
  },
  updated() {
    this.handleView()
  },
  methods: {
    handleView() {
      this.mobile = window.innerWidth < 600
    },
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Roboto';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f1fffa;
  height: 100%;
  margin: 0;
  color: #353535;
}
.header {
  z-index: 3;
  background-color: #f3f3f3;
  font-family: 'Roboto';
}
.wrapper {
  min-height: 92vh;
  z-index: 2;
  position: relative;
  background-color: #f1fffa;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 0em;
  height: 0em;
}
::-webkit-scrollbar-button {
  background: #ccc;
}
::-webkit-scrollbar-track-piece {
  background: #888;
}
::-webkit-scrollbar-thumb {
  background: #eee;
}
#foot {
  display: inline-block;
  padding: 1rem;
  position: absolute;
  background-color: #464e47;
  text-align: center;
  width: 100%;
}
</style>
