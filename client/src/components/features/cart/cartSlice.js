import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    status:true,
    noOfItems:0,
    items:[],
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        updateCart:(state,actions)=>{
            state.items=[...state.items,actions.payload];
            state.noOfItems=state.noOfItems+1
        }
    }
})

export default cartSlice.reducer
export const {updateCart}=cartSlice.actions