import React from 'react'
import { Link } from 'react-router-dom'; // Add missing import statement
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import SuggestedPosts from './container/SuggestedPosts';


const breadCrumbsData = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Article Detail',
    link: '/blog/1',
  },

]

const postsData = [
  {
    _id: 1,
    image: images.laptop,
    title: 'Help children get better education',
    createdAt: "2024-03-7T00:00:00Z",
  },
  {
    _id: 2,
    image: images.laptop,
    title: 'Help children get better education',
    createdAt: "2024-03-7T00:00:00Z",
  },
  {
    _id: 3,
    image: images.laptop,
    title: 'Help children get better education',
    createdAt: "2024-03-7T00:00:00Z",
  },
  {
    _id: 4,
    image: images.laptop,
    title: 'Help children get better education',
    createdAt: "2024-03-7T00:00:00Z",
  },
  ]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto mx-w-5xl flex flex-col px-5 py-5'>
             <article className='flex-1'>
              <BreadCrumbs data={breadCrumbsData} />
              <img className='rounded-xl w-full' src={images.laptop} alt="laptop" />
              <Link to="/blog?category=selectedCategory" className="text-primary text-sm font-roboto inline-block mt-4">
                EDUCATION
              </Link>
              <h1 className='text-xl font-medium font-roboto text-dark-hard'>
                Help children get better education
              </h1>
              <div className='mt-4 text-dark-soft'>
                <p className='leading-7 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim feugiat scelerisque. Etiam ac ornare sapien. Proin leo tortor, sodales id maximus id, mattis non augue. Maecenas aliquet efficitur nisl eget dignissim. Integer tortor est, cursus id dapibus vitae, vulputate in eros. Donec eu scelerisque ipsum. Nam malesuada finibus dictum. Sed quis est at purus euismod varius. Fusce ut ante ac lectus fringilla pharetra non nec diam.
                </p>
              </div>
             </article>
             <SuggestedPosts header="Latest Article" posts={postsData}/>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage