<template>
  <div id="start">
    <PageDescript
      :image="'https://www.ittechglobalservices.com/images/digital-services.jpg'"
      :description="'We are equipped with an updated technical knowledge to serve our customers properly. Our method of application maintains the industry.'"
    ></PageDescript>
    <div class="service-grid">
      <div
        v-for="(service, serviceIndex) of services"
        :key="'service-' + serviceIndex"
        class="service"
        @click="goToService(`/services/${service.id}`)"
      >
        <CardViewService
          :image="service.image"
          :title="service.name"
          :linkedarea="rarea[serviceIndex]"
        >
        </CardViewService>
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
h2 {
  text-align: center;
}
</style>
