import React from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import RecentWorks from './components/RecentWorks'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

const Home = () => {
  return (
    <>
    <Hero />
    <AboutMe />
    <Services />
    <RecentWorks />
    <Testimonial />
    <Contact />
    </>
  )
}

export default Home