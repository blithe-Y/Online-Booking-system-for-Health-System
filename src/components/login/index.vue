<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import {ref} from "vue";

const inputPhone = ref('')
const inputCode = ref('')
const userStore = useUserStore();
let screen = ref<number>(1);
const loginByWechat = () => {
  screen.value = 1 - screen.value;
}
</script>

<template>

  <div class="login-container">
  <el-dialog v-model="userStore.visiable" style="margin-top:70px;width:960px;background-color: #f7fbff;" center>
      <el-row justify="space-around">
        <el-col :span="10">
          <div class="bg1">
            <div class="login-by-phone" v-show="screen == 1">
              <el-form class="form-box">
                <el-form-item label="手机号：">
                  <el-input
                      v-model="inputPhone"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                  <el-input
                      v-model="inputCode"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button>获取验证码</el-button>
                </el-form-item>
                <div class="login">
                  <el-button type="primary" style="width: 90%;" disabled>用户登录</el-button>
                  <div class="wechat" @click="loginByWechat">
                    <p>微信扫码登录</p>
                    <svg t="1728889219543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4308" width="32" height="32"><path d="M352.814545 385.396364m-33.512727 0a33.512727 33.512727 0 1 0 67.025455 0 33.512727 33.512727 0 1 0-67.025455 0Z" fill="#50B674" p-id="4309"></path><path d="M502.690909 384.465455m-33.512727 0a33.512727 33.512727 0 1 0 67.025454 0 33.512727 33.512727 0 1 0-67.025454 0Z" fill="#50B674" p-id="4310"></path><path d="M576.232727 534.341818m-23.272727 0a23.272727 23.272727 0 1 0 46.545455 0 23.272727 23.272727 0 1 0-46.545455 0Z" fill="#50B674" p-id="4311"></path><path d="M694.458182 536.203636m-23.272727 0a23.272727 23.272727 0 1 0 46.545454 0 23.272727 23.272727 0 1 0-46.545454 0Z" fill="#50B674" p-id="4312"></path><path d="M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m-87.505455 630.225455c-26.996364 0-48.407273-5.585455-75.403636-11.17091l-75.403636 37.236364 21.410909-64.232727c-53.992727-37.236364-85.643636-85.643636-85.643637-145.221818 0-102.4 96.814545-182.458182 215.04-182.458182 105.192727 0 198.283636 64.232727 216.901819 150.807273-6.516364-0.930909-13.963636-0.930909-20.48-0.93091-102.4 0-182.458182 76.334545-182.458182 170.356364 0 15.825455 2.792727 30.72 6.516363 44.683636-7.447273 0-13.963636 0.930909-20.48 0.93091z m314.647273 75.403636l15.825455 53.992727-58.647273-32.581818c-21.410909 5.585455-42.821818 11.170909-64.232727 11.170909-102.4 0-182.458182-69.818182-182.458182-155.461818s80.058182-155.461818 182.458182-155.461818c96.814545 0 182.458182 69.818182 182.458182 155.461818 0 47.476364-31.650909 90.298182-75.403637 122.88z" fill="#50B674" p-id="4313"></path></svg>
                  </div>
                </div>
              </el-form>
            </div>
            <div class="login-by-wechat" v-show="screen == 0">
                <div class="wechat-code">
                  <img src="@/assets/images/login/code.jpg" alt="">
                  <div class="phone" @click="loginByWechat">
                    <p>手机号登录</p>
                    <svg t="1728891070350" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5511" width="32" height="32"><path d="M759.3984 29.7984 246.272 29.7984c-48.2304 0-87.3472 39.1168-87.3472 87.3472l0 791.552c0 48.2304 39.1168 87.3472 87.3472 87.3472l215.6544 0 119.9104 0 177.5616 0c48.2304 0 87.3472-39.1168 87.3472-87.3472l0-791.552C846.7456 68.9152 807.6288 29.7984 759.3984 29.7984zM418.304 92.0576l169.0624 0c8.3968 0 15.2576 6.8608 15.2576 15.2576s-6.8608 15.2576-15.2576 15.2576L418.304 122.5728c-8.3968 0-15.2576-6.8608-15.2576-15.2576S409.9072 92.0576 418.304 92.0576zM502.8864 894.6688c-33.9968 0-61.5424-27.5456-61.5424-61.5424 0-33.9968 27.5456-61.5424 61.5424-61.5424 33.9968 0 61.5424 27.5456 61.5424 61.5424C564.3264 867.1232 536.7808 894.6688 502.8864 894.6688zM782.848 667.0336c0 12.0832-9.728 21.8112-21.8112 21.8112L244.6336 688.8448c-12.0832 0-21.8112-9.728-21.8112-21.8112l0-464.896c0-12.0832 9.728-21.8112 21.8112-21.8112l516.3008 0c12.0832 0 21.8112 9.728 21.8112 21.8112L782.7456 667.0336z" fill="#57bf6a" p-id="5512"></path></svg>
                  </div>
                </div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="bg2">
            <div style="width: 140px">
              <img src="@/assets/images/login/code.jpg" alt="">
              <el-text style="display: block;text-align: center;">微信扫一扫关注</el-text>
              <el-text style="display: block;text-align: center;">微信扫一扫关注</el-text>
            </div>
            <div>
              <img src="@/assets/images/login/code.jpg" alt="">
              <el-text style="display: block;text-align: center;">微信扫一扫关注</el-text>
              <el-text style="display: block;text-align: center;">微信扫一扫关注</el-text>
            </div>
          </div>

        </el-col>
      </el-row>

  </el-dialog>
  </div>
</template>

<style scoped>
::v-deep(.el-dialog__body){
  margin-top: 25px;
  border-bottom: 1px #eee solid;
  margin-bottom: 25px;
}
.login-container {
  ::v-deep(.el-dialog__body){
    border-top: 1px #eee solid
  }
}

::v-deep(.el-input__wrapper) {
  align-items: center;
  box-shadow: none;
  font-size: 16px;
  border-radius: 0;
  border: none;
  outline: none;
  border-bottom:1px solid #eee;
  padding-top: 1px;
  height: 32px;
}

.bg1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 3px 0 #eee;
  height: 460px;
  margin-bottom: 25px;
  border-radius: 10px;
  .wechat-code {
    img{
      width: 250px;
    }
    .phone{
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      p {
        margin-top: 30px;
        margin-bottom:5px;
      }
      p:hover{
        color:#588eea;
      }
    }
  }
  .form-box {
    width: 300px;
    height: 300px;
    .login{
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .wechat{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        p {
          margin-top: 30px;
          margin-bottom:5px;
        }
        p:hover{
          color:#588eea;
        }
      }


    }
  }
}

.bg2 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //background-color: rebeccapurple;
  height: 460px;
  margin-top: 10px;
  margin-bottom: 30px;
  img {
    width:140px;
  }
}
</style>
