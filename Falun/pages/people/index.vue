<template>
  <div id="start">
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
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/user`)
    console.log(data)
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
  padding-top: 15vh;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 5vh;
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
@media (max-width: 1300px) {
  .user-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .user {
    height: 35vh;
  }
}
@media (max-width: 900px) {
  .user-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .user {
    height: 30vh;
  }
}
h2 {
  text-align: center;
}
</style>
