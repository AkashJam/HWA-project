<template>
  <div class="card-view">
    <div class="card">
      <div class="img" :style="{ 'background-image': `url(${image})` }"></div>
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.card-view {
  height: 100%;
  width: 100%;
}
.card {
  height: 100%;
  width: 100%;
  padding: 20px 10px;
}
h4 {
  margin-bottom: 10px;
  text-align: center;
}
.img {
  width: 100%;
  height: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  margin: 10px 0px;
}
</style>
