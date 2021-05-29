<template>
  <div id="start">
    <PageDescript
      :image="'https://miro.com/blog/wp-content/uploads/2020/10/organize-their-Miro-boards-for-trainings-and-workshops.svg'"
      :description="'Falun works in various areas giving to your company a 360° consultancy offer that spans from Web Design to Machine Learning'"
    ></PageDescript>
    <div class="area-grid">
      <div
        v-for="(area, areaIndex) of areas"
        :key="'area-' + areaIndex"
        class="area"
        @click="goToArea(`/areas/${area.id}`)"
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
  padding: 4vh 0vh;
}
.team {
  margin-top: 5vh;
  padding: 1vh;
}
.area-grid {
  width: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1vw;
  margin-right: 15vw;
  margin-left: 15vw;
}
.area {
  width: 100%;
  height: 60vh;
  cursor: pointer;
  margin-bottom: 60px;
}
.desc {
  padding: 10vw;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #f1fffa;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
