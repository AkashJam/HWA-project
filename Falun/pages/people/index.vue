<template>
  <div id="start">
    <h2>Meet the team</h2>
    <div class="user-grid">
      <div
        v-for="(user, userIndex) of users"
        :key="'art-' + userIndex"
        class="user"
        @click="goToUser(`/people/${user.id}`)"
      >
        <div class="card">
          <div
            class="img"
            :style="{ 'background-image': `url(${user.profilePicture})` }"
          ></div>
          <h3>{{ user.name }}</h3>
          <p>{{ user.userRole }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('http://localhost:3000/api/user')
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
.user-grid {
  display: grid;
  grid-template-columns: repeat(5, calc(100% / 5));
  grid-gap: 10px;
}
.user {
  cursor: pointer;
  margin-bottom: 20px;
}
#start {
  padding-top: 10vh;
  padding-left: 1vw;
}
.card {
  padding: 20px 10px;
}
h3 {
  margin-bottom: 10px;
  text-align: center;
}
h2 {
  text-align: center;
}
p {
  height: 60px;
  text-align: center;
}

.img {
  width: 100%;
  height: 30vw;
  margin: auto;
  background-size: cover;
  background-position: center;
  margin: 10px 0px;
}
</style>
