<template>
  <div id="start">
    <div class="desc">
      <h2>
        The Falun Team encompasses people from all over the world, giving it a
        truly international experience. Their work embodies the Falun life,
        providing innovative designs and making the most of your resources
      </h2>
    </div>
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
  padding: 4vh 0vh;
}
.team {
  margin-top: 5vh;
  padding: 1vh;
}
.service-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1vw;
}
.service {
  width: 100%;
  height: 40vh;
  cursor: pointer;
  margin-bottom: 20px;
}
@media (max-width: 1500px) {
  .service-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .service {
    height: 35vh;
  }
}
@media (max-width: 1100px) {
  .service-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .service {
    height: 30vh;
  }
}
@media (max-width: 700px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .service {
    height: 30vh;
  }
  /* .desc {
    font-size: x-small;
  } */
}
@media (max-height: 900px) {
  .desc {
    font-size: x-small;
  }
}
h2 {
  text-align: center;
}
.img {
  align-items: center;
  width: 100%;
  height: 40vw;
  min-height: 40vh;
  background-size: cover;
  background-position: center;
}
.desc {
  padding: 10vw;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #f1fffa;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
