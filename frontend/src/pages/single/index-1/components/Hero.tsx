import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import hero from '@/assets/img/banner/vl-hero-4.1.png'
import banner from '@/assets/img/banner/vl-hero-bg-4.1.png'
import heroGroup from '@/assets/img/banner/vl-hero-group.png'
import emoji1 from '@/assets/img/icons/vl-emoji-4.1.svg'
import emoji2 from '@/assets/img/icons/vl-emoji-4.2.svg'
import emoji3 from '@/assets/img/icons/vl-emoji-4.3.svg'
import fan from '@/assets/img/icons/vl-fan.svg'
import ReactCountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="vl-hero-area vl-hero-area-4 vl-hero-bg p-relative z-index-1 fix pt-190 pb-70" style={{ backgroundImage: `url(${banner})` }}>
      <Container>
        <Row>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-content p-relative z-index-1">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-5 vl-white vl-upper">IT Solutions for a Smarter Future</h4>
                <h1 className="vl-section-heading vl-section-heading-2 vl-white pt-16">IT Solutions For A Digital-First World</h1>
                <p className="vl-section-description pt-16 pb-28">
                  Empower your business with cutting-edge technology solutions tailored to meet your unique needs from cloud computing.
                </p>
              </div>

              <div className="vl-btns mb-60">
                <div className="vl-herobtn vl-upper">
                  <a href="#" className="theme-btn">
                    Book a Free Consultation
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>

              <div className="vl-hero-counter">
                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <ReactCountUp end={90} duration={2} />
                  </span>
                  <span>k</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">Happy Clients</h4>
                </div>
                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <ReactCountUp end={650} duration={2} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">Total Projects</h4>
                </div>

                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <ReactCountUp end={85} duration={2} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">Work Together</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-img p-relative">
              <div className="vl-hero-shape-4">
                <div className="vl-shape-1">
                  <img src={emoji1} alt="" />
                </div>
                <div className="vl-shape-2">
                  <img src={emoji2} alt="" />
                </div>
                <div className="vl-shape-3">
                  <img src={emoji3} alt="" />
                </div>
              </div>
              <div className="vl-hero-fan">
                <img className="w-100" src={fan} alt="" />
              </div>
              <div className="vl-hero-img-4">
                <img className="w-100" src={hero} alt="" />
              </div>
              <div className="vl-hero-img-4-content">
                <h3 className="vl-hero-img-4-title pb-20">
                  Worked With More Than <br /> 100+ Technology
                </h3>
                <div className="vl-hero-img-4-grup">
                  <div className="vl-hero-img-4-grup-img">
                    <img src={heroGroup} alt="" />
                  </div>
                  <div className="vl-hero-img-4-grup-content">
                    <h4>
                      100+ <br /> Clients
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
