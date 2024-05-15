import React from 'react'
import TopNav from './TopNav'
import './css/nav.css'
import HeroSection from './HeroSection'

const HomePage = () => {
  return (
    <>
      <div className='body' >
          <TopNav />
          <HeroSection />
      </div>
    </>
  )
}

export default HomePage