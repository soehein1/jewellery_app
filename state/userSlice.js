import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";
import axios from "axios";
import * as secureStorage from 'expo-secure-store'




export const getUserAsync = createAsyncThunk('user/getUserAsync', async (key, thunkAPI) => {
    try {

        const res = await axios.get('https://ecomerce-api-project.herokuapp.com/api/user/me', {
            headers: {
                'authorization': "Bearer " + key,
                "Conten-Type": "application/json"
            }
        })
        return thunkAPI.fulfillWithValue(res.data.user)

    } catch (error) {
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
        return thunkAPI.rejectWithValue({ 'error': error.message })

    }
})



export const loginAsync = createAsyncThunk("user/loginUserAsync", async (user, thunkAPI) => {
    try {
        const res = await axios.post('https://ecomerce-api-project.herokuapp.com/api/user/login',
            {
                "email": user.email,
                "password": user.password
            })
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data)
        }
        return thunkAPI.rejectWithValue({ "error": res.data })

    } catch (error) {
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
        return thunkAPI.rejectWithValue({ 'error': "something went wrong" })

    }
})




export const postUserAsync = createAsyncThunk('user/createUserAsync', async (user, thunkAPI) => {
    try {
        const res = await axios.post("https://ecomerce-api-project.herokuapp.com/api/user/register", user)
        console.log(res.data)
        if (res.status === 201) {

            return thunkAPI.fulfillWithValue(res.data)
        }
        return thunkAPI.rejectWithValue(res.data)
    } catch (error) {
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
        return thunkAPI.rejectWithValue({"error":error.message})
    }

})



const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        initializing :false,
        isLoading: false,
        isFatching: false,
        isSuccess: false,
        message: ''

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
            state.initializing = true
            state.isLoading = true
            state.isFatching = true
        });
        builder.addCase(getUserAsync.fulfilled, (state, action) => {
            state.initializing = false
            state.user = action.payload
            state.isLoading = false
            state.isFatching = false
            state.isSuccess = true
        });
        builder.addCase(getUserAsync.rejected, (state, action) => {
            state.initializing = false
            state.isLoading = false
            state.isSuccess = false
            state.user = null
        });

        /////////////////////////////////////////////////////////////LOGIN USER///////////////////////////////////////////////
        builder.addCase(loginAsync.pending, (state) => {
            state.isFatching = true
            state.message = 'loading....'
        });
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            const data = JSON.stringify(action.payload.token)
            secureStorage.setItemAsync('token', data)
            state.user = action.payload.user
            state.message = ''

        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.user = null
            state.isSuccess = false
            state.message = action.payload

        });
        //////////////////////////////////////////////////////////////SIGNUP USER//////////////////////////////////////////////
        builder.addCase(postUserAsync.pending, (state => {
            console.log('pending')
        }));
        builder.addCase(postUserAsync.rejected, (state, action) => {

            console.log('rejected', action.payload)
        });
        builder.addCase(postUserAsync.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer