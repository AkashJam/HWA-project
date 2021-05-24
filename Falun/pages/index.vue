<template>
  <div class="container">
    <div id="body1">
      <h1 class="title">Falun</h1>
      <h2 class="subtitle">Inspiring your future</h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <p>My name is {{ name }}</p>
      </div>
    </div>
    <div>
      <!--<Footer />-->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('http://localhost:3000/api/user/2')
    const name = data.name
    return {
      name,
    }
  },
}
</script>

<style scoped>
.container {
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#body1 {
  text-align: center;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
