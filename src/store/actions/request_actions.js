import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../urls";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';

// const AUTH_API = axios.create({ baseURL: AUTH_URL});
// AUTH_API.interceptors.request.use((req) => {
//     const storage = sessionStorage.getItem('token');
//     const { token } = JSON.parse(storage);

//     if (token) {
//         req.headers.Authorization =  `Bearer bearer ${token}`
//     }

//     return req
// })

const REQUEST_API = axios.create({ baseURL : `${BASE_URL}/request` });
REQUEST_API.interceptors.request.use((req)  => {
    const storage =  sessionStorage.getItem('token');
    const {token} =  JSON.parse(storage);

    if(token){
        req.headers.Authorization = `Bearer bearer ${token}`;
    }

    return req;
});


export const sendRequest =   createAsyncThunk('/request', async(values) => {
    try{
        const response =  await REQUEST_API.post('/new_request', {
            check_no : values.check_no,
            nida_no :   values.nida_no,
            marital_status :  values.marital_status,
            region :   values.region,
            photo_id : values.photo_id,
            username : values.username
        })

        // console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return  error.message
    }
})

export const getAllRequests =  createAsyncThunk('/requests' , async() => {
    try{
        const response =  await REQUEST_API.get('/all_requests');
        console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error)
        return error.message
    }
})


export const getPhotoId = createAsyncThunk('/latest', async() => {
    try{
        const response =  await axios.get(`${BASE_URL}/signal/read_signal?sort=-_id&limit=1`);

        console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
})

export const checkUserExistance =  createAsyncThunk('/check', async(id) => {
    try{
        const response =  await REQUEST_API.get(`user/${id}`);

        console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
})

export const verifyUser =  createAsyncThunk('/verify', async() =>{
    try{
        const response = await axios.get(`${BASE_URL}/signal/read_file?sort=-_id&limit=1`);

        console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
})

