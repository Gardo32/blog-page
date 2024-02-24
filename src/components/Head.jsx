import React from 'react'
import { images } from '../constants'

const Head = () => {
  return (
    <section>
      <header>
        <div>
          <img src={images.logo} alt='logo' />
        </div>
        <div></div>
      </header>
    </section>
  )
}

export default Head