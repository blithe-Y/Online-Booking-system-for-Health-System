import request from '@/utils/request'
import type {LoginResponse} from "@/api/login/type";

enum API {
    SMS_URL = '/sms/send'
}

export const reqSMSCode = (phone:string) => request.get<any, LoginResponse>(`${API.SMS_URL}/${phone}`);
