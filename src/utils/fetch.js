import axios from 'axios';
import { message } from "element-ui";
import store from '@/store';

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

//reqest拦截器
service.interceptors.request.use(config => {
    if (true) {

    }
    console.log(config);
    return config;
}, err => {
    return Promise.reject(err);
})
//response拦截器
service.interceptors.response.use(config => {
    console.log(config)
    return config
}, error => {
    return Promise.reject(error);
})

export default service
