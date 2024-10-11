<script setup lang="ts">
import { onMounted } from "vue";
import {reqHospitalDetail} from "@/api/info";

// onMounted(() => {
//   const result = reqHospitalDetail('1000_2');
//   console.log("here");
//   console.log(result);
// })
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
