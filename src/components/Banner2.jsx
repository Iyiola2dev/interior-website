import { div } from 'framer-motion/client'
import React from 'react'
import Banner1 from "../assets/banner2.png"


const Banner2 = () => {
  return (
    <div>
    <div className="container px-4 py-14">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            
            <div className='space-y-5 flex justify-center  flex-col t '>
                <h1 className='text-4xl font-bold font-serif'> Simple way to make stylish living room</h1>
                <p className='text-gray-500 text-sm leading-7'>Our mission is to create collaborative environments where every team member contributes to producing innovative and effective solutions for success.</p>
               <div className='flex gap-3'>
                <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold font-serif'>15</p>
                    <p className='text-gray-500 text-sm '>Years of Experience</p>
                </div>
                <div  className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold font-serif'>350</p>
                    <p className='text-gray-500 text-sm '>Happy Clients</p>
                </div>
                <div  className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold font-serif'>34</p>
                    <p className='text-gray-500 text-sm '>Award Gained</p>
                </div>
               </div>
                <div>
                <button className='primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Contact us</button>
            </div>
            </div>
            <div className='flex flex-col justify-center '>
                <img src={Banner1} alt="" className='w-[95%] md:w-full mx-auto' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner2