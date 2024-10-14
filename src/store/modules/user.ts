import {defineStore} from "pinia";
import type {LoginResponse} from "@/api/login/type";
import {reqSMSCode} from "@/api/login";

const useUserStore = defineStore("user", {
    state:() => {
        return{
            visiable:false,
            code:''
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
        }
    },
    getters:{

    }
});

export default useUserStore;
