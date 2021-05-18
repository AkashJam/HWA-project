<template>
  <div id="footer">
    <hr id="top" />
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
    <hr id="bottom" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#footer {
  width: 100%;
  height: 60px;
  background: black;
  padding: 0% 10%;
}
#navbar {
  float: left;
  width: 50%;
}
#logo {
  color: #0091b1;
  font-weight: bold;
  font-family: 'Farro';
  font-size: 150%;
}
#social {
  float: right;
  width: 50%;
  text-align: right;
}
hr {
  border-color: #0091b1;
  border-width: 0px 0px thin;
}
#top {
  padding-top: 10px;
}
#bottom {
  margin-bottom: 10px;
  width: 100%;
}
li {
  float: inherit;
  display: inline-block;
  font-size: 100%;
  height: 100% !important;
  margin: 0% 5%;
  color: white;
  display: flex;
  align-items: center;
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
