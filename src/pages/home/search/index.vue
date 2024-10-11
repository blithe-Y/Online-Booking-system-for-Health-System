<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import type {Content, HospitalInfoData, HospitalInfoObject, SearchData} from "@/api/home/type";
import {reqHospitalInfo} from "@/api/home";
import {useRouter} from "vue-router";
const input = ref('')
let hospitalInfoList = ref<SearchData>([])

let $router = useRouter();

const fetchData = async (keyword: string, cb: any) => {
  let result:HospitalInfoObject = await reqHospitalInfo(keyword);
  let showData = result.data.map(item => {
    return {
      value: item.hosname,
      hoscode:item.hoscode
    }
  })
  cb(showData)
}

const goDetail = (item:any) => {
  $router.push({path:'/info/register', query:{hoscode:item.hoscode}})
}



</script>

<script lang="ts">
  export default {
    name:'Search'
  }
</script>

<template>
  <div class="search-box">
    <el-autocomplete
        v-model="input"
        style="width: 800px;height: 40px"
        placeholder="请输入医院名称"
        :trigger-on-focus="false"
        :fetch-suggestions="fetchData"
        :prefix-icon="Search"
        @select="goDetail"
    >
      <template #suffix>
        <el-button slot="append">
          搜索
        </el-button>
      </template>
    </el-autocomplete>
  </div>

</template>

<style scoped>
.search-box {
  margin-top: 40px;
}

::v-deep(.el-input__inner){
  padding-left: 20px;
  font-weight: normal;
}
::v-deep(.el-input__wrapper) {
  align-items: center;
  box-shadow: none;
  font-size: 16px;
  border-radius: 0;
  border: none;
  outline: none;
  border-bottom:1px solid #eee;
  padding-left: 24px;
  padding-right: 28px;
  padding-top: 1px;
  height: 61px;
}

::v-deep(.el-button) {
  border: none;
  font-size: 17px;

}

::v-deep(.el-button:hover) {
  background-color: #fff;

}

</style>
