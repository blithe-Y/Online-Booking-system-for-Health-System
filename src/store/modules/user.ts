import {defineStore} from "pinia";
import type {LoginResponse, UserLoginData, UserLoginResponse} from "@/api/login/type";
import {reqSMSCode, reqUserLogin} from "@/api/login";
import type {UserState} from "@/store/modules/interface";

const useUserStore = defineStore("user", {
    state:():UserState => {
        return{
            visiable:false,
            code:'',
            userInfo: JSON.parse(localStorage.getItem("userInfo") as string) || {}
        }
    },
    actions:{
        async getSMSCode(phone:string){
            let result:LoginResponse = await reqSMSCode(phone);
            if(result.code === 200) {
                this.code = result.data;
                return 'ok';
            }else{
                return Promise.reject(new Error(result.message));
            }
        },
        async userLogin(loginData:any){
            let result:UserLoginResponse = await reqUserLogin(loginData);
            if(result.code === 200){
                this.userInfo = result.data;
                // 本地存储持久化
                localStorage.setItem("userInfo",JSON.stringify(this.userInfo));
                return 'ok';
            }else{
                Promise.reject(new Error(result.message));
            }

        }
    },
    getters:{

    }
});

export default useUserStore;
