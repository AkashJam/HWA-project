<template>
  <div id="header">
    <ul id="navbar">
      <li><NuxtLink to="/roles">Roles</NuxtLink></li>
      <li>Areas</li>
      <li>Services</li>
      <li>About us</li>
      <li>Contact us</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
}
#navbar > li {
  display: inline-block;
  align-content: center;
  font-weight: 300;
  font-size: 30px;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  color: black;
}
#header {
  background-color: #75e6ff;
  position: fixed;
  width: 100%;
  right: 0px;
  top: 0px;
  align-content: center;
}
NuxtLink {
  color: black;
  text-decoration: none;
}
NuxtLink:visited {
  color: black;
}
NuxtLink:hover {
  color: white;
}
</style>
