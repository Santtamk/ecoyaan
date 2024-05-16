import React from 'react'
import './css/nav.css'
import HeroSection from './HeroSection'
import MainSection from './MainSection'

const HomePage = () => {
  return (
    <>
      <div className='body' >
          <HeroSection />
      </div>
      <MainSection />
    </>
  )
}

export default HomePage