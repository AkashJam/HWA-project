<template>
  <div id="start">
    <PageDescript
      :image="'aboutus'"
      :description="'Our mission is to increase the ability of the company to understand and communicate its technology through the internet and simplify the transition into web to maximize its potential'"
    ></PageDescript>
    <h2>Company Information</h2>
    <div class="CEO">
      <h2>Message from our CEO</h2>
      <CardViewArea
        :image="'https://www.europeanceo.com/wp-content/uploads/2017/08/CEO-magic-touch.jpg'"
        :title="'Sandra Marley, CEO'"
        :description="'Our strategy and policies underline the unique aspects of your products and address your strengths. With ever improving technology, we will provide our services through good management and an even better buisness sense'"
      >
      </CardViewArea>
    </div>
    <h2>Our Stakeholders</h2>
    <h2>Clients we have worked with</h2>
    <p>
      Vision: description of how the company see the world and how the company
      see itself in the future, where it wants to arrive. <br />Mission: what
      the company does now to make the vision happen and what are its goals and
      the approach to reach them. <br />Values: what is essential in order to
      fulfill the mission. <br />Strategy: set of strategic decisions to reach
      the goals.
    </p>
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
  padding: 0vh 0vh;
}
.CEO {
  margin: 3vh 5vh;
  height: 60vh;
}
</style>
