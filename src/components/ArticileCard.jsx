import React from 'react'
import { images } from '../constants'

const ArticileCard = ({className}) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
                <img src={images.laptop} alt="title" className='w-full object-cover object-center h-auto' />
                <div className='p-5'>
                    <h2 className='text-xl md:text-2xl font-bold font-roboto text-dark-soft'>The Best Laptops for Software Development</h2>
                    <p className='text-dark-light mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui non turpis aliquam aliquam.</p>
                    <div className='flex items-center mt-3 text-sm'>
                        <img src={images.profilepic} alt="author" className='w-10 h-10 object-cover object-center rounded-full' />
                        <div className='ml-3'>
                            <h4 className='text-dark-soft font-bold'>John Doe</h4>
                            <div className=''>
                            <span className='text-dark-light '>May 12, 2021</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default ArticileCard