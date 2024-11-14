import React from 'react'
import afboy from '../assets/africanboy.png';
import mdboy from '../assets/modernboy.png';
import boy from '../assets/boy.png';
import {useMediaQuery} from 'react-responsive'
import images from './Images.jsx'

function About() {
  let mail = "narulasahil2002@gmail.com";
  const isMobile = useMediaQuery({maxWidth : 767 })
  const isDesktop = useMediaQuery({minWidth : 767 })
  
  return (
<>
{/* Our Experts Section */}
<div className='mt-16'>
      <h1 className='text-3xl text-center font-bold font-montserrat'>
            Our <span className='text-customRed'>Experts</span>
          </h1>
          <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.
          </p>


    <div className={`flex flex-row gap-14 mt-16 ml-4 ${isMobile? 'flex flex-col' : ''}`}>

        <div className='flex flex-col'>
        <div className={`${isDesktop? 'border-4 rounded-full p-5':''} ${isMobile? 'border-4 rounded-full p-5 w-[450px] ml-14' : ''}`}>
          <img className='h-[380px] w-[400px] mt-4 mb-3' key={images.boy} src={images.boy} alt="" />
        </div>
          <div className='text-center -ml-28 mt-8'>
            <h1 className='ml-[99px] text-xl'>Albert Dera</h1>
            <p className={`max-w-sm mt-3 text-center text-gray-400 font-Square ml-36 ${isMobile? 'ml-[203px] max-w-md' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
          </div>
        </div>
      

      <div>
        <div className='flex flex-col'>
        <div className={`${isDesktop? 'border-4 rounded-full p-5':''} ${isMobile? 'border-4 rounded-full p-5 w-[450px] ml-14' : ''}`}>
          <img className={`${isDesktop?'h-[380px] w-[400px] mt-4 mb-3 ml-3':''} ${isMobile?'h-[380px] w-[400px] mt-4 mb-3 ml-1':''}`} key={images.afboy} src={images.afboy} alt="" />
        </div>
          <div className='text-center -ml-28 mt-8'>
            <h1 className={`${isDesktop?'ml-[115px] text-xl':''} ${isMobile? 'ml-[105px] text-xl' : ''} `}>Philip Martin</h1>
            <p className={`max-w-sm mt-3 text-center text-gray-400 font-Square ml-36 ${isMobile? 'ml-[203px] max-w-md' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex flex-col'>
        <div className={`${isDesktop? 'border-4 rounded-full p-5':''} ${isMobile? 'border-4 rounded-full p-5 w-[450px] ml-14' : ''}`}>
          <img className={`${isDesktop?'h-[380px] w-[400px] mt-4 mb-3 ml-3':''} ${isMobile?'h-[380px] w-[400px] mt-4 mb-3 ml-1':''}`} key={images.mdboy} src={images.mdboy} alt="" />
        </div>
          <div className='text-center -ml-28 mt-8'>
            <h1 className='ml-[115px] text-xl'>Austin Wade</h1>
            <p className={`max-w-sm mt-3 text-center text-gray-400 font-Square ml-36 ${isMobile? 'ml-[203px] max-w-md' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
          </div>
        </div>
      </div>
    </div>   
  </div>
{/* Let Us Know Your Concerns */}
    </>
  )
}

export default About