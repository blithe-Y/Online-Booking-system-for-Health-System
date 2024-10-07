// 二次封装的目的？
// 1. 利用axios请求，响应拦截器功能
// 2. 请求拦截器，一般可以在请求头中携带公共的参数：token
// 3. 响应拦截器，可以简化服务器返回的数据，处理http网络错误
import axios from 'axios';
import {ElMessage} from "element-plus";

// 利用axios.create方法创建一个axios实例：可以设置基础路径、超时时间的设置
const request = axios.create({
    baseURL:'/api',
    timeout:5000
})


//  请求拦截器
request.interceptors.request.use((config)=>{
    return config;
});

// 响应拦截器
request.interceptors.response.use((response) =>{
    return response.data;
},(error) => {
    let status = error.response.status;
    console.log(error);
    switch(status){
        case 404:
            ElMessage({
                type: 'error',
                message: error
            })
            break;
    }
    return Promise.reject(new Error(error.message));
});

export default request;

