import React from 'react'
import { FiSearch } from "react-icons/fi";
import { images } from '../../../constants'


const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row '>
        <div className='mt-10 lg:w-1/ lg:1/2'>
            <h1 className=' font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540p] '>Read the most interesting articles</h1>
            <p className='lg:text-xl  text-dark-light mt-4 text-center md:text-xl lg:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className='flex flex-col gap-y-2.5 mt-10 relative'>
                <div className=' relative '>
                    <FiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-[#959EAD]' />
                    <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959ead] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' type="text" placeholder='Search'/>
            </div>
            <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:left-3/4 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 '>
                Search
            </button>
            </div>
            <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                <span className=' text-dark-light font-semibold italic mt-2 lg:mt-4'>
                    Popular Tags:
                </span>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3'> 
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>
                        <a href="/">Design</a>
                    </li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>
                        <a href="/">User Experience</a>
                    </li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>
                        <a href="/">User interfaces</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='hidden lg:block lg:1/2'>
            <img className='w-full' src={images.HeroImage} alt="Article" />
        </div>

    </section>
  )
}

export default Hero