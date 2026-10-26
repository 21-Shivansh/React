import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"


export const useAuth = () => {
    const navigate = useNavigate()
    const [regUsers,setRegUsers] = useState(localStorage.getItem('resUsers') || [])

    const {register,handleSubmit,reset,watch,formState:{errors}} = useForm();

    const handleLogin = (data) => {
        console.log(data)

        // Login logic will come here

        navigate('/home')
    }

    const handleRegister = (data) => {
        let arr = [...regUsers,data]
        setRegUsers(arr)
        localStorage.setItem('resUsers',JSON.stringify(regUsers))
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