import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const Header = () => {
  const [pageState,setPageState]=useState('Sign in')
    const location = useLocation();
    const navigation = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          setPageState("Profile")
        }else{
          setPageState("Sing in")
        }
      })
    })

    const pathMacthRound = (route) => {
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <img onClick={()=>navigation('/')} className='h-5 cursor-pointer' src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo'/>
        </div>
        <nav>
            <ul className='flex space-x-10'>
                <li onClick={()=>navigation('/')} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-white ${pathMacthRound("/") && "text-black border-b-red-500"}`}>Home</li>
                <li onClick={()=>navigation('/offers')} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-white ${pathMacthRound("/offers") && "text-black border-b-red-500"}` }>Offers</li>
                <li onClick={()=>navigation('/profile')} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-white ${(pathMacthRound("/sign-in") || pathMacthRound("/profile")) && "text-black border-b-red-500"}`}>{pageState}</li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
