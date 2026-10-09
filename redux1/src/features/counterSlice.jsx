import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    //state for holding data
    initialState:{
        count:0
    },
    //actions for updating data
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        }
    }
})

console.log('counter  => ',counterSlice)

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;