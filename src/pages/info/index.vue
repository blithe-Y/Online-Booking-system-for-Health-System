<script setup lang="ts">
import Register from '@/pages/info/register/index.vue'
import {useRoute} from "vue-router";
const $route = useRoute()
import { onMounted } from "vue";
import useDetailStore from '@/store/modules/hospitalDetail';
import useDepartmentStore from "@/store/modules/departmentDetail";
let detailStore = useDetailStore();
let departmentStore = useDepartmentStore();
onMounted(()=>{
  detailStore.getHospitalDetail($route.query.hoscode)
  departmentStore.getDepartmentDetail($route.query.hoscode)

})
</script>

<template>
  <div class="container">
    <div class="content">
      <el-row style="margin-top: 40px" :gutter="50">
        <el-col :span="4" class="menu">
          <span class="title">
            <el-text type="primary" tag="b" size="large">医院信息</el-text>
          </span>
          <el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              :router="true"
          >
            <el-menu-item index="/info/register">
              <template #title>
                <span>预约挂号</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/info/detail">
              <template #title>
                <span>医院详情</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/info/notice">
              <span>预约须知</span>
            </el-menu-item>
            <el-menu-item index="/info/close">
              <span>停诊信息</span>
            </el-menu-item>
            <el-menu-item index="/info/search">
              <span>查询/取消</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  .content{
    width: 80%;
    margin-top:68px;
  }
}

dl {
  margin: 0;
  padding: 0;
}

.title {
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  align-items: center;
}

.title:before{
  content:"";
  width: 12px;
  height: 12px;
  margin-right:6px;
  display: inline-block;
  background-color: #588eea;
}

dd {
  margin-top: 40px;
  margin-left: 18px;
  padding: 0;
  font-size: 14px;
  color: #606266;
}

dd:hover{
  color: #588eea;
  cursor: pointer;
}

::v-deep .el-menu--horizontal {
  --el-menu-horizontal-height: 500px;
}
</style>
