import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    noOfBooks:0,
    books:[],
    selectedBook:[],
    categories:[],
    feturedBooks:[],
    loader:false,
    error:''
}

const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        fetchBooks:(state,actions)=>{
            state.books=actions.payload;
            state.loader=false
            
        },
        fetchCategories:(state,actions)=>{
            state.categories=actions.payload

        },
        fetchingBooks:(state,actions)=>{
            state.loader=true
        },
        setError:(state,actions)=>{
            state.error=actions.payload
        },
        removeLoader:(state,actions)=>{
            state.loader=false
        }

    }
})

export function fetchBooks(sort,ar){
    return async function(dispatch,getState){
        dispatch({type:'book/fetchingBooks'})
            try {
                const CatRes=await axios.get(`/books/getAllBooks`)
                const finCatRes=await CatRes.data.data;
                const categories=await finCatRes.map(item=>item.category)
                console.log("huraiiii")
                //making an array of uniqueCategories
                const uniqCategories=[...new Set(categories)]
                dispatch({type:'book/fetchCategories',payload:uniqCategories})
                const res= await axios.get(`/books/getAllBooks?sort=${sort}&category=${ar}`)
                const finalRes= await res.data.data
                dispatch({type:'book/fetchBooks',payload:finalRes})
                
            } catch (error) {
                dispatch({type:'book/setError',payload:error.message})
            }
        }
    
}

export default bookSlice.reducer