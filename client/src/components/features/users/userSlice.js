import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    noOfUsers:0,
    userData:{},
    isLoggedIn:false
    
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        getUserData:(state,actions)=>{
            state.userData=actions.payload;
            state.isLoggedIn=true
        },

    }

})

export const {getUserData,}=userSlice.actions

export default userSlice.reducer
