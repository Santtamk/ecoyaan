import React from 'react'
import TopNav from './TopNav'
import './css/nav.css'
import HeroSection from './HeroSection'
import MainSection from './MainSection'

const HomePage = () => {
  return (
    <>
      <div className='body' >
          <TopNav />
          <HeroSection />
      </div>
      <MainSection />
    </>
  )
}

export default HomePage