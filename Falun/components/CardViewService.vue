<template>
  <div class="service">
    <div id="servicename">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
#servicename {
  line-height: 3;
  text-align: center;
}
.service {
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
  display: block;
  flex-wrap: wrap;
  margin: 0;
  font-size: 2rem;
  padding: 0;
  background-color: white;
  text-align: center;
  font-family: 'Roboto';
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.service:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
@media (max-width: 700px) {
  .service {
    height: inherit;
    text-align: center;
  }
  /* .desc {
    font-size: x-small;
  } */
}
</style>
