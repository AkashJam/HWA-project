<template>
  <div class="card-view">
    <div class="flip-card">
      <div class="card">
        <div class="flip-card-front">
          <div
            class="img"
            :style="{ 'background-image': `url(${image})` }"
          ></div>
          <div id="title">{{ title }}</div>
        </div>
        <div class="flip-card-back">
          {{ description }}. Click to see more about {{ title }}
        </div>
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
  height: 80%;
  width: 100%;
}
.flip-card {
  background-color: transparent;
  height: 40vh;
  width: 100%;
  perspective: 1000px;
  font-size: 25px;
}
.card {
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  text-align: center;
  flex-direction: column;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .card {
  transform: rotateY(180deg);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  height: 100%;
  background-color: white;
  color: black;
}

.flip-card-back {
  background-color: #59b5c1;
  color: white;
  transform: rotateY(180deg);
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
}
.img {
  width: 100%;
  height: 30vh;
  margin: auto;
  background-size: cover;
  background-position: center;
}
#title {
  font-weight: 1000;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 10vh;
}
/*
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
*/
</style>
