import { createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../actions/request_actions";

const requestSlice =  createSlice({
    name : 'Request',
    initialState : {
        request :  null,
        all_request : [],
        current_request : null,
        status :  "",
        error :  null
    },
    reducers : {
        new_request: (state, action) => {
            state.request.push(action.payload)
        },
        all_request : (action) => {
            state.all_request.push(action.payload)
        },
        update_request  : (action)  => {
            state.current_request.push(action.payload)
        }
    },

    extraReducers (builder){
        builder
        .addCase(sendRequest.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(sendRequest.fulfilled, (state,action) => {
            state.status = "Successfull",
            state.request = action.payload,
            message = "New  request sent succesfully"
        })
        .addCase(sendRequest.rejected, (state,action) => {
            state.status ="Failed",
            state.error = action.error.message
        })
    }
})