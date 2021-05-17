<template>
  <div id="card">{{ service }}</div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style scoped>
#card {
  display: inline-block;
  width: 373px;
  height: 449px;
  background: hsl(0, 0%, 90%);
  padding: 200px 150px;
  margin: 30px;
}
#card:hover {
  color: #fff;
  background-color: #3b8070;
}
</style>
