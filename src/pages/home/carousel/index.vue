<script setup lang="ts">

</script>

<template>
  <el-carousel height="350px" indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="@/assets/images/home/img.png" alt="hospital intro">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
img {
  width: 100%;
  height:350px;
}

::v-deep(.el-carousel__button) {
  border-radius: 5px;
  width: 10px;
  height: 6px;
  opacity: .3;
}

::v-deep(.is-active .el-carousel__button) {
  display: block;
  width: 26px;
  height: 6px;
  background-color: #c0c4cc;
  opacity: .6;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: .4s;
}
</style>
