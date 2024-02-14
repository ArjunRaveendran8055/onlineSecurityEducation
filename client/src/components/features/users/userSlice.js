import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loader:false,
    noOfUsers:0,
    userName:"",
    role:"",
    email:"",
    isLoggedIn:false,
    errorMsg:"",
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        verifyAdmin:(state,actions)=>{
        },
        setLoader:(state,actions)=>{
            state.loader=true
        },
        setError:(state,actions)=>{
            state.errorMsg=actions.payload
        }, 
        removeLoader:(state)=>{
            state.loader=false
        }
    }

})

export function verifyAdmin(){
    return async function(dispatch,getState){
        //setting loader
        dispatch({type:"user/setLoader"})
        try {
            const res= await axios.get("/admin/verifyAdmin")
            console.log("userSlice RES",res)
        } catch (err) {
            const {error}=err.response.data
            dispatch({type:"user/setError",payload:error})
            dispatch({type:'user/removeLoader'})
            console.log("error in userSlice is:",error);
             
        }
    }
}

export default userSlice.reducer
