import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { toast } from "react-toastify";
import { addUser } from "../feature/authSlice";


export const useAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [regUsers,setRegUsers] = useState(JSON.parse(localStorage.getItem('resUsers')) || [])
    console.log(regUsers)

    const {register,handleSubmit,reset,watch,formState:{errors}} = useForm();

    const handleLogin = (data) => {
        let user = regUsers.find((ele)=> ele.email === data.email && ele.password === data.password)

        if(!user){
            toast.error("Something went wrong...")
        }else{
            dispatch(addUser(user));
            localStorage.setItem('loggedInUser',JSON.stringify(user))
            toast.success("LogIn Successful...")
            navigate('/home')
        }

    }

    const handleRegister = (data) => {
        let arr = [...regUsers,data]
        setRegUsers(arr)
        localStorage.setItem('resUsers',JSON.stringify(arr))
        toast.success("User Registered...")
        navigate('/')
    }

    return {
        navigate,
        register,
        handleSubmit,
        reset,
        watch,
        errors,
        handleRegister,
        handleLogin
    }
}