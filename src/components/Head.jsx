import React from 'react'
import { images } from '../constants'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const navItemInfo = [
  {name: 'Home', type: "link" },
  {name: 'Articles', type: "link" },
  {name: 'Pages', type: "dropdown", items: ['About us' , 'Contact us'] },
  {name: 'Pricing', type: "link" },
  {name: 'Faq', type: "link" },
]

const NavItem = ({item}) => {
  return(
    <li className=' relative group'>
    {item.type === 'link' ? <>
    <a href='/' className='px-4 py-2 '>
      {item.name}
    </a>
    <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
      /</span> </> 
      : 
      <>
       <a href='/' className='px-4 py-2'> 
        <span>{item.name}</span>
        <IoMdArrowDropdown className='inline-block' />
      </a>
      <div className='hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max'>
        <ul className='flex flex-col shadow-lg rounded-lg overflow-hidden'>
          {item.items.map((page) => (
              <a href='/' className='px-4 py-2 hover:bg-dark-hard hover:text-white text-white lg:text-dark-hard transition-all duration-300'>
                {page}
              </a>
          ))}
        </ul>
      </div>
      </>
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
    <section>
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