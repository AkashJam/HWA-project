<template>
  <div
    class="img"
    :style="{
      backgroundImage: `url(` + require(`~/assets/${image}.svg`) + `)`,
    }"
  >
    <div class="desc">
      <h1>{{ title }}</h1>
      <h2>
        {{ description }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.img {
  align-items: center;
  width: 100%;
  height: 50vh;
  position: relative;
  background-repeat: repeat;
}
.desc {
  position: absolute;
  top: 0px;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #f1fffa;
  background-color: rgba(0, 0, 0, 0.5);
}
h1 {
  font-size: 50px;
  font-family: 'Farro';
  margin-top: 20vh;
}

@media (max-height: 900px) {
  .desc {
    font-size: x-small;
  }
}
</style>
