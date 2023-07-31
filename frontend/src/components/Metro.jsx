import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'
export default function Metro() {
  const {handleLogout} = useContext(MyContext)
  return (
    <>
      <div className='w-screen h-screen bg-metro flex flex-col gap-10'>
        <header className='h-1/5 w-full  flex flex-col justify-center items-center'>
          <button className=' md:absolute md:right-1 md:top-100 h-12 sm:w-32 w-20 bg-red-500' onClick={handleLogout}>Logout</button>
          <button className='h-1/2 w-4/6 bg-white mt-5 text-red-500 text-bold md:text-5xl rounded-lg'>Find Your Nearest Metro</button>
        </header>
        
      </div>
    </>
  )
}
