import React from 'react'
import ArticileCard from '../../../components/ArticileCard'

const Article = () => {
  return (
    <section className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
        <ArticileCard className='w-full md:w-[48%] lg:w-[32%]' />
        <ArticileCard className='w-full md:w-[48%] lg:w-[32%]' />
    </section>
  )
}

export default Article