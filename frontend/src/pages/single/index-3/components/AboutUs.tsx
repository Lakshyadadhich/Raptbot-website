import about1 from '@/assets/img/about/vl-about-3.1.png'
import about2 from '@/assets/img/about/vl-about-sm-3.2.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactCountUp from 'react-countup'
import { FaArrowRight, FaCheck, FaPhone } from 'react-icons/fa6'

const services = ['Financial Freedom Consulting', 'Next Genaration Accounting', 'Money Management Consulting', 'Short-Range Finance Planningss']
const AboutUs = () => {
  return (
    <section className="vl-about-area pt-100 pb-70" id="about">
      <Container>
        <Row className="flex-lg-row flex-column-reverse align-items-center">
          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-about-imgs vl-about-imgs-3 p-relative z-index-1 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="900">
              <div className="vl-about-large">
                <img src={about1} alt="" />
              </div>
              <div className="vl-about-sm d-none d-md-block">
                <img src={about2} alt="" />
              </div>
              <div className="vl-about-content br-8">
                <div className="vl-about-counter-box pb-16">
                  <span className="counter vl-white">
                    <ReactCountUp end={12} duration={2} />
                  </span>
                  <span>+</span>
                </div>
                <p>
                  With 12+ years of experience <br />
                  helping the community.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-about-content vl-about-content-3 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="900">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-4 vl-fs-16 m-0 vl-theme-color3 vl-upper">About Us</h4>
                <h2 className="vl-section-title vl-blc-text-4 pt-16 pb-20">
                  Empowering Businesses <br /> One Solution at a Time
                </h2>
                <p className="vl-section-description vl-section-description-3 pb-32">
                  With a passion for solving complex challenges, we specialize in <br /> delivering tailored IT solutions that empower businesses
                  thrive.
                </p>
              </div>

              <div className="vl-about-grid pb-16">
                {services.map((service, index) => (
                  <div className="vl-about-ch-box mb-16" key={index}>
                    <div className="vl-about-ch-icon">
                      <span>
                        <FaCheck />
                      </span>
                    </div>
                    <div className="vl-about-content">
                      <h4 className="vl-about-ch-title">{service}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vl-about-auth">
                <div className="vl-about-authbtn">
                  <a href="#" className="thme-btn3 mr-32">
                    Get Started{' '}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>

                <div className="vl-about-auth-box mr-32">
                  <div className="box-icon mr-10">
                    <span>
                      <FaPhone />
                    </span>
                  </div>
                  <div className="box-content">
                    <span className="pb-10">Free Consultation</span>
                    <a className="num" href="tel:1234567890">
                      123-456-7890
                    </a>
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

export default AboutUs
