<template>
  <div id="start">
    <PageDescript
      :image="'people'"
      :description="'The Falun Team encompasses people from all over the world, giving it a truly international experience. Their work embodies the Falun life, providing innovative designs and making the most of your resources'"
    ></PageDescript>
    <div class="team">
      <h2>Meet the team</h2>
      <div class="user-grid">
        <div
          v-for="(user, userIndex) of users"
          :key="'user-' + userIndex"
          class="user"
          @click="goToUser(`/people/${user.name}`)"
        >
          <CardView
            :image="user.profilePicture"
            :title="`${user.name}, ${user.userRole}`"
          >
          </CardView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $store }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/user`)
    const users = data
    // $store.state.crumbs = ['People']
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
  padding-bottom: 5vh;
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
  height: 40vh;
  width: 100%;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-bottom: 3vh;
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
@media (max-width: 500px) {
  .user-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .user {
    height: 40vh;
  }
  /* .desc {
    font-size: x-small;
  } */
}
h2 {
  text-align: center;
}
</style>
