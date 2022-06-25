import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmEwNDIwZWQ1YzU1ZGYxOTkxMmNiYjAiLCJlbWFpbCI6ImRhbmlhbG1vaGFtbW9kODRAZ21haWwuY29tIiwicm9sZSI6InNob3BrZWVwZXIiLCJzdGF0dXMiOiJwZW5kaW5nIiwiaWF0IjoxNjU1NTYyNzY2LCJleHAiOjE2NTU1NzM1NjZ9.2rXrMke1tZKWgnhCNlGvHoK-PpICPjfS6LOenpK1GBo"


export const getUserAsync = createAsyncThunk('user/getUserAsync',async ()=>{
    try {
        const res= await axios.get('https://ecomerce-api-project.herokuapp.com/api/user/me',{
            headers:{
                'authorization':token
            }
        })
    } catch (error) {
        console.log(error)
    }
})


export const postUserAsync = createAsyncThunk('user/getUserAsync',async (user)=>{
    try {
        const res= await axios.post('https://ecomerce-api-project.herokuapp.com/api/user/register',{
            headers:{
                "Conten-Type":"multipart/form-data"
            },
            file:{},
            body:user
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: { },
        loading:false
    },
    reducers: {
        setUser: (state,action) => {
            
            if(action.payload==={}){
                state.user = action.payload
                state.loading = false
            }else{
                state.user = JSON.parse(action.payload)
                state.loading = false

            }
        }
    },
    extraReducers:{
        [getUserAsync.pending]:(state)=>{
            state.loading = true
        },
        [getUserAsync.fulfilled]:(state)=>{
            state.loading = false
        },
        [postUserAsync.pending]:(state)=>{
            state.loading = true
        },
        [postUserAsync.fulfilled]:(state)=>{
            state.loading = false
        }
        
    }
})
export const { setUser } = userSlice.actions
export default userSlice.reducer