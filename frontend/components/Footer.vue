<template>
  <div id="footer">
    <hr />
    <ul id="navbar">
      <li id="logo">FALUN</li>
      <li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
      <li><NuxtLink to="/contacts">CONTACT US</NuxtLink></li>
      <li>
        <a href="https://www.facebook.com">
          <i class="fa fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href to="https://www.twitter.com"><i class="fa fa-twitter"></i> </a>
      </li>
      <li>
        <a href to="https://www.linkedin.com"
          ><i class="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href to="https://www.instagram.com"
          ><i class="fa fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href to="https://www.youtube.com"><i class="fa fa-youtube"></i> </a>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#footer {
  position: fixed;
  width: 100%;
  height: 10%;
  right: 0px;
  bottom: 0px;
  align-content: center;
  background: black;
}
#logo {
  color: teal !important;
  font-weight: bolder !important;
  font-size: 150% !important;
}
hr {
  border-color: teal;
  border-width: 0px 0px thick;
  margin: auto;
  padding-top: 0.35%;
}
li {
  display: inline-block;
  font-size: 100% !important;
  position: relative;
  left: 0%;
}
.fa {
  position: relative;
  right: 10%;
  color: white !important;
}
</style>
