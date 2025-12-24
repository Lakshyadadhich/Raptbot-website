import bnr1 from '@/assets/img/banner/vl-bnr-1.1.png'
import bnr2 from '@/assets/img/banner/vl-bnr-1.2.png'
import shape from '@/assets/img/icons/vl-hero-shape-1.1.svg'
import arrow from '@/assets/img/icons/vl-long-arrow.svg'
import circle from '@/assets/img/icons/vl-shape-circle-1.1.svg'
import circle1 from '@/assets/img/shape/cl-text-circle.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="vl-hero-area vl-black-bg p-relative z-index-1 pt-190 pb-70">
      <div className="vl-hero-dot-shape d-none d-lg-block">
        <img className="vl-hero-dot-shape-1" src={circle} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-content p-relative z-index-1">
              <div className="vl-hero-shape d-none d-lg-block">
                <img src={shape} alt="" />
              </div>

              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle vl-white vl-upper">IT Solutions for a Smarter Future</h4>
                <h1 className="vl-section-heading vl-white pt-16">Innovative IT Service Best Solutions For A Smarter Future</h1>
                <p className="vl-section-description pt-16 pb-28">
                  Empower your business with cutting technology solutions <br /> tailored to meet your unique needs from cloud computing.
                </p>
              </div>

              <div className="vl-hero-btn mb-60">
                <Link to="/contact" className="vl-btn-sec">
                  <span className="vl-btn-wrap">
                    <span className="vl-btn-y-1">Explore Solutions</span>
                    <span className="vl-btn-y-2">Explore Solutions</span>
                  </span>
                </Link>

                <Link to="/contact" className="vl-btn-sec vl-btn-sec-2">
                  <span className="vl-btn-wrap">
                    <span className="vl-btn-y-1">Contact us</span>
                    <span className="vl-btn-y-2">Contact us</span>
                  </span>
                </Link>
              </div>
              <div className="vl-hero-counter">
                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <CountUp start={0} end={90} duration={10}  />
                    <span>k</span>
                  </span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">Happy Client</h4>
                </div>
                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <CountUp start={0} end={650} duration={10} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">Total Projects</h4>
                </div>

                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <CountUp start={0} end={85} duration={10} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">Work Together</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-img p-relative">
              <div className="vl-hero-circle">
                <a href="#about">
                  <div className="vl-hero-circle-icon">
                    <span>
                      <img src={arrow} alt="" />
                    </span>
                  </div>
                  <img className="vl-hero-circle-icon-text" src={circle1} alt="" />
                </a>
              </div>
              <div className="vl-hero-img-1">
                <img src={bnr1} alt="" />
              </div>
              <div className="vl-hero-img-1 vl-hero-img-2">
                <img className="img2" src={bnr2} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
