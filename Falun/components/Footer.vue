<template>
  <div id="footer">
    <ul id="navbar">
      <li id="logo"><NuxtLink to="/">FALUN</NuxtLink></li>
      <li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
      <li><NuxtLink to="/contacts">CONTACT US</NuxtLink></li>
    </ul>
    <ul id="social">
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
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  height: inherit;
}
#navbar {
  float: left;
  width: 50%;
  text-align: left;
}
#logo {
  color: #1b9aaa;
  font-weight: bold;
  font-family: 'Farro';
  font-size: 150%;
}
#social {
  float: right;
  width: 50%;
  text-align: right;
}
#top {
  padding-top: 10px;
}
#bottom {
  margin-bottom: 10px;
  width: 100%;
}
li {
  font-size: 100%;
  margin: 0% 5%;
  color: white;
  align-items: center;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  word-break: keep-all;
}
a,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
.fa {
  font-size: 120%;
  padding-top: 10px;
}
</style>
