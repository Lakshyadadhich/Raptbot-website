import banner from '@/assets/img/banner/vl-breadcrumb-bg.png'
import emoji2 from '@/assets/img/icons/vl-emoji-4.2.svg'
import emoji3 from '@/assets/img/icons/vl-emoji-4.3.svg'
import sm from '@/assets/img/icons/vl-fan-sm.svg'
import MainLayout from '@/components/MainLayout'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import Faq from './components/Faq'
import breadcrumb from '@/assets/img/banner/faq-breadcrumb.png'

const page = () => {
  return (
    <>
      <MainLayout>
        <section
          className="vl-breadcrumb-bg p-relative z-index-1 fix pt-190 pb--70"
          style={{ backgroundImage: `url(${banner})` }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 mb-30">
                <div className="vl-breadcrumb">
                  <h1 className="vl-fs-60 vl-white pb-24">Frequently Asked Questions</h1>
                  <div className="vl-breadcrumb-list">
                    <span>
                      <a href="/">Home</a>
                    </span>
                    <span className="dvir">
                      <FaAngleRight className="fa-solid fa-angle-right" />
                    </span>
                    <span className="active">
                      <a href="#">Frequently Asked Questions</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 mb-30">
                <div className="vl-hero-img p-relative">
                  <div className="vl-hero-shape-4">
                    <div className="vl-shape-2">
                      <img src={emoji2} alt='' />
                    </div>
                    <div className="vl-shape-3">
                      <img src={emoji3} alt='' />
                    </div>
                  </div>
                  <div className="vl-breadcrumb-fan">
                    <img className="w-100" src={sm} alt='' />
                  </div>
                  <div className="vl-breadcrumb-img faq-breadcrub">
                    <img src={breadcrumb} alt='' height={360} className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </MainLayout>
    </>
  )
}

export default page

export { Head } from '@/components/PageMeta'
