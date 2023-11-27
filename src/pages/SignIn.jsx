import React, { useState } from 'react';
import { FaEyeSlash,FaEye  } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
import {toast} from 'react-toastify';

const SignIn = () => {

  const [showPassword,setShowPassword]=useState(false)
  const [formData,setFormData]=useState({
    email:'',
    password:""
  });

  const {email,password}=formData;
  const onChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
    e.preventDefault()
  }

  // console.log(formData)

  const navigate = useNavigate()

  const onsubmit = async(e)=> {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      if(userCredential.user){
        navigate('/')
      }
    } catch (error) {
      toast.error("bad user creadentials")
    }
  }

  return (
    <div>
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>

        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
            <img className='w-full rounded-2xl' src='https://img.freepik.com/free-vector/business-success-depends-unlocking-keys-leadership-success-team-unity_1150-65806.jpg?w=1380&t=st=1700921571~exp=1700922171~hmac=f4e6b328142138c142d33d20bf069ed9e2819d6e90de0630dd51f907d1633c2a' alt='lock-img'/>
          </div>

          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onClick={onsubmit}>

              <div className='mb-6'>
                <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type='email' id='email' value={email} onChange={onChange} placeholder='Email address' />
              </div>

              <div className='relative mb-6'>
                <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type={showPassword?"text":"Password"} id='password' value={password} onChange={onChange} placeholder='password' />
                <div className='absolute right-3 top-3 text-xl cursor-pointer'>
                {
                  showPassword? <FaEye onClick={()=>setShowPassword(!showPassword)}/> : <FaEyeSlash onClick={()=>setShowPassword(!showPassword)} />
                }  
                </div>            
              </div>

              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg '>
                <p className='mb-6'>Don't have a account? <Link className='ml-1 text-red-600 hover:text-red-700 transition duration-200 ease-in-out' to={'/sign-up'}>Register</Link></p>
                <p><Link  className=' text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out' to={'/forgot-password'}>Forgot password?</Link></p>
              </div>

              <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-md active:bg-blue-800'>Sign In</button>
            </form>

            <div className='my-4 flex items-center before:border-t  before:flex-1 before:border-gray-300   after:border-gray-300 after:border-t  after:flex-1'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>

            <OAuth/>

          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn
