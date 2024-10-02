<script setup lang="ts">

</script>

<template>
  <div class="bottom">
    <div class="container">
      <div class="left">
        <p>Copyright ©2024 Blithe. All rights reserved</p>
        |
        <p>Tel:119-110-120</p>
      </div>
      <div class="right">
        <a href="#">联系我们</a>
        |
        <a href="#">合作伙伴</a>
        |
        <a href="#">用户协议</a>
        |
        <a href="#">隐私协议</a>
      </div>
    </div>
  </div>

</template>

<style scoped>
.bottom {
  width: 100%;
  height: 60px;
  display: flex;
  bottom: 0;
  justify-content: center;
  border-top: #eee solid 2px;
}
.container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    p {
      margin:0 15px;
      font-size: 16px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    a {
      margin: 0 10px;
      color: dimgray;
      text-decoration: none;
    }
  }
}
</style>
