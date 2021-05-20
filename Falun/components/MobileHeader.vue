<template>
  <div id="header">
    <NuxtLink id="falun" class="menu" to="/">FALUN</NuxtLink>
    <NuxtLink class="menu" to="/areas">Areas</NuxtLink>
    <NuxtLink class="menu" to="/services">Services</NuxtLink>
    <NuxtLink class="menu" to="/people">People</NuxtLink>
    <NuxtLink class="menu" to="/about">About us</NuxtLink>
    <NuxtLink class="menu" to="/contacts">Contact us</NuxtLink>
    <button @click="showMobileMenu()">BURGER</button>
  </div>
</template>

<style scoped>
#header {
  background-color: white;
  position: fixed;
  width: 100%;
  right: 0px;
  top: 0px;
  display: block;
  padding: 0px;
  margin: 0px;
  height: 50px;
  line-height: 50px;
}
#falun {
  color: #0091b1;
  font-family: 'Farro';
  font-size: 200%;
  font-weight: bold;
}
.menu {
  color: black;
  text-decoration: none;
  height: inherit;
  padding-right: 1.5vw;
  padding-left: 1.5vw;
  display: block;
  align-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 200;
  font-size: 18px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}
.menu:visited {
  color: black;
}
.menu:hover {
  background-color: #f3f3f3;
}
.menu.nuxt-link-exact-active {
  background-color: #f3f3f3;
  color: black;
}
</style>
