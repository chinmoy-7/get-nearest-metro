import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { MyContext } from '../context/ContextProvider'
export default function Protected({isLoggedIn,children}) {
    const auth=useContext(MyContext)
    const token = sessionStorage.getItem("token")
    console.log(token,"<=======token")
    if(!token){
        return <Navigate to="/" replace/>
    }
  return children
}
