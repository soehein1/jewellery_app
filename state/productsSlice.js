import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getProductsAsync = createAsyncThunk('products/getProductsAsync', async ()=>{
    const res = axios.get('https://ecomerce-api-project.herokuapp.com/api/products')
    console.log(res.data)
})

const productsSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        products:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProductsAsync.pending,(state)=>{
            console.log('getProductsAsync Pending')
            state.isLoading=true
        }),
        builder.addCase(getProductsAsync.rejected,(state)=>{
            console.log('getProductsAsync Rejected')
            state.isLoading=false
        }),
        builder.addCase(getProductsAsync.fulfilled,(state,action)=>{
            state.isLoading=false
            state.products = action.payload
        })
    }
},
)
export default productsSlice.reducer