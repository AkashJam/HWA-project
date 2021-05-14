<template>
  <div class="container">
    <div>
      <Header />
    </div>
    <div>
      <h1 class="title">Contacts</h1>
      <div class="topics">
        <div class="offices">
          <h2 class="subtitle">Our Offices</h2>
          <p class="info">
            Italy
            <br />
            Piazza Leonardo da Vinci, 32
            <br />
            20133 Milano
            <br />
            T: +39 239 912 3991
          </p>
        </div>
        <br />
        <div class="emails">
          <h2 class="subtitle">Contact emails</h2>
          <p class="email">
            ilaria.ronconi@mail.polimi.it
            <br />
            pietro.boschini@mail.polimi.it
            <br />
            akashaloysius.james@mail.polimi.it
            <br />
            andres.gonzalez@mail.polimi.it
          </p>
        </div>
      </div>
      <div class="map">
        <gmap-map
          :center="center"
          :zoom="12"
          style="width: 500px; height: 500px"
        >
          <gmap-maker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          ></gmap-maker>
        </gmap-map>
      </div>
      <div class="form">
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Subject</p>
        <p>Message</p>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 45.478116, lng: 9.227403 },
      markers: [
        {
          position: { lat: 45.478116, lng: 9.227403 },
        },
        {
          position: { lat: 46.0, lng: 10.0 },
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0; /*auto;*/
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  background-color: #ffd178;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  /* font-size: 100px;
  color: #35495e; */
  letter-spacing: 1px;

  font-size: 80px;
  color: black;
  margin-top: 88px;
}

.subtitle {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 230;
  font-size: 50px;
  color: black;
  text-align: initial;
  margin: 0;
}

.topics {
  display: inline-block;
  margin-top: 0;
  height: 500px;
  width: 500px;
}

.emails {
  margin-top: 11vh;
}

.info {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 100;
  font-size: 30px;
  color: black;
  text-align: initial;
  margin: 0;
}

.email {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 100;
  font-size: 25px;
  color: black;
  text-align: initial;
  margin: 0;
  text-decoration: underline;
}

.map {
  display: inline-block;
  margin-left: 10vw;
}

.form {
  width: 100%;
  height: 500px;
  background-color: #75e6ff;
  margin-top: 17vh;
}
</style>
