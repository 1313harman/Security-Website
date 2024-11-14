import React, { useEffect, useState } from 'react'
import { doc,getDoc } from "firebase/firestore";
import { useLocation,useNavigate } from 'react-router'
import {auth,db} from './firebase'

function WellcomePage() {
  const [userDetail,setUserDetail] = useState(null)
  const gotoHome = useNavigate()
  const navigate=useNavigate()
  
  const fechUserData = async () =>{

    auth.onAuthStateChanged(async(user)=>{
      // console.log(user)
      // setUserDetail(user)
      // console.log(userDetail)
      const docRef = doc(db,"user",user.uid)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        setUserDetail(docSnap.data())
        console.log(userDetail)
      }
      else{
        console.log("User is not loged in")
      }
    })
  }

  useEffect(()=>{
    fechUserData()
  },[])

  
  const gotoHomeNow = () =>{
    gotoHome('/')
  }

  function gotoLogin(){
    navigate('/login')
  }
  return (
    <>
    {userDetail?(
        <div>
            <div className='text-center mt-40'>
              <div className='flex justify-center'>
                <img  src={userDetail?.photo} alt="" />
              </div>
              <h2 className='font-Square'>Wellcome, {userDetail?.firstName}{userDetail?.lastName}</h2>
              <h3 className='font-montserrat'>Email, {userDetail?.email}</h3>
              <button className='bg-transparent text-gray-400 text-xl mt-3 font-montserrat' onClick={gotoHomeNow}><span>goto home page...</span></button>
            </div>
            
        </div>
        ):(
          <>
            <div className='flex justify-center'>
              <button onClick={gotoLogin}>Please Login Again!!</button>
            </div>
          </>
        )}
    </>
  )
}

export default WellcomePage