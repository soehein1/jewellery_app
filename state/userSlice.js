import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";
import axios from "axios";
import * as secureStorage from 'expo-secure-store'

export const getUserAsync = createAsyncThunk('user/getUserAsync', async (token) => {
    try {
        const res = await axios.get('https://ecomerce-api-project.herokuapp.com/api/user/me', {
            headers: {
                'authorization': "Bearer " + token,
                "Conten-Type": "application/json"
            }
        })
        console.log(res.status)
        return res.data.user

    } catch (error) {
        console.log(error)
    }
})
export const loginAsync = createAsyncThunk("user/loginUserAsync", async (user, thunkAPI) => {
    try {
        const res = await axios.post('https://ecomerce-api-project.herokuapp.com/api/user/login',
            {
                "email": user.email,
                "password": user.password
            })
        console.log("Login ", res.data)
        if (res.status === 200) {
            return res.data
        }

    } catch (error) {
        console.log("Error   ", error)
        thunkAPI.rejectWithValue(error)

    }
})

export const postUserAsync = createAsyncThunk('user/createUserAsync', async (user) => {
    //here logic goes
    try {
        const res = await axios.post("https://ecomerce-api-project.herokuapp.com/api/user/register", user)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
        return error.message
    }

})

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoading: false,
        isFatching: false,
        isSuccess: false,

    },
    reducers: {
        setUser: (state, action) => {

            if (action.payload === null) {
                state.user = null
                state.isLoading = false
            } else {
                const data = JSON.parse(action.payload)
                state.user = data.user
                state.isLoading = false

            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAsync.pending, (state) => {
            console.log('getUserAsync Pending')
            state.isLoading = true
            state.isFatching = true
        })
        builder.addCase(getUserAsync.rejected, (state) => {
            console.log('getUserAsync Rejected')
            state.isLoading = false
            state.isSuccess = false
            state.isFatching = false
        })
        builder.addCase(getUserAsync.fulfilled, (state, action) => {
            console.log('getUserAsync Fulfilled')

            state.user = action.payload
            state.isLoading = false
            state.isFatching = false
            state.isSuccess = true
        }),
            /////////////////////////////////////////////////////////////LOGIN USER///////////////////////////////////////////////
            builder.addCase(loginAsync.pending, (state) => {
                console.log('Login Pending')
                state.isFatching = true
            }),
            builder.addCase(loginAsync.fulfilled, (state, action) => {
                const data = JSON.stringify(action.payload)
                secureStorage.setItemAsync('data', data)
                state.user = action.payload.user

                console.log("loginAsync Fulfilled", action.payload.user)
            }),
            builder.addCase(loginAsync.rejected, (state) => {
                console.log('LoginAsync Rejected')
                state.isSuccess = false
            }),
            //////////////////////////////////////////////////////////////SIGNUP USER//////////////////////////////////////////////
            builder.addCase(postUserAsync.pending, (state => {
                console.log('pending')
            })),
            builder.addCase(postUserAsync.rejected, (state) => {
                console.log('rejected')
            }),
            builder.addCase(postUserAsync.fulfilled, (state, action) => {
                console.log(action.payload)
            })
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer