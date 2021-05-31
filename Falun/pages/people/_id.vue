<template>
  <div>
    <div id="start">
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
      <div class="service-sec">
        <h2 id="title">Services</h2>
        <div id="service-scroll">
          <div v-if="scroll">
            <i class="fa fa-arrow-left"></i>
            <i class="fa fa-arrow-right"></i>
          </div>
          <div
            v-for="(service, serviceIndex) of services"
            :key="'service-' + serviceIndex"
            class="service"
            @click="goToItem(`/services/${service.id}`)"
          >
            <CardView :image="service.image" :title="service.name"> </CardView>
          </div>
        </div>
      </div>
      <div class="service-sec">
        <h2 id="title">Areas</h2>
        <div id="service-scroll">
          <div
            v-for="(area, areaIndex) of filteredAreas"
            :key="'area-' + areaIndex"
            class="service"
            @click="goToItem(`/areas/${area.id}`)"
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
      scroll: false,
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
    // showScroll() {
    //   return this.scroll
    // },
  },
  updated() {
    this.allowScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.allowScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.allowScroll)
  },
  methods: {
    goToItem(path) {
      this.$router.push({ path })
    },
    allowScroll() {
      console.log(window.innerWidth, this.services.length)
      if (
        window.innerWidth / this.services.length <= 360 ||
        this.services.length > 3
      ) {
        this.scroll = true
        console.log('needs scroll')
      } else {
        this.scroll = false
        console.log('no scroll')
      }
      console.log(this.scroll)
      return this.scroll
    },
  },
}
</script>
<style scoped>
#start {
  padding: 10vh 0vh;
}
.img-sec {
  float: left;
  margin: 3vh 5vw;
  padding-top: 10px;
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
  margin: 5vh 5vw;
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
  margin: 5vh 5vw;
  padding: 1vh;
  background-color: #ccfccb;
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
  text-align: center;
}
.fa-arrow-left,
.fa-arrow-right {
  display: ;
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
  text-align: center;
}
</style>
