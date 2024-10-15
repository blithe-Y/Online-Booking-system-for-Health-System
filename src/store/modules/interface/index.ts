import type {DepartmentData, HospitalData} from "@/api/info/type";
import type {UserLoginData} from "@/api/login/type";

export interface DetailState {
    hospitalInfo: HospitalData;
}

export interface DepartmentState {
    departmentInfo: DepartmentData;
}

export interface UserState {
    visiable: boolean,
    code: string,
    userInfo: UserLoginData
}
