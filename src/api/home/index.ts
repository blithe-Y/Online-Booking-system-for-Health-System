import request from '@/utils/request';
import type {DictObject, HospitalObject, RootObject} from "@/api/home/type";
enum API {
    HOSPITAL_URL = '/hosp/hospital',
    DICTCODE_URL = '/cmn/dict/findByDictCode'
}

export const reqHospital = (page:number, limit:number,  districtCode: string | null, hostype: string | null) => {
    const params = new URLSearchParams();
    if (districtCode) params.append('districtCode', districtCode);
    if (hostype) params.append('hostype', hostype);
    return request.get<any, HospitalObject>(`${API.HOSPITAL_URL}/${page}/${limit}?${params.toString()}`);
}

export const reqDictcode = (dictCode:string) => request.get<any, DictObject>(`${API.DICTCODE_URL}/${dictCode}`)

