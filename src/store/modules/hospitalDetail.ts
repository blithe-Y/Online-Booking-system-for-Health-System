import { defineStore } from "pinia";
import {reqHospitalDetail} from "@/api/info";
import type {HospitalDetailObject, HospitalData} from "@/api/info/type";
import type {DetailState} from "./interface";

 const useDetailStore = defineStore("Detail", {
     state:() :DetailState => {
         return {
             hospitalInfo: ({} as HospitalData)
         }
     },
     actions:{
         async getHospitalDetail(hoscode:string){
             let result:HospitalDetailObject = await reqHospitalDetail(hoscode);
             if(result.code === 200) {
                 this.hospitalInfo = result.data;
             }
         }
    },
     getters:{

     }
 });

 export default useDetailStore;
