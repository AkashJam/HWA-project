<template>
  <div>
    <div id="start">
      <div class="img" :style="{ 'background-image': `url(${data.image})` }">
        <div class="desc">
          <h2 class="name">{{ data.name }}</h2>
          <h5 class="descri">{{ data.description }}</h5>
        </div>
      </div>
      <h3 id="title">Related services</h3>
      <div class="area-grid">
        <div
          v-for="(service, serviceIndex) of services"
          :key="'service-' + serviceIndex"
          class="area"
          @click="goToService(`/services/${service.id}`)"
        >
          <CardViewArea :image="service.image" :title="service.name">
          </CardViewArea>
        </div>
      </div>
      <h3 id="title">Team</h3>
      <div class="area-grid">
        <div
          v-for="(user, userIndex) of users"
          :key="'user-' + userIndex"
          class="area"
          @click="goToUser(`/users/${user.id}`)"
        >
          <CardViewArea :image="user.image" :title="user.name"> </CardViewArea>
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
    const users = data.users
    return {
      data,
      services,
      users,
    }
  },
  methods: {
    goToService(path) {
      this.$router.push({ path })
    },
    goToUser(path) {
      this.$router.push({ path })
    },
  },
}
</script>
<style scoped>
#start {
  padding: 0vh 0vh;
}
h2 {
  font-size: xx-large;
  text-align: center;
  color: white;
}
h5 {
  font-size: x-large;
  text-align: center;
  color: white;
}
#title {
  font-size: x-large;
  text-align: center;
  color: black;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.area-grid {
  width: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1vw;
  margin-right: 15vw;
  margin-left: 15vw;
}
.area {
  width: 100%;
  height: 60vh;
  cursor: pointer;
  margin-bottom: 60px;
}
.desc {
  background-color: black;
  opacity: 0.9;
  width: 100%;
}
.img {
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 40vh;
  background-size: cover;
  background-position: center;
  display: flex;
  margin: 0;
}

/*
@media (max-width: 1000px) {
  .service {
    height: 35vh;
    width: calc(100% / 3);
    cursor: pointer;
    display: inline-block;
  }
}
@media (max-width: 1400px) {
  .service {
    width: calc(100% / 2);
  }
}
@media (max-width: 700px) {
  .service {
    width: 100%;
  }
}
*/
</style>
