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
      <div>
        <h1 v-if="pagescroll">FALUN</h1>
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    const text = [
      'Bringing the age of technology to your doorstep',
      'Maximize your potential with technologies of the new world',
      'jhsfjhbsdfkjhbsfj',
      'dskfhaskdjkasd',
      'sjahdasjhdak',
    ]
    const pagescroll = true
    const desc = text[0]
    return {
      pagescroll,
      text,
      desc,
    }
  },
  // updated() {
  //   this.handleScroll()
  // },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      console.log(window.scrollY)
      if (window.scrollY > 500 && window.scrollY < 1500) {
        console.log('text 1')
        this.pagescroll = false
        this.desc = this.text[1]
      }
      if (window.scrollY > 1500 && window.scrollY < 2500) {
        this.pagescroll = false
        this.desc = this.text[2]
      }
      if (window.scrollY > 2500 && window.scrollY < 3500) {
        this.pagescroll = false
        this.desc = this.text[3]
      }
      if (window.scrollY > 3500 && window.scrollY < 4500) {
        this.pagescroll = false
        this.desc = this.text[4]
      } else {
        this.pagescroll = true
        this.desc = this.text[0]
      }
      console.log(this.desc)
      // return this.desc
    },
  },
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
  height: 1000px;
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
