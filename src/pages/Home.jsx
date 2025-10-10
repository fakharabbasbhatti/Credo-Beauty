import React from 'react'
import Hero from '../components/Home/Hero'
import GallerySection from '../components/Home/GallerySection'
import VideoSection from '../components/Home/VideoSection'
import New_Arrivals from '../components/Home/New_Arrivals'
import Best_Sellers from '../components/Home/Best_Sellers'
import Feature_Cards from '../components/Home/Feature_Cards'

const Home = () => {
  return (
    <div>
      <Hero/>
      <GallerySection/>
      <VideoSection/>
      <New_Arrivals/>
      <Best_Sellers/>
      <Feature_Cards/>
    </div>
  )
}

export default Home
