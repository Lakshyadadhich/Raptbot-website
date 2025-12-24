import arrow from '@/assets/img/icons/vl-arrow-up.svg'
import shape from '@/assets/img/shape/vl-service-4.1.svg'
import studies1 from '@/assets/img/studies/vl-studies-1.1.png'
import studies2 from '@/assets/img/studies/vl-studies-1.2.png'
import { default as studies3, default as studies4 } from '@/assets/img/studies/vl-studies-1.3.png'
import studies5 from '@/assets/img/studies/vl-studies-1.5.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CaseStudies = () => {
  return (
    <section className="vl-gallery p-relative z-index-1 vl-black-bg pt-100 pb-70" id="case">
      <div className="vl-case-shape-1">
        <img src={shape} alt="" />
      </div>
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle vl-white vl-upper">Our Case Studies</h4>
          <h2 className="vl-section-title vl-white pt-16">Success Stories Inspire</h2>
        </div>
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={7} md={6}>
                <div suppressHydrationWarning className="vl-gallery-item mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
                  <div className="vl-gallery-item-img">
                    <img className="w-100" src={studies1} alt="" />
                    <div className="vl-gallery-item-icon">
                      <Link to="/case-studies-single">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6}>
                <div suppressHydrationWarning className="vl-gallery-item mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <div className="vl-gallery-item-img">
                    <img className="w-100" src={studies2} alt="" />
                    <div className="vl-gallery-item-icon">
                      <Link to="/case-studies-single">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div suppressHydrationWarning className="vl-gallery-item mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1100">
                  <div className="vl-gallery-item-img">
                    <img className="w-100" src={studies3} alt="" />
                    <div className="vl-gallery-item-icon">
                      <Link to="/case-studies-single">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div suppressHydrationWarning className="vl-gallery-item mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                  <div className="vl-gallery-item-img">
                    <img className="w-100" src={studies4} alt="" />
                    <div className="vl-gallery-item-icon">
                      <Link to="/case-studies-single">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6}>
            <div suppressHydrationWarning className="vl-gallery-item mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="vl-gallery-item-img vl-gallery-item-img-2">
                <img className="vl-gallery-large w-100" src={studies5} alt="" />
                <div className="vl-gallery-item-icon">
                  <Link to="/case-studies-single">
                    <img src={arrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CaseStudies
