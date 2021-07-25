<template>
  <div class="item-sec">
    <i v-if="itemscroll" class="fa fa-arrow-left" @click="scrollItemLeft()"></i>
    <div id="item-scroll" ref="itemscroll">
      <div
        v-for="(item, Index) in filteredItems"
        :key="Index"
        class="item"
        @click="goToItem(`/${category}/${item.name}`)"
      >
        <CardView :image="item.profilePicture" :title="item.name"> </CardView>
      </div>
    </div>
    <i
      v-if="itemscroll"
      class="fa fa-arrow-right"
      @click="scrollItemRight()"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null,
    },
    filteredItems: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      itemscroll: false,
    }
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
        window.innerWidth / this.filteredItems.length < 384 ||
        this.filteredItems.length > 5
      ) {
        this.itemscroll = true
      } else {
        this.itemscroll = false
      }
      return this.itemscroll
    },
    scrollItemLeft() {
      const num =
        window.innerWidth <= 450
          ? 1
          : window.innerWidth <= 900
          ? 2
          : window.innerWidth <= 1350
          ? 3
          : window.innerWidth <= 1800
          ? 4
          : 5
      const offset = this.$refs.itemscroll.clientWidth / num
      this.$refs.itemscroll.scrollLeft -= offset
    },
    scrollItemRight() {
      const num =
        window.innerWidth <= 450
          ? 1
          : window.innerWidth <= 900
          ? 2
          : window.innerWidth <= 1350
          ? 3
          : window.innerWidth <= 1800
          ? 4
          : 5
      const offset = this.$refs.itemscroll.clientWidth / num
      this.$refs.itemscroll.scrollLeft += offset
    },
  },
}
</script>

<style scoped>
.item-sec {
  text-align: center;
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
#item-scroll {
  display: inline-block;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
  width: 90%;
}
.fa {
  position: relative;
  bottom: 20vh;
  width: 2%;
}
.item {
  height: 20vw;
  width: calc(100% / 5);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-bottom: 3vh;
}
@media (max-width: 1800px) {
  .item {
    height: 40vh;
    width: calc(100% / 4);
    cursor: pointer;
    display: inline-block;
  }
}
@media (max-width: 1350px) {
  .item {
    width: calc(100% / 3);
  }
}
@media (max-width: 900px) {
  .item {
    width: calc(100% / 2);
  }
}
@media (max-width: 450px) {
  .item {
    width: 100%;
  }
}
</style>
