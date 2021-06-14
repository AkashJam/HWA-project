<template>
  <div>
    <div id="start">
      <div class="img" :style="{ 'background-image': `url(${data.image})` }">
        <div class="desc">
          <h2 class="name">{{ data.name }}</h2>
          <h5 class="descri">{{ data.description }}</h5>
        </div>
      </div>
      <div class="desc">
        <h3 id="title">Description</h3>
        <img
          src="https://static.thenounproject.com/png/942360-200.png"
          style="opacity: 0.2; z-index: 0; position: absolute"
        />
        <h6 class="descri">{{ data.content }}</h6>
      </div>
      <h3 id="title">Related services</h3>
      <div class="area-grid">
        <div
          v-for="(service, serviceIndex) of services"
          :key="'service-' + serviceIndex"
          class="area"
          @click="goToItem(`/services/${service.id}`)"
        >
          <CardViewArea
            :image="service.image"
            :title="service.name"
            :description="service.description"
          >
          </CardViewArea>
        </div>
      </div>
      <div class="service-sec">
        <h3 id="title">Team</h3>
        <div id="service-scroll">
          <div
            v-for="(user, userIndex) of filteredMembers"
            :key="'user-' + userIndex"
            class="service"
            @click="goToItem(`/users/${user.id}`)"
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
    const services = data.services
    console.log(services[0])
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
        console.log('entering service', this.services[i].id)
        for (let j = 0; j < this.services[i].users.length; j++) {
          let repeat = false
          console.log('checking user', this.services[i].users[j].id)
          for (let k = 0; k < members.length; k++) {
            if (this.services[i].users[j].id === members[k].id) {
              repeat = true
              break
            }
          }
          if (!repeat) {
            members.push(this.services[i].users[j])
            console.log(members)
          }
        }
      }
      return members
    },
    methods: {
      goToItem(path) {
        this.$router.push({ path })
      },
    },
  },
}
</script>
<style scoped>
#start {
  padding: 5vh 0vh;
}
h2 {
  font-size: 7vw;
  text-align: center;
  color: rgb(0, 0, 0);
}
h5 {
  font-size: 2vw;
  text-align: center;
  font-weight: lighter;
  color: rgb(0, 0, 0);
}
h6 {
  width: 70%;
  font-size: 1.5vw;
  text-align: justify;
  font-weight: lighter;
  color: rgb(0, 0, 0);
  padding: 5%;
  z-index: 1;
}
#title {
  font-size: 4vw;
  text-align: left;
  color: black;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding-left: 50px;
}
.area-grid {
  width: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.5vw;
  margin-right: 15vw;
  margin-left: 15vw;
}
.area {
  width: 100%;
  height: 20vh;
  cursor: pointer;
  margin-bottom: 10px;
}
.desc {
  width: 100%;
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
  opacity: 0.9;
}
.service-sec {
  /* margin: 5vh 5vw; */
  padding: 1vh;
  /* background-color: #ccfccb; */
}
.service {
  height: 20vw;
  width: calc(100% / 5);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-bottom: 3vh;
}
#service-scroll {
  /* overflow: auto;
  white-space: nowrap; */
  text-align: center;
}
@media (max-width: 1080px) {
  .service {
    width: calc(100% / 4);
    height: 30vw;
  }
}
@media (max-width: 720px) {
  .service {
    width: calc(100% / 3);
    height: 50vw;
  }
  /* #service-scroll {
    width: 100% !important;
  } */
}
/*
@media (max-width: 1000px) {
  .service {
    height: 35vh;
    width: calc(100% / 3);
    cursor: pointer;
    display: inline-block;
  }
}
@media (max-width: 1400px) {
  .service {
    width: calc(100% / 2);
  }
}
@media (max-width: 700px) {
  .service {
    width: 100%;
  }
}
*/
</style>
