<template>
  <div id="start">
    <h2>Areas</h2>
    <div class="user-grid">
      <div
        v-for="(area, areaIndex) of areas"
        :key="'area-' + areaIndex"
        class="user"
        @click="goToArea(`/areas/${area.id}`)"
      >
        <CardView :image="area.image" :title="area.name"> </CardView>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/area`)
    console.log(data)
    const areas = data
    return { areas }
  },
  methods: {
    goToArea(path) {
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
