import React from 'react'
import flogo from '../assets/FooterLogo.png'
import twiter from '../assets/Twitter.png'
import insta from '../assets/Insta.png'
import linkedin from '../assets/LinkedIn.png'
import bfooter from '../assets/BgFooter.png'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>

        <div className=' flex flex-col mt-auto  gap-7'>
            <div className=' '>
                <img className='absolute -z-40  blur-3xl mt-[350px]' src={bfooter} alt="" />
            </div>
            <div className='flex flex-row mt-96'>
                <hr className="relative  w-[1500px] h-px my-8 bg-white border-0 opacity-25 justify-start"/>
                <div className='h-[250px] w-[350px] -mt-10'>
                    <img className='' src={flogo} alt="" />
                    <div className='flex flex-row justify gap-24 h-7 -mb-4 -ml-[53px] mt-5'>
                        <img className='' src={twiter} alt="" />
                        <img className='' src={insta} alt="" />
                        <img className='' src={linkedin} alt="" />
                    </div>
                </div>
                <hr className="relative w-[1500px] h-px my-8 bg-white border-0 justify-end opacity-25"/>
            </div>
            <div className='flex flex-col justify text-left  space-y-2 -mt-36 ml-[110px] opacity-90'>
                <Link className='font-Square'>Legal</Link>
                <Link className='font-Square'>Privacy Policy</Link>
                <Link className='font-Square'>Terms and Conditions</Link>
                <Link className='font-Square'>About us</Link>
            </div>
            <div className='flex flex-col justify text-left  space-y-2 -mt-36 ml-[1300px] opacity-90'>
                <Link className='font-Square'>Navigation</Link>
                <Link className='font-Square'>Home</Link>
                <Link className='font-Square'>Blog</Link>
                <Link className='font-Square'>Calculate</Link>
                <Link className='font-Square'>Our Term</Link>
            </div>
            <div className='ml-[850px]'>
                <hr className="w-px h-[102px] my-8 bg-white border-0 -mt-20 opacity-25 -ml-[85px]"/>
                <div className='flex flex-row mt-2 -ml-[60px]'>
                    <input 
                    type="text" 
                    placeholder='   Email' 
                    className='bg-zinc-400 opacity-30 w-56 text-left mr-14 -ml-48 rounded-s-md p-1 mb-1 placeholder-white text-xs font-extrabold   font-Square' 
                    />
                    <button className='relative bg-customGray w-40 -ml-14 text-customBlack font-bold font-Square rounded-e-md p-1 text-center mb-1'>
                        Submit
                    </button>
                </div>
            </div>  
        </div>
    </>
  )
}

export default Footer