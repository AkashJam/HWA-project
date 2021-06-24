<template>
  <div class="container">
    <div
      class="bg-image"
      :style="{
        'background-image': `url('https://hci-aws-media.s3-accelerate.amazonaws.com/2020/07/connected-technology.jpg')`,
      }"
    ></div>
    <div
      class="bg-image"
      :style="{
        'background-image': `url('https://innovationorigins.com/app/uploads/2021/04/technology-4256272_1920-1004x670.jpg')`,
      }"
    ></div>
    <div
      class="bg-image"
      :style="{
        'background-image': `url('https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/04/Home-Automation-in-Pakistan.jpg')`,
      }"
    ></div>
    <div
      class="bg-image"
      :style="{
        'background-image': `url('https://i1.wp.com/leansixsigmabelgium.com/wp-content/uploads/2020/02/Technology-Lean-Management-Lean-Six-Sigma-Belgium.jpg?fit=1500%2C1001&ssl=1')`,
      }"
    ></div>
    <div
      class="bg-image"
      :style="{
        'background-image': `url('https://www.cepro.com/wp-content/uploads/2019/08/ADT_data_large.jpg')`,
      }"
    ></div>
    <div class="bg-text">
      <h1>FALUN</h1>
      <p>Bringing the age of technology to your doorstep</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

.bg-image {
  /* Full height */
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  /* font-size: 80px; */
  border: 10px solid #f1f1f1;
  border-radius: 10%;
  position: fixed; /* Stay fixed */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 400px;
  padding: 20px;
  text-align: center;
}
h1 {
  font-size: 80px;
  padding-bottom: 15px;
}
p {
  padding-bottom: 20px;
}
</style>
