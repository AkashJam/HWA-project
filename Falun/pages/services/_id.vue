<template>
  <div>
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
.service-info {
  text-align: left;
  list-style-type: none;
}
.title {
  text-align: center;
}
.user-sec {
  margin: 0vh 5vw;
}
.user {
  width: calc(100% / 3);
  cursor: pointer;
  margin-bottom: 20px;
  display: inline-block;
}
#user-scroll {
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
