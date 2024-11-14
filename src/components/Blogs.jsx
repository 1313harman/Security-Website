import React from 'react'
import images from './Images'

function Blogs() {
  return (
    <>
      <div className='justify-center items-center text-center mt-3'>
        <h1 className='text-4xl font-montserrat font-extrabold'>Wellcome To <span className='text-customRed'>Our Blogs</span></h1>
        <p className='text-gray-500 font-Square text-xl max-w-full mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.</p>
      </div>

      {/* SearchBar */}
      <div className='justify-center items-start text-center mt-6'>
        <img className='absolute  ml-[520px] size-[19px] mt-1' src={images.searchbar} alt="" /><input className='bg-black -z-20 w-[490px] px-12 py-1 rounded-lg font-Square' type="text" placeholder='Search . . .'/>
      </div>

      {/* First Card */}
      <div className='flex flex-row mt-24'>
        <div className='ml-7'>
          <img className='h-[390px] w-[600px]' src={images.blog1} alt="" />
        </div>

        <div className='flex flex-col ml-6'>
          <div className='bg-white px-2 rounded-md w-[82px]'>
            <span className='text-customRed font-Square text-xs'>Genre here</span>
          </div>
          <div className='mt-4'>
            <h1 className='text-5xl max-w-4xl font-montserrat font-semibold'>This will be some random heading for the article.</h1>
          </div>
          <div className='mt-4'>
            <p className='text-gray-300 font-Square text-2xl max-w-[750px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eget nisi, dignissim a sit molestie. Eget dolor gravida sit turpis vulputate ac netus </p>
          </div>
          <div className='flex'>
            <div className='flex flex-col mt-6'>
              <p className='text-gray-300 font-Square'>Author Name</p>
              <p className='text-gray-300 font-Square mt-[2px]'>26th August</p>
            </div>
            <div className='ml-72 mt-6'>
              <p className='text-gray-300 font-Square '>Read time: 3 mins</p>
            </div>
          </div>
          <div className='mt-6'>
            <button className='text-center font-Square text-sm text-gray-300 bg-customRed w-[150px] rounded-2xl py-2 px-8'>Read Article</button>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className='flex flex-row mt-32'>
        <div className='flex flex-col ml-6'>
          <div className='bg-white px-2 rounded-md w-[82px]'>
            <span className='text-customRed font-Square text-xs'>Genre here</span>
          </div>
          <div className='mt-4'>
            <h1 className='text-5xl max-w-4xl font-montserrat font-semibold'>This will be some random heading for the article.</h1>
          </div>
          <div className='mt-4'>
            <p className='text-gray-300 font-Square text-2xl max-w-[750px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eget nisi, dignissim a sit molestie. Eget dolor gravida sit turpis vulputate ac netus </p>
          </div>
          <div className='flex'>
            <div className='flex flex-col mt-6'>
              <p className='text-gray-300 font-Square'>Author Name</p>
              <p className='text-gray-300 font-Square mt-[2px]'>26th August</p>
            </div>
            <div className='ml-72 mt-6'>
              <p className='text-gray-300 font-Square '>Read time: 3 mins</p>
            </div>
          </div>
          <div className='mt-6'>
            <button className='text-center font-Square text-sm text-gray-300 bg-customRed w-[150px] rounded-2xl py-2 px-8'>Read Article</button>
          </div>
        </div>
        <div className='ml-7 mr-7'>
          <img className='h-[390px] w-[600px]' src={images.blog2} alt="" />
        </div>
      </div>

      {/* Third Card Section */}
      <div className='flex flex-row mt-32'>
        <div className='ml-7'>
          <img className='h-[390px] w-[600px]' src={images.blog3} alt="" />
        </div>

        <div className='flex flex-col ml-6'>
          <div className='bg-white px-2 rounded-md w-[82px]'>
            <span className='text-customRed font-Square text-xs'>Genre here</span>
          </div>
          <div className='mt-4'>
            <h1 className='text-5xl max-w-4xl font-montserrat font-semibold'>This will be some random heading for the article.</h1>
          </div>
          <div className='mt-4'>
            <p className='text-gray-300 font-Square text-2xl max-w-[750px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eget nisi, dignissim a sit molestie. Eget dolor gravida sit turpis vulputate ac netus </p>
          </div>
          <div className='flex'>
            <div className='flex flex-col mt-6'>
              <p className='text-gray-300 font-Square'>Author Name</p>
              <p className='text-gray-300 font-Square mt-[2px]'>26th August</p>
            </div>
            <div className='ml-72 mt-6'>
              <p className='text-gray-300 font-Square '>Read time: 3 mins</p>
            </div>
          </div>
          <div className='mt-6'>
            <button className='text-center font-Square text-sm text-gray-300 bg-customRed w-[150px] rounded-2xl py-2 px-8'>Read Article</button>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div>
        <div className='flex justify-center items-center mt-32'>
          <h1 className='text-2xl font-montserrat font-semibold'>Weekly Reads</h1>
        </div>

        <div className='flex mt-9 gap-20'>
            <div className='ml-7'>
              <img className='h-[420px] w-[670px]' src={images.blog3} alt="" />
            <div className='flex flex-col text-center mt-4 -ml-8'>
              <div className='bg-white px-2 rounded-md w-[82px] ml-80'>
                <span className='text-customRed font-Square text-xs'>Genre here</span>
              </div>
              <div className='mt-4 ml-40'>
                <h1 className='text-3xl max-w-lg font-montserrat font-semibold -ml-12'>This will be some random heading for the article.</h1>
              </div>
              <div className='mt-4'>
                <p className='text-gray-300 font-Square text-xl max-w-xl ml-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eget nisi, dignissim a sit molestie. Eget dolor gravida sit turpis vulputate ac netus </p>
              </div>
              <div className='flex justify-center mt-6 gap-28 ml-16'>
                  <p className='text-gray-300 font-Square'>Author Name</p>    
                  <p className='text-gray-300 font-Square mt-[2px]'>26th August</p>
                  <p className='text-gray-300 font-Square '>Read time: 3 mins</p>
              </div>
              <div className='mt-6 ml-6'>
                <button className='text-center font-Square text-sm text-gray-300 bg-customRed w-[150px] rounded-2xl py-2 px-8'>Read Article</button>
              </div>
            </div>
          </div>

          <div className='ml-7'>
            <img className='h-[420px] w-[670px]' src={images.blog1} alt="" />
            <div className='flex flex-col text-center mt-4 -ml-8'>
              <div className='bg-white px-2 rounded-md w-[82px] ml-80'>
                <span className='text-customRed font-Square text-xs'>Genre here</span>
              </div>
              <div className='mt-4 ml-40'>
                <h1 className='text-3xl max-w-lg font-montserrat font-semibold -ml-12'>This will be some random heading for the article.</h1>
              </div>
              <div className='mt-4'>
                <p className='text-gray-300 font-Square text-xl max-w-xl ml-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper eget nisi, dignissim a sit molestie. Eget dolor gravida sit turpis vulputate ac netus </p>
              </div>
              <div className='flex justify-center mt-6 gap-28 ml-16'>
                  <p className='text-gray-300 font-Square'>Author Name</p>    
                  <p className='text-gray-300 font-Square mt-[2px]'>26th August</p>
                  <p className='text-gray-300 font-Square '>Read time: 3 mins</p>
              </div>
              <div className='mt-6 ml-6'>
                <button className='text-center font-Square text-sm text-gray-300 bg-customRed w-[150px] rounded-2xl py-2 px-8'>Read Article</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Blogs