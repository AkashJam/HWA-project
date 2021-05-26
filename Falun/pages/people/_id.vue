<template>
  <div>
    <div id="start">
      <div class="img-sec">
        <div
          class="profile-pic"
          :style="{ 'background-image': `url(${data.profilePicture})` }"
        ></div>
      </div>
      <div class="info-sec">
        <ul class="user-info">
          <li>
            <h2 class="name">{{ data.name }}</h2>
          </li>
          <li class="role">
            {{ data.userRole }}
          </li>
          <li>
            {{ data.emailId }}
          </li>
          <li class="bio">
            {{ data.bio }}
          </li>
        </ul>
      </div>
      <div class="service-sec">
        <h2 id="title">Services</h2>
        <div id="service-scroll">
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
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const id = await route.params.id
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/user/${id}`)
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
  padding: 10vh 0vh;
}
.img-sec {
  float: left;
  margin: 3vh 5vw;
  padding-top: 10px;
}
.profile-pic {
  height: 50vh;
  width: 45vh;
  background-size: cover;
  background-position: center;
}
.info-sec {
  align-items: center;
  display: flex;
  height: 50vh;
  margin: 5vh 5vw;
}
.user-info {
  text-align: left;
  list-style-type: none;
  padding: 5vh 5vw;
}
@media (max-width: 1000px) {
  .img-sec {
    float: none;
    text-align: center;
  }
  .profile-pic {
    width: inherit;
    max-width: 50vh;
    margin: auto;
  }
  .info-sec {
    flex: none;
    align-items: initial;
    height: auto;
  }
}
.service-sec {
  margin: 5vh 5vw;
  padding: 1vh;
  height: 45vh;
  background-color: #ccfccb;
}
.service {
  height: 35vh;
  width: calc(100% / 3);
  cursor: pointer;
  display: inline-block;
}
#service-scroll {
  height: 40vh;
  overflow: auto;
  white-space: nowrap;
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
.bio {
  padding-top: 2vh;
  font-style: italic;
}
.role {
  padding-bottom: 2vh;
}
.name {
  font-size: xx-large;
  padding-bottom: 20px;
}
#title {
  text-align: center;
}
</style>
