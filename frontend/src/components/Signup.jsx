import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Rings } from 'react-loader-spinner'
import { MyContext } from '../context/ContextProvider'
import { ToastContainer } from 'react-toastify'
import '../../node_modules/react-toastify/dist/ReactToastify.css';
export default function Signup() {
    const auth = useContext(MyContext)
  return (
    <>
        <div className="h-screen w-screen bg-signup bg-cover bg-no-repeat  flex justify-center items-center ">
                <ToastContainer /> 
            <div className=' sm:h-5/6 h-4/6 sm:w-4/6 w-5/6  flex  backdrop-blur-lg bg-white/5'>
                <div className='w-1/2 sm:flex flex-col justify-center  hidden  gap-6  items-center h-full'>
                    <div className=' h-1/2 flex flex-col  justify-center gap-6'>
                    <h1 className='sm:text-7xl  text-white'>Signup</h1>
                    <h2 className='sm:text-2xl  text-white'>Already have an Account?</h2>
                    <Link className=' text-orange-500 text-lg font-medium' to="/login">Login now.</Link>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full h-full'>

                    <form action="" className='h-full w-full  flex flex-col justify-center gap-10 items-center'>
                        <div className='flex flex-col w-3/4  justify-center items-center gap-4'>
                            <label htmlFor="email" className='self-start text-white text-xl'>Email</label>
                            <input type="email" required name="email" id="email" onChange={(e)=>auth.setLogin({...auth.login,email:e.target.value})} placeholder='Enter Email' className='w-full h-10 bg-white/0 border-b-2 focus:outline-none text-white'/>
                        </div>
                        <div className='flex flex-col w-3/4  justify-center items-center gap-4'>
                            <label htmlFor="password"  className='self-start text-white text-xl'>Password</label>
                            <input type="password" required onChange={(e)=>auth.setLogin({...auth.login,password:e.target.value})} name="password" id="password" placeholder='Enter Password' className='w-full h-10 bg-white/0 border-b-2 focus:outline-none text-white'/>
                        </div>
                        <div className='flex flex-col w-3/4  justify-center items-center gap-4'>
                            <label htmlFor="cpassword" className='self-start text-white text-xl'>Confirm Password</label>
                            <input type="password" onChange={(e)=>auth.setLogin({...auth.login,cPassword:e.target.value})}  name="cpassword" id="cpassword" placeholder='Retype Password' className='w-full h-10 bg-white/0 border-b-2 focus:outline-none text-white'/>
                        </div>
                        <div className='flex flex-col w-3/4  justify-center items-center gap-4'>
                            <div className='w-full flex'>
                        <button type='button' className='button sm:w-1/2 w-1/2 bg-white/90 rounded-md text-orange-600 text-xl bir h-8 sm:h-12 ' onClick={auth.authSignup}>Sign up</button>
                        <div className={auth.isLoading?"visible":"hidden"}>
                        <Rings
                            height="60"
                            width="60"
                            color="#4fa94d"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
                            />
                            </div>
                            </div>
                        <p className=' sm:hidden text-white text-sm font-medium'>Already Have an Account?<Link className='text-orange-500 ' to="/login">Login now.</Link> </p>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </>
  )
}
