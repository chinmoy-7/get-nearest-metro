import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
const MyContext=createContext()

const MyConetxtProvider=({children})=>{
    const [login,setLogin]=useState({email:"",password:"",cPassword:""})
    const [isLoading,setisLoading]=useState(false)
    const navigate=useNavigate()

    const notify = (type,msg) =>{
        if(type=="faliure"){
            
        toast.warning(msg, {
            position: toast.POSITION.RIGHT,
            autoClose:3000,
            toastId:1
          });
          return
        }
        if(type=="email"){
            
        toast.warn(msg, {
            position: toast.POSITION.RIGHT,
            autoClose:1000,
            toastId:1
          });
          return
        }
        if(type=="password"){
            
        toast.warn(msg, {
            position: toast.POSITION.RIGHT,
            autoClose:1000,
            toastId:1
          });
          return
        }
        if(type=="failPass"){
            
        toast.warn(msg, {
            position: toast.POSITION.RIGHT,
            autoClose:1000,
            toastId:1
          });
          return
        }
        toast.success(msg, {
            position: toast.POSITION.RIGHT,
            autoClose:3000,
            toastId:1
          });
    }

    const authSignup=async ()=>{  
        let emailRegex=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        setisLoading(true)
        if(!emailRegex.test(login.email)){
            notify("email","Enter a valid email")
            setisLoading(false)
            return
        }
        if(login.password.length<8){
            notify("password","Password length must me minimum 8 characters")
            setisLoading(false)
            return
        }

        if(login.cPassword!==login.password){
            notify("failPass","Password Doesn't Match")
            setisLoading(false)
            return
        }
        let res = await axios.post("http://localhost:4000/sign-up",login)
        setisLoading(false)
        if(res.data.message=="Email Already Exists"){
            notify("faliure",res.data.message)
            return
        }
        setTimeout(()=>navigate("/"),4000)
        notify("","Redirecting in 4 sec")

    }

    const authLogin=async()=>{
        let emailRegex=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        setisLoading(true)
        if(!emailRegex.test(login.email)){
            notify("email","Enter a valid email")
            setisLoading(false)
            return
        }
        const result = await axios.post("http://localhost:4000/login",login)
        console.log(result)
        if(result.data.status==403){
            notify("password","Email/Password is incorrect")
            return
        }
        if(result.data.status==404){
            notify("password","User Doesn't exists")
        }
        sessionStorage.setItem("token",result.data.jwt_token)
        notify("success","User will be redirected in 3 second")
        setTimeout(()=>{
            navigate("/")
        },3000)

    }
    return(
        <MyContext.Provider value={{authSignup,setLogin,login,isLoading,authLogin}}>
            {children}
        </MyContext.Provider>
    )
}

export {MyConetxtProvider,MyContext}