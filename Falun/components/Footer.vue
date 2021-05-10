<template>
  <div id="footer">
    <ul id="navbar">
      <hr />
      <li id="logo"><NuxtLink to="/">FALUN</NuxtLink></li>
      <li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
      <li><NuxtLink to="/contacts">CONTACT US</NuxtLink></li>
      <li id="gap"></li>
      <li>
        <a href="https://www.facebook.com">
          <i class="fa fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com"><i class="fa fa-twitter"></i> </a>
      </li>
      <li>
        <a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i> </a>
      </li>
      <li>
        <a href="https://www.instagram.com"><i class="fa fa-instagram"></i> </a>
      </li>
      <li>
        <a href="https://www.youtube.com"
          ><i class="fa fa-youtube-play"></i>
        </a>
      </li>
      <hr />
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#footer {
  position: fixed;
  width: 100%;
  right: 0px;
  bottom: 0px;
  background: black;
}
#navbar {
  position: relative;
  top: 25%;
}
#logo {
  color: #0091b1;
  font-weight: bold;
  font-family: 'Farro';
  font-size: 150%;
}
hr {
  border-color: #0091b1;
  border-width: 0px 0px thin;
}
li {
  display: inline-block;
  font-size: 100%;
  margin: 0% 2%;
  color: white;
}
a,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
ul {
  margin: 0%;
  padding-left: 10%;
  padding-right: 10%;
}
#gap {
  margin: 0% 22%;
}
</style>
