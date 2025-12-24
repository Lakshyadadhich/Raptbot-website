import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import Features from './components/Features'
import Brand from './components/Brand'
import ChooseUs from './components/Service'
import Success from './components/Success'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <>
      <MainLayout>
        <PageTitle
          title="About us"
          items={[
            { label: 'home', link: '/' },
            { label: 'about us', link: '/about' },
          ]}
        />
        <Features />
        <ChooseUs />
        <Success />
        <Brand />
        {/* <Team /> */}
        <Testimonials />
      </MainLayout>
    </>
  )
}

export default page

export { Head } from '@/components/PageMeta'
