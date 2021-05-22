<template>
  <div>
    <Header />
    <div class="wrapper">
      <Nuxt />
    </div>
    <Footer />
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
  background-color: #75e6ff;
  height: 100%;
  margin: 0;
}
.wrapper {
  min-height: calc(100vh - 60px);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.imagebox {
  display: inline-block;
  width: 373px;
  height: 449px;
  background: hsl(0, 0%, 90%);
  padding: 200px 150px;
  margin: 30px;
}

.imagebox:hover {
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
</style>
