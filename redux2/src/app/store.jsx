import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../feature/counterSlice"
import authReducer from "../feature/authSlice"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth : authReducer
    }
})