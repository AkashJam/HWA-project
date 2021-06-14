<template>
  <div id="start">
    <PageDescriptPA
      :image="'https://datarob.com/content/images/2019/10/lead-generation-for-IT-company.jpg'"
      :description="'Our mission is to increase the ability of the company to understand and communicate its technology through the internet and simplify the transition into web to maximize its potential'"
    ></PageDescriptPA>
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
</style>
