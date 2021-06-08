<template>
  <div id="header">
    <div id="headerdesk">
      <NuxtLink id="falun" class="menu" to="/">FALUN</NuxtLink>
      <NuxtLink class="menu" to="/areas">Areas</NuxtLink>
      <NuxtLink class="menu" to="/services">Services</NuxtLink>
      <NuxtLink class="menu" to="/people">People</NuxtLink>
      <NuxtLink class="menu" to="/about">About us</NuxtLink>
      <NuxtLink class="menu" to="/contacts">Contact us</NuxtLink>
    </div>
    <Breadcrumbs v-show="$route.path != `/`" id="bc" />
    <div id="headermobile">
      <NuxtLink id="falun" class="menu" to="/">FALUN</NuxtLink>
      <a class="btn" @click="show = !show"><i class="fa fa-bars fa-2x"></i></a>
      <div
        id="nav1"
        :style="{ display: show ? 'block' : 'none' }"
        @click="toggle()"
      >
        <NuxtLink class="menumobile" to="/areas">Areas</NuxtLink>
        <NuxtLink class="menumobile" to="/services">Services</NuxtLink>
        <NuxtLink class="menumobile" to="/people">People</NuxtLink>
        <NuxtLink class="menumobile" to="/about">About us</NuxtLink>
        <NuxtLink class="menumobile" to="/contacts">Contact us</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showb: true,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>
<style scoped>
/* header of desktop standard */
#bc {
  position: relative;
  margin-top: 49px;
}
#headerdesk {
  position: fixed;
  width: 100%;
  right: 0px;
  top: -1px;
  display: flex;
  padding: 0px;
  margin: 0px;
  height: 50px;
  line-height: 50px;
  background-color: white;
  z-index: 3;
}
#falun {
  color: #1b9aaa;
  font-family: 'Farro';
  font-size: 200%;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
}
.menu {
  color: black;
  text-decoration: none;
  height: inherit;
  padding-right: 7px;
  padding-left: 7px;
  display: inline-block;
  align-content: center;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 200;
  font-size: 18px;
  word-break: keep-all;
  width: 13vw;
  min-width: max-content;
}
.menu:visited {
  color: black;
}
.menu:hover {
  background-color: #f3f3f3c9;
}

.menumobile {
  color: black;
  text-decoration: none;
  padding-left: 1.5vw;
  display: inherit;
  align-content: center;
  font-size: 18px;
  height: 100%;
  padding-top: 2vw;
  padding-bottom: 2vw;
}
a.nuxt-link-exact-active.nuxt-link-active {
  background-color: #f3f3f3;
}
.menumobile:visited {
  color: black;
}
.menumobile:hover {
  background-color: #f3f3f3;
}
/*
#falun.nuxt-link-exact-active {
  background-color: white;
}
*/
#nav1 {
  display: none;
}
/* mobile header */
#headermobile {
  position: fixed;
  width: 100%;
  right: 0px;
  top: 0px;
  padding: 0px;
  margin: 0px;
  z-index: 3;
  background-color: #ffffff;
}
/* don't show the mobile button*/
.btn {
  display: none;
}
@media (max-width: 600px) {
  /*hide desktop header*/
  #headerdesk {
    display: none;
  }
  /*show mobile header*/
  #headermobile {
    display: inline-block;
  }
  #nav1 {
    background-color: white;
  }
  /* property of button*/
  .btn {
    display: flex;
    float: right;
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
}
@media (min-width: 600px) {
  #headermobile {
    display: none;
  }
}
</style>
