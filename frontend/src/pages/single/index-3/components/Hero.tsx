import banner from '@/assets/img/banner/vl-hero-bg-3.png'
import hero from '@/assets/img/banner/vl-hero-img-3.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactCountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section
      className="vl-hero-area vl-hero-bg p-relative fix z-index-1 pt-234 pb-100"
      style={{
        backgroundImage: `url(${banner})`,
      }}>
      <Container>
        <Row>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-content p-relative z-index-1">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-3 vl-theme-color-3 vl-upper vl-fs-16 m-0 br-50 vl-white">IT Solutions for a Smarter Future</h4>
                <h1 className="vl-section-heading vl-white pt-16">Your Growth Powered By So Advanced IT Service Solutions</h1>
                <p className="vl-section-description pt-16 pb-28">
                  Empower your business with cutting technology solutions <br />
                  tailored to meet your unique needs from cloud computing.
                </p>
              </div>

              <div className="vl-hero-btn-3">
                <a href="" className="vl-btn-3">
                  Book a Free Consultation
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </Col>

          <Col xl={5} className="mb-30">
            <div className="vl-hero-img-3 p-relative">
              <img className="w-100" src={hero} alt="" />
            </div>
          </Col>
          <Col xl={1}></Col>
        </Row>

        <div className="vl-hero-counter vl-hero-counter-3">
          <div className="vl-hero-counter-box mb-30">
            <span className="counter vl-44 vl-white">
              <ReactCountUp end={1300} duration={2} formattingFn={(n) => (n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n.toString())} />
            </span>

            <h4 className="vl-hero-counter-box-title vl-white pt-12">Happy Client</h4>
          </div>

          <div className="vl-hero-counter-box mb-30">
            <span className="counter vl-white">
              <ReactCountUp end={199} duration={2} />
            </span>
            <span>+</span>
            <h4 className="vl-hero-counter-box-title vl-white pt-12">Total Projects</h4>
          </div>

          <div className="vl-hero-counter-box mb-30">
            <span className="counter vl-white">
              <ReactCountUp end={99} duration={2} />
            </span>
            <span>+</span>
            <h4 className="vl-hero-counter-box-title vl-white pt-12">Team Member</h4>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
