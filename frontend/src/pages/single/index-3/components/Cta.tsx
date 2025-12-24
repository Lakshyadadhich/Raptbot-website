import cta from '@/assets/img/cta/cta-bg-3.1.jpg'
import email from '@/assets/img/icons/vl-cta-mail-3.2.svg'
import location from '@/assets/img/icons/vl-cta-mail-3.3.svg'
import phone from '@/assets/img/icons/vl-cta-ph-3.1.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Cta = () => {
  return (
    <section className="vl-cta">
      <Container>
        <div
          className="vl-cta-bg-1 vl-cta-bg-3 p-relative br-8"
          style={{
            backgroundImage: `url(${cta})`,
          }}>
          <Row>
            <Col lg={9}>
              <div className="vl-cta-grid">
                <div className="vl-cta-icbox mb-30">
                  <div className="vl-cta-icbox-icon mr-16">
                    <span>
                      <img src={phone} alt="" />
                    </span>
                  </div>
                  <div className="vl-cta-icbox-content">
                    <h4 className="vl-cta-icbox-title pb-16">Gives us a Call</h4>
                    <a href="tel:1234567890">123-456-7890</a>
                  </div>
                </div>

                <div className="vl-cta-icbox mb-30">
                  <div className="vl-cta-icbox-icon mr-16">
                    <span>
                      <img src={email} alt="" />
                    </span>
                  </div>
                  <div className="vl-cta-icbox-content">
                    <h4 className="vl-cta-icbox-title pb-16">Send me Mail</h4>
                    <a href="mailto:OTechItService.com">OTechItService.com</a>
                  </div>
                </div>

                <div className="vl-cta-icbox mb-30">
                  <div className="vl-cta-icbox-icon mr-16">
                    <span>
                      <img src={location} alt="" />
                    </span>
                  </div>
                  <div className="vl-cta-icbox-content">
                    <h4 className="vl-cta-icbox-title pb-16">Contact Us</h4>
                    <a href="#">8708 Technology, USA </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-30">
              <div className="vl-hero-btn-3 fl-right">
                <Link to="/contact" className="vl-btn-3">
                  CONTACT US
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Cta
