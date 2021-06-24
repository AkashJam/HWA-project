<template>
  <ol vocab="http://schema.org/" typeof="BreadcrumbList">
    <li
      v-for="(crumb, index) of breadcrumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{ crumb.title }}</span>
      </NLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
const titleCase = require('ap-style-title-case')
export default {
  // props: {
  //   title: {
  //     type: String,
  //     default: null,
  //   },
  // },
  // async asyncData({ $route, $axios }) {
  //   const fullPath = $route.fullPath
  //   let data = []
  //   if (isNaN(parseInt(fullPath))) {
  //     data = await $axios.get(`${process.env.BASE_URL}/api${fullPath}}`)
  //   }
  //   console.log(data)
  //   return { data }
  // },
  computed: {
    breadcrumbs() {
      // const paths = this.$store.state.crumbs
      // console.log(paths)
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })

      // console.log(isNaN(parseInt(fullPath)))
      // console.log(this.data)
      // if (this.data !== []) {
      //   crumbs[crumbs.length - 1].title = this.data.name
      // }
      // console.log(crumbs[1].title)
      // try {
      //   const { data } = await $axios.get(
      //     `${process.env.BASE_URL}${this.crumbs[this.crumbs.length - 1].path}`
      //   )
      //   console.log(data)
      //   // const newpath = crumbs[crumbs.length - 1].path.split('/')
      //   // // console.log(newpath)
      //   this.crumbs[this.crumbs.length - 1].title = data.name
      //   console.log(this.crumbs[this.crumbs.length - 1].title)
      //   // }`
      // } catch (error) {}
      return crumbs
    },
  },
}
</script>
<style scoped>
ol {
  list-style: none;
  height: 50px;
  line-height: 50px;
  background-color: #f3f3f3;
  margin-left: 13vw;
  padding-left: 14px;
  text-decoration: none;
}
li {
  display: inline;
  text-decoration: none;
  color: grey;
}
li:after {
  content: ' » ';
  display: inline;
  font-size: 0.9em;
  color: #aaa;
  padding: 0 0.0725em 0 0.15em;
}
li:last-child:after {
  content: '';
}
li a {
  color: grey;
}
li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}
</style>
