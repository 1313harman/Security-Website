import React from 'react'
import email from '../assets/email.png'
import loc from '../assets/office.png'
import phone from '../assets/phone.png'
import {Link} from 'react-router-dom'
import secrec from '../assets/Security_Rectangle.png';
import larrow from '../assets/leftarrow.png'
import rarrow from '../assets/rightarrow.png'
import images from './Images.jsx'
import MapComponent from './MapComponent'
import {useMediaQuery} from 'react-responsive'

function Contact() {
  let mail = "narulasahil2002@gmail.com";
  const isMobile = useMediaQuery({maxWidth : 767})
  const isDesktop = useMediaQuery({minWidth : 767})
  return (
    <>
          {/*Contact Us Section  */}
      {isMobile && (
      <div className='justify mt-32 text-center'>
        <h1 className='text-white font-montserrat font-semibold text-3xl'>How to <span className='text-customRed'>Contact Us</span></h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
      </div>
      )}

      <div className={`flex flex-row ml-40 ${isMobile ? 'flex flex-col ml-40' : ''}`}>
        <div className={`flex flex-col ml-14 ${isMobile ? '-ml-40' : ''}`}>
            <div className={`flex flex-row mt-16 ml-28 ${isMobile ? 'flex flex-col' : ''}`}>
                <img className={`h-[45px] w-[45px] ${isMobile? 'ml-[135px]' : ''} `} src={email} alt="" />
                <h1 className={`ml-4 mt-[6.5px] text-2xl font-Square ${isMobile ? 'ml-[80px] mt-[3px]' : ''}`}>Chat With Us</h1>
                {isMobile && (
                <Link className={`text-white opacity-75 text-left font-Square ml-44 ${isMobile ? 'ml-[51px]' : ''}`} to={mail}>narulasahil2002@gmail.com</Link>
              )}
            </div>
              {isDesktop && (
              <Link className={`text-white opacity-75 text-left font-Square ml-44`} to={mail}>narulasahil2002@gmail.com</Link>
            )}
            <div className={`flex flex-row mt-16 ml-28 ${isMobile ? 'flex flex-col' : ''}`}>
                <img className={`h-[45px] w-[45px] ${isMobile? 'ml-[135px]' : ''} `} src={phone} alt="" />
                <h1 className={`ml-4 mt-[6.5px] text-2xl font-Square ${isMobile ? 'ml-[128px] mt-[4px]' : ''}`}>Phone</h1>
                {isMobile && (
                  <p className={`text-white opacity-75 text-left font-Square ml-44 ${isMobile ? 'ml-[85px]' : ''}`}>+91 9878951458</p>
                )}
            </div>
                {isDesktop && (
                  <p className='text-white opacity-75 text-left ml-44'>+91 9878951458</p>
                )}
            <div className={`flex flex-row mt-16 ml-28 ${isMobile ? 'flex flex-col' : ''}`}>
                <img className={`h-[45px] w-[45px] ${isMobile? 'ml-[135px]' : ''} `} src={loc} alt="" />
                <h1 className={`ml-4 mt-[6.5px] text-2xl font-Square ${isMobile ? 'ml-[128px] mt-[5px]' : ''}`}>Office</h1>
                {isMobile && (
                  <Link className={`text-white opacity-75 text-center font-Square ml-44 ${isMobile ? '-ml-[25px] max-w-96' : ''}`} to={mail}>Hargobind Nagar,#29A Sirhind Road,Patiala,Punjab</Link>
                )}
            </div>
            {isDesktop && (
                <Link className='text-white opacity-75 text-left ml-44 max-w-56' to={mail}>Hargobind Nagar,#29A Sirhind Road,Patiala,Punjab</Link>
            )}
            
        </div>

        <div className={`flex flex-col ml-96 mt-8 ${isMobile ? '-ml-[105px]' : ''} `}>
            <div className='flex flex-col bg-black h-[550px] w-[450px] rounded-2xl gap-8 p-16'>
              <input className='bg-black border-2 rounded-lg border-white h-[50px] w-[350px] -ml-4 placeholder-white' placeholder='Your Name' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
              <input className='bg-black border-2 rounded-lg border-white h-[50px] w-[350px] -ml-4 placeholder-white' placeholder='Email' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
              <input className='bg-black border-2 rounded-lg border-white h-[50px] w-[350px] -ml-4 placeholder-white' placeholder='Subject' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
              <textarea className='bg-black border-2 rounded-lg border-white h-[150px] w-[350px] -ml-4 placeholder-white' placeholder='Message' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
            </div>
        </div>
      </div>
    
      <div className='ml-[100px] mt-32 mr-24'>
        <MapComponent />
      </div>

      <div className='mt-[500px]'>
        <div className='justify text-center'>
          
    
        </div>

        {/* Image and Concerns */}
      <div className={`${isDesktop? 'mt-32' : ''} ${isMobile? 'mt-72' : ''}`}>
        <div className='justify text-center'>
          <h1 className='text-customRed font-montserrat font-semibold text-3xl'>Let Us Know Your Concern</h1>
          <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.
          </p>
        </div>
        
        {/* Image and Concerns */}
        <div className={`relative ${isDesktop? 'flex flex-row justify-center ' : ''} ${isMobile? 'flex flex-col justify-center' : ''}`}>
          <div className={`${isDesktop? 'flex flex-row h-auto w-auto mb-5 mt-8' : ''}  ${isMobile? 'flex flex-col h-auto w-auto mb-5 mt-8' : ''}`}>
            {/* Adjusted height and width */}
            {isDesktop && (
                <img className='object-cover h-[650px] w-[650px] rounded-2xl rounded-e-none' key={images.secrec} src={images.secrec} alt="" />
            )}
            {isMobile && (
                <img className='rounded-t-2xl w-[565px] ml-5' src={images.frame28} alt="" />
            )}
            <div className={` ${isDesktop? 'bg-black h-[651px] w-[750px] rounded-2xl rounded-s-none' : ''} ${isMobile? 'bg-black h-[510px] w-[565px] ml-5 rounded-b-2xl' : ''}`}>
              <div className='flex flex-col py-16'>
                <h1 className='text-lg text-left px-7 py-2'>What do you expect from us?</h1>
                <div >
                  <div className='flex flex-col text-left px-7 space-y-2 mt-2'>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option A</span>
                    </label>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option B</span>
                    </label>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option C</span>
                    </label>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option D</span>
                    </label>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option E</span>
                    </label>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option F</span>
                    </label>
                    <label className='flex items-center space-x-3'>
                      <input
                        type='radio'
                        name='option'
                        className='appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-sky-400 cursor-pointer opacity-65'
                      />
                      <span className='text-white'>Option G</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={`${isDesktop? 'flex flex-row gap-36 justify-center mt-[210px] ml-[520px]' : ''}${isMobile? 'flex flex-row gap-36 justify-center mt-[75px]  ml-[326px]' : ''}`}>
                  <button className='hover:bg-red-400'><img className='size-5 w-6' src={images.larrow} alt="" /></button>
                  <button className='hover:bg-red-400'><img className='size-5' src={images.rarrow} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>

  )
}

export default Contact