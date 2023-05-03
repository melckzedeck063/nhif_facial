import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomers, getAllStaffs, signInUser, signUpUser } from "../actions/user_actions";


export const userSlice = createSlice({
    name: "users",
    initialState : {
        loged_user : null,
        current_user :  '',
        users : [],
        staffs : [],
        status :  '',
        error  :  null,
        message : ""
    },

    reducers : {
        all_users : (state,action) =>{
            state.users.push(action.payload)
        },
        create_user : (state, action) => {
            state.current_user.push(action.payload)
        },
        signIn : (state,action) => {
            state.loged_user.push(action.payload)
        }
    },
    extraReducers (builder){
        builder
        .addCase(signInUser.pending,(state,action) => {
            state.status = "Loading"
        })
        .addCase(signInUser.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.message = "Succesfull loged in";
            state.loged_user = action.payload
        })
        .addCase(signInUser.rejected, (state,action) => {
            state.status = "Failed";
            state.message = "Request  failed please try again";
            state.error = action.error.message;
        })
        .addCase(signUpUser.pending,(state,action) => {
            state.status = "Loading"
        })
        .addCase(signUpUser.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.message = "New account created  succesfully ";
            state.users = action.payload
        })
        .addCase(signUpUser.rejected, (state,action) => {
            state.status = "Failed";
            state.message = "Request  failed please try again";
            state.error = action.error.message
        })
        .addCase(getAllStaffs.pending,(state,action) => {
            state.status = "Loading"
        })
        .addCase(getAllStaffs.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.message = "New account created  succesfully ";
            state.staffs = action.payload
        })
        .addCase(getAllStaffs.rejected, (state,action) => {
            state.status = "Failed";
            state.message = "Request  failed please try again";
            state.error = action.error.message
        })
        .addCase(getAllCustomers.pending,(state,action) => {
            state.status = "Loading"
        })
        .addCase(getAllCustomers.fulfilled, (state,action) => {
            state.status = "Successfull";
            state.message = "New account created  succesfully ";
            state.users = action.payload
        })
        .addCase(getAllCustomers.rejected, (state,action) => {
            state.status = "Failed";
            state.message = "Request  failed please try again";
            state.error = action.error.message
        })
    }
})


export const {signIn, create_user, all_users} =  userSlice.actions;
export default userSlice.reducer;