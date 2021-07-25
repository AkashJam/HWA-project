<template>
  <div>
    <div id="start">
      <div class="img" :style="{ background: `url(${data.image})` }">
        <div class="desc">
          <h2 class="name">{{ data.name }}</h2>
          <h5>{{ data.description }}</h5>
        </div>
      </div>
      <div class="d">
        <img
          src="https://static.thenounproject.com/png/942360-200.png"
          style="opacity: 0.2; z-index: 0; position: absolute"
        />
        <h6 class="descri">{{ data.content }}</h6>
        <div class="descril">{{ data.philosophy }}</div>
      </div>
      <div class="highlights">
        <h3>Area Highlights</h3>
        <div
          v-for="(highlight, hgindex) of data.highlights"
          :key="'highlight-' + hgindex"
          class="highlight"
        >
          <div v-if="hgindex % 2">
            <img class="highi-right" :src="highlight.image" />
            <h5 class="highp-left">{{ highlight.description }}</h5>
          </div>
          <div v-if="(hgindex + 1) % 2">
            <img class="highi-left" :src="highlight.image" />
            <h5 class="highp-right">{{ highlight.description }}</h5>
          </div>
        </div>
      </div>
      <div id="service-sect">
        <h3>Related services</h3>
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
        <h3 id="title">Team</h3>
        <div id="skills">{{ data.skills }}</div>
        <div id="service-scroll">
          <div
            v-for="(user, userIndex) of filteredMembers"
            :key="'user-' + userIndex"
            class="users"
            @click="goToItem(`/people/${user.name}`)"
          >
            <CardView :image="user.profilePicture" :title="user.name">
            </CardView>
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
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/area/${id}`)
    console.log(data)
    const services = data.services
    return {
      data,
      services,
    }
  },
  computed: {
    filteredMembers() {
      const members = []
      members.push(this.services[0].users[0])
      for (let i = 0; i < this.services.length; i++) {
        for (let j = 0; j < this.services[i].users.length; j++) {
          let repeat = false
          for (let k = 0; k < members.length; k++) {
            if (this.services[i].users[j].id === members[k].id) {
              repeat = true
              break
            }
          }
          if (!repeat) {
            members.push(this.services[i].users[j])
          }
        }
      }
      return members
    },
  },
  methods: {
    goToItem(path) {
      this.$router.push({ path })
    },
  },
}
</script>
<style scoped>
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
  text-align: left;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  padding: 5%;
  z-index: 1;
}
#experience {
  font-size: 20px;
  text-align: justify;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  padding: 5%;
  z-index: 1;
}
#skills {
  font-size: 20px;
  text-align: justify;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  padding: 5%;
  z-index: 1;
}
.descril {
  width: 70%;
  float: right;
  font-size: 30px;
  text-align: right;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  z-index: 1;
  display: inline-block;
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
.d {
  padding: 5vh 5vw;
  width: 100%;
  display: inline-block;
}
#ser {
  background-color: #e0f2f1;
  padding: 5vh 5vw;
}
#title {
  display: inline-block;
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
.highlights {
  padding: 5vh 5vw;
}
.highlight {
  padding: 5vh 5vw;
  height: 45vh;
}
.highi-left {
  float: left;
  height: 35vh;
  width: 45%;
}
.highp-right {
  float: right;
  width: 50%;
  height: 35vh;
  display: flex;
  align-items: center;
  text-align: right;
}

.highi-right {
  float: right;
  height: 35vh;
  width: 45%;
}
.highp-left {
  float: left;
  width: 50%;
  height: 35vh;
  display: flex;
  align-items: center;
  text-align: left;
}
@media (max-width: 1440px) {
  .highlight {
    height: 40vh;
  }
  .highi-left,
  .highi-right,
  .highp-left,
  .highp-right {
    height: 30vh;
  }
}
@media (max-width: 1080px) {
  .highlight {
    height: fit-content;
  }
  .highi-left,
  .highi-right {
    float: none;
    width: 100%;
    height: fit-content;
  }
  .highp-left,
  .highp-right {
    float: none;
    width: 100%;
    height: fit-content;
    text-align: center;
    padding-top: 3vh;
  }
}
.service-sec {
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e8eaf6;
}
#service-sect {
  padding: 5vh 5vw;
  margin-bottom: 0;
  background-color: #e0f2f1;
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

/*@media (max-width: 900px) {
  h6 {
    font-size: 2vw;
  }
}
*/
</style>
