import React from 'react'
import { images } from '../constants'
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';


const navItemInfo = [
  {name: 'Home', type: "link" },
  {name: 'Articles', type: "link" },
  {name: 'Pages', type: "dropdown", items: ['About us' , 'Contact us'] },
  {name: 'Pricing', type: "link" },
  {name: 'Faq', type: "link" },
]

const NavItem = ({item}) => {
  const [dropdown, setdropdown] = useState(false)

  const handleDropdown = () => {
    setdropdown((curState) => {
      return !curState
    })
  }
  return(
    <li className=' relative group'>
    {item.type === 'link' ? <>
    <a href='/' className='px-4 py-2 '>
      {item.name}
    </a>
    <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
      /</span> 
      </> 
      :
      <div className='flex flex-col items-center' onClick={handleDropdown}>
       <button className='px-4 py-2'> 
        <span>{item.name}</span>
        <IoMdArrowDropdown />
      </button>
      <div className={`${dropdown ? "block" : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
        <ul className='bg-dark-soft lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden'>
          {item.items.map((page) => (
              <a href='/' className='px-4 py-2 hover:bg-dark-hard hover:text-white text-white lg:text-dark-hard transition-all duration-300'>
                {page}
              </a>
          ))}
        </ul>
      </div>
      </div>
      }
  </li>
   )
}

const Head = () => {
const [navIsVisible, setnavIsVisible] = React.useState(false)
const naVvisibility = () => {
  setnavIsVisible((curState) => {
    return !curState
  
  })
}


  return (
    <section className='sticky top-0 left-0 right-0 z-50'>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img className='w-16' src={images.logo} alt='logo' />
        </div>
        <div className='z-50 lg:hidden'>
          {navIsVisible ? <IoMdClose onClick={naVvisibility} className='w-6 h-6' /> : <IoMdMenu onClick={naVvisibility} className='w-6 h-6' />}
        </div>
        <div className={`${navIsVisible ? 'right-0' : 'right-full'} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 -right-full lg:static flex gap-x-9 items-center`}>
          <ul className=' text-white items-center gap-y-6 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold'>
             {navItemInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className='mt-6 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300' >
            Sign in
            </button>
        </div>
      </header>
    </section>
  )
}

export default Head