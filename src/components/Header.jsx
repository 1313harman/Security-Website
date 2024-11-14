import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {useMediaQuery} from 'react-responsive'
import blshadow from '../assets/Black-Shadow.png'
import { doc,getDoc } from "firebase/firestore";
import { useLocation,useNavigate } from 'react-router'
import {auth,db} from './firebase'
import images from './Images';
import Login from './Login';
import {signOut} from 'firebase/auth'

function Header() {
  const [isClicked, setClicked] = useState('');
  const [isShow,setIsShow] = useState(false)
  const [userDetail,setUserDetail] = useState(null)
  const [show,setShow] = useState(false)
  const gotoLogin = useNavigate()

  const handleClick = (linkname) => {
    setClicked(linkname);
  };

  const isMobile = useMediaQuery({maxWidth : 767})
  const isDesktop = useMediaQuery({minWidth : 767})


  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user)=>{
    const docRef = doc(db,"user",user.uid)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists())
    {
        setUserDetail(docSnap.data())
    }
    else{
      console.log('User Not Exist')
    }
  })
  }

  const handleShowMore = () =>{
    setShow(true)
    fetchUserData()
  }
  const handleShowLess = () =>{
    setShow(false)
    setUserDetail(null)
  }

  function handleLogout(){
    signOut(auth).then(()=>{
      console.log("User Logout Succefully!!")
      setUserDetail(null)
    }).catch((bug)=>{
      console.error("Error logging out: ", bug);
    })
  }
  return (
  
    <header className={`${isDesktop? 'relative z-10 flex flex-row bg-customBg text-white bg-opacity-100 h-[80px] w-[1518px]' : '' } ${isMobile? 'relative z-10 flex flex-row bg-customBg text-white bg-opacity-100 h-[80px] w-[5914px]' : '' }`}>
      <div className="container mx-auto flex justify-between items-center py-2 mr-72">
        <div className="flex absolute -z-20 items-center mr-48">
          <Link path='/home'><img src={logo} alt="Logo" className=" h-[80px] w-[90px]" /></Link>
        </div>
    
        <button className='absolute  ml-80' onClick={show ? handleShowLess : handleShowMore}>{show ? 'Hide' : 'Show User'}</button>
        {show &&(
          <>
              <div>
                <div className='flex flex-row'>
                    <img className='absolute -z-20 ml-96 h-11' src={userDetail?.photo} alt="" />
                    <div className='flex flex-col'>
                      <p className='ml-[450px]'>{userDetail?.firstName}</p>
                      <p className='ml-[450px]'>{userDetail?.email}</p>
                    </div>
                </div>
              </div>
          </>
        )}
      </div>
      {isMobile && (
        <>
          <div className='absolute size-7 ml-[558px] mt-8'>
              <button onClick={()=>setIsShow(prevState=>!prevState)}> <img className='absolute z-20 -mt-5' src={images.mbutton} alt="" /></button>
          </div>
        </>
      )}

    {isShow && (
      <>
        <div className='absolute  flex flex-col'>
          <div className='absolute -z-20 bg-black bg-opacity-80 h-[40px] w-[815px] -ml-[205px] mt-20'>
            <nav className="flex flex-col space-x-3 gap-1 items-center whitespace-nowrap mx-64 bg-black w-[1500px] -ml-3">
              <Link
                to="/home"
                className={`hover:text-customRed text-lg font-Square -ml-[950px] h-[29px] w-[67px] w- ${isClicked === 'home' ? 'text-customRed' : ''}`}
                onClick={() => handleClick('home')}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`hover:text-customRed text-lg font-Square h-[29px] w-[130px] ${isClicked === 'services' ? 'text-customRed' : ''}`}
                onClick={() => handleClick('services')}
              >
                Our Services
              </Link>
              <Link
                to="/about"
                className={`hover:text-customRed font-Square h-[29px] -ml-[950px] w-[100px] text-lg ${isClicked === 'about' ? 'text-customRed' : ''}`}
                onClick={() => handleClick('about')}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`hover:text-customRed font-Square -ml-[950px] h-[29px] w-[125px] text-lg ${isClicked === 'contactus' ? 'text-customRed' : ''}`}
                onClick={() => handleClick('contactus')}
              >
                Contact Us
              </Link>
              <Link
                to="/blogs"
                className={`hover:text-customRed font-Square -ml-[950px] h-[29px] w-[65px] text-lg ${isClicked === 'blogs' ? 'text-customRed' : ''}`}
                onClick={() => handleClick('blogs')}
              >
                Blogs
              </Link>
              <Link
                to="/news"
                className={`hover:text-customRed font-Square -ml-[950px] h-[29px] w-[65px] text-lg ${isClicked === 'news' ? 'text-customRed' : ''}`}
                onClick={() => handleClick('news')}
              >
                News
              </Link>

            </nav>                    
          </div>
        </div>
      </>
    )}

    {isDesktop &&(
      <div className="absolute z-10 mr-10 mt-6 ml-[310px] left-[230px]">
        {/* Navigation Section */}
        <nav className="flex space-x-3 gap-1 items-center whitespace-nowrap mx-64">
          <Link
            to="/home"
            className={`hover:text-customRed text-lg font-Square h-[29px] w-[67px] w- ${isClicked === 'home' ? 'text-customRed' : ''}`}
            onClick={() => handleClick('home')}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`hover:text-customRed text-lg font-Square h-[29px] w-[130px] ${isClicked === 'services' ? 'text-customRed' : ''}`}
            onClick={() => handleClick('services')}
          >
            Our Services
          </Link>
          <Link
            to="/about"
            className={`hover:text-customRed font-Square h-[29px] w-[100px] text-lg ${isClicked === 'about' ? 'text-customRed' : ''}`}
            onClick={() => handleClick('about')}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-customRed font-Square h-[29px] w-[125px] text-lg ${isClicked === 'contactus' ? 'text-customRed' : ''}`}
            onClick={() => handleClick('contactus')}
          >
            Contact Us
          </Link>
          <Link
            to="/blogs"
            className={`hover:text-customRed font-Square h-[29px] w-[65px] text-lg ${isClicked === 'blogs' ? 'text-customRed' : ''}`}
            onClick={() => handleClick('blogs')}
          >
            Blogs
          </Link>
          <Link
            to="/news"
            className={`hover:text-customRed font-Square h-[29px] w-[65px] text-lg ${isClicked === 'news' ? 'text-customRed' : ''}`}
            onClick={() => handleClick('news')}
          >
            News
          </Link>
          <Link
            className={`hover:text-customRed font-Square h-[29px] w-[63px] text-lg ${isClicked === 'login' ? 'text-customRed' : ''}`}
            onClick={handleLogout}
          >
            Logout
          </Link>
        </nav>
      </div>
    )}
    </header>
  );
}

export default Header;