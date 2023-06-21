
import axios from "axios";
import {  BASE_URL } from '../urls';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const DEPENDANT_API = axios.create({ baseURL: BASE_URL });
DEPENDANT_API.interceptors.request.use((req) => {
    const storage = sessionStorage.getItem('token');
    const { token } = JSON.parse(storage);

    if (token) {
        req.headers.Authorization = `Bearer bearer ${token}`
    }

    return req
})


export const signInUser = createAsyncThunk('/user', async (values) => {
    // console.log(values)
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email: values.username,
            password: values.password
        });

        // console.log(response.data)
        sessionStorage.setItem('token', JSON.stringify(response.data))
    }
    catch (error) {
        console.log(error)
        return error.message
    }
})


export const registerDependant = createAsyncThunk('dependant/new', async (values) => {
    try {
        const response = await DEPENDANT_API.post(`/dependant/add_dependant`, {
            firstName: values.firstName,
            lastName: values.lastName,
            middleName: values.middleName,
            relation: values.relation,
            gender: values.gender,
            dob: values.dob,
            telephone: values.telephone,
        })

        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error)
        return error.message
    }
})

export const getAllDependants = createAsyncThunk('/dependants', async () => {
    try {
        const response = await DEPENDANT_API.get('/all_dependants');

        //    console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error.message
    }
})

export const customerDependants = createAsyncThunk('/customer_dependants', async () => {
    try {
        const response = await DEPENDANT_API.get('/customer_dependants');

        //    console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error.message
    }
})
