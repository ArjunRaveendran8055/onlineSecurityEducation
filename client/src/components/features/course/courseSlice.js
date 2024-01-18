import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
    noOfCourses:10,
    courses:[],
    featuredCourses:[],
    selectedCourse:[],
    isLoading:false,
    error:''
}


const courseSlice=createSlice({
    name:'course',
    initialState,
    reducers:{
        fetchCourses:(state,action)=>{
            state.courses=action.payload;
            state.isLoading=false
        },
        setLoader:(state)=>{
            state.isLoading=true
        },
        removeLoader:(state)=>{
            state.isLoading=false
        }

    }
})

export function fetchCourses(){
    return async function(dispatch,getState){
                try {
                    
                    dispatch({type:'course/setLoader'})
                    const res= await axios.get('https://api.slingacademy.com/v1/sample-data/products')
                     console.log("helloi",res.data.products);
                    dispatch({type:'course/fetchCourses',payload:res.data.products})
                    
                } catch (error) {
                    console.log("error is",error.message)
                }   
            }
            
}

export default courseSlice.reducer















