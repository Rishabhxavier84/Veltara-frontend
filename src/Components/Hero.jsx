import React from 'react'
import bgImg from '../assets/hero.webp'

const Hero = () => {
    return (
        <div className='relative h-[90vh] w-full bg-cover bg-center bg-no-repeat ' style={{backgroundImage : `url(${bgImg})`}}>
            <div className='absolute inset-0 bg-[#383838] opacity-40'></div>
            <div className='relative z-20 h-full text-center text-[#fcf2e1] flex flex-col items-center justify-center px-4'>
                <h3 className=' headingFont text-2xl tracking-widest'>Book timeless experiences</h3>
                <h1 className=' headingFont text-8xl mb-2 font-bold'>Veltara</h1>
                <h2 className=' headingFont text-2xl mb-5'>Make Every Stay, A Story Worth Telling</h2>
                <button className='bg-[#3a2623] py-2 px-8 font-bold rounded-3xl cursor-pointer hover:bg-[#311f1d] transition delay-70 ease-in-out '>Book Now</button>
            </div>
        </div>
    )
}

export default Hero
