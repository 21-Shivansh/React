import { createSlice } from "@reduxjs/toolkit";
import AuthLayout from "../layout/AuthLayout";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser:(state)=>{
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;