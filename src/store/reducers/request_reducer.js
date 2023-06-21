import { createSlice } from "@reduxjs/toolkit";
import { checkUserExistance, getAllRequests, getPhotoId, sendRequest, verifyUser } from "../actions/request_actions";

const requestSlice =  createSlice({
    name : 'Request',
    initialState : {
        request :  null,
        all_requests : [],
        current_request : null,
        user : null,
        current_user : null,
        status :  "",
        error :  null
    },
    reducers : {
        new_request: (state, action) => {
            state.request.push(action.payload)
        },
        all_request : (action,state) => {
            state.all_request.push(action.payload)
        },
        update_request  : (action,state)  => {
            state.current_request.push(action.payload)
        }
    },

    extraReducers (builder){
        builder
        .addCase(sendRequest.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(sendRequest.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.request = action.payload;
            state.message = "New  request sent succesfully"
        })
        .addCase(sendRequest.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
        .addCase(verifyUser.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(verifyUser.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.current_user = action.payload
        })
        .addCase(verifyUser.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
        .addCase(getPhotoId.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(getPhotoId.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.user = action.payload
        })
        .addCase(getPhotoId.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
        .addCase(checkUserExistance.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(checkUserExistance.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.user = action.payload
        })
        .addCase(checkUserExistance.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
        .addCase(getAllRequests.pending, (state,action)=>{
            state.status = "Loading"
        })
        .addCase(getAllRequests.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.all_requests = action.payload
        })
        .addCase(getAllRequests.rejected, (state,action) => {
            state.status ="Failed";
            state.error = action.error.message
        })
    }
})


export const {new_request,all_request,update_request} = requestSlice.actions;

export default requestSlice.reducer