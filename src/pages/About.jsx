import React from 'react'
import Hero from '../components/About/Hero'
import Best_Sellers from '../components/About/Best_Sellers'
import Cards_Section from '../components/About/Cards_Section'
import FaqSection from '../components/About/FaqSection'

const About = () => {
  return (
    <div>
      <Hero/>
      <Best_Sellers/>
      <Cards_Section/>
      <FaqSection/>
    </div>
  )
}

export default About
