import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
    noOfCourses:10,
    courses:[],
    featuredCourses:[],
    categories:[],
    selectedCourse:{},
    loader:false,
    error:''
}


const courseSlice=createSlice({
    name:'course',
    initialState,
    reducers:{
        fetchCourses:(state,action)=>{
            state.courses=action.payload;
            state.loader=false
        },
        setLoader:(state)=>{
            state.loader=true
        },
        fetchCategories:(state,actions)=>{
            state.categories=actions.payload
        },
        setSelectedCourse:(state,actions)=>{
            state.selectedCourse=actions.payload;
        }
    }
})

export function fetchCourses(sort,ar){
    return async function(dispatch,getState){
        dispatch({type:'course/setLoader'})
                try {
                    const CatRes=await axios.get(`/courses/getAllCourses`)
                    const finCatRes=await CatRes.data.data;
                    const categories=await finCatRes.map(item=>item.category)
                    //making an array of uniqueCategories
                    const uniqCategories=[...new Set(categories)]
                    dispatch({type:'course/fetchCategories',payload:uniqCategories})
                    const res= await axios.get(`/courses/getAllCourses?sort=${sort}&category=${ar}`)
                     const finRes=res.data.data
                    dispatch({type:'course/fetchCourses',payload:finRes})
                } catch (error) {
                    console.log("error is",error.message)
                }   
            }
}
export const {setSelectedCourse} =courseSlice.actions
export default courseSlice.reducer
















