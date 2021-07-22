<template>
  <div id="start">
    <div class="img" :style="{ background: `url(${services.image})` }">
      <div class="desc">
        <!-- Block with a brief explanation of the service offered and a bg image relative to that-->
        <h2 class="name">{{ services.name }}</h2>
        <h5>{{ services.description }}</h5>
        <div>
          <NuxtLink id="arealink" to="/areas">
            Go to parent Area: {{ area.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
    <div id="philo">
      <h6 class="descri">{{ services.content }}</h6>
    </div>
    <div class="user-sec">
      <h3 class="title">Team {{ services.name }}</h3>
      <div id="user-scroll">
        <div
          v-for="(user, userIndex) of users"
          :key="'user-' + userIndex"
          class="users"
          @click="goToUser(`/people/${user.name}`)"
        >
          <CardView :image="user.profilePicture" :title="user.name"> </CardView>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route }) {
    const id = await route.params.id
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/service/${id}`
    )
    const services = data
    const area = await $axios.$get(
      `${process.env.BASE_URL}/api/areaid/${services.area_id}`
    )
    console.log(area.name)
    const users = data.users
    return {
      services,
      users,
      area,
    }
  },
  methods: {
    goToUser(path) {
      this.$router.push({ path })
    },
  },
}
</script>
<style scoped>
#start {
  font-family: 'Roboto';
}
.img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: inherit;
}
.service-sec {
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e8eaf6;
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
#philo {
  padding: 5vh 5vw;
  margin-bottom: 0;
}
.service-info {
  text-align: left;
  list-style-type: none;
  padding: 5vh 5vw;
}
h2 {
  font-size: 60px;
  text-align: center;
  font-family: 'Farro';
  font-weight: bold;
}
h5 {
  font-size: 30px;
  text-align: center;
  font-weight: lighter;
}
h6 {
  width: 100%;
  font-size: 25px;
  text-align: justify;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  padding: 5%;
  z-index: 1;
}
#arealink {
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  border: 3px solid white;
  color: white;
  text-decoration: none;
  padding: 10px 30px;
}
#arealink:visited {
  text-decoration: none;
  color: white;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1vw;
  padding-top: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 10vh;
  background-color: #e0f2f1;
}
#title {
  padding-left: 10vw;
}
h3 {
  font-size: 40px;
  text-align: left;
  color: black;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.user-sec {
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e8eaf6;
}
/* .desc {
    font-size: x-small;
  } */

.desc {
  width: 100%;
  color: white;
  z-index: 2;
}
.img {
  align-items: center;
  width: 100%;
  height: 50vh;
  min-height: 40vh;
  background-size: cover;
  background-position: center;
  display: flex;
  margin: 0;
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
.users {
  height: 20vw;
  width: calc(100% / 5);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-bottom: 3vh;
}
#user-scroll {
  height: 40vh;
  overflow: auto;
  white-space: nowrap;
}
@media (max-width: 1500px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1200px) {
  .users {
    height: 40vh;
    width: calc(100% / 3);
    cursor: pointer;
    display: inline-block;
  }
}
@media (max-width: 700px) {
  .users {
    width: calc(100% / 2);
  }
}
@media (max-width: 550px) {
  .users {
    width: 100%;
  }
}
@media (max-width: 1100px) {
  .service-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 40px;
  }
  h5 {
    font-size: 25px;
  }
  h6 {
    font-size: 25px;
  }
}
@media (max-width: 720px) {
  #service-scroll {
    width: 100% !important;
  }
}
@media (max-width: 700px) {
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 30px;
  }
  h6 {
    font-size: 20px;
    width: 100%;
  }
  .service-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3vh;
  }
  .service {
    height: inherit;
    text-align: center;
  }
}
@media (max-width: 400px) {
  h3 {
    font-size: 20px;
  }
  h2 {
    font-size: 30px;
  }
  h5 {
    font-size: 15px;
  }
  h6 {
    font-size: 15px;
    width: 100%;
  }
}
</style>
