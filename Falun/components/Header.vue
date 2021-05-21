<template>
  <div id="header">
    <NuxtLink id="falun" class="menu" to="/">FALUN</NuxtLink>
    <a class="btn" @click="show = !show"><i class="fa fa-bars fa-2x"></i></a>
    <div id="nav">
      <NuxtLink class="menu" to="/areas">Areas</NuxtLink>
      <NuxtLink class="menu" to="/services">Services</NuxtLink>
      <NuxtLink class="menu" to="/people">People</NuxtLink>
      <NuxtLink class="menu" to="/about">About us</NuxtLink>
      <NuxtLink class="menu" to="/contacts">Contact us</NuxtLink>
    </div>
  </div>
</template>
<style scoped>
#header {
  background-color: white;
  position: fixed;
  width: 100%;
  right: 0px;
  top: 0px;
  display: flex;
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
#falun.nuxt-link-exact-active {
  background-color: white;
}
.btn {
  display: none;
}
#nav {
  display: inherit;
}
/*@media (max-width: 600px) {
  #header {
    display: block;
  }
  #nav > * {
    background-color: white;
  }
  .btn {
    display: flex;
    float: right;
    margin-top: -50px;
    align-content: center;
    height: 50px;
    width: 50px;
  }
  i {
    height: 50px;
    width: 50px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
  }
}*/
</style>
