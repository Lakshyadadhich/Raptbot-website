import about41 from '@/assets/img/about/vl-about-4.1.png'
import aboutTop from '@/assets/img/about/vl-about-top-sm-4.2.png'
import poligon from '@/assets/img/icons/vl-about-poliogon.svg'
import ser1 from '@/assets/img/icons/technical excellence.svg'
import ser2 from '@/assets/img/icons/strategic parternship.svg'
import ser3 from '@/assets/img/icons/deliver approach.svg'
import ser4 from '@/assets/img/icons/global delivery.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '@/assets/scss/component/_shared.scss'
import { FaArrowRight } from 'react-icons/fa6'

const ChooseUs = () => {
  return (
    <>
      {/*   Added chooseus-section wrapper class for scoped styling */}
      <section className="chooseus-section vl-about-area about-area-wide pt-50 pb-20 h-75">
        <Container>
          <Row className="flex-lg-row flex-column-reverse align-items-start">
            {/* Left Image */}
            <Col xl={3} lg={4} md={5} className="mb-30">
              <div
                suppressHydrationWarning
                className="vl-about-imgs vl-about-imgs-3 p-relative z-index-1 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="800">
                <div className="vl-about-large4 shrink-img">
                  <img className="responsive-main-img" src={about41} alt="About Raptbot" />
                </div>
                <div className="vl-about-sm-2 d-none d-lg-block">
                  <img className="responsive-overlay-img" src={aboutTop} alt="About overlay" />
                </div>

                {/*   UPDATED: Polygon badge now positioned at bottom-right of image */}
                <div className="vl-about-poligon-shap p-relative z-index-1">
                  <img className="responsive-polygon" src={poligon} alt="Experience badge" />
                  <div className="vl-about-poligon-title">
                    <span className="counter vl-semi vl-whit responsive-counter">8+</span>
                    <p className="vl-fs-20 vl-lineheight-20 pt-10 responsive-exp-text">
                      Year <br /> experience
                    </p>
                  </div>
                </div>

                {/*  NEW: Explore button moved to bottom-left of image section */}
                <div className="vl-aboutbtn-left responsive-btn-container-left">
                  <div className="vl-herobtn vl-aboutbtn vl-lower">
                    <Link to="/about" className="theme-btn theme-btn2 responsive-btn">
                      explore more
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Content */}
            <Col xl={9} lg={8} md={7} className="mb-30">
              <div
                suppressHydrationWarning
                className="vl-about-content-4 responsive-content aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="800">
                <div className="vl-section-title-wrapper">
                  <div className="vl-section-subheading">
                    <h4 className="vl-section-subtitle-6 vl-upper responsive-subtitle">why Raptbot?</h4>
                  </div>
                  <h2 className="vl-section-title vl-section-title-2 pt-16 pb-20 responsive-main-title">Beyond solutions building trust growth.</h2>
                  <p className="vl-section-description-2 pb-32 responsive-description">
                    We go beyond consulting—delivering measurable outcomes through Salesforce, AWS expertise, and cloud innovation, empowering your
                    business with growth, agility, and trusted excellence.
                  </p>

                  {/*   4 Cards in a Responsive Grid */}
                  <div className="chooseus-grid responsive-grid">
                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox responsive-card">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle responsive-icon-circle">
                          <img src={ser1} alt="Technical Excellence" />
                        </span>
                        <h3 className="vl-about-icon-title responsive-card-title">
                          <Link to="/service-single">Technical excellence</Link>
                        </h3>
                      </div>
                      <p className="responsive-card-desc">
                        Driving innovation with scalable, reliable, certified Salesforce, AWS, AI, and cloud expertise.
                      </p>
                    </div>

                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox responsive-card">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle responsive-icon-circle">
                          <img src={ser2} alt="Strategic Partnership" />
                        </span>
                        <h3 className="vl-about-icon-title responsive-card-title">
                          <Link to="/service-single">Strategic partnership</Link>
                        </h3>
                      </div>
                      <p className="responsive-card-desc">
                        Long-term strategic partner delivering innovation, tailored solutions and sustained growth.
                      </p>
                    </div>

                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox responsive-card">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle responsive-icon-circle">
                          <img src={ser3} alt="Delivery Approach" />
                        </span>
                        <h3 className="vl-about-icon-title responsive-card-title">
                          <Link to="/service-single">Delivery approach</Link>
                        </h3>
                      </div>
                      <p className="responsive-card-desc">Agile frameworks with governance and collaboration for precise outcomes.</p>
                    </div>

                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox responsive-card">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle responsive-icon-circle">
                          <img src={ser4} alt="Global Delivery" />
                        </span>
                        <h3 className="vl-about-icon-title responsive-card-title">
                          <Link to="/service-single">Global delivery</Link>
                        </h3>
                      </div>
                      <p className="responsive-card-desc">
                        Seamless offshore delivery enabling global collaboration with secure, high-performance solutions.
                      </p>
                    </div>
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