import BackToTop from '@/components/BackToTop'
import Loader from '@/components/Loader'
import React, { Suspense } from 'react'
import About from './components/About'
import Blog from './components/Blog'
import Brand from './components/Brand'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar4 from './components/NavBar4'
import Service from './components/Service'
import Success from './components/Success'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar4 />
        <main>
          <Hero />
          <Brand />
          <About />
          <Service />
          <CaseStudies />
          <Testimonial />
          <Success />
          <Blog />
          <Contact />
          <Cta />
        </main>
        <Footer />
        <BackToTop ClassName="progress-wrap progress-wrap4" />
      </Suspense>
    </>
  )
}

export default page
export { Head } from '@/components/PageMeta'
