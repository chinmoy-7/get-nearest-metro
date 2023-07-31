import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/ContextProvider'
import axios from 'axios'
export default function Metro() {
  const {handleLogout} = useContext(MyContext)
  const [coord,setCoord]=useState({long:"",lat:""})

  const getCoord=async()=>{
    navigator.geolocation.getCurrentPosition(async (loc)=>{
      await setCoord({lat:loc.coords.latitude,long:loc.coords.longitude})
    })
  }
  useEffect(()=>{
    getCoord()
  },[])
  const getMetro=async()=>{
    console.log(coord)
    const result = await axios.get("https://nearby-metro-service.onrender.com/get-station",coord)
    console.log(result)

  }
  return (
    <>
      <div className='w-screen h-screen bg-metro flex flex-col gap-10'>
        <header className='h-1/5 w-full  flex flex-col justify-center items-center'>
          <button className=' md:absolute md:right-1 md:top-100 h-12 sm:w-32 w-20 bg-red-500' onClick={handleLogout}>Logout</button>
          <button className='h-1/2 w-4/6 bg-white mt-5 text-red-500 text-bold md:text-5xl rounded-lg' onClick={getMetro}>Find Your Nearest Metro</button>
        </header>
        
      </div>
    </>
  )
}
