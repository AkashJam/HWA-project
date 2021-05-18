<template>
  <div>
    <div id="start">
      <div class="img-sec">
        <img class="profile-pic" :src="profilePicture" />
      </div>
      <div class="info-sec">
        <ul class="user-info">
          <li>
            <h2>{{ name }}</h2>
          </li>
          <li>
            {{ userRole }}
          </li>
          <li>
            {{ emailId }}
          </li>
          <li>
            {{ bio }}
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
          <div class="card">
            <div
              class="img"
              :style="{ 'background-image': `url(${service.image})` }"
            ></div>
            <h4>{{ service.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const id = await route.params.id
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/user/${id}`)
    console.log(data)
    const name = data.name
    const bio = data.bio
    const emailId = data.emailId
    const userRole = data.userRole
    const profilePicture = data.profilePicture
    const services = data.services
    return {
      name,
      bio,
      emailId,
      userRole,
      profilePicture,
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
  margin-left: 5rem;
}
.profile-pic {
  height: 40vh;
  width: auto;
}
.img {
  width: 100%;
  height: 20vw;
  margin: auto;
  background-size: cover;
  background-position: center;
  margin: 10px 0px;
}
.info-sec {
  display: flex;
  align-items: center;
  height: 40vh;
  padding: 3rem 5rem;
}
.user-info {
  text-align: left;
  list-style-type: none;
}
.title {
  text-align: center;
}
.service-sec {
  margin: 0rem 5rem;
}
.service {
  cursor: pointer;
  margin-bottom: 20px;
}
#service-scroll {
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-gap: 10px;
}
.card {
  padding: 20px 10px;
}
li {
  padding: 1rem;
}
h4 {
  margin-bottom: 10px;
  text-align: center;
}
</style>
