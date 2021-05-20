<template>
  <div>
    <div id="start">
      <div class="img-sec">
        <img class="profile-pic" :src="data.image" />
      </div>
      <div class="info-sec">
        <ul class="user-info">
          <li>
            <h2>{{ data.name }}</h2>
          </li>
          <li>
            {{ data.description }}
          </li>
        </ul>
      </div>
    </div>
    <div class="service-sec">
      <h2 class="title">Services</h2>
      <div id="service-scroll">
        <div
          v-for="(service, serviceIndex) of services"
          :key="'service-' + serviceIndex"
          class="service"
          @click="goToService(`/service/${service.id}`)"
        >
          <CardView :image="service.image" :title="service.name"> </CardView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const id = await route.params.id
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/area/${id}`)
    const services = data.services
    return {
      data,
      services,
    }
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
  margin-bottom: 2rem;
}
.img-sec {
  float: left;
  margin: 0vh 5vw;
}
.profile-pic {
  max-height: 40vh;
  width: auto;
}
.info-sec {
  display: flex;
  align-items: center;
  height: 40vh;
  padding: 3vh 5vw;
}
.user-info {
  text-align: left;
  list-style-type: none;
}
.title {
  text-align: center;
}
.service-sec {
  margin: 0vh 5vw;
}
.service {
  width: calc(100% / 3);
  cursor: pointer;
  margin-bottom: 20px;
  display: inline-block;
}
#service-scroll {
  overflow: auto;
  white-space: nowrap;
}
.card {
  padding: 20px 10px;
}
li {
  padding: 1vh;
}
h4 {
  margin-bottom: 10px;
  text-align: center;
}
.img {
  width: 100%;
  height: 20vw;
  margin: auto;
  background-size: cover;
  background-position: center;
  margin: 10px 0px;
}
</style>
