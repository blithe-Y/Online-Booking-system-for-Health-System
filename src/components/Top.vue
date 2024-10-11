<script setup lang="ts">

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
        <div>
          <p>登录/注册</p>
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
    }
  }
}
</style>
