import MainLayout from '@/components/MainLayout'
import React from 'react'
import Blog from './components/Blog'
import CaseStudies from './components/CaseStudies'
import ChooseUs from './components/Choose'
import Hero from './components/Hero'
import Service from './components/Service'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <ChooseUs />
        <Service />
        <CaseStudies />
        <Testimonial />
        <Team />
        {/* <Blog /> */}
      </MainLayout>
    </>
  )
}

export default page
export { Head } from '@/components/PageMeta'
