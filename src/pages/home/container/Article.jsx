import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ArticileCard from '../../../components/ArticileCard'

const Article = () => {
  return (
    <section className='flex flex-col container mx-auto px-5 py-10'>
      <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
        <ArticileCard className='w-full md:w-[50%-20px] lg:w-[32%]' />
        <ArticileCard className='w-full md:w-[50%-20px] lg:w-[32%]' />
      </div>
      <button className='mx-auto flex  items-center gap-x-2 fond-bold text-primary border-2 border-primary px-6 py-3 rounded-lg'>
        <span>
           More Articles
        </span>
        <FaArrowRight className='w-3 h-3' />
      </button>
    </section>
  )
}

export default Article