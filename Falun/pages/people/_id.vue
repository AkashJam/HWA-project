<template>
  <div>
    <div id="start">
      <div id="info">
        <div class="img-sec">
          <div
            class="profile-pic"
            :style="{ 'background-image': `url(${data.profilePicture})` }"
          ></div>
        </div>
        <div class="info-sec">
          <ul class="user-info">
            <li>
              <h2 class="name">{{ data.name }}</h2>
            </li>
            <li class="role">
              {{ data.userRole }}
            </li>
            <li>
              {{ data.emailId }}
            </li>
            <li class="bio">
              {{ data.bio }}
            </li>
          </ul>
        </div>
      </div>
      <div id="ser">
        <h3>{{ data.name }} is working on</h3>
        <div class="service-grid">
          <div
            v-for="(service, serviceIndex) of services"
            :key="'service-' + serviceIndex"
            class="service"
            @click="goToItem(`/services/${service.name}`)"
          >
            <CardViewService :title="service.name"> </CardViewService>
          </div>
        </div>
      </div>
      <div class="service-sec">
        <h3 id="title">Area</h3>
        <div id="service-scroll">
          <div
            v-for="(area, areaindex) of filteredAreas"
            :key="'area-' + areaindex"
            class="Area"
            @click="goToItem(`/areas/${area.name}`)"
          >
            <CardView :image="area.image" :title="area.name"> </CardView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const id = await route.params.id
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/user/${id}`)
    const services = data.services
    return {
      data,
      services,
      servicescroll: false,
      areascroll: false,
    }
  },
  computed: {
    filteredAreas() {
      const areas = []
      areas.push(this.services[0].area)
      for (let i = 1; i < this.services.length; i++) {
        let repeat = false
        for (let j = 0; j < areas.length; j++) {
          if (this.services[i].area_id === areas[j].id) {
            repeat = true
            break
          }
        }
        if (!repeat) {
          areas.push(this.services[i].area)
        }
      }
      return areas
    },
  },
  updated() {
    this.allowServiceScroll()
    this.allowAreaScroll()
  },
  mounted() {
    window.addEventListener('resize', this.allowScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.allowScroll)
  },
  methods: {
    goToItem(path) {
      this.$router.push({ path })
    },
    allowServiceScroll() {
      if (
        window.innerWidth / this.services.length <= 360 ||
        this.services.length > 3
      ) {
        this.servicescroll = true
      } else {
        this.servicescroll = false
      }
      return this.servicescroll
    },
    allowAreaScroll() {
      const areas = this.filteredAreas
      if (window.innerWidth / areas.length <= 360 || areas.length > 3) {
        this.areascroll = true
      } else {
        this.areascroll = false
      }
      return this.areascroll
    },
    scrollServiceLeft() {
      const num =
        window.innerWidth <= 720 ? 1 : window.innerWidth <= 1080 ? 2 : 3
      const offset = this.$refs.servscroll.clientWidth / num
      this.$refs.servscroll.scrollLeft -= offset
    },
    scrollServiceRight() {
      const num =
        window.innerWidth <= 720 ? 1 : window.innerWidth <= 1080 ? 2 : 3
      const offset = this.$refs.servscroll.clientWidth / num
      this.$refs.servscroll.scrollLeft += offset
    },
    scrollAreaLeft() {
      const num =
        window.innerWidth <= 720 ? 1 : window.innerWidth <= 1080 ? 2 : 3
      const offset = this.$refs.areascroll.clientWidth / num
      this.$refs.areascroll.scrollLeft -= offset
    },
    scrollAreaRight() {
      const num =
        window.innerWidth <= 720 ? 1 : window.innerWidth <= 1080 ? 2 : 3
      const offset = this.$refs.areascroll.clientWidth / num
      this.$refs.areascroll.scrollLeft += offset
    },
  },
}
</script>
<style scoped>
.img-sec {
  float: left;
  padding: 3vh 5vw;
  /* padding-top: 10px; */
}
.profile-pic {
  height: 50vh;
  width: 45vh;
  background-size: cover;
  background-position: center;
}
.info-sec {
  align-items: center;
  display: flex;
  height: 50vh;
  padding: 5vh 5vw;
}
.user-info {
  text-align: left;
  list-style-type: none;
  padding: 5vh 5vw;
}
@media (max-width: 1080px) {
  .img-sec {
    float: none;
    text-align: center;
  }
  .profile-pic {
    width: inherit;
    max-width: 50vh;
    margin: auto;
  }
  .info-sec {
    flex: none;
    align-items: initial;
    height: auto;
  }
}
.service-sec {
  padding: 1vh;
  background-color: #ccfccb;
  text-align: center;
}
#service-scroll {
  overflow: auto;
  white-space: nowrap;
  text-align: center;
}
@media (max-width: 720px) {
  .service {
    width: 100%;
    height: 50vw;
  }
}
.bio {
  padding-top: 2vh;
  font-style: italic;
}
.role {
  padding-bottom: 2vh;
}
.name {
  font-size: xx-large;
  padding-bottom: 20px;
}
#start {
  padding: 0vh 0vh;
  font-family: 'Roboto';
}
h2 {
  font-size: 60px;
  text-align: center;
  font-family: 'Farro';
  font-weight: bold;
}
h5 {
  font-size: 30px;
  text-align: center;
  font-weight: lighter;
}
h6 {
  width: 70%;
  font-size: 30px;
  text-align: justify;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  padding: 5%;
  z-index: 1;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1vw;
  padding-top: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 10vh;
  background-color: #e0f2f1;
}
#title {
  padding-left: 10vw;
}
h3 {
  font-size: 40px;
  text-align: left;
  color: black;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
/* .desc {
    font-size: x-small;
  } */
.desc {
  width: 100%;
  color: white;
  z-index: 2;
}
.img {
  align-items: center;
  width: 100%;
  height: 50vh;
  min-height: 40vh;
  background-size: cover;
  background-position: center;
  display: flex;
  margin: 0;
}
.img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: inherit;
}
.service-sec {
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e8eaf6;
}
.users {
  height: 20vw;
  width: calc(100% / 5);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-bottom: 3vh;
}
#service-scroll {
  overflow: auto;
  white-space: nowrap;
  text-align: center;
}
#ser {
  background-color: #e0f2f1;
  padding: 5vh 5vw;
  margin-top: 30px;
}
@media (max-width: 720px) {
  #service-scroll {
    width: 100% !important;
  }
}
@media (max-width: 1500px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1200px) {
  .users {
    height: 40vh;
    width: calc(100% / 3);
    cursor: pointer;
    display: inline-block;
  }
}
@media (max-width: 700px) {
  .users {
    width: calc(100% / 2);
  }
}
@media (max-width: 550px) {
  .users {
    width: 100%;
  }
}
@media (max-width: 1100px) {
  .service-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 40px;
  }
  h5 {
    font-size: 25px;
  }
  h6 {
    font-size: 25px;
  }
}
@media (max-width: 700px) {
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 30px;
  }
  h6 {
    font-size: 20px;
    width: 100%;
  }
  .service-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3vh;
  }
  .service {
    height: inherit;
    text-align: center;
  }
}
@media (max-width: 400px) {
  h3 {
    font-size: 20px;
  }
  h2 {
    font-size: 30px;
  }
  h5 {
    font-size: 15px;
  }
  h6 {
    font-size: 15px;
    width: 100%;
  }
}
</style>
