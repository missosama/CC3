import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState={
    posts:[],
    loading:false,
    error:null
}
export const getPost=createAsyncThunk('Posts/getPost',async()=>{
    const res= await axios.get('https://dummyjson.com/posts')
    return res
})
const PostSlicer=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getPost.pending,(state,Action)=>{
            state.loading=true
        })
        builder.addCase(getPost.fulfilled ,(state,Action)=>{
            state.loading=false
            state.posts=Action.payload
        })
        builder.addCase(getPost.rejected,(state,Action)=>{
            state.loading=false
            state.error=Action.error.message
        })
    }
})
export default PostSlicer.reducer;
