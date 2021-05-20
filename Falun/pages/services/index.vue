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
}
.user-grid {
  display: grid;
  grid-template-columns: repeat(5, calc(100% / 5));
  grid-gap: 10px;
}
.user {
  cursor: pointer;
  margin-bottom: 20px;
}
.img {
  height: 40vh !important;
}
h2 {
  text-align: center;
}
p {
  height: 60px;
  text-align: center;
}
</style>
