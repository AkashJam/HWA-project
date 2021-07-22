<template>
  <div class="service-sec">
    <i v-if="itemscroll" class="fa fa-arrow-left" @click="scrollItemLeft()"></i>
    <h2 id="title">{{ title }}</h2>
    <i
      v-if="itemscroll"
      class="fa fa-arrow-right"
      @click="scrollItemRight()"
    ></i>
    <div id="item-scroll" ref="itemsscroll">
      <div
        v-for="(item, Index) in filteredItems"
        :key="Index"
        class="item"
        @click="goToItem(`/${category}/${item.id}`)"
      >
        <CardView :image="item.image" :title="item.name"> </CardView>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    filteredItems: {
      type: Array,
      default: null,
    },
    category: {
      type: String,
      default: null,
    },
  },
  updated() {
    this.allowItemScroll()
  },
  mounted() {
    window.addEventListener('resize', this.allowItemScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.allowItemScroll)
  },
  methods: {
    goToItem(path) {
      this.$router.push({ path })
    },
    allowItemScroll() {
      if (
        window.innerWidth / this.filteredItems.length <= 360 ||
        this.filteredItems.length > 3
      ) {
        this.itemscroll = true
      } else {
        this.itemscroll = false
      }
      return this.itemscroll
    },
    scrollItemLeft() {
      const num =
        window.innerWidth <= 720 ? 1 : window.innerWidth <= 1080 ? 2 : 3
      const offset = this.$refs.itemsscroll.clientWidth / num
      this.$refs.itemsscroll.scrollLeft -= offset
    },
    scrollItemRight() {
      const num =
        window.innerWidth <= 720 ? 1 : window.innerWidth <= 1080 ? 2 : 3
      const offset = this.$refs.itemsscroll.clientWidth / num
      this.$refs.itemsscroll.scrollLeft += offset
    },
  },
}
</script>

<style></style>
