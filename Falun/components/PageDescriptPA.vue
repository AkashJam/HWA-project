<template>
  <div
    class="img"
    :style="{
      'background-image': `url(${image1})`,
    }"
  >
    <div class="desc">
      <h2>{{ title }}</h2>
      <h3>
        {{ description }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image1: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
h2 {
  font-size: 60px;
  text-align: center;
  font-family: 'Farro';
  font-weight: bold;
}
h3 {
  font-size: 25px;
  text-align: center;
  font-weight: lighter;
  font-family: 'Roboto';
}
.img {
  align-items: center;
  width: 100%;
  height: 50vh;
  min-height: 40vh;
  background-size: cover;
  background-position: center;
}
.desc {
  padding: 10vw;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #f1fffa;
  background-color: rgba(0, 0, 0, 0.5);
}
@media (max-height: 900px) {
  .desc {
    font-size: x-small;
  }
}
</style>
