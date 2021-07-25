<template>
  <div>
    <div class="info">
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
    <div class="service-sec">
      <i
        v-if="servicescroll"
        class="fa fa-arrow-left"
        @click="scrollServiceLeft()"
      ></i>
      <h2 id="title">Services responsible for</h2>
      <i
        v-if="servicescroll"
        class="fa fa-arrow-right"
        @click="scrollServiceRight()"
      ></i>
      <div id="service-scroll" ref="servscroll">
        <div
          v-for="(service, serviceIndex) of services"
          :key="'service-' + serviceIndex"
          class="service"
          @click="goToItem(`/services/${service.name}`)"
        >
          <CardView :image="service.image" :title="service.name"> </CardView>
        </div>
      </div>
    </div>
    <div class="area-sec">
      <i
        v-if="areascroll"
        class="fa fa-arrow-left"
        @click="scrollAreaLeft()"
      ></i>
      <h2 id="title">Working in Areas</h2>
      <i
        v-if="areascroll"
        class="fa fa-arrow-right"
        @click="scrollAreaRight()"
      ></i>
      <div id="service-scroll" ref="areascroll">
        <div
          v-for="(area, areaIndex) of filteredAreas"
          :key="'area-' + areaIndex"
          class="service"
          @click="goToItem(`/areas/${area.name}`)"
        >
          <CardView :image="area.image" :title="area.name"> </CardView>
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
    window.addEventListener('resize', this.allowServiceScroll)
    window.addEventListener('resize', this.allowAreaScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.allowServiceScroll)
    window.removeEventListener('resize', this.allowAreaScroll)
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
.info {
  height: 56vh;
}
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
  .info {
    height: 105vh;
  }
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
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e0f2f1;
}
.area-sec {
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e8eaf6;
}
.service {
  height: 20vw;
  width: calc(100% / 3);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-bottom: 3vh;
}
#service-scroll {
  overflow: auto;
  white-space: nowrap;
  /* text-align: center; */
}
.fa-arrow-left {
  float: left;
  margin: 0.84vh 2vw;
  cursor: pointer;
}
.fa-arrow-right {
  float: right;
  margin: 0.84vh;
  cursor: pointer;
}
@media (max-width: 1080px) {
  .service {
    width: calc(100% / 2);
    height: 30vw;
  }
}
@media (max-width: 720px) {
  .service {
    width: 100%;
    height: 50vw;
  }
  /* #service-scroll {
    width: 100% !important;
  } */
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
#title {
  display: inline-block;
}
</style>
