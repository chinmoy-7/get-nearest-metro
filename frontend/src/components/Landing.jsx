import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
  return (
   <>
    <div className="h-screen w-screen bg-train bg-cover bg-no-repeat  flex flex-col ">
        <header className='h-1/5  text-white flex '>
            <div className='w-1/2  h-full flex justify-start items-center '>
                <img  src="metro.png" alt="" className='lg:mb-8 lg:ml-10'/>
            </div>
            <div className='w-1/2 flex justify-end items-center gap-6 lg:gap-10 '>
            <Link className='bg-green-500 w-20 h-12 lg:w-1/4 lg:h-10 rounded-md' to="/login"><button className='button rounded-md w-full bg-red-500 h-full'>Login</button></Link>
            <Link className='bg-violet-500  w-20 h-12 lg:w-1/4 lg:h-10 lg:mr-10 mr-5 rounded-md' to="/signup"><button className='button rounded-md w-full bg-red-500 h-full'>Register</button></Link>
            </div>
        </header>
        <div className='h-4/5 flex justify-center items-center lg:items-start '>
            <div className=' lg:h-5/6 h-4/6 lg:w-4/6 w-5/6  flex  flex-col justify-center gap-6 items-center backdrop-blur-md bg-white/5'>
                <h1 className='text-white  lg:text-6xl text-2xl font-bold z-10 text-center leading-normal'>Find out your nearest<br/> Metro Station In Delhi</h1>
                <Link className='lg:w-1/5  border-4 lg:border-8 border-white' to="/login"><button className='button w-full text-white text-2xl' >Find Out Now</button></Link>
            </div>
        </div>
    </div>
   </>
  )
}

export default Landing