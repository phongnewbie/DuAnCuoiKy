import axios from "axios"
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./auth"

export const loginUser = async(user,dispatch,navigate) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/routes/apiLogin/login",user)
        console.log(user);
        dispatch(loginSuccess(res.data));
        console.log(res.data);
        navigate("/")
    } catch (error) {
       dispatch(loginFailed())
        console.log(error)
        
    }
}

export const registerUser = async(user,dispatch,navigate)=>{
    dispatch(registerStart)
    try {
        await axios.post("http://localhost:8000/routes/apiLogin/register",user);
        dispatch(registerStart());
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed(error))
    }
}

