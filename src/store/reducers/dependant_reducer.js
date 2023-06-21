import { createSlice } from "@reduxjs/toolkit";
import {  getAllDependants, registerDependant, customerDependants } from "../actions/dependant_action";

const dependantSlice =  createSlice({
    name : 'Request',
    initialState : {
        request :  null,
        all_dependants : [],
        current_request : null,
        user : null,
        current_users : [],
        status :  "",
        error :  null
    },
    reducers : {
        new_request: (state, action) => {
            state.request.push(action.payload)
        },
        all_dependant : (action,state) => {
            state.all_dependant.push(action.payload)
        },
        update_request  : (action,state)  => {
            state.current_request.push(action.payload)
        }
    },

    extraReducers (builder){
        builder
        .addCase(registerDependant.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(registerDependant.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.request = action.payload;
            state.message = "New  request sent succesfully"
        })
        .addCase(registerDependant.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
        .addCase(customerDependants.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(customerDependants.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.current_users = action.payload
        })
        .addCase(customerDependants.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
        .addCase(getAllDependants.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(getAllDependants.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.all_dependants = action.payload
        })
        .addCase(getAllDependants.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
    }
})


export const {new_request,all_dependant,update_request} = dependantSlice.actions;

export default dependantSlice.reducer