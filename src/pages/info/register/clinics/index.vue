<script setup lang="ts">
import useDepartmentStore from "@/store/modules/departmentDetail";
import { computed, ref, nextTick } from "vue";
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();

// 获取科室信息
const departmentStore = useDepartmentStore();
const departments = computed(() => departmentStore?.departmentInfo);

const currentIndex = ref<number>(0);

// 切换当前科室并滚动到对应的科室标题
const changeIndex = async (index: number) => {
  currentIndex.value = index;

  // 等待 DOM 完成更新
  await nextTick();

  // 选择所有带有 "title1" 类的元素
  const allTitles = document.querySelectorAll(".title1");

  // 输出调试信息
  console.log("Current index:", currentIndex.value);
  console.log("All titles:", allTitles);

  // 确保该 index 对应的元素存在
  const targetElement = allTitles[currentIndex.value];

  if (targetElement) {
    console.log("Scrolling to element:", targetElement);
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("No element found for index:", currentIndex.value);
  }
};
</script>


<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="list">
        <ul>
          <li
              @click="changeIndex(Number(index))"
              v-for="(department,index) in departments"
              :key="index"
              :class="{active: Number(index) == currentIndex }"
          >
            <el-text>{{department.depname}}</el-text>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="18" class="detail-list">
      <div class="detail" v-for="(item, index) in departments" :key="index">
        <el-text tag="b" size="large" class="title1">{{item.depname}}</el-text>
        <div class="more-clinics">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(child, index) in item.children" :key="index">
              <el-text type="info" class="text" @click="userStore.visiable=true">{{child.depname}}</el-text>
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
  &::-webkit-scrollbar{
    display: none;
  }
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

    &.active{
      border-left: 3px solid #588eea;
      background-color: #fcfcfe;
    }
  }
  li:hover{
    background-color: #fcfcfe;
    cursor: pointer;
  }
}
.detail-list{
  max-height: 540px;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none;
  }
}
.detail{
  margin-top:20px;
  padding:25px;
  background-color: #fafafa;
  border-radius: 15px;
  overflow-y: auto;
  .title1{
    display: flex;
    align-items: center;
  }
  .title1:before {
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
