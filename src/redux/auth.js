import { createSlice } from "@reduxjs/toolkit";
const auth = createSlice({
    name:"authSlice",
    initialState:{
        login:{
            currentUser: null,
            isFetching: false,
            error: false,

        },
        register:{
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers:{
        loginStart:(state) =>{
            state.login.isFetching= true
        },
        loginSuccess:(state,action) =>{
            state.login.isFetching=true
            state.login.currentUser= action.payload;
            state.login.error = false
        },
        loginFailed: (state) =>{
            state.login.isFetching = false
            state.login.error = true
        },
        registerStart:(state) =>{
            state.register.isFetching= true
        },
        registerSuccess:(state,payload,action) =>{
            state.register.isFetching=true
            state.register.error = false
            state.register.success= action.payload;
        },
        registerFailed: (state) =>{
            state.register.isFetching = false
            state.register.error = true
            
        }
        
    }
})
export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed
} = auth.actions
export default auth.reducer