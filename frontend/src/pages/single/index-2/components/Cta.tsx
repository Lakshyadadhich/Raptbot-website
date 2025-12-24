import cta from '@/assets/img/cta/vl-cta-1.1.png'
import shape2 from '@/assets/img/icons/vl-cta-shape.svg'
import shape1 from '@/assets/img/shape/vl-cta-shape-2.1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Cta = () => {
  return (
    <section className="vl-cta">
      <Container>
        <div className="vl-cta-bg-1 vl-cta-bg-2 p-relative fix br-8">
          <div className="vl-cta-shape-2">
            <img src={shape1} alt="" />
          </div>
          <div className="vl-cta-shape">
            <img src={shape2} alt="" />
          </div>
          <Row>
            <Col lg={6}>
              <div suppressHydrationWarning className="vl-cta-wrapper mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
                <h2 className="vl-cta-wrapper-title vl-white pb-32">Transform Your Business Contact Us Today</h2>
                <div className="vl-cta-btn">
                  <Link to="/blog" className="them-btn2">
                    Start Your Journey
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div suppressHydrationWarning className="vl-cta-img aos-init aos-animate" data-aos="fade-left" data-aos-duration="900">
                <img src={cta} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Cta
