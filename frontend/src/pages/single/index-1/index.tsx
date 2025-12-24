import BackToTop from '@/components/BackToTop'
import BasicLayout from '@/components/BasicLayout'
import React from 'react'
import Blog from './components/Blog'
import CaseStudies from './components/CaseStudies'
import ChooseUs from './components/ChooseUs'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Service from './components/Service'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <BasicLayout>
        <NavBar />
        <main>
          <Hero />
          <ChooseUs />
          <Service />
          <CaseStudies />
          <Testimonial />
          <Team />
          <Blog />
          <Cta />
        </main>
        <Footer />
        <BackToTop ClassName="progress-wrap" />
      </BasicLayout>
    </>
  )
}

export default page
export { Head } from '@/components/PageMeta'
