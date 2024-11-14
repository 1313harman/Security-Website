import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from './Images';
import {useMediaQuery} from 'react-responsive'
import { ClipLoader } from 'react-spinners'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazyload';

function Home() {
  
  useEffect(() => {
      AOS.init({ duration: 1500 });
  }, []);


  const [isLoading, setIsLoading] = useState(true)
  // const [loadedImage, setLoadedImage] = useState(0)
  const isMobile = useMediaQuery({maxWidth:767})
  const isDesktop = useMediaQuery({minWidth:767})
  

  let mail = "narulasahil2002@gmail.com";
  const totalImages = 4
  const imgs = [
    {
      id:1, 
      imgSrc:images.frame28,
    },
    {
      id:2, 
      imgSrc:images.sc,
    },
    {
      id:3, 
      imgSrc:images.sc2,
    },
    {
      id:4, 
      imgSrc:images.sc3,
    }
  ]


  const moveForward = () =>{

  }

  const moveBack = () =>{
    
  }

  const handleImageLoad = () =>{
    setIsLoading(false)
  }


  return (
    <>
        {/* Ellipse as a background */}
      <div className='overflow-x-hidden'>
        {/* Content Section */}
        <div >
         <div>
         <div className=''> {/* Set a fixed size here */}
          <Carousel
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            transitionTime={600}
          >
          {imgs.map((img, index) => (
            <LazyLoad
            key={index}
            height={900}
            offset={100}

            placeholder={
              <div
                className="flex justify-center items-center text-center ml-60"
                style={{ height: isMobile ? '476px' : '900px' }}
              >
                <ClipLoader color="#ffffff" loading={true} size={100} />
              </div>
              }

            >
              <div>
              <img
                className={`${
                  isDesktop ? 'object-cover w-full h-[900px]' : ''
                }   ${isMobile ? 'h-[476px]' : ''}`}
                src={img.imgSrc}
                data-aos="fade-center"
              />
              </div>
            </LazyLoad>
            ))}
          </Carousel>
 
          </div>
            <div className='left-80 ml-96'>
              <div className='absolute  rounded-md text-center h-auto p-20 top-7 mt-12 ml-96'>
                <div className=' -mt-14 mb-6 '>
                    <div className='absolute bottom-2  mb-6 ml-56 mt-60'>
                      <img className={` ${isDesktop ? '-rotate-180 size-auto opacity-100 h-fit max-w-7xl right-48 z-0  pointer-events-none' : ''}      `} src={images.blshadow} alt="" />
                    </div>
                </div>
                <div className=' -mt-14 mb-6 top-32'>
                    <div className='absolute bottom-3 -mb-96 -ml-80 -top-96 -mt-36'>
                      <img className={` ${isDesktop ? '-rotate-180 size-auto opacity-100 h-fit max-w-7xl right-48 z-0  pointer-events-none' : ''}    `} src={images.blshadow} alt="" />
                    </div>
                </div>
                {/* {isMobile && (
                    <>
                    <div className='absolute  z-10 w-[800px] h-[550px] bg-black'>
                      <img className='' src={images.mbback} alt="" />
                    </div>
                    <div className='absolute -z-50 w-[800px]'>
                      <img className='' src={images.mbback} alt="" />
                    </div>
                  </>
                  )} */}
                <div className='relative flex flex-col ml-28'>
                  <h1 className={`text-white text-3xl text-left font-bold font-montserrat  opacity-100 ${isMobile ? '-ml-[920px] max-w-3xl mt-16 text-[35px]' : ''}`}>Private Investigation Services</h1>
                  <p className={`text-left max-w-md mt-4 text-xl font-Square opacity-95 ${isMobile ? '-ml-[940px] max-w-xl text-center text-[20px]'  : ''}`}>We are experts in helping you find a solution to your problem. Our team includes male & female investigators possessing many years of experience. There are very few situations that we haven’t seen before, and more importantly, whatever your circumstances we are here to understand your situation.</p>
                  <div className={`justify text-left mt-7 ${isMobile ? '-ml-[775px]' : ''}`}>
                    <button className='bg-customRed rounded-full p-2 w-[236px] h-[52]  text-white text-center font-Square'>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
         </div>
      
        {/* ContentSection ends here */}
        <div className='absolute -z-40 -mt-[1000px] opacity-100 w-[1500px] h-[500px] -ml-[200px] blur-3xl'>
          <img src={images.mbg} alt="" />
        </div>       

        {/* Service Section */}
        <div className='justify text-center mt-24'>
          <h1 className='font-semibold font-montserrat text-3xl' data-aos='fade-up'>How We Provide <span className='text-customRed'>Our Services</span></h1>
          <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
          <div className={`flex flex-row gap-9  mt-6 justify-center ${isMobile ? 'flex flex-col' : ''}`} >
              {/* Card 1 */}
              <div className='justify ml-11' data-aos='fade-left'>

                <LazyLoad height={525} offset={500} placeholder={<div className='absolute ml-56 mt-5 h-[150px] w-[150px'> <ClipLoader size={100} loading={true} color='#ffffff'/> </div>}>
                  <img className={`${isDesktop? 'size-96 h-[525px] w-[700px] -ml-4':''} ${isMobile? 'w-[550px] h-[579px] -ml-[12px]' : ''}`} key={images.effe} src={images.effe} alt="" />
                </LazyLoad>

                <div className='justify text-center mr-6 -ml-[42px]'>
                  <h1 className={`${isDesktop ? 'mt-5 text-xl ml-12' : ''} ${isMobile ? 'mt-5 text-xl ml-8' : ''} `}>Effective</h1>
                  <p className={`${isDesktop? 'max-w-sm mt-3 text-md text-gray-400 ml-20' : ''} ${isMobile ? 'max-w-lg mt-3 text-md text-gray-400  ml-10' : ''} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div data-aos='fade-bottom'>
                <img className={`${isDesktop? 'size-96 h-[525px] w-[700px] -ml-4':''} ${isMobile? 'w-[550px] h-[579px] ml-[30px]' : ''}`} key={images.pro} src={images.pro} alt="" />
                <div className='justify text-center mr-6 ml-1'>
                  <h1 className={`${isDesktop ? 'mt-5 text-xl ml-12' : ''} ${isMobile ? 'mt-5 text-xl ml-5' : ''} `}>Professional</h1>
                  <p className={`${isDesktop? 'max-w-sm mt-3 text-md text-gray-400 ml-20' : ''} ${isMobile ? 'max-w-lg mt-3 text-md text-gray-400 ml-10' : ''} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div data-aos='fade-right'>
                <img className={`${isDesktop? 'size-96 h-[525px] w-[700px] -ml-4':''} ${isMobile? 'w-[550px] h-[579px] ml-[30px]' : ''}`} src={images.dive} alt="" />
                <div className='justify text-center mr-6 ml-1'>
                  <h1 className={`${isDesktop ? 'mt-5 text-xl ml-12' : ''} ${isMobile ? 'mt-5 text-xl ml-5' : ''} `}>Diverse</h1>
                  <p className={`${isDesktop? 'max-w-sm mt-3 text-md text-gray-400 ml-20' : ''} ${isMobile ? 'max-w-lg mt-3 text-md text-gray-400 ml-10' : ''} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.</p>
                  <div className='absolute -z-40 -mt-[500px] opacity-80 w-[1500px] h-[500px] -ml-[1043px] blur-3xl'>
                    <img src={images.dvbgco} alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Get to Know Section */}
        <div className="relative text-center mt-44 backdrop-blur-3xl">
         <h1 className="text-white text-center text-3xl font-montserrat font-semibold" data-aos='fade-up'>
           Get to know <span className="text-customRed">Who We Are?</span>
         </h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-up'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in.
            Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.
        </p>
        {isMobile && (
          <>
            <div className='flex flex-col'>
              <div className=' mt-10 ml-4'>
                <img className=' h-[280px] w-[560px]'  src={images.union} key={images.union} alt="Union" onLoad={handleImageLoad}/>
              </div>
              <p className='text-gray-400 text-center max-w-xl ml-2 mt-7 font-Square'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus 
                in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at
                et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam 
                ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, 
                risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget 
                purus in. Proin integer in malesuada in et 
                egestas adipiscing lacinia.
              </p>
            <div className="text-center -ml-3 mt-10">
                <button className="bg-customRed rounded-full p-2 w-[226px] h-[52] font-Square  text-white text-center">
                  Get In Touch
                </button>             
            </div>
            <div className='relative -z-40  opacity-100 brightness-105 w-[950px] h-[500px] -ml-[100px]'>
            <img src={images.ofbgcolo} alt="" />
          </div>
        </div>
          </>
          )}
        {isDesktop && (
        <>
        <p className='text-gray-400 text-left mt-20 ml-5 max-w-3xl font-Square' data-aos='fade-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus 
            in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at
            et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam 
            ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, 
            risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget 
            purus in. Proin integer in malesuada in et 
            egestas adipiscing lacinia.
        </p>

        
        <div className="text-left ml-5 mt-10" data-aos='fade-center'>
          <button className="bg-customRed rounded-full p-2 w-[226px] h-[52] font-Square  text-white text-center">
              Get In Touch
          </button>
          
          
          <div className='-mt-52 h-[1500px] w-[1470px]' data-aos='fade-bottom'>
            <img  src={images.union} key={images.union} alt="Union" onLoad={handleImageLoad}/>
          </div>
          

          <div className='relative -z-40 -mt-[850px] opacity-100 brightness-105 w-[950px] h-[500px] -ml-[100px]'>
            <img src={images.ofbgcolo} alt="" />
          </div>
        </div>
        </>
        )}
        
      
        
          {/* 2 ends here */}

          {/* 3 starts here */}

  <div className={`relative -mt-[550px]`}>
      <h1  className="text-center mt-52 text-white text-3xl font-montserrat font-semibold" data-aos='fade-up'>We Make People <span className='text-customRed'>Feel Safe</span></h1>
      <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>                
    <div className='flex flex-row'>
      {isDesktop && (
      <div className='flex flex-col' data-aos='fade-up'>
              <div className='max-w-6xl'>
                <p className='text-gray-400 max-w-full text-left mt-9 ml-5 font-Square'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in 
                et egestas adipiscing lacinia. Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit. Vitae dolor elit 
                nam ac libero eget purus in. Proin integer in malesuada in et 
                egestas adipiscing lacinia.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Vitae dolor elit nam ac libero 
                eget purus in. Proin integer in malesuada in et egestas 
                adipiscing lacinia.Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Vitae dolor elit nam ac libero eget purus in. 
                Proin integer in malesuada in et egestas adipiscing lacinia.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. 
                </p>
              </div>
              <div className="flex-col text-left ml-5 mt-10">
                <button className="bg-customRed rounded-full p-2 w-[226px] h-[52] font-Square  text-white text-center">
                  Contact Us
                </button>
              </div>
            </div>
            )}

              <div className='gap-2 ml-40 mt-96'>
                <div >
                  <img className="absolute size-10 h-auto w-40 ml-52  -z-10 opacity-100" src={images.dot} alt="" />
                </div>
                <div className='-mt-56 '>
                  <img className="absolute size-10 h-auto w-40 ml-80 mt-20 mb-36 right-28  -z-10 opacity-100" src={images.dot} alt="" />
                </div>
              </div>
            
            <div className={`${isDesktop? 'mt-5' : ''}  ${isMobile? 'mt-7' : ''}`} data-aos='fade-up'>
              <div className={`flex flex-row mb-auto gap-6 ${isMobile? '-ml-[180px]' : ''} `}>
                <div className={`${isDesktop?  'shadow-2xl rounded-lg w-72 p-6 bg-black ml-auto mr-auto mt-32 max-h-80' : ''} ${isMobile? 'rounded-lg w-[270px] py-5 px-1 bg-black mr-auto mt-32 max-h-[310px] ml-8' : ''}`}>
                  <h2 className='text-white text-lg  font-Square mt-2'>Lorem ipsum dolor sit amet</h2>
                  <p className=' text-gray-400 mt-4  max-w-96 justify-center text-center font-Square'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. </p>
                  <div className='rounded-full h-[50px] [115px] bg-white w-9 ml-[102px] mt-3 px-6 py-2 '> 
                    <img className='absolute h-[35px] w-[35px] -ml-[18px]'  src={images.bulb} alt="" />
                  </div>
                </div>
              <div className='flex flex-col'> 
                <div className={`shadow-2xl rounded-lg p-6 h-72 w-64 bg-black ml-auto mr-44 mb-3 ${isMobile? '-ml-[9px]' : ''}`}>
                  <h2 className='text-white text-lg  font-Square mt-2'>Lorem ipsum dolor sit amet</h2>
                  <p className=' text-gray-400 mt-4 min-w-52 font-Square'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in.  </p>
                  <div className='rounded-full h-[50px] [115px] bg-white w-9 ml-[102px] mt-3 px-6 py-2 '> 
                    <img className='absolute h-[35px] w-[35px] -ml-[18px]' src={images.officer} alt="" />
                  </div>
                </div>
                
                <div className={`${isDesktop? 'flex-col shadow-2xl rounded-lg p-6 h-56 w-96 bg-black mt-3 ml-auto mr-14':''} ${isMobile? 'flex-col shadow-2xl rounded-lg p-1 h-[220px] w-[290px] bg-black mt-3 -ml-[9px]':''}`}>
                  <div className='absolute -z-40 -mt-[500px] opacity-100 brightness-200 w-[950px] h-[500px] -ml-[538px]'>
                    <img src={images.msafeco} alt="" />
                  </div>
                  <h2 className='text-white text-lg  font-Square mt-2'>Lorem ipsum dolor sit amet</h2>
                  <p className=' text-gray-400 mt-4 min-w-52 font-Square'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in.  </p>
                  <div className={`rounded-full bg-white w-12 ${isDesktop? 'ml-36' : ''}  mt-5 ${isMobile? 'ml-28' : ''}`}> 
                    <img className={`className='absolute h-[35px] w-[35px] -ml-[18px]' ${isMobile? '' : ''}`}  src={images.cctv} alt="" />
                  </div>
                </div>
                  
              </div>
          </div>
        </div>
            {isMobile && (
            <div className='flex flex-col -ml-[720px]'>
              <div className='max-w-6xl'>
                <p className='text-gray-400 max-w-xl text-center mt-[600px]  font-Square'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in 
                et egestas adipiscing lacinia. Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit. Vitae dolor elit 
                nam ac libero eget purus in. Proin integer in malesuada in et 
                egestas adipiscing lacinia.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Vitae dolor elit nam ac libero 
                eget purus in. Proin integer in malesuada in et egestas 
                adipiscing lacinia.Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Vitae dolor elit nam ac libero eget purus in. 
                Proin integer in malesuada in et egestas adipiscing lacinia.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. 
                </p>
              </div>
              <div className="flex-col text-left ml-40 mt-10">
                <button className="bg-customRed rounded-full p-2 w-[226px] h-[52] font-Square  text-white text-center">
                  Contact Us
                </button>
              </div>
            </div>
            )}
      </div>        
    </div> 
    </div>



      {/* 4rth starts here */}
      <div className='justify text-center mt-40'>
        <h1 className='font-semibold font-montserrat text-3xl' data-aos='fade-up'>Take A Look At <span className='text-customRed'>Services We Provide</span></h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
        
        <div className='flex flex-row gap-36'>
        
          {/* 1st card  */}
           <div className=" rounded-lg w-72 p-3 bg-black mt-9 max-h-96 mb-20 ml-5" data-aos='fade-left'>
              <img className='size-11 w-14 mt-8 mb-4' src={images.cctv2} alt="" />
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
           <div className="rounded-lg w-72 p-3  mt-9 max-h-96 mb-20 ml-5" data-aos='fade-bottom'>
              <img className='size-12  w-14 mt-7 mb-4' src={images.comp} alt="" />
              <h2 className='text-white text-left text-lg  font-Square mt-2'>Private Investigation Services</h2>
              <p className=' text-gray-400 mt-4  max-w-5xl justify-center text-left font-Square'>Personal affairs, missing family members and matrimonial investigations. Affordable and legal. </p>
              <div className='justify text-left mt-6'>
                <button className="bg-customRed rounded-full font-Square p-2 w-[167px] h-[37px] text-white text-center">
                  Know More
                </button>
              </div>
           </div>   
          {/* 3rd card */}
           <div className="rounded-lg w-72 p-3 mb-20 mt-9 max-h-full ml-5" data-aos='fade-top'>
              <img className='size-12  w-12 mt-7 mb-2' src={images.off2} alt="" />
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
          <div className="rounded-lg w-72 p-3  mt-9 max-h-full mb-20 ml-5" data-aos='fade-right'>
              <img className='size-12  w-14 mt-7 mb-4' src={images.evsec} alt="" />
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
            <button className='hover:bg-red-400' onClick={moveForward}><img className='size-5 w-6' src={images.larrow} alt="" /></button>
            <button className='hover:bg-red-400' onClick={moveBack}><img className='size-5' src={images.rarrow} alt="" /></button>
          </div>
      </div>
      {/* 4rth ends here */}
      <div className='absolute -z-40 -mt-[500px] -ml-10 opacity-95 w-[950px] h-[500px] rounded-s-3xl'>
        <img src={images.tloobgcolor} alt="" />
      </div>

{/* Our Experts Section */}
<div className='mt-36'>
      <h1 className='text-3xl text-center font-bold font-montserrat' data-aos='fade-up'>
            Our <span className='text-customRed'>Experts</span>
          </h1>
          <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-up'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.
          </p>


    <div className={`flex flex-row gap-14 mt-16 ml-4 ${isMobile? 'flex flex-col' : ''}`} >

      <div className='flex flex-col' data-aos='fade-left'>
        <div className={`${isDesktop? 'border-4 rounded-full p-5':''} ${isMobile? 'border-4 rounded-full p-5 w-[450px] ml-14' : ''}`}>
          <img className='h-[380px] w-[400px] mt-4 mb-3' key={images.boy} src={images.boy} alt="" />
        </div>
          <div className='text-center -ml-28 mt-8'>
            <h1 className='ml-[99px] text-xl'>Albert Dera</h1>
            <p className={`max-w-sm mt-3 text-center text-gray-400 font-Square ml-36 ${isMobile? 'ml-[203px] max-w-md' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
          </div>
      </div>
      

      <div data-aos='fade-bottom'>
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

      <div data-aos='fade-right'>
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


      <div className='justify text-center mt-36'>
        <h1 className='font-semibold font-montserrat text-3xl' data-aos='fade-up'>Take A Look At <span className='text-customRed'>What Our Customers Says</span></h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
        {/* man and a a card in a card in raw */}
        <div className='flex flex-col mt-9'>
            <div className='flex flex-row'>
              <div className='ml-14' data-aos='fade-left'>
                <img className={`${isDesktop? 'size-auto w-auto' : ''} ${isMobile? 'h-[170px] w-[288px] -ml-[35px]' : ''}`} key={images.man} src={images.man} alt="" />
              </div>        
              <div className={`${isDesktop? 'absolute bg-black ml-80  mt-40 left-80 rounded-2xl text-center h-auto p-20 mr-4' : ''} ${isMobile? 'absolute bg-black -ml-[100px]  mt-[80px] left-80 rounded-2xl w-[365px] text-center h-[350px]' : ''}`} data-aos='fade-right'>
                <div className='absolute -z-40 -mt-32 -ml-40 opacity-90 w-[950px]'>
                  <img src={images.obgcolor} alt="" />
                </div>
                <h1 className={`${isDesktop? 'mt-28' : ''}  ${isMobile? 'mt-[10px]' : ''}`}>Name Of The Customer</h1>
                <p className={`${isDesktop? 'text-gray-400 text-center mt-4 ml-5 max-w-3xl font-Square' : ''}  ${isMobile? 'text-gray-400 text-center mt-2  ml-5 max-w-lg  font-Square' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. </p>
              </div>
            </div>
          </div>

          <div className={`${isDesktop? 'gap-6 flex flex-row mt-10' : ''}  ${isMobile? 'flex flex-row mt-10 gap-3' : ''}`} data-aos='fade-left'>
            <div>
              <img className={`${isMobile? 'h-16' : ''}`} key={images.cldman} src={images.cldman} alt="" />
            </div>
            <div>
              <img className={`${isMobile? 'h-16' : ''}`} key={images.proman} src={images.proman} alt="" />
            </div>
              <button className={`${isDesktop? 'mt-36 hover:opacity-50' : ''} ${isMobile? 'mt-12 hover:opacity-50' : ''}`} onClick={moveBack}><img className='size-5' src={images.rarrow} alt="" /></button>
          </div>
        
        </div>
      </div>



    <div className={`${isDesktop? 'mt-32' : ''} ${isMobile? 'mt-72' : ''}`}>
        <div className='justify text-center'>
          <h1 className='text-customRed font-montserrat font-semibold text-3xl' data-aos='fade-bottom'>Let Us Know Your Concern</h1>
          <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center' data-aos='fade-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.
          </p>
        </div>
        
        {/* Image and Concerns */}
        <div className={`relative ${isDesktop? 'flex flex-row justify-center ' : ''} ${isMobile? 'flex flex-col justify-center' : ''}`} data-aos='fade-up'>
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
    
    {/* Contact Us Section */}
    {isMobile && (
      <div className='justify mt-32 text-center'>
        <h1 className='text-white font-montserrat font-semibold text-3xl'>How to <span className='text-customRed'>Contact Us</span></h1>
        <p className='text-customGray max-w-full font-Square mr-8 ml-[52px] mt-3 text-2xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
      </div>
      )}

      <div className={`${isDesktop? 'flex flex-row ml-40' : ''} ${isMobile ? 'flex flex-col -ml-[25px]' : ''}`}>
        <div className={`flex flex-col ml-14 ${isMobile ? '-ml-40' : ''}`} data-aos='fade-left'>
            <div className={`flex flex-row mt-16 ml-28 ${isMobile ? 'flex flex-col' : ''}`}>
                <img className={`h-[45px] w-[45px] ${isMobile? 'ml-[135px]' : ''} `} src={images.email} alt="" />
                <h1 className={`ml-4 mt-[6.5px] text-2xl font-Square ${isMobile ? 'ml-[80px] mt-[3px]' : ''}`}>Chat With Us</h1>
                {isMobile && (
                <Link className={`text-white opacity-75 text-left font-Square ml-44 ${isMobile ? 'ml-[51px]' : ''}`} to={mail}>narulasahil2002@gmail.com</Link>
              )}
            </div>
              {isDesktop && (
              <Link className={`text-white opacity-75 text-left font-Square ml-44`} to={mail}>narulasahil2002@gmail.com</Link>
            )}
            <div className={`flex flex-row mt-16 ml-28 ${isMobile ? 'flex flex-col' : ''}`}>
                <img className={`h-[45px] w-[45px] ${isMobile? 'ml-[135px]' : ''} `} src={images.phone} alt="" />
                <h1 className={`ml-4 mt-[6.5px] text-2xl font-Square ${isMobile ? 'ml-[128px] mt-[4px]' : ''}`}>Phone</h1>
                {isMobile && (
                  <p className={`text-white opacity-75 text-left font-Square ml-44 ${isMobile ? 'ml-[85px]' : ''}`}>+91 9878951458</p>
                )}
            </div>
                {isDesktop && (
                  <p className='text-white opacity-75 text-left ml-44'>+91 9878951458</p>
                )}
            <div className={`flex flex-row mt-16 ml-28 ${isMobile ? 'flex flex-col' : ''}`}>
                <img className={`h-[45px] w-[45px] ${isMobile? 'ml-[135px]' : ''} `} src={images.loc} alt="" />
                <h1 className={`ml-4 mt-[6.5px] text-2xl font-Square ${isMobile ? 'ml-[128px] mt-[5px]' : ''}`}>Office</h1>
                {isMobile && (
                  <p className={`text-white opacity-75 text-center font-Square ml-44 ${isMobile ? '-ml-[20px] max-w-96' : ''}`} to={mail}>Hargobind Nagar,#29A Sirhind Road,Patiala,Punjab</p>
                )}
            </div>
            {isDesktop && (
                <Link className='text-white opacity-75 text-left ml-44 max-w-56' to={mail}>Hargobind Nagar,#29A Sirhind Road,Patiala,Punjab</Link>
            )}
        </div>

        <div className={`${isDesktop? 'flex flex-col ml-96 mt-8' : ''} ${isMobile ? 'flex flex-col ml-[108px] mt-8' : ''} `} data-aos='fade-right'>
            <div className='flex flex-col bg-black h-[550px] w-[450px] rounded-2xl gap-8 p-16'>
              <input className='bg-black border-2 rounded-lg border-white h-[50px] w-[350px] -ml-4 placeholder-white' placeholder='Your Name' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
              <input className='bg-black border-2 rounded-lg border-white h-[50px] w-[350px] -ml-4 placeholder-white' placeholder='Email' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
              <input className='bg-black border-2 rounded-lg border-white h-[50px] w-[350px] -ml-4 placeholder-white' placeholder='Subject' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
              <textarea className='bg-black border-2 rounded-lg border-white h-[150px] w-[350px] -ml-4 placeholder-white' placeholder='Message' type="text" style={{fontFamily:'monospace',fontSize:'18px'}} />
            </div>
        </div>
      </div>
  </div>
    </>
  );
}

export default Home;
