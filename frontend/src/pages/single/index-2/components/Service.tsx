import service from '@/assets/img/icons/vl-service-ic-2.1.svg'
import sevice2 from '@/assets/img/icons/vl-service-ic-2.2.svg'
import service3 from '@/assets/img/icons/vl-service-ic-2.3.svg'
import service4 from '@/assets/img/icons/vl-service-ic-2.4.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Service = () => {
  return (
    <section className="vl-service-area vl-gray-bg pt-100 pb-70" id="service">
      <Container>
        <div suppressHydrationWarning className="vl-services aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
          <div className="vl-section-title-wrapper mb-60">
            <h4 className="vl-section-subtitle-black-border">Our Service</h4>
            <h2 className="vl-section-title vl-black-theme-2 pt-16">
              Comprehensive IT Solutions <br /> for Every Need
            </h2>
          </div>
        </div>
        <Row>
          <Col suppressHydrationWarning lg={7} className="mb-30 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
            <div className="vl-service-content vl-service-content-2">
              <div className="vl-service-icon vl-service-icon-2">
                <span>
                  <img src={service} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title pt-32">
                <Link to="/service-single">Managed services</Link>
              </h2>
              <p className="pt-16 pb-24">
                Keep your business running with reliable and optimized IT infrastructure <br /> We provide end-to-end infrastructure management, from
                network design.
              </p>
              <Link to="/service-single" className="vl-readmore">
                Learn More{' '}
                <span>
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </Col>

          <Col suppressHydrationWarning lg={5} className="mb-30 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200">
            <div className="vl-service-content vl-service-content-2">
              <div className="vl-service-icon vl-service-icon-2">
                <span>
                  <img src={sevice2} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title pt-32">
                <Link to="/service-single">Software Development</Link>
              </h2>
              <p className="pt-16 pb-24">Transform your ideas into reality with our custom software development service whether you need.</p>
              <Link to="/service-single" className="vl-readmore">
                Learn More{' '}
                <span>
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </Col>

          <Col lg={5} suppressHydrationWarning className="mb-30 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1400">
            <div className="vl-service-content vl-service-content-2">
              <div className="vl-service-icon vl-service-icon-2">
                <span>
                  <img src={service3} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title pt-32">
                <Link to="/service-single">Cybersecurity Services</Link>
              </h2>
              <p className="pt-16 pb-24">
                Protect your business from evolving cyber threats <br /> with our comprehensive cybersecurity solutions.
              </p>
              <Link to="/service-single" className="vl-readmore">
                Learn More{' '}
                <span>
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </Col>

          <Col lg={7} suppressHydrationWarning className="mb-30 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1600">
            <div className="vl-service-content vl-service-content-2">
              <div className="vl-service-icon vl-service-icon-2">
                <span>
                  <img src={service4} alt="" />
                </span>
              </div>
              <h2 className="vl-service-title pt-32">
                <Link to="/service-single">IT Consulting Services</Link>
              </h2>
              <p className="pt-16 pb-24">
                Navigate the complexities of technology with expert guidance from our IT <br /> consultants. We help businesses strategize & implement
                the right solution.
              </p>
              <Link to="/service-single" className="vl-readmore">
                Learn More{' '}
                <span>
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Service
