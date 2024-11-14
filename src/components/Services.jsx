import React from 'react';
import {useMediaQuery} from 'react-responsive'
import s1 from '../assets/Services1.png'
import s2 from '../assets/Services2.png'
import s3 from '../assets/Services3.png'
import s4 from '../assets/Services4.png'
import s5 from '../assets/Services5.png'
import s6 from '../assets/Services6.png'
import bulb from '../assets/Bulb.png'
import officer from '../assets/officer.png'
import cctv2 from '../assets/cctv2.png'
import comp from '../assets/computer.png'
import off2 from '../assets/Officer2.png'
import evsec from '../assets/eventSec.png'
import larrow from '../assets/leftarrow.png'
import rarrow from '../assets/rightarrow.png'
import tloobgcolor from '../assets/takealookbgcolor.png'
import man from '../assets/Man.png'
import proman from '../assets/proffesionalman.png'
import cldman from '../assets/coldman.png'
import elpse from '../assets/Ellipse530.png'; 
import obgcolor from '../assets/oldbgcolor.png'

import {ClipLoader} from 'react-spinners'


function Services() {
  const isMobile = useMediaQuery({ maxWidth : 767 })
  const moveForward = () =>{

  }

  const moveBack = () =>{
    
  }
  return (
  <>
    {/* 1st starts here */}
    <div className='justify text-center mt-40'>
        <h1 className='font-semibold font-montserrat text-3xl'>Take A Look At <span className='text-customRed'>Services We Provide</span></h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
        
        <div className='flex flex-row gap-36'>
        
          {/* 1st card  */}
           <div className=" rounded-lg w-72 p-3 bg-black mt-9 max-h-96 mb-20 ml-5">
              <img className='size-11 w-14 mt-8 mb-4' src={cctv2} alt="" />
              <h2 className='text-white text-left text-lg  font-Square mt-2'>Private Investigation Services</h2>
              <p className=' text-gray-400 mt-4  max-w-5xl justify-center text-left font-Square'>We can help you find legal and efficient solutions to your problems using expert private investigator </p>
              <div className='justify text-left mb-6 mt-2'>
              <div className='justify text-left mt-6'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
              </div>
           </div>
          {/* 2nd Card */}
           <div className="rounded-lg w-72 p-3  mt-9 max-h-96 mb-20 ml-5">
              <img className='size-12  w-14 mt-7 mb-4' src={comp} alt="" />
              <h2 className='text-white text-left text-lg  font-Square mt-2'>Private Investigation Services</h2>
              <p className=' text-gray-400 mt-4  max-w-5xl justify-center text-left font-Square'>Personal affairs, missing family members and matrimonial investigations. Affordable and legal. </p>
              <div className='justify text-left mt-6'>
                <button className="bg-customRed rounded-full font-Square p-2 w-[167px] h-[37px] text-white text-center">
                  Know More
                </button>
              </div>
           </div>   
          {/* 3rd card */}
           <div className="rounded-lg w-72 p-3 mb-20 mt-9 max-h-full ml-5">
              <img className='size-12  w-12 mt-7 mb-2' src={off2} alt="" />
              <h2 className='text-white text-left text-lg  font-Square mt-1'>Armed Security Guard</h2>
              <p className=' text-gray-400 mt-0  max-w-96  justify-center text-left font-Square'>We assess each client’s security needs and match skilled professional security officers to accommodate their requirements.</p>
              <div className='justify text-left mb-6 mt-2'>
              <div className='justify text-left mt-6'>
                <button className="absolute bg-customRed rounded-full font-Square p-2 w-[167px] h-[37px]  text-white text-center">
                  Know More
                </button>
              </div>
              </div>
           </div>
          {/* 4rth card */}
          <div className="rounded-lg w-72 p-3  mt-9 max-h-full mb-20 ml-5">
              <img className='size-12  w-14 mt-7 mb-4' src={evsec} alt="" />
              <h2 className='text-white text-left text-lg  font-Square mt-2'>Event Security</h2>
              <p className=' text-gray-400 mt-4  max-w-96 justify-center text-left font-Square'>NSG security Services have operated event security services at events and venues from small to large scale. </p>
              <div className='justify text-left mb-6 mt-2'>
              <div className='justify text-left mt-6'>
                <button className="absolute bg-customRed rounded-full font-Square p-2 w-[167px] h-[37px]  text-white text-center">
                  Know More
                </button>
              </div>
              </div>
          </div>
    </div>
          <div className='flex flex-row gap-40 justify-center'>
            <button className='hover:bg-red-400' onClick={moveForward}><img className='size-5 w-6' src={larrow} alt="" /></button>
            <button className='hover:bg-red-400' onClick={moveBack}><img className='size-5' src={rarrow} alt="" /></button>
          </div>
      </div>
      <div className='absolute -z-40 -mt-[500px] -ml-10 opacity-95 w-[950px] h-[500px] rounded-s-3xl'>
        <img src={tloobgcolor} alt="" />
      </div>
      {/* 1st ends here */}



    <div className='flex flex-col gap-20 mt-16'>

      {/* First Row */}
      <div className={`flex flex-row gap-5 ml-3 mt-7 ${isMobile ? 'flex flex-col': ''}`}>
        <div className='bg-transparent border-4 rounded-xl py-11 px-4 border-customWhite border-opacity-85'>
          <div className='flex flex-col'>
            <img className='relative h-[290px] w-[440px] opacity-90' src={s1} alt="" />
            <div className='mt-4'>
              <h3 className='font-Square text-xl text-center'>Private Investigation Services</h3>
              <p className='font-Square text-center text-gray-500 max-w-sm justify-center ml-[29px] text-lg mt-1'>We can help you find legal and efficient solutions to your problems using expert private investigator</p>
              <div className='justify mt-6 text-center'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-transparent border-4 rounded-xl py-11 px-4 border-customWhite border-opacity-85 '>
          <div className='flex flex-col'>
            <img className='relative h-[290px] w-[440px] opacity-90' src={s2} alt="" />
            <div className='mt-4'>
              <h3 className='font-Square text-xl text-center'>Private Investigation Services</h3>
              <p className='font-Square text-center text-gray-500 max-w-sm justify-center ml-[29px] text-lg mt-1'>Personal affairs, missing family members and matrimonial investigations. Affordable and legal.</p>
              <div className='justify mt-6 text-center'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-transparent border-4 rounded-xl py-11 px-4 border-customWhite border-opacity-85 '>
          <div className='flex flex-col'>
            <img className='relative h-[290px] w-[440px] opacity-90' src={s3} alt="" />
            <div className='mt-4'>
              <h3 className='font-Square text-xl text-center ml-3'>Armed Security Guards</h3>
              <p className='font-Square text-center text-gray-500  justify-center ml-[35px] text-lg mt-1 max-w-sm'>We assess each client’s security needs and match skilled professional security officers to accommodate their requirements.</p>
              <div className='justify mt-6 text-center'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className={`flex flex-row gap-5 ml-4 mt-7 ${isMobile ? 'flex flex-col': ''}`}>
        <div className='bg-transparent border-4 rounded-xl py-12 px-4 border-customWhite border-opacity-85 '>
          <div className='flex flex-col'>
            <img className='relative h-[290px] w-[440px] opacity-90' src={s4} alt="" />
            <div className='mt-4'>
              <h3 className='font-Square text-xl text-center -ml-3'>Event Security</h3>
              <p className='font-Square text-center text-gray-500 max-w-sm justify-center ml-[29px] text-lg mt-1'>NSG security Services have operated event security services at events and venues from small to large scale. </p>
              <div className='justify mt-6 text-center'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-transparent border-4 rounded-xl py-12 px-4 border-customWhite border-opacity-85 '>
          <div className='flex flex-col'>
            <img className='relative h-[290px] w-[440px] opacity-90' src={s5} alt="" />
            <div className='mt-4'>
              <h3 className='font-Square text-xl text-center'>PREMISES SECURITY SERVICES</h3>
              <p className='font-Square text-center text-gray-500 max-w-sm justify-center ml-[28px] text-lg mt-1'>Our security agents ensure an elite oversight and application of your entire commercial or industrial premises.</p>
              <div className='justify mt-6 text-center'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-transparent border-4 rounded-xl py-12 px-4 border-customWhite border-opacity-85 '>
          <div className='flex flex-col'>
            <img className='relative h-[290px] w-[440px] opacity-90' src={s6} alt="" />
            <div className='mt-4'>
              <h3 className='font-Square text-xl text-center max-w-xs ml-14'>RESIDENTIAL AND ESTATE SECURITY SERVICES</h3>
              <p className='font-Square text-center text-gray-500 max-w-sm justify-center ml-[25px] text-lg mt-1'>We can help you find legal and efficient solutions to your problems using expert private investigator</p>
              <div className='justify mt-6 text-center'>
                <button className="bg-customRed rounded-full p-2 w-[167px] h-[37px] font-Square   text-white text-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* About Customer */}
    <div className='justify text-center mt-36'>
        <h1 className='font-semibold font-montserrat text-3xl'>Take A Look At <span className='text-customRed'>What Our Customers Says</span></h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
        {/* man and a a card in a card in raw */}
        <div className='flex flex-col mt-9'>
          <div className='flex flex-row'>
              <div className='ml-14'>
                <img className='size-auto w-auto' src={man} alt="" />
              </div>
              <img 
                src={elpse} 
                className="absolute top-0 left-0 w-[80%] -z-10 bg-opacity-100" 
                alt="Ellipse Background" 
              />              
              <div className='absolute bg-black ml-80  mt-40 left-80 rounded-md text-center h-auto p-20 mr-4'>
                <div className='absolute -z-40 -mt-32 ml-10 opacity-90 w-[950px]'>
                  <img src={obgcolor} alt="" />
                </div>
                <h1 className='mt-28'>Name Of The Customer</h1>
                <p className='text-gray-400 text-center mt-4 ml-5 max-w-3xl font-Square'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. </p>
              </div>
          </div>
        </div>

        <div className='flex flex-row mt-10 gap-6'>
          <div>
            <img src={cldman} alt="" />
          </div>
          <div>
            <img src={proman} alt="" />
          </div>
            <button className='mt-36 hover:opacity-50' onClick={moveBack}><img className='size-5' src={rarrow} alt="" /></button>
        </div>
      </div>
    {/* About Customer ends here  */}
  </>
  );
}

export default Services;
