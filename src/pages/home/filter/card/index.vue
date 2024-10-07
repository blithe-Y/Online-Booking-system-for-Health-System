<script setup lang="ts">
defineProps(['hospitalInfo'])
</script>

<template>
    <el-col :span="12">
      <el-card shadow="hover" style="margin-bottom: 20px;">
        <el-row :gutter="30" class="row-center">
          <el-col :span="16" class="left">
            <div class="top">
              {{ hospitalInfo.hosname }}
            </div>
            <div class="bottom">
              <el-row>
                <el-col :span="10">
                  <div style="display: flex; align-items: center;">
                    <svg t="1728110996075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1458" width="16" height="16"><path d="M800.256 741.888l47.616-47.616a31.744 31.744 0 0 1 45.056 45.056l-102.4 102.4a31.744 31.744 0 0 1-54.272-22.528V204.8a32.256 32.256 0 0 1 64 0zM153.6 237.056a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z m0 307.2a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z m0 307.2a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z" fill="#5A5A68" p-id="1459"></path></svg>
                    <el-text>{{hospitalInfo.param.hostypeString}}</el-text>
                  </div>
                </el-col>
                <el-col :span="14">
                  <div style="display: flex; align-items: center;">
                    <svg t="1728111305758" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2544" width="16" height="16"><path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 625.316262 1024 733.09232 987.060258 821.44823 919.93747 832.170355 911.792017 834.259159 896.496821 826.113707 885.774697 817.968254 875.052572 802.67306 872.963767 791.950935 881.10922 712.006355 941.842033 614.569408 975.238095 512 975.238095 256.160663 975.238095 48.761905 767.839337 48.761905 512 48.761905 256.160663 256.160663 48.761905 512 48.761905 767.839337 48.761905 975.238095 256.160663 975.238095 512 975.238095 606.738266 946.765111 697.157764 894.355733 773.603714 886.741822 784.709602 889.572629 799.884996 900.678517 807.498908 911.784403 815.112819 926.959799 812.282012 934.573709 801.176124 992.505146 716.675526 1024 616.659703 1024 512Z" fill="#2c2c2c" p-id="2545"></path><path d="M487.619049 609.52381C487.619049 622.989037 498.534771 633.904762 512 633.904762 525.465229 633.904762 536.380951 622.989037 536.380951 609.52381L536.380951 243.809523C536.380951 230.344297 525.465229 219.428572 512 219.428572 498.534771 219.428572 487.619049 230.344297 487.619049 243.809523L487.619049 609.52381Z" fill="#2c2c2c" p-id="2546"></path><path d="M481.586633 471.564079C472.719716 461.430462 457.316742 460.403597 447.183125 469.270511 437.049508 478.137425 436.022643 493.540401 444.889559 503.674018L615.556226 698.721636C624.42314 708.855253 639.826114 709.882118 649.959731 701.015204 660.093348 692.148288 661.120213 676.745314 652.253299 666.611697L481.586633 471.564079Z" fill="#2c2c2c" p-id="2547"></path></svg>
                    <el-text>&nbsp每天{{hospitalInfo.bookingRule.releaseTime}}放号</el-text>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8" class="right">

            <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="医院的logo">
          </el-col>
        </el-row>
      </el-card>
    </el-col>
</template>

<style scoped>
.container{
  margin-top: 40px;
}


.row-center {
  display: flex;
  align-items: center; /* 水平居中对齐 */
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 左侧内容垂直居中 */
}

.right img {
  display: block;
  margin: 0 auto; /* 让图片水平居中 */
  width: 85px;
  height: 85px;
  border-radius: 50%;
}


.bottom {
  margin-top: 35px;
}

::v-deep(.el-card) {
  border: 0;
  box-shadow:0 6px 6px rgba(0, 0, 0, 0.1);
  width:440px;
  height:125px;
}

::v-deep(.el-card:hover){
  border: 6px rgba(0, 0, 0, 0.4);
  width:440px;
  height:125px;
  .top {
    font-weight: 900;
  }
  img{
    width: 90px;
    height: 90px;
    transition: .4s;
  }
  cursor: pointer;
}


</style>
