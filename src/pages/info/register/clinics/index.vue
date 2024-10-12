<script setup lang="ts">
import useDepartmentStore from "@/store/modules/departmentDetail";
import type {DepartmentData} from "@/api/info/type";
import {computed} from "vue";

const departmentStore = useDepartmentStore();
const departments = computed(() => departmentStore?.departmentInfo);

console.log(departments)
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="list">
        <ul v-for="(item, index) in departments" :key="index">
          <li><el-text>{{item.depname}}</el-text></li>
        </ul>
      </div>
    </el-col>
    <el-col :span="18" class="detail-list">
      <div class="detail" v-for="(item, index) in departments" :key="index">
        <el-text tag="b" size="large" class="title">{{item.depname}}</el-text>
        <div class="more-clinics">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(child, index) in item.children" :key="index">
              <el-text type="info" class="text">{{child.depname}}</el-text>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.list{
  margin-top:20px;
  padding-top:5px;
  width: 70%;
  height: 480px;
  background-color: #f5f9fe;
  overflow-y: auto;
  border-radius: 15px;
}

ul {
  padding: 0;
  li {
    list-style: none;
    display: block;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  li:hover{
    background-color: #fcfcfe;
    cursor: pointer;
  }
}
.detail-list{
  height: 540px;
  overflow-y: auto;
}
.detail{
  margin-top:20px;
  padding:25px;
  //min-height: 210px;
  background-color: #fafafa;
  border-radius: 15px;
  .title{
    display: flex;
    align-items: center;
  }
  .title:before {
    content:"";
    width: 4px;
    height: 16px;
    margin-right:6px;
    display: inline-block;
    background-color: #588eea;
  }
}

.more-clinics{
  margin-top:10px;
  .text{
    line-height: 1.8em;
  }
  .text:hover{
    color: #588eea;
    cursor: pointer;
  }
}
</style>
