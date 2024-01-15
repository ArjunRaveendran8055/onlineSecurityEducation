import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    status:true,
    noOfItems:10,
    items:[],

}

export const fetchCartData=createAsyncThunk('cart/fetchData',()=>{
    return (
        axios.get("")
        .then((response)=>{console.log(response.data);})
    )
})

const cartSlice=createSlice({
    name:'cart',
    initialState,
    extraReducers:(builder)=>{
        
    }
})

export default cartSlice.reducer