<template>
  <div class="card-view">
    <div class="card">
      <div class="img" :style="{ 'background-image': `url(${image})` }"></div>
      <div class="text">
        <h1>{{ title }}</h1>
        <h5>{{ description }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.card-view {
  height: 100%;
  width: 100%;
  margin-top: 10px;
}
.card {
  height: 100%;
  width: 100%;
  padding: 20px 10px;
  align-items: center;
  display: flex;
  background-color: lightgreen;
}
.img {
  width: 40%;
  float: left;
  height: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  margin: 10px 0px;
}
h1 {
  font-size: 3vw;
}
h5 {
  font-size: 2.5vw;
}
.text {
  width: 50%;
  color: black;
  font-size: 20px;
  display: block;
  float: right;
  text-align: right;
  margin-left: 10vw;
}
@media (max-width: 800px) {
  .img {
    width: 100%;
    height: 100%;
    margin: auto;
    background-size: cover;
    background-position: center;
    margin: 10px 0px;
  }
  .text {
    width: 100%;
    display: block;
    text-align: center;
  }
  .card {
    display: block;
    height: 100%;
  }
}
</style>
