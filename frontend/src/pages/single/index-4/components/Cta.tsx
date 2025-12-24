import cta from '@/assets/img/cta/vl-cta-1.1.png'
import shape from '@/assets/img/icons/vl-cta-shape.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Cta = () => {
  return (
    <section className="vl-cta">
      <Container>
        <div className="vl-cta-bg-1 p-relative br-8 fix">
          <div className="vl-cta-shape">
            <img src={shape} alt="" />
          </div>
          <Row>
            <Col lg={6}>
              <div suppressHydrationWarning className="vl-cta-wrapper mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
                <h2 className="vl-cta-wrapper-title vl-white pb-32">Transform Your Business Contact Us Today</h2>
                <div className="vl-cta-wrapper">
                  <Link to="/contact" className="vl-btn-sec vl-btn-sec-black">
                    <span className="vl-btn-wrap">
                      <span className="vl-btn-y-1">start your joureny</span>
                      <span className="vl-btn-y-2">start your joureny</span>
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div suppressHydrationWarning className="vl-cta-img aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200">
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
