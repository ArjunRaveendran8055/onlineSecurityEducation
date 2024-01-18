import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    noOfBooks:0,
    books:[],
    selectedBook:[],
    isLoading:false,
    error:''
}

const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        fetchBooks:(state,actions)=>{
            state.books=actions.payload
        },
        setLoader:(state)=>{
            state.isLoading=true
        },
        setError:(state,actions)=>{
            state.error=actions.payload
        },
        removeLoader:(state)=>{
            state.isLoading=false
        }
    }
})

export function fetchBooks(){
    return async function(dispatch,getState){
            try {
                dispatch({type:'book/setLoader'})
                const res= await axios.get(`/books/getAllBooks`)
                dispatch({type:'book/fetchBooks',payload:res.data.data})
                dispatch({type:'book/removeLoader'})
            } catch (error) {
                dispatch({type:'book/setError',payload:error.message})
            }
        }
    
}

export default bookSlice.reducer