<script setup lang="ts">

</script>

<template>
  <el-row>
    <el-col :span="18">
      <el-text class="mx-1" size="large" tag="b">科室</el-text>
    </el-col>
    <el-col :span="6">
      <div style="display: flex; align-items: center;">
        <el-text type="info">更多</el-text>
        <svg t="1728113327868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3894" width="12" height="12"><path d="M236.552013 926.853955a55.805997 55.805997 0 0 0 0 80.454996 59.682997 59.682997 0 0 0 82.794996 0l468.099978-455.081978a55.805997 55.805997 0 0 0 0-80.453996L319.348009 16.689999a59.682997 59.682997 0 0 0-82.794996 0 55.805997 55.805997 0 0 0 0 80.454996L663.401993 511.999975 236.624013 926.853955z" p-id="3895" fill="#1296db"></path></svg>
      </div>
    </el-col>
  </el-row>
  <el-row style="margin-top: 10px">
    <el-col :span="12">
      <el-text class="mx-1 depart">神经内科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">消化内科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">呼吸内科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">内科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">神经外科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">妇科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">产科</el-text>
    </el-col>
    <el-col :span="12">
      <el-text class="mx-1 depart">儿科</el-text>
    </el-col>
  </el-row>
</template>

<style scoped>
.depart{
  margin-top: 6px;
  display: inline-block;
}

.depart:hover{
  color: rgba(88, 142, 234, 0.9);
  cursor: pointer;
}
</style>
