import BackToTop from '@/components/BackToTop'
import BasicLayout from '@/components/BasicLayout'
import React from 'react'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar2 from './components/NavBar'
import Service from './components/Service'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <BasicLayout>
        <NavBar2 />
        <main>
          <Hero />
          <AboutUs />
          <Service />
          <CaseStudies />
          <Testimonial />
          <Team />
          <Contact />
          <Blog />
          <Cta />
        </main>
        <Footer />
        <BackToTop ClassName="progress-wrap active-progress progress-wrap progress-wrap2" />
      </BasicLayout>
    </>
  )
}

export default page
export { Head } from '@/components/PageMeta'
