import request from '@/utils/request'
import type {LoginResponse, UserLoginData, UserLoginResponse} from "@/api/login/type";

enum API {
    SMS_URL = '/sms/send',
    USERLOGIN_URL = '/user/login'
}

export const reqSMSCode = (phone:string) => request.get<any, LoginResponse>(`${API.SMS_URL}/${phone}`);

export const reqUserLogin = (data:any) => request.post<any, UserLoginResponse>(API.USERLOGIN_URL, data);
