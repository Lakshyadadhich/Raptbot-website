import logo from '@/assets/img/logo/vl-logo-1.1.png'
import shape from '@/assets/img/shape/vl-shpae-ft4.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

interface Links {
  label: string
  url: string
}

const quickLinks: Links[] = [
  { label: 'About Us', url: '/about' },
  { label: 'Our Service', url: '/service' },
  { label: 'Case Study', url: '/case-studies' },
  { label: 'Testimonial', url: '/testimonial' },
]

const services = ['Cyber Security', 'Network Analysis', 'Data Recovery', 'It Service']

const socialLinks = [
  { icon: <FaFacebookF />, url: '#' },
  { icon: <FaLinkedinIn />, url: '#' },
  { icon: <FaInstagram />, url: '#' },
  { icon: <FaYoutube />, url: '#' },
]

const Footer = () => {
  return (
    <footer>
      <section className="vl-footer vl-comn-black p-relative pt-240">
        <div className="vlshape-footer">
          <img src={shape} alt="Footer Shape" />
        </div>
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-30">
              <div className="vl-footer-widget-1">
                <div className="vl-footer-logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="vl-footer-content">
                  <p className="pt-16 pb-32">
                    We foster a culture of teamwork & <br /> creative problem-solving to deliver <br /> exceptional results for our clients.
                  </p>
                </div>
                <div className="vl-footer-social">
                  <ul>
                    {socialLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.url}>{link.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-30">
              <div className="vl-footer-widget-2">
                <h3 className="vl-footer-widget-title vl-fs-20 vl-white mb-20">Quick Links</h3>
                <div className="vl-footer-menu">
                  <ul>
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.url}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-30">
              <div className="vl-footer-widget-3 ml-40">
                <h3 className="vl-footer-widget-title vl-fs-20 vl-white mb-20">Our Service</h3>
                <div className="vl-footer-menu">
                  <ul>
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <Link to="#">{service}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-30">
              <div className="vl-footer-widget-4">
                <h3 className="vl-footer-widget-title vl-fs-20 vl-white mb-20">Newsletter</h3>
                <p>
                  Subscribe us & receive our <br /> latest news & articles
                </p>

                <div className="vl-footer-newsletter">
                  <form action="#">
                    <input type="email" name="email" id="email" placeholder="Email Address.." />
                    <div className="vl-footer-newsletter-btn mt-16">
                      <button className="vl-btn-sec">
                        <span className="vl-btn-wrap">
                          <span className="vl-btn-y-1"> Subscribe now </span>
                          <span className="vl-btn-y-2"> Subscribe now </span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="vl-footer-copyright-text text-center">
            <p>© 2024 O-Tech. All Rights Reserved</p>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer
