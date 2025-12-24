import about41 from '@/assets/img/about/vl-about-4.1.png'
import aboutTop from '@/assets/img/about/vl-about-top-sm-4.2.png'
import poligon from '@/assets/img/icons/vl-about-poliogon.svg'
import ser1 from '@/assets/img/icons/vl-ser-ic-4.1.svg'
import ser2 from '@/assets/img/icons/vl-ser-ic-4.2.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const ChooseUs = () => {
  return (
    <>
      <section className="vl-about-area pt-100 pb-70" id="about">
        <Container>
          <Row className="flex-lg-row flex-column-reverse align-items-center">
            <Col lg={6} className="mb-30">
              <div
                suppressHydrationWarning
                className="vl-about-imgs vl-about-imgs-3 p-relative z-index-1 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="800">
                <div className="vl-about-large4">
                  <img className="w-100" src={about41} alt="" />
                </div>
                <div className="vl-about-sm-2 d-none d-md-block">
                  <img src={aboutTop} alt="" />
                </div>

                <div className="vl-about-poligon-shap p-relative z-index-1 fl-right">
                  <img src={poligon} alt="" />
                  <div className="vl-about-poligon-title">
                    <span className="counter vl-semi vl-white small">12</span>
                    <span>+</span>
                    <p className="vl-fs-20 vl-lineheight-20 pt-10 m-0 small">Year <br /> experience</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-30">
              <div suppressHydrationWarning className="vl-about-content-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
                <div className="vl-section-title-wrapper">
                  <div className="vl-section-subheading">
                    <h4 className="vl-section-subtitle-6 vl-upper">whey choose US </h4>
                  </div>
                  <h2 className="vl-section-title vl-section-title-2 pt-16 pb-20">
                    Empower Your Business
                    <br /> Every Step of the Way
                  </h2>
                  <p className="vl-section-description-2 pb-32">
                    Whether it optimizing IT infrastructure, enhancing cybersecurity, <br />
                    or driving digital transformation, we are committed to helping.
                  </p>

                  <Row>
                    <Col lg={6} md={6}>
                      <div className="vl-about-icon-box-4 br-8 mb-30">
                        <div className="vl-about-icon-box-4-icon4">
                          <span>
                            <img src={ser1} alt="" />
                          </span>
                        </div>
                        <div className="vl-about-icon-box-4-content4">
                          <h3 className="vl-about-icon-box-4-title pt-20 pb-16">
                            <Link to="/service-single">Excellence in Solution</Link>
                          </h3>
                          <p>We are committed delivering innovative, reliable & scalable.</p>
                        </div>
                      </div>
                    </Col>

                    <Col lg={6} md={6}>
                      <div className="vl-about-icon-box-4 br-8 mb-30">
                        <div className="vl-about-icon-box-4-icon4">
                          <span>
                            <img src={ser2} alt="" />
                          </span>
                        </div>
                        <div className="vl-about-icon-box-4-content4">
                          <h3 className="vl-about-icon-box-4-title pt-20 pb-16">
                            <Link to="/service-single">Difference We Deliver</Link>
                          </h3>
                          <p>
                            Our team of experts brings <br /> years of experience across.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="vl-aboutbtn">
                  <div className="vl-herobtn vl-aboutbtn vl-upper">
                    <Link to="/about" className="theme-btn theme-btn2">
                      About us
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ChooseUs
