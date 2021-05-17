<template>
  <div class="container">
    <div>
      <Header />
    </div>
    <div>
      <h1 class="title">Services</h1>
      <div class="links">
        <a
          href="http://localhost:3000/services/service1"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 1
        </a>
        <a
          href="http://localhost:3000/services/services2"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 2
        </a>
        <a
          href="http://localhost:3000/services/services3"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 3
        </a>
        <a
          href="http://localhost:3000/services/services4"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 4
        </a>
        <a
          href="http://localhost:3000/services/services5"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 5
        </a>
        <a
          href="http://localhost:3000/services/services6"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 6
        </a>
        <a
          href="http://localhost:3000/services/services7"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 7
        </a>
        <a
          href="http://localhost:3000/services/services8"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 8
        </a>
        <a
          href="http://localhost:3000/services/services9"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 9
        </a>
        <a
          href="http://localhost:3000/services/services10"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 10
        </a>
        <a
          href="http://localhost:3000/services/services11"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 11
        </a>
        <a
          href="http://localhost:3000/services/services12"
          target="_blank"
          rel="noopener noreferrer"
          class="imagebox"
        >
          Service 12
        </a>
        <p>{{ services }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('http://localhost:3000/api')
    // console.log(data)
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
  display: flex;
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
</style>
