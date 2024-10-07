<script setup lang="ts">
  import Level from './level/index.vue';
  import Region from './region/index.vue';
  import Card from './card/index.vue';
  import { reqHospital} from "@/api/home";
  import {onMounted, watch} from "vue";
  import { ref } from 'vue';
  import type {Content, HospitalObject, RootObject} from "@/api/home/type";

  let pageSize = ref<number>(10);

  let pageNo = ref<number>(1);

  let total = ref<number>(30);

  const selectedRegion = ref<string | null>(null); // 选中的地区 ID
  const selectedLevel = ref<string | null>(null);   // 选中的等级 ID

  let hasHospitalArr = ref<Content>([])
  console.log(pageNo.value);
  onMounted(()=>{
    getHospitalInfo();

  })
  const getHospitalInfo = async () =>{
    let result:HospitalObject = await reqHospital(pageNo.value, pageSize.value,selectedRegion.value,selectedLevel.value);
    // console.log(result)
    if(result.code === 200){
      hasHospitalArr.value = result.data.content;
      console.log(hasHospitalArr.value);
      total.value = result.data.totalElements;
    }
  }
  watch(pageNo, (newVal) => {
    getHospitalInfo();
  })
  watch(pageSize, (newVal) => {
    getHospitalInfo();
  })

  // 监听选中地区变化
  const updateSelectedRegion = (regionId: string) => {
    selectedRegion.value = regionId;
    console.log(selectedRegion.value);
    getHospitalInfo();
  };

  // 监听选中等级变化
  const updateSelectedLevel = (levelId: string) => {
    selectedLevel.value = levelId;
    getHospitalInfo();
  };


</script>

<template>
  <el-text class="mx-1" size="large" tag="b">医院</el-text>
  <Level @getLevel="updateSelectedLevel"/>
  <Region @select="updateSelectedRegion"/>
  <div class="hospital">
    <el-row :gutter="20">
      <Card v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item"/>
    </el-row>
    <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        layout="prev, pager, next, -> ,sizes, total"
        :page-sizes="[10, 20, 30, 40, 50]"
        :total="total"
    />
  </div>
</template>

<style scoped>
.hospital {
  margin-top: 40px;
}
</style>
