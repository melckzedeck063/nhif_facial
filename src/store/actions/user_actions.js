
import axios from "axios";
import {AUTH_URL,  BASE_URL} from '../urls';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const AUTH_API = axios.create({ baseURL: AUTH_URL});
AUTH_API.interceptors.request.use((req) => {
    const storage = sessionStorage.getItem('token');
    const { token } = JSON.parse(storage);

    if (token) {
        req.headers.Authorization =  `Bearer bearer ${token}`
    }

    return req
})


export  const signInUser = createAsyncThunk('/user', async(values) => {
    // console.log(values)
    try{
        const response =  await axios.post(`${AUTH_URL}/login`,{
            email : values.username,
            password : values.password
        });

        // console.log(response.data)
        sessionStorage.setItem('token', JSON.stringify(response.data))
    }
    catch(error){
        console.log(error)
        return error.message
    }
})


export  const  signUpUser =  createAsyncThunk('user/new', async(values)=>{
    try{
        const response  =  await axios.post(`${AUTH_URL}/signup`, {
            firstName  :  values.firstName,
            lastName :   values.lastName,
            email :       values.email,
            telephone :   values.telephone,
            password :  values.password,
            confirmPassword  :  values.confirmPassword
        })

        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error)
        return error.message
    }
})

export const getAllStaffs  = createAsyncThunk('/staffs', async()  => {
       try{
           const  response =  await AUTH_API.get('/all_staffs');

        //    console.log(response.data)
           return response.data;
       }
       catch(error){
        console.log(error);
        return error.message
       }
})

export const getAllCustomers  = createAsyncThunk('/all_users', async()  => {
    try{
        const  response =  await AUTH_API.get('/all_users');

     //    console.log(response.data)
        return response.data;
    }
    catch(error){
     console.log(error);
     return error.message
    }
})