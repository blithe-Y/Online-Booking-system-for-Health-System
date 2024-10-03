<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
</script>

<template>
  <div class="search-box">
    <el-input
        v-model="input"
        style="width: 800px;height: 40px"
        placeholder="请输入医院名称"
        :prefix-icon="Search"
    >
      <template #suffix>
        <el-button slot="append">
          搜 索
        </el-button>
      </template>
    </el-input>
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
