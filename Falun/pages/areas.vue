<template>
  <div class="container">
    <div>
      <Header />
    </div>
    <div>
      <h1 class="title">Areas</h1>
      <div>
        <ul v-for="area in areas" :key="area.id">
          <li id="card">{{ area.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('http://localhost:3000/api/areas')
    // console.log(areas)
    // const name = data.name
    const areas = data
    return {
      areas,
    }
  },
}
</script>

<style scoped>
.container {
  padding-top: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: normal;
  font-size: 64px;
  color: #000000;
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
ul {
  display: inline-block;
  width: 373px;
  height: 449px;
  background: hsl(0, 0%, 90%);
  margin: 30px;
  list-style: none;
}
ul:hover {
  color: #fff;
  background-color: #3b8070;
}

li {
  text-decoration: none;
}
</style>
