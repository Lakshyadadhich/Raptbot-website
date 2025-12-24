import BackToTop from '@/components/BackToTop'
import BasicLayout from '@/components/BasicLayout'
import React from 'react'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import CaseStudes from './components/CaseStudes'
import Cta from './components/Cta'
import CustomerReview from './components/CustomerReview'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar3 from './components/NavBar'
import Service from './components/Service'
import WorkProcess from './components/WrokProcess'

const page = () => {
  return (
    <>
      <BasicLayout>
        <NavBar3 />
        <main>
          <Hero />
          <AboutUs />
          <Service />
          <CaseStudes />
          <CustomerReview />
          <WorkProcess />
          <Faq />
          <Blog />
          <Cta />
        </main>
        <Footer />
        <BackToTop ClassName="progress-wrap progress-wrap3" />
      </BasicLayout>
    </>
  )
}

export default page
export { Head } from '@/components/PageMeta'
