import about1 from '@/assets/img/about/vl-about-2.1.png'
import about2 from '@/assets/img/about/vl-about-2.2.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaCheck } from 'react-icons/fa6'

const AboutUs = () => {
  return (
    <section className="vl-about-area pt-100 pb-70" id="about">
      <Container>
        <Row>
          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-about-imgs-2 p-relative mr-60 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="900">
              <div className="vl-about-img--2">
                <img src={about1} alt="" />
              </div>
              <div className="vl-about-img--2-1 d-none d-md-block">
                <img src={about2} alt="" />
              </div>
              <div className="vl-about-imgs-2-check-box">
                <div className="vl-about-imgs-2-check-box-ic">
                  <span>
                    <FaCheck />
                  </span>
                </div>
                <div className="vl-about-imgs-2-check-box-text">
                  <p>
                    With 12+ years of experience
                    <br />
                    helping the community.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-about-content vl-home2-about aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="900">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-black-border">About Us</h4>
                <h2 className="vl-section-title vl-black-theme-2 pt-16 pb-20">
                  Redefining IT Services
                  <br /> with Passion and Purpose
                </h2>
                <p className="vl-section-description-2 pb-32">
                  With a passion for solving complex challenges, we specialize in <br /> delivering tailored IT solutions that empower businesses
                  thrive.
                </p>
              </div>

              <div className="vl-progress-container mb-30">
                <div className="vl-progress-label">
                  <h4 className="vl-fs-20 vl-lineheight-20 pb-12 m-0">IT Consulting Service</h4>
                  <span className="vl-fs-20 vl-lineheight-20">85%</span>
                </div>
                <div className="vl-progress-bar">
                  <div className="vl-progress-bar-fill" data-percentage="85" style={{ width: '85%' }}></div>
                </div>

                <div className="vl-progress-label mt-20">
                  <h4 className="vl-fs-20 vl-lineheight-20 pb-12 m-0">Amazing Communication</h4>
                  <span className="vl-fs-20 vl-lineheight-20">95%</span>
                </div>
                <div className="vl-progress-bar">
                  <div className="vl-progress-bar-fill" data-percentage="95" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="vl-about-btn">
                <Link to="/about" className="them-btn2">
                  See my experience
                  <span>
                    <FaAngleRight className="fs-4" />
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

export default AboutUs
