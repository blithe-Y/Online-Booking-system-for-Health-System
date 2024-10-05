<script setup lang="ts">
import { ref } from 'vue'
const size = ref(16)
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="2">
        <el-text class="mx-1" type="info">地区：</el-text>
      </el-col>
      <el-col :span="22">
        <el-space wrap :size="size">
          <el-text class="clickable active">全部</el-text>
          <div v-for="i in 5" :key="i">
            <el-text class="clickable">东城区</el-text>
          </div>
        </el-space>
      </el-col>
    </el-row>
  </div>


</template>

<style scoped>
.container{
  margin-top: 20px;
  line-height: 13px;
}

.clickable{
  cursor: pointer;
  &.active{
    color: rgb(88, 142, 234)
  }
}
.clickable:hover{
  cursor: pointer;
  color: rgba(88, 142, 234, 0.9)
}

</style>
