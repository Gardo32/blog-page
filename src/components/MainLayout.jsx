import React from 'react'
import Head from './Head'
import Foot from './Foot'

const MainLayout = ({children}) => {
  return (
    <div>
      <Head />
        {children}
      <Foot />
    </div>
  )
}

export default MainLayout