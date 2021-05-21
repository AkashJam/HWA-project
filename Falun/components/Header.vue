<template>
  <div id="header">
    <ul id="navbar">
      <li><NuxtLink id="falun" class="menu" to="/">FALUN</NuxtLink></li>
      <li><NuxtLink class="menu" to="/areas">Areas</NuxtLink></li>
      <li><NuxtLink class="menu" to="/services">Services</NuxtLink></li>
      <li><NuxtLink class="menu" to="/roles">Roles</NuxtLink></li>
      <li><NuxtLink class="menu" to="/about">About us</NuxtLink></li>
      <li><NuxtLink class="menu" to="/contacts">Contact us</NuxtLink></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  height: 5rem;
  line-height: 5rem;
}
#navbar > li {
  display: block;
  align-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 200;
  font-size: 20px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 10px;
  padding-left: 10px;
  height: 100%;
}
#header {
  background-color: white;
  position: fixed;
  width: 100%;
  right: 0px;
  top: 0px;
  z-index: 200;
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
  height: auto;
  height: max-content;
}
.menu:visited {
  color: black;
}
#navbar > li:hover {
  background-color: #f3f3f3;
}
</style>
