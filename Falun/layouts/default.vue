<template>
  <div id="bo">
    <Header class="header" />
    <div class="wrapper">
      <Nuxt />
    </div>
    <Footer id="foot" />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
}
.wrapper {
  min-height: 88.8vh;
  z-index: 2;
  position: relative;
  background-color: #f1fffa;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #38ac5f;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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
  background-color: #464e47;
  text-align: center;
  width: 100%;
}
</style>
