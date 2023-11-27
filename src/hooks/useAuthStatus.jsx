import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

const useAuthStatus = () => {
    const [loggedIn,setLoggedin]=useState(false);
    const [chekingStatus,setChekingStatus]=useState(true)

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedin(true)
            }
            setChekingStatus(false)
        })
    },[]);
  return {loggedIn,chekingStatus};
}

export default useAuthStatus
