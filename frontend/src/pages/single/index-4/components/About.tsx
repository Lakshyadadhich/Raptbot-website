import about1 from '@/assets/img/about/vl-about-1.1.png'
import about2 from '@/assets/img/about/vl-about-1.2.png'
import shape from '@/assets/img/shape/vl-about-shape-4.1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const About = () => {
  return (
    <section id="about" className="vl-about-area vl-black-bg p-relative z-index-1 pt-100 pb-70">
      <div className="vl-about-shape-1">
        <img src={shape} alt="" />
      </div>
      <Container>
        <Row className="flex-lg-row flex-column-reverse align-items-center">
          <Col lg={6} className="mb-30">
            <div suppressHydrationWarning className="vl-about-imgs mr-60 aos-init aos-animate" data-aos="fade-right" data-aos-duration="900">
              <div className="vl-about-img-1">
                <img src={about1} alt="" />
              </div>
              <div className="vl-about-img-1 vl-about-img-2">
                <img src={about2} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div suppressHydrationWarning className="vl-about-content aos-init aos-animate" data-aos="fade-left" data-aos-duration="1100">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle vl-white vl-upper">About Us</h4>
                <h2 className="vl-section-title vl-white pt-16 pb-20">Empowering Businesses One Solution at a Time</h2>
                <p className="vl-section-description pb-32">
                  Whether it optimizing IT infrastructure, enhancing <br /> cybersecurity, or driving digital transformation, we are <br /> committed
                  to helping.
                </p>
              </div>

              <div className="vl-about-icon-box mb-30 d-flex">
                <div className="vl-about-icon">
                  <span>
                    <FaCheck />
                  </span>
                </div>
                <div className="vl-about-icon-content">
                  <h4 className="vl-about-icon-title vl-white">Strategic Planning</h4>
                  <p className="vl-about-icon-desc">
                    We specialize in delivering tailored IT solutions
                    <br /> empower businesses to thrive in the digital era. Our <br /> team experts brings deep industry knowledge, cutting-
                    <br />
                    edge tools.
                  </p>
                </div>
              </div>
              <div className="vl-about-btn">
                <Link to="/about" className="vl-btn-sec">
                  <span className="vl-btn-wrap">
                    <span className="vl-btn-y-1">Learn More</span>
                    <span className="vl-btn-y-2">Learn More</span>
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
