export interface LoginResponse {
    code:number;
    message:string;
    data:string;
    ok:boolean;
}

export interface UserLoginData{
    name:string,
    token:string
}

export interface UserLoginResponse {
    code:number;
    message:string;
    data:UserLoginData;
    ok:boolean;
}


