<script setup lang="ts">
  import Carousel from './carousel/index.vue'
  import Search from './search/index.vue'
</script>

<template>
  <div class="context">
    <div class="container">
      <Carousel />
      <Search />
    </div>
  </div>
</template>

<style scoped>
.context {
  display: flex;
  justify-content: center;
  text-align: center;
}
.container {
  min-height: 100vh;
  width: 80%;
  margin-top:68px;
}

</style>
