<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqDictcode } from "@/api/home";
import type {DictData, DictObject} from "@/api/home/type";

const emits = defineEmits();
const hasBeijingArr = ref<DictData>([]);
const size = ref(16);

const getBeijing = async () => {
  let result:DictObject = await reqDictcode('Beijin');
  console.log(result);
  if (result.code === 200) {
    console.log(result);
    hasBeijingArr.value = result.data;
    console.log(hasBeijingArr.value);
    addRegionClickListeners();
  }
}

// 添加事件监听函数
const addRegionClickListeners = () => {
  const regions = document.querySelector(".regions");
  if(regions){
    regions.addEventListener("click", (event) => {
      if (event.target) {
        const target = event.target as HTMLElement;
        if (target.classList.contains("clickable1")) {
          const allRegions = regions.querySelectorAll(".clickable1");
          allRegions.forEach(region=>{
            region.classList.remove("active");
          })
          console.log(event.target);
          target.classList.add("active");
          emits('select',target.id)
        }
      } else {
        console.log('error');
      }
    });
  }else{
    console.log('error');
  }

}

onMounted(() => {
  getBeijing();
});
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="2">
        <el-text class="mx-1" type="info">地区：</el-text>
      </el-col>
      <el-col :span="22">
        <el-space wrap :size="size" class="regions">
          <el-text class="clickable1 active all">全部</el-text>
          <div v-for="(item, index) in hasBeijingArr" :key="index">
            <el-text class="clickable1" :id="item.value">{{ item.name }}</el-text>
          </div>
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
  line-height: 13px;
}
.clickable1 {
  cursor: pointer;
}
.clickable1.active {
  color: rgb(88, 142, 234);
}
.clickable1:hover {
  color: rgba(88, 142, 234, 0.9);
}
</style>
