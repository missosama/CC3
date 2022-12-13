import axios from "axios";
import  {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState={
    users:[],
    loading:false,
    error:null
}
export const getUsers=createAsyncThunk('users/getUsers',async()=>{
    const res=await axios.get('https://dummyjson.com/users')
    return res;
})
const UserSlice=createSlice({
    name:'users',
    initialState,
    reducers:{},extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state,Action)=>{
            state.loading=true
        })
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
        })
        builder.addCase(getUsers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})
export default UserSlice.reducer;