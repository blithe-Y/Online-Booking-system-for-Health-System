import request from '@/utils/request';
import type {DepartmentObject, HospitalDetailObject} from "@/api/info/type";

enum API {
    HOSPITALDITAIL_URL = '/hosp/hospital',
    DEPARTMENT_URL = '/hosp/hospital/department'
}

export const reqHospitalDetail = (hoscode:string) => request.get<any, HospitalDetailObject>(`${API.HOSPITALDITAIL_URL}/${hoscode}`);
export const reqDepartment = (hoscode:string) => request.get<any, DepartmentObject>(`${API.DEPARTMENT_URL}/${hoscode}`);

// export const reqHospitalDetail = (hoscode:string) => request.get(API.HOSPITALDITAIL_URL+hoscode);



