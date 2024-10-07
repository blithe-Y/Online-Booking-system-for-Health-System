<script setup lang="ts">
import { ref } from 'vue'
import {reqDictcode} from "@/api/home";
import {onMounted} from "vue";
import type {DictData, DictObject} from "@/api/home/type";

const emits = defineEmits();
onMounted(()=>{
  getHostype();
  // addLevelClickListeners();
})

const hasHostypeArr = ref<DictData>([]);

const size = ref(16)

const getHostype = async () => {
  let result:DictObject = await reqDictcode('Hostype');
  if(result.code === 200){
    console.log(result)
    hasHostypeArr.value = result.data;
    console.log(hasHostypeArr.value);
  }
}

let activeFlag = ref<string>('')

const changeLevel = (level:string) => {
  console.log(level)
}

const addLevelClickListeners = () => {
  const level = document.querySelector(".level");
  if(level){
    level.addEventListener("click", (event) => {
      if(event.target){
        const target = event.target as HTMLElement;
        if (target.classList.contains("clickable")){
          const allLevel = document.querySelectorAll(".clickable");
          allLevel.forEach(eachLevel=>{
            eachLevel.classList.remove("active");
          })
          target.classList.add("active");
          emits('select', target.id)
        }
      }

      // console.log(target);
    })
  }
}
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="2">
        <el-text class="mx-1" type="info">等级：</el-text>
      </el-col>
      <el-col :span="22">
        <el-space wrap :size="size" class="level">
          <el-text :class="['clickable', {active:activeFlag === ''}]">全部</el-text>
          <div v-for="(item,index) in hasHostypeArr" :key="index">
            <el-text class="clickable" :id="item.value" @click="changeLevel(item.value)">{{item.name}}</el-text>
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
