import service from '@/assets/img/icons/vl-service-ic-3.1.svg'
import service2 from '@/assets/img/icons/vl-service-ic-3.2.svg'
import service3 from '@/assets/img/icons/vl-service-ic-3.3.svg'
import service4 from '@/assets/img/icons/vl-service-ic-3.4.svg'
import service5 from '@/assets/img/icons/vl-service-ic-3.5.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Service = () => {
  return (
    <section className="vl-service-area vl-gray-bg-2 pt-100 pb-70" id="service">
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-4 vl-fs-16 m-0 vl-theme-color3 vl-upper">Our Service</h4>
          <h2 className="vl-section-title vl-blc-text-4 pt-16 pb-20">
            Transforming Businesses with <br /> Expert IT Services
          </h2>
        </div>
        <Row>
          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-service-content vl-service-content-3 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="900">
              <div className="vl-service-icon icon3">
                <span>
                  <img src={service} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title pt-32">
                <Link to="/service/single">IT Consulting Services</Link>
              </h2>
              <p className="pt-16 pb-24">
                Navigate the complexities technology with expert guidance <br />
                from our IT consultants. We help businesses strategize.
              </p>
              <Link to="/service/single" className="vl-readmore">
                Learn More
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </Col>

          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-service-content vl-service-content-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1100">
              <div className="vl-service-icon icon3">
                <span>
                  <img src={service2} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title pt-32">
                <Link to="/service/single">Managed services</Link>
              </h2>
              <p className="pt-16 pb-24">
                Keep your business running smoothly with reliable optimized
                <br /> IT infrastructure we provide end infrastructure management.
              </p>
              <Link to="service/single" className="vl-readmore">
                Learn More
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </Col>

          <Col lg={12} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-service-content vl-service-content-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1300">
              <div className="vl-df">
                <div className="vl-service-icon icon3">
                  <span>
                    <img src={service3} alt="" />
                  </span>
                </div>
                <div className="vl-content">
                  <h2 className="vl-service-title">
                    <Link to="/service-single">Cybersecurity Services</Link>
                  </h2>
                  <p className="pt-16 pb-24">
                    Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions. From threat detection
                    <br /> and response to data encryption and compliance management, we safeguard your digital assets 24/7.
                  </p>
                  <Link to="/service-single" className="vl-readmore">
                    Learn More
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-service-content vl-service-content-3 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1400">
              <div className="vl-df">
                <div className="vl-service-icon icon3">
                  <span>
                    <img src={service4} alt="" />
                  </span>
                </div>
                <div className="vl-content">
                  <h2 className="vl-service-title">
                    <Link to="service/single">Cloud Solutions</Link>
                  </h2>
                  <p className="pt-16 pb-24">
                    Leverage the power the cloud to streamline your <br />
                    operations boost scalability. Our cloud solutions <br />
                    offer secure and flexible environments tailored.
                  </p>
                  <Link to="/service/single" className="vl-readmore">
                    Learn More
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mb-30">
            <div
              suppressHydrationWarning
              className="vl-service-content vl-service-content-3 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1500">
              <div className="vl-df">
                <div className="vl-service-icon icon3">
                  <span>
                    <img src={service5} alt="" />
                  </span>
                </div>
                <div className="vl-content">
                  <h2 className="vl-service-title">
                    <Link to="service/single">Software Development</Link>
                  </h2>
                  <p className="pt-16 pb-24">
                    Transform your ideas into reality with our custom <br />
                    software development services. Whether you <br /> need mobile apps, web platforms, or enterprise.
                  </p>
                  <Link to="service/single" className="vl-readmore">
                    Learn More
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
  )
}

export default Service
