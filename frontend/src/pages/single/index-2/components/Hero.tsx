import banner1 from '@//assets/img/banner/vl-home-bg-2.png'
import banner2 from '@/assets/img/banner/vl-bnr-2.1.png'
import ctaShape from '@/assets/img/icons/vl-cta-shape.svg'
import circle from '@/assets/img/shape/vl-half-cicle-2.1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div>
      <section
        className="vl-hero-area p-relative fix z-index-1 pt-200 pb-70"
        style={{
          backgroundImage: `url(${banner1})`,
        }}>
        <div className="vl--shape d-none d-md-block">
          <img src={ctaShape} alt="" />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col xl={6} className="mb-30">
              <div className="vl-hero-content p-relative z-index-1">
                <div className="vl-section-title-wrapper">
                  <h4 className="vl-section-subtitle-2 fw-500">Top #1 It Service & Technology</h4>
                  <h1 className="vl-section-heading vl-white pt-16">Future-Proof Your Business With Best Expert IT Solutions</h1>
                  <p className="vl-section-description section-description3  pt-16 pb-28">
                    Empower your business with cutting technology solutions <br /> tailored to meet your unique needs from cloud computing.
                  </p>
                </div>

                <div className="vl-hero-btn">
                  <Link to="/contact" className="them-btn2 fix mr-16">
                    Explore Solutions{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                  <Link to="/contact" className="theme-sec-btn2">
                    Contact Us
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={6} className="mb-30 p-relative">
              <div className="vl-hero-half-circle">
                <img src={circle} alt="" />
              </div>
              <div className="vl-hero-img--2 p-relative">
                <img src={banner2} alt="" />
                <div className="vl-hero-banner-content-2">
                  <h4 className="vl-hero-banner-content-2-text">Help You To Grow Your Business</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Hero
