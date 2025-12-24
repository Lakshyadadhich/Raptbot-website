import icon from '@/assets/img/icons/vl-service-1.2.svg'
import service1 from '@/assets/img/service/vl-service-1.1.png'
import service2 from '@/assets/img/service/vl-service-1.2.png'
import service3 from '@/assets/img/service/vl-service-1.3.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Service = () => {
  return (
    <section className="vl-service-area vl-comn-black pt-100 pb-70" id="service">
      <Container>
        <div suppressHydrationWarning className="vl-services text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
          <div className="vl-section-title-wrapper mb-60">
            <h4 className="vl-section-subtitle vl-white vl-upper">Our Services</h4>
            <h2 className="vl-section-title vl-white pt-16">
              Transforming Businesses <br /> with Expert IT Services
            </h2>
          </div>
        </div>
        <Row>
          <Col lg={5} className="mb-30">
            <div suppressHydrationWarning className="vl-service-img aos-init aos-animate" data-aos="fade-right" data-aos-duration="800">
              <img className="w-100" src={service1} alt="" />
            </div>
          </Col>
          <Col lg={7} className="mb-30">
            <div suppressHydrationWarning className="vl-service-content aos-init aos-animate" data-aos="fade-left" data-aos-duration="900">
              <div className="vl-service-icon">
                <span>
                  <img src={icon} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title1 pt-32">
                <Link to="/service-single">Data Analytics & Business Intelligence</Link>
              </h2>
              <p className="pt-16 pb-24">
                Make informed decisions with actionable insights powered data <br /> analytics. Our Business Intelligence (BI) solutions help you
                collect, <br />
                process, visualize.
              </p>
              <div className="vl-service-redmore">
                <Link to="/service-single" className="vl-readmore">
                  Learn More{' '}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="flex-lg-row flex-column-reverse align-items-center">
          <Col lg={7} className="mb-30">
            <div suppressHydrationWarning className="vl-service-content aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
              <div className="vl-service-icon">
                <span>
                  <img src={icon} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title1 vl-white pt-32">
                <Link to="/service-single">Software Development & Integration</Link>
              </h2>
              <p className="pt-16 pb-24">
                Bring your ideas to life with our custom software development services. <br />
                We design, develop, & integrate software solutions tailored your
                <br /> business.
              </p>
              <div className="vl-service-redmore">
                <Link to="/service-single" className="vl-readmore">
                  Learn More{' '}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={5} className="mb-30">
            <div suppressHydrationWarning className="vl-service-img aos-init aos-animate" data-aos="fade-left" data-aos-duration="1100">
              <img className="w-100" src={service2} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="mb-30">
            <div suppressHydrationWarning className="vl-service-img aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200">
              <img className="w-100" src={service3} alt="" />
            </div>
          </Col>
          <Col lg={7} className="mb-30">
            <div suppressHydrationWarning className="vl-service-content aos-init aos-animate" data-aos="fade-left" data-aos-duration="900">
              <div className="vl-service-icon">
                <span>
                  <img src={icon} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title1 vl-white pt-32">
                <Link to="/service-single">Digital Transformation Services</Link>
              </h2>
              <p className="pt-16 pb-24">
                Stay ahead in a competitive market with digital transformation. <br />
                We help businesses integrate the latest technologies to
                <br /> improve efficiency.
              </p>
              <div className="vl-service-redmore">
                <Link to="/service-single" className="vl-readmore">
                  Learn More{' '}
                  <span>
                    <FaArrowRight />
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

export default Service
