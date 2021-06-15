<template>
  <div id="start">
    <div class="img-sec">
      <img class="profile-pic" :src="data.image" />
    </div>
    <div class="info-sec">
      <ul class="service-info">
        <li>
          <h2>{{ data.name }}</h2>
        </li>
        <li>
          {{ data.description }}
        </li>
      </ul>
    </div>
    <div class="user-sec">
      <h2 class="title">Team</h2>
      <div id="user-scroll">
        <div
          v-for="(user, userIndex) of users"
          :key="'user-' + userIndex"
          class="user"
          @click="goToUser(`/user/${user.id}`)"
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
    const users = data.users
    const area = data.areas
    return {
      data,
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
.service-info {
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
.user-sec {
  margin: 5vh 5vw;
  padding: 1vh;
  background-color: #ccfccb;
  text-align: center;
}
.user {
  height: 35vh;
  width: calc(100% / 3);
  cursor: pointer;
  display: inline-block;
}
#user-scroll {
  height: 40vh;
  overflow: auto;
  white-space: nowrap;
}
@media (max-width: 1400px) {
  .user {
    width: calc(100% / 2);
  }
}
@media (max-width: 700px) {
  .user {
    width: 100%;
  }
}
.name {
  font-size: xx-large;
  padding-bottom: 20px;
}
#title {
  text-align: center;
}
</style>
