<template>
  <div id="start">
    <h2>Services</h2>
    <div class="service-grid">
      <div
        v-for="(service, serviceIndex) of services"
        :key="'service-' + serviceIndex"
        class="service"
        @click="goToService(`/services/${service.id}`)"
      >
        <CardView :image="service.image" :title="service.name"> </CardView>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/service`)
    console.log(data)
    const services = data
    return { services }
  },
  methods: {
    goToService(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
#start {
  padding-top: 15vh;
  padding-left: 1vw;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(5, calc(100% / 5));
  grid-gap: 10px;
}
.service {
  cursor: pointer;
  margin-bottom: 20px;
}
.img {
  height: 40vh !important;
}
h2 {
  text-align: center;
}
p {
  height: 60px;
  text-align: center;
}
</style>
