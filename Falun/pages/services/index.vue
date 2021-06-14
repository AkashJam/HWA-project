<template>
  <div id="start">
    <PageDescript
      :image="'Large-Triangles'"
      :description="'We are equipped with an updated technical knowledge to serve our customers properly. Our method of application maintains the industry.'"
      :title="'Services'"
    ></PageDescript>
    <div class="service-grid">
      <div
        v-for="(service, serviceIndex) of services"
        :key="'service-' + serviceIndex"
        class="service"
        @click="goToService(`/services/${service.id}`)"
      >
        <div id="servicename">{{ service.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/service`)
    // console.log(data)
    const services = data
    const areas = []
    services.forEach(async (service) => {
      const area = await $axios.$get(
        `${process.env.BASE_URL}/api/area/${service.area_id}`
      )
      areas.push(area.name)
    })
    const rarea = areas
    return { services, rarea }
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
  padding: 0vh 0vh;
}
.team {
  margin-top: 5vh;
  padding: 1vh;
}
#serind {
  font-weight: bold;
  font-size: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Farro';
  line-height: 1.7;
}
#servicename {
  line-height: 3;
  text-align: center;
}
body {
  padding: 1rem;
  font-family: sans-serif;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1vw;
  margin-top: 20vh;
  margin-left: 10vw;
  margin-right: 10vw;
  padding-bottom: 20vh;
}
.service {
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
  display: block;
  flex-wrap: wrap;
  margin: 0;
  font-size: 2rem;
  padding: 0;
  background-color: white;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.service:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
h2 {
  text-align: center;
}
@media (max-width: 1500px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1100px) {
  .service-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 700px) {
  .service-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3vh;
  }
  .service {
    height: inherit;
    text-align: center;
  }
  /* .desc {
    font-size: x-small;
  } */
}
</style>
