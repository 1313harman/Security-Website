import SignInWithGoogle from './SignInWithGoogle'
import React, { useEffect, useState } from 'react'
import { doc,getDoc } from "firebase/firestore";
import { useLocation,useNavigate } from 'react-router'
import {auth,db} from './firebase'
import Header from './Header';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [fieldData,setFieldData] = useState(null)
  
  const gotoHome = useNavigate()

  const handleLogin = async () =>{
    auth.onAuthStateChanged(async(user)=>{
      // console.log(user)
      // setUserDetail(user)
      // console.log(userDetail)
      const docRef = doc(db,"user",user.uid)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        // console.log(docSnap.data())
          setFieldData(docSnap.data())
          console.log(docSnap.data())
      }
      else{
        console.log("User is not loged in")
      }
    })
  }

  useEffect(()=>{
    if(fieldData)
    {
        if(email === fieldData.email && password === fieldData.pass)
        {
          console.log('You Loged In Successfully')
          gotoHome('/home')
        }
        else{
          console.log('Login Failed')
        }
    }
    else{
      console.log('Data Not Field!!!')
    }
  },[fieldData])

  return (
    <>
    <div className='justify ml-[580px] mt-32'>
      <div className='absolute bg-black h-[350px] w-[350px] rounded-lg bg-opacity-40'>
        <div className='flex flex-col mt-20'>
        <center><input placeholder='  email' className='border rounded-lg bg-black h-10 w-60 justify-center items-center' type="text" onChange={(e)=>setEmail(e.target.value)}/></center>
        <center><input placeholder='  password' className='border rounded-lg bg-black h-10 w-60 justify-center items-center mt-6' type="password" onChange={(e)=>setPassword(e.target.value)}/></center>
        <center><button type="submit" className='rounded-full mt-5 bg-customRed bg-opacity-45 w-24 text-center' onClick={handleLogin}>Login</button></center>
          <SignInWithGoogle />
        </div>
      </div>
    </div>
    </>
  )
}

export default Login