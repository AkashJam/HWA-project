<template>
  <div class="container">
    <div>
      <h1 class="title">Contacts</h1>
      <div class="cols">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5714918725!2d9.224921214843471!3d45.4784352791011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f232436f25%3A0x636222c502d7acd!2sPiazza%20Leonardo%20da%20Vinci%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1622022508132!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="topics">
          <div class="offices">
            <h2 class="subtitle">Our Office</h2>
            <p class="info sans-cento">
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
            <p class="email sans-cento">
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
      </div>
      <div class="form">
        <form
          class="grid grid-cols-1 gap-y-6"
          action="/messages"
          method="post"
          @submit.prevent="sendMessage"
        >
          <div class="input-element">
            <p class="msg">First Name</p>
            <label for="first_name" class="sr-only">First name</label>
            <div class="relative rounded-md shadow-sm">
              <input
                id="first_name"
                v-model="first_name"
                required
                name="first_name"
                class="in-box sans-cento form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                placeholder="First name"
              />
            </div>
          </div>
          <div class="input-element">
            <p class="msg">Last Name</p>
            <label for="last_name" class="sr-only">Last name</label>
            <div class="relative rounded-md shadow-sm">
              <input
                id="last_name"
                v-model="last_name"
                required
                name="last_name"
                class="in-box sans-cento form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                placeholder="Last name"
              />
            </div>
          </div>
          <div class="input-element">
            <p class="msg">Email</p>
            <label for="email" class="sr-only">Email</label>
            <div class="relative rounded-md shadow-sm">
              <input
                id="email"
                v-model="email"
                required
                name="email"
                class="in-box sans-cento form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="input-element">
            <p class="msg">Subject</p>
            <label for="subject" class="sr-only">Subject</label>
            <div class="relative rounded-md shadow-sm">
              <input
                id="subject"
                v-model="subject"
                required
                name="subject"
                class="in-box sans-cento form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                placeholder="Subject"
              />
            </div>
          </div>
          <div class="input-element">
            <p class="msg">Message</p>
            <label for="message" class="sr-only">Message</label>
            <div class="relative rounded-md shadow-sm">
              <textarea
                id="message"
                v-model="message"
                required
                name="message"
                rows="4"
                class="in-msg sans-cento form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div class="sub">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="button-sub sans-cento inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </span>
            <div
              v-if="success"
              class="rounded bg-indigo-500 text-white text-lg p-4"
            >
              Great! Your message has been sent successfully. We will try to
              respond quickly.
            </div>
            <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
              Bummer, Something went wrong. Did you fill out all of the fields?
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0; /*auto;*/
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-right: 10vw;
  padding-left: 10vw;
  /* align-items: center; */
  text-align: center;
  background-color: #ffd178;
  flex-direction: column;
}
.map {
  height: 50vh;
  width: 50vw;
  float: right;
}
.sans-cento {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 100;
}

.title {
  display: block;
  font-weight: 600;
  /* font-size: 100px;
  color: #35495e; */
  letter-spacing: 1px;
  font-size: 30px;
  color: black;
  margin-top: 80px;
  margin-bottom: 5vh;
}

.subtitle {
  font-weight: 400;
  font-size: large;
  color: black;
  text-align: right;
}

.cols {
  display: flex;
  gap: 4vw;
}

.cols > * {
  width: 100%;
}

.emails {
  margin-top: 11vh;
}

.info {
  font-size: medium;
  color: black;
  text-align: initial;
  margin: 0;
  text-align: right;
}

.email {
  font-size: medium;
  color: black;
  text-align: initial;
  margin: 0;
  text-decoration: underline;
  text-align: right;
}

.form {
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.input-element {
  padding-bottom: 3vh;
}

.msg {
  display: block;
  text-align: left;
  font-weight: 230;
  font-size: large;
  color: black;
  padding-bottom: 1vh;
}

.in-box {
  width: 100%;
  height: 5vh;
  font-size: medium;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}

.in-msg {
  width: 100%;
  height: 25vh;
  font-size: 2vw;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}

.sub {
  text-align: left;
}

.button-sub {
  width: 200px;
  height: 60px;
  font-size: 2vw;
}
@media (max-width: 700px) {
  .cols {
    display: block;
  }
  .map {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  .subtitle {
    text-align: left;
  }
  .email {
    text-align: left;
    margin-top: 3vh;
  }
  .emails {
    margin-top: 3vh;
  }
  .info {
    text-align: left;
  }
}
</style>
