import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : 0 ,
    reducers : {
        plus(state){
            return state + 1;
        },
        minus(state){
            return state - 1;
        }
    }
});

export const {plus, minus} = counterSlice.actions
