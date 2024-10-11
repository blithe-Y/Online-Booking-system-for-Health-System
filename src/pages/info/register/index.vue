<script setup lang="ts">
import Clinics from './clinics/index.vue'
import useDetailStore from "@/store/modules/hospitalDetail";
const hospitalStore = useDetailStore();
const ruleArray = hospitalStore.hospitalInfo.bookingRule?.rule;

</script>

<template>
  <div class="top" style="display: flex; align-items: center;">
    <h2>{{hospitalStore.hospitalInfo.hospital?.hosname}}</h2>
    <svg t="1728110996075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1458" width="16" height="16"><path d="M800.256 741.888l47.616-47.616a31.744 31.744 0 0 1 45.056 45.056l-102.4 102.4a31.744 31.744 0 0 1-54.272-22.528V204.8a32.256 32.256 0 0 1 64 0zM153.6 237.056a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z m0 307.2a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z m0 307.2a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z" fill="#5A5A68" p-id="1459"></path></svg>
    <el-text type="info">{{hospitalStore.hospitalInfo.hospital?.param.hostypeString}}</el-text>
  </div>
  <div class="content">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="logo">
          <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo.hospital?.logoData}`" alt="">
        </div>
      </el-col>
      <el-col :span="20">
        <div class="rule">
          <el-row>
            挂号规则
          </el-row>
          <el-row style="margin-top: 10px">
            <el-col :span="5">
              <el-text type="info">预约周期：</el-text>
              <el-text>{{hospitalStore.hospitalInfo.bookingRule?.cycle}}天</el-text>
            </el-col>
            <el-col :span="5">
              <el-text type="info">放号时间：</el-text>
              <el-text>{{hospitalStore.hospitalInfo.bookingRule?.releaseTime}}</el-text>
            </el-col>
            <el-col :span="5">
              <el-text type="info">停挂时间：</el-text>
              <el-text>{{hospitalStore.hospitalInfo.bookingRule?.stopTime}}</el-text>
            </el-col>
          </el-row>
          <el-row style="margin-top: 5px">
            <el-text type="info">退号时间：</el-text>
            <el-text>就诊前一工作日{{hospitalStore.hospitalInfo.bookingRule?.quitTime}}前取消</el-text>
          </el-row>
        </div>
        <div class="rule">
          <el-row>
            医院预约规则
          </el-row>
          <ol>
            <el-text v-for="(item, index) in ruleArray" :key="index" type="info"><li>{{ item }}</li></el-text>
          </ol>
        </div>
      </el-col>
    </el-row>
    <div class="clinics">
      <h3>选择科室</h3>
      <Clinics/>
    </div>

  </div>

</template>

<style scoped>

.top {
  h2 {
  margin:0;
  padding:0;
  color:#434343;
  font-size:20px;
  margin-right: 16px;
  }
}

.content {
  margin-top:40px;

  .logo{
    display: flex;
    justify-content: center;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}

.rule {
  margin-bottom: 20px;
  ol{
    margin:0;
    margin-top:10px;
    padding-left:1em;
    li {
      line-height: 1.5em;
    }
  }
}

.clinics {
  margin-top:50px;
  margin-bottom: 250px;
  h3 {
    margin:0;
    padding:0;
    color:#434343;
    font-size:16px;
    margin-right: 16px;
  }
}
</style>
