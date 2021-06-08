<template>
  <div id="start">
    <PageDescript
      :image="'https://www.jll.it/images/people/people-photography/can-we-build-a-happy-workplace.jpg'"
      :description="'The Falun Team encompasses people from all over the world, giving it a truly international experience. Their work embodies the Falun life, providing innovative designs and making the most of your resources'"
    ></PageDescript>
    <div class="team">
      <h2>Meet the team</h2>
      <div class="user-grid">
        <div
          v-for="(user, userIndex) of users"
          :key="'user-' + userIndex"
          class="user"
          @click="goToUser(`/people/${user.id}`)"
        >
          <CardView :image="user.profilePicture" :title="user.name"> </CardView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/user`)
    const users = data
    return { users }
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
  padding: 0vh 0vh;
}
.team {
  margin-top: 5vh;
  padding: 1vh;
}
.user-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1vw;
}
.user {
  width: 100%;
  height: 40vh;
  cursor: pointer;
  margin-bottom: 20px;
}
@media (max-width: 1500px) {
  .user-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .user {
    height: 35vh;
  }
}
@media (max-width: 1100px) {
  .user-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .user {
    height: 30vh;
  }
}
@media (max-width: 700px) {
  .user-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .user {
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
