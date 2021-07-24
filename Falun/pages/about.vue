<template>
  <div id="start">
    <PageDescriptPA
      :title="'About us'"
      :image1="'https://datarob.com/content/images/2019/10/lead-generation-for-IT-company.jpg'"
      :description="'Our mission is to increase the ability of the company to understand and communicate its technology through the internet and simplify the transition into web to maximize its potential'"
    ></PageDescriptPA>
    <div class="desc">
      <p class="p1">
        Falun is a service-first IT solutions company that builds software
        designed to improve your technical capabilities. As employees, we
        encourage each other to grow and innovate. As a company, we roll up our
        sleeves to plant roots in the communities we call home. Our software is
        powerful and flexible, and scales to meet the needs of any business.
      </p>
    </div>
    <div class="CEO">
      <!-- <div class="img-sec">
          <div
            class="profile-pic"
            :style="{
              'background-image': `url('https://www.europeanceo.com/wp-content/uploads/2017/08/CEO-magic-touch.jpg')`,
            }"
          ></div>
        </div>
        <div class="info-sec">
          <ul class="user-info">
            <li>
              <h3>Sandra Marley, CEO</h3>
            </li>
            <li>
              <p>
                Our strategy and policies underline the unique aspects of your
                products and address your strengths. With ever improving
                technology, we will provide our services through good management
                and an even better buisness sense
              </p>
            </li>
          </ul>
        </div> -->
      <div
        class="img-sec"
        :style="{
          'background-image': `url('https://www.europeanceo.com/wp-content/uploads/2017/08/CEO-magic-touch.jpg')`,
        }"
      ></div>
      <div class="deats">
        <ul class="info">
          <li>
            <p class="p2">
              Our strategy and policies underline the unique aspects of your
              products and address your strengths. With ever improving
              technology, we will provide our services through good management
              and an even better buisness sense
            </p>
          </li>
          <li>
            <h3 class="auth">- Sandra Marley, CEO</h3>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <div class="miss-stat">
      <h2 class="head">Our Mission</h2>
      <p class="p2">
        Our mission is to provide solutions that will increase your ability to
        utilize and communicate through technology in a manner that will
        simplify the transition and maximize your potential.
      </p>
    </div>
    <div class="miss-stat">
      <h2 class="head">Our Stakeholders</h2>
      <div
        class="img-th"
        :style="{
          'background-image': `url('https://research-assets.cbinsights.com/2018/04/09145456/CVC-Rankings-2018-Final.png')`,
        }"
      ></div>
    </div>
    <div class="miss-stat">
      <h2 class="head">Clients we have worked with</h2>
      <div
        class="img-th"
        :style="{
          'background-image': `url('https://www.arlingtoneconomicdevelopment.com/AEDMura7/assets/Image/Tech%20Ecosystem/arlington%20tech%20companies.png')`,
        }"
      ></div>
      <!-- <p>
        Mission: what the company does now to make the vision happen and what
        are its goals and the approach to reach them.<br />Values: what is
        essential in order to fulfill the mission. <br />Strategy: set of
        strategic decisions to reach the goals.
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Falun - About',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Falun motto and description',
        },
      ],
    }
  },
}
</script>

<style scoped>
#start {
  padding: 0vh;
  padding-bottom: 5vh;
}
.desc {
  padding: 10vh;
}
.CEO {
  height: 40vh;
  margin: 3vh 10vw;
}
.p1 {
  padding: 0vh 5vw;
  font-size: 25px;
  font-weight: lighter;
  font-family: 'Roboto';
}
.p2 {
  font-size: 20px;
  text-align: justify;
  font-weight: lighter;
  font-family: 'Roboto';
}
.auth {
  text-align: right;
  font-family: 'Farro';
}
.img-sec {
  height: 40vh;
  width: 39.5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  float: left;
}
.img-th1 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
  width: 100%;
}
.img-th {
  align-items: center;
  width: 100%;
  height: 93vh;
  min-height: 40vh;
  background-size: cover;
  background-position: center;
}
.deats {
  align-items: center;
  display: flex;
  height: 40vh;
  float: right;
  width: 59.5%;
}
.info {
  text-align: left;
  list-style-type: none;
  padding: 5vh 5vw;
}
@media (max-width: 980px) {
  .CEO {
    height: 60vh;
  }
  .img-sec {
    float: none;
    width: 100%;
    padding: 10%;
  }
  .h3 {
    font-size: 15px;
  }
  .deats {
    float: none;
    height: auto;
    width: 100%;
  }
}
.miss-stat {
  padding: 0vh 10vw;
  padding-bottom: 5vh;
  text-align: center;
}
.head {
  padding-bottom: 10px;
  font-size: 30px;
  text-align: center;
  font-family: 'Farro';
}
/* .img-sec {
  float: left;
  padding: 3vh 5vw;
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
  padding: 5vh 5vw;
}*/

@media (max-width: 500px) {
  h3 {
    font-size: 1em;
  }
}
</style>
