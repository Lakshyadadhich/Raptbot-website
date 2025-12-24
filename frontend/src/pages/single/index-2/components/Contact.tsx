import phone from '@/assets/img/icons/vl-call-2.1.svg'
import email from '@/assets/img/icons/vl-mail-2.2.svg'
import map from '@/assets/img/icons/vl-map-2.3.svg'
import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <section id="contact" className="vl-contact vl-gray-bg p-relative z-index-1 pt-100 pb-70">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="vl-contact-box br-4 vl-white-bg mb-30 aos-init aos-animate" data-aos="fade-right" data-aos-duration={900}>
                <div className="vl-contact-box-content">
                  <h3 className="vl-contact-box-title">Send us a Message</h3>
                  <p className="off-w pt-20 pb-32 m-0">
                    Have questions or need assistance? We're here to help! Whether <br /> you're exploring solutions, looking for a consultation, or
                    need.
                  </p>
                </div>
                <div className="vl-contact-box-form-2">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-20">
                        <input type="text" name="name" placeholder="First Name" />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <input type="text" name="name" placeholder="Last Name" />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <input type="tel" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col-lg-12 mb-20">
                        <input type="text" name="subject" placeholder="Subject" />
                      </div>
                      <div className="col-lg-12 mb-20">
                        <textarea name="message" id="message" placeholder="Message" />
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="fl-right">
                          <button className="them-btn2">
                            Send Now{' '}
                            <span>
                              <FaAngleRight />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <div className="col-lg-6">
              <div className="vl-contact-wrap vl-contact-wrap-2 ml-80 mb-10 aos-init aos-animate" data-aos="fade-left" data-aos-duration={1100}>
                <div className="vl-section-title-wrapper mb-36">
                  <h4 className="vl-section-subtitle-black-border">Get in Touch with Us</h4>
                  <h2 className="vl-section-title vl-black-theme-2 pt-16">Have Questions? We’ve Got Answers</h2>
                </div>
                <div className="vl-contact-wrap-icbox">
                  <div className="vl-icon-box br-4 mb-20">
                    <div className="vl-icon-box-icon mr-16">
                      <span>
                        <img src={phone} alt="" />
                      </span>
                    </div>
                    <div className="vl-icon-box-content">
                      <h5 className="vl-icon-box-title pb-14">Gives us a Call</h5>
                      <a href="tel:1234567890">123-456-7890</a>
                    </div>
                  </div>

                  <div className="vl-icon-box br-4 mb-20">
                    <div className="vl-icon-box-icon mr-16">
                      <span>
                        <img src={email} alt="" />
                      </span>
                    </div>
                    <div className="vl-icon-box-content">
                      <h5 className="vl-icon-box-title pb-14">Send me Mail</h5>
                      <a href="mailto:OTechService.com">O-Tech It Service.com</a>
                    </div>
                  </div>

                  <div className="vl-icon-box br-4 mb-20">
                    <div className="vl-icon-box-icon mr-16">
                      <span>
                        <img src={map} alt="" />
                      </span>
                    </div>
                    <div className="vl-icon-box-content">
                      <h5 className="vl-icon-box-title pb-14">Contact Us</h5>
                      <a href="#">8708 Technology, USA </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
