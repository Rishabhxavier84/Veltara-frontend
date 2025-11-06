import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#fae1b7] flex flex-col gap-15 pt-16  '>
            <div className='grid place-content-center gap-6 text-center '>
                <h2 className=' text-3xl font-semibold text-[#3a2623] '>Sign-Up for exclusive offers</h2>
                <div className='flex items-center justify-center max-w-xl mx-auto w-full '>
                    <input type="email" placeholder='Enter your email' className='flex-grow px-10 py-4 border-2 border-r-0 border-[#fff] bg-[#fef0d8] rounded-l-full outline-none text-sm text-gray-500 shadow-2xl ' />
                    <button className='bg-[#3a2623] border-[#fff] py-4 px-3 border-r-full rounded-r-full text-[#fef0d8] shadow-2xl cursor-pointer hover:bg-[#311f1d] transition delay-70 ease-in-out '>Join Now</button>
                </div>
            </div>




            <div className='flex  justify-around items-center text-center gap-40 mt-6'>
                <div>
                    <h2 className=' headingFont text-4xl font-bold text-[#3a2623] text-shadow-lg '>Veltara</h2>
                    <div className='flex justify-center gap-4 mt-4 text-[#3a2623] '>
                        <FaFacebook className='text-sm cursor-pointer'/>
                        <FaInstagram className='text-sm cursor-pointer'/>
                        <FaTwitter className='text-sm cursor-pointer'/>
                        <FaYoutube className='text-sm cursor-pointer'/>
                    </div>
                </div>
                <div>
                    <ul className='flex gap-6 justify-center text-base font-medium'>
                        <li className=' cursor-pointer '>Home</li>
                        <li className=' cursor-pointer '>Bookings</li>
                        <li className=' cursor-pointer '>Rooms</li>
                        <li className=' cursor-pointer '>Contact</li>
                    </ul>
                </div>
            </div>
            <p className='text-center text-sm my-4'>&copy; 2025 Veltara Hotels. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
