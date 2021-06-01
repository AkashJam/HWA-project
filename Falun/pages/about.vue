<template>
  <div id="start">
    <PageDescript
      :image="'https://www.jll.it/images/people/people-photography/can-we-build-a-happy-workplace.jpg'"
      :description="'The Falun Team encompasses people from all over the world, giving it a truly international experience. Their work embodies the Falun life, providing innovative designs and making the most of your resources'"
    ></PageDescript>
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
  padding: 4vh 0vh;
}
</style>
