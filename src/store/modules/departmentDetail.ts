import { defineStore } from 'pinia';
import type {DepartmentData, DepartmentObject, HospitalDetailObject} from "@/api/info/type";
import {reqDepartment, reqHospitalDetail} from "@/api/info";
import type {DepartmentState} from "./interface";

const useDepartmentStore = defineStore('departmentDetail', {
    state:():DepartmentState => {
        return {
            departmentInfo: ({} as DepartmentData)
        }
    },
    actions:{
        async getDepartmentDetail(hoscode:string){
            let result:DepartmentObject = await reqDepartment(hoscode);
            if(result.code === 200) {
                this.departmentInfo = result.data;
            }
        }
    },
    getters:{

    }
});

export default useDepartmentStore;
