import cta1 from '@/assets/img/cta/vl-cta-main-4.1.png'
import shape1 from '@/assets/img/icons/vl-cta-shape-4.1.svg'
import cta2 from '@/assets/img/shape/vl-cta-iner-shape.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Cta = () => {
  return (
    <section className="vl-cta">
      <Container>
        <div className="vl-cta-bg-1 vl-cta-bg-4 p-relative fix br-8 pt-80 pb-50">
          <div className="vl-cta-shape">
            <img src={shape1} alt="" />
          </div>
          <Row>
            <Col lg={6}>
              <div className="vl-cta-wrapper mb-30">
                <h2 className="vl-cta-wrapper-title vl-white pb-32">Transform Your Business Contact Us Today</h2>

                <div className="vl-cta-mailform">
                  <form action="#">
                    <div className="vl-cta-mail">
                      <input type="email" placeholder="Email Address" />
                      <div className="vl-cta-mail-btn">
                        <div className="vl-herobtn vl-aboutbtn vl-upper">
                          <button className="theme-btn theme-btn2 vl-upper">
                            Subscribe Now{' '}
                            <span>
                              <FaArrowRight />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vl-cta-img p-relative z-index-1">
                <img src={cta1} alt="" />
                <div className="vl-cta-half-circle">
                  <img src={cta2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Cta
