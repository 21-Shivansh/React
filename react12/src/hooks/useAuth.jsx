import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/MyContext";
import { useNavigate } from "react-router";


export const useAuth = () => {
    const {register,reset,watch,handleSubmit,formState:{errors}} = useForm({
        mode:'onBlur'
    })

    const { registeredUser,setLoginedUser,setRegisteredUser} = useContext(Auth);

    const navigate = useNavigate();


    //Login
    const handleLogin = (data) => {
        console.log(data)
        const user = registeredUser.find( ele => ele.email === data.email && ele.password === data.password);
        if(!user){
            alert('Invalid Credentials')
            return
        }else{
            setLoginedUser(data)
            navigate('/home')
        }
        reset();
    }
    

    //Register 
    const password = watch("password")
    
    const handleRegister = (data) => {

        console.log(data)
        setRegisteredUser([...registeredUser,data]);
        navigate('/')
        reset();
      
    }

    const handleLogOut = ( ) => {
        setLoginedUser(null)
        navigate('/')
        // console.log('hello')
    }



    return {
        register,
        handleLogin,
        navigate,
        handleRegister,
        password,
        handleSubmit,
        errors,
        handleLogOut
    }
}