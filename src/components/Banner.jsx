import React from 'react'
import Banner1 from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="container px-4">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col justify-center '>
                <img src={Banner1} alt="" className='w-[95%] md:w-full mx-auto' />
            </div>
            <div className='space-y-5 flex justify-center  flex-col t '>
                <h1 className='text-4xl font-bold font-serif'> We Believe that a team makes any project better</h1>
                <p className='text-gray-500 text-sm leading-7'>Our mission is to create collaborative environments where every team member contributes to producing innovative and effective solutions for success.</p>
                <div>
                <button className='primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Discover Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
