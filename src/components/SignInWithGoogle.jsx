import React, { useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import WellcomePage from  './WellcomePage'
import { doc,setDoc } from "firebase/firestore";
import {auth,db} from './firebase'

function SignInWithGoogle() {
    const gotoHome = useNavigate()
    const gotoRgstr = useNavigate()
    

    function googleLogin (){
        const provider =new GoogleAuthProvider()
        signInWithPopup(auth,provider).then(async(result)=>{
            let user = result.user
            console.log(user?.email,user?.displayName,user?.photoURL)
            if(user)
            {
                await setDoc(doc(db,"user",user.uid),{
                    email:user?.email,
                    firstName:user?.displayName,
                    lastName:'',
                    photo:user?.photoURL,
                    pass:' '
                })
            }
            console.log("User Registered Successfully!")
            gotoHome('/home')
    })}


    

    const gotoRegister = () =>{
        gotoRgstr('/register')
    }

  return (
    <>
        
        <div>
            <div className='flex flex-col justify-center'>
                <button className='rounded-md px-2 py-2 w-48 bg-blue-500 mt-5 ml-20' style={{display:"flex",justifyContent:"center"}} onClick={googleLogin}>
                Sign In With Google 
                </button>
                <button className=' text-gray-500 opacity-75 text-center' onClick={gotoRegister}><span>Do Register if not existed user.....</span></button>
            </div>
        </div>

        
    </>
  )
}

export default SignInWithGoogle