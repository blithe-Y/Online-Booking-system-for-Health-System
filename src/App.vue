<script setup lang="ts">
import { onMounted } from "vue";
</script>

<template>
  <div class="container">
    <Top/>
    <div class="content">
      <router-view></router-view>
    </div>
    <Bottom/>
  </div>
</template>

<style scoped>

</style>
