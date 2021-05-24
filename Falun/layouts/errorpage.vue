<template>
  <div id="falun" class="error">
    Oops! something went wrong:<br />
    <NuxtLink id="home" to="/">Go to Home page</NuxtLink>
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
  background-color: #f8f4dd;
  height: 100%;
  margin: 0;
}
.error {
  text-align: center;
  padding: 20%;
  color: black;
  font-family: 'Farro';
  font-size: 200%;
  font-weight: bold;
}
#home {
  display: inline-block;
  border-radius: 4px;
  border: 3px solid black;
  color: black;
  text-decoration: none;
  padding: 10px 30px;
}
#home:visited {
  color: black;
}
#home:hover {
  color: #fff;
  background-color: black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
