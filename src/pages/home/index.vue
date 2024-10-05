<script setup lang="ts">
  import Carousel from './carousel/index.vue'
  import Search from './search/index.vue'
  import Filter from './filter/index.vue'
  import Department from './department/index.vue'
  import Info from './info/index.vue'
  import Stop from './stop/index.vue'
</script>

<template>
  <div class="context">
    <div class="container">
      <Carousel />
      <Search />
    </div>
  </div>
  <div class="context">

  </div>
  <div class="container2">

    <el-row :gutter="50">
      <el-col :span="19">
        <Filter/>
      </el-col>
      <el-col :span="5">
        <Department/>
        <Info/>
        <Stop/>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.context {
  display: flex;
  justify-content: center;
  text-align: center;
}
.container {
  width: 80%;
  margin-top:68px;
}

.container2 {
  width: 80%;
  margin: 80px auto;
}

</style>
