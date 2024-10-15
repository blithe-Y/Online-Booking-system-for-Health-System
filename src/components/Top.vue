<script setup lang="ts">
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
</script>

<template>
  <div class="top">`
    <div class="container">
      <div class="left">
        <img src="@/assets/images/img.png" alt="">
        <a href="/home"><p>医院预约挂号统一平台</p></a>
      </div>
      <div class="right">
        <div>
          <p>帮助中心</p>
        </div>
        <div style="display: flex; align-items: center;">
          <p
              @click="userStore.visiable = true"
              class="login"
              v-if="!userStore.userInfo.name"
          >登录/注册</p>
          <el-dropdown v-else>
            <p class="el-dropdown-link" style="font-size:16px;">
              {{userStore.userInfo.name}}
            </p>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.top {
  width: 100%;
  left: 0;
  height: 75px;
  top: 0;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-bottom: #eee solid 2px;
}
.container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    img {
      height: 70%;
    }
    a {
      text-decoration: none;
      color: #000;
      font-size: 20px;
    }
    p {
      margin-left: 15px;
      font-weight: bold;

    }
  }
  .right {
    display: flex;
    align-items: center;
    div {
      margin: 0 10px;
      p {
        color: dimgray;
      }
      p:hover{
        color: #588eea;
      }
    }
    .login {
      cursor: pointer;
    }
  }
}
</style>
