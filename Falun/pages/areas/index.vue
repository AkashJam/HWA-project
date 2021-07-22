<template>
  <div id="start">
    <PageDescript
      :image="'Endless-Constellation'"
      :description="'Falun works in various areas giving to your company a 360° consultancy offer that spans from Web Design to Machine Learning'"
      :title="'Areas'"
    ></PageDescript>
    <div class="area-grid">
      <div
        v-for="(area, areaIndex) of areas"
        :key="'area-' + areaIndex"
        class="area"
        @click="goToArea(`/areas/${area.name}`)"
      >
        <CardViewArea
          :image="area.image"
          :title="area.name"
          :description="area.description"
        >
        </CardViewArea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/area`)
    // console.log(data)
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
  padding: 0vh 0vh;
  padding-bottom: 5vh;
  font-family: Roboto;
}
.team {
  margin-top: 5vh;
  padding: 1vh;
}
.area-grid {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5vh;
}
.area {
  font-size: 20px;
}
@media (max-width: 800px) {
  .area-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .area {
    font-size: 10px;
  }
}
</style>
