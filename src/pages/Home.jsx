import React from 'react'
import Hero from '../components/Home/Hero'
import GallerySection from '../components/Home/GallerySection'
import VideoSection from '../components/Home/VideoSection'
import New_Arrivals from '../components/Home/New_Arrivals'

const Home = () => {
  return (
    <div>
      <Hero/>
      <GallerySection/>
      <VideoSection/>
      <New_Arrivals/>
    </div>
  )
}

export default Home
