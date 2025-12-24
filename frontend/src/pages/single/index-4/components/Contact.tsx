import shape from '@/assets/img/icons/vl-circle-shape.svg'
import email from '@/assets/img/icons/vl-envelop-1.3.svg'
import location from '@/assets/img/icons/vl-location-1.2.svg'
import phone from '@/assets/img/icons/vl-phone-1.1.svg'
import url from '@/assets/img/icons/vl-url-1.4.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className="vl-contact vl-black-bg p-relative z-index-1 pt-100 pb-268">
      <div className="vl-contact-shape d-none d-lg-block">
        <img src={shape} alt="" />
      </div>
      <Container>
        <Row>
          <Col lg={10} className="offset-l mx-auto">
            <Row className="align-items-center">
              <Col lg={6}>
                <div suppressHydrationWarning className="vl-contact-map mb-30 aos-init aos-animate" data-aos="fade-right" data-aos-duration="900">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135197.949286641!2d5.1764345124327305!3d51.063780363604025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sbd!4v1728459348836!5m2!1sen!2sbd"
                    className="vl-contact-map"
                    allowFullScreen></iframe>
                </div>
              </Col>
              <Col lg={6}>
                <div suppressHydrationWarning className="vl-contact-wrap mb-30 aos-init aos-animate" data-aos="fade-left" data-aos-duration="900">
                  <div className="vl-section-title-wrapper">
                    <h4 className="vl-section-subtitle vl-white vl-upper">Contact us</h4>
                    <h2 className="vl-section-title vl-white pt-16 pb-32">Let’s Build Something Great Together</h2>

                    <div className="vl-contact-wrap-icon-list">
                      <div className="vl-contact-wrap-icon-box mb-24">
                        <div className="vl-contact-wrap-icon">
                          <span>
                            <img src={phone} alt="" />
                          </span>
                        </div>
                        <div className="vl-contact-wrap-text">
                          <a href="tel:11234567890">+1 123 456 7890</a>
                        </div>
                      </div>
                      <div className="vl-contact-wrap-icon-box mb-24">
                        <div className="vl-contact-wrap-icon">
                          <span>
                            <img src={location} alt="" />
                          </span>
                        </div>
                        <div className="vl-contact-wrap-text">
                          <a href="#">421 Allen, Mexico 4233</a>
                        </div>
                      </div>
                      <div className="vl-contact-wrap-icon-box mb-24">
                        <div className="vl-contact-wrap-icon">
                          <span>
                            <img src={email} alt="" />
                          </span>
                        </div>
                        <div className="vl-contact-wrap-text">
                          <a href="mailto:itservice&techology@com">itservice&techology@com</a>
                        </div>
                      </div>
                      <div className="vl-contact-wrap-icon-box mb-24">
                        <div className="vl-contact-wrap-icon">
                          <span>
                            <img src={url} alt="" />
                          </span>
                        </div>
                        <div className="vl-contact-wrap-text">
                          <a href="#">itservice&techology.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="vl-contact-btn mt-8">
                      <Link to="/contact" className="vl-btn-sec">
                        <span className="vl-btn-wrap">
                          <span className="vl-btn-y-1">make an appointment</span>
                          <span className="vl-btn-y-2">make an appointment</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
