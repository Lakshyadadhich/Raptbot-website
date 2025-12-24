import logo from '@/assets/img/logo/vl-logo-2.2.png'
import { currentYear } from '@/components/CurrentYear'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  type LinkType = {
    name: string
    url: string
  }
  const quickLinks: LinkType[] = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Service', url: '/service' },
    { name: 'Case Study', url: '/case-studies' },
    { name: 'Testimonial', url: '/testimonial' },
  ]

  const services = ['Cyber Security', 'Network Analysis', 'Data Recovery', 'IT Service']

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#' },
    { icon: <FaLinkedinIn />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaYoutube />, url: '#' },
  ]

  return (
    <footer>
      <section className="vl-footer vl-gray-bg pt-240">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-30">
              <div className="vl-footer-widget-1">
                <div className="vl-footer-logo">
                  <Link to="/">
                    <img src={logo} alt="Company Logo" />
                  </Link>
                </div>
                <div className="vl-footer-content vl-footer-content-2">
                  <p className="pt-16 pb-32">
                    We foster a culture of teamwork & <br /> creative problem-solving to deliver <br /> exceptional results for our clients.
                  </p>
                </div>
                <div className="vl-footer-social vl-footer-social-2">
                  <ul>
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <Link to={social.url}>{social.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-30">
              <div className="vl-footer-widget-2">
                <h3 className="vl-footer-widget-title vl-fs-20 vl-black-theme-2 mb-20">Quick Links</h3>
                <div className="vl-footer-menu vl-footer-menu-2">
                  <ul>
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-30">
              <div className="vl-footer-widget-3 ml-40">
                <h3 className="vl-footer-widget-title vl-fs-20 vl-black-theme-2 mb-20">Our Service</h3>
                <div className="vl-footer-menu vl-footer-menu-2">
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>
                        <a href="#">{service}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-30">
              <div className="vl-footer-widget-4">
                <h3 className="vl-footer-widget-title vl-fs-20 vl-black-theme-2 mb-20">Newsletter</h3>
                <p className="black">
                  Subscribe us & receive our <br /> latest news & articles
                </p>

                <div className="vl-footer-newsletter vl-footer-newsletter-2">
                  <form action="#">
                    <input type="email" name="email" placeholder="Email Address.." />
                    <div className="vl-footer-newsletter-btn-2 mt-16">
                      <button className="w-100 them-btn2 btn-dot">
                        Subscribe
                        <span>
                          <FaAngleRight />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>

          <div
            className="vl-footer-copyright-text 
              vl-footer-copyright-text-2 
              text-center">
            <p className="m-0">Copyright © {currentYear} O-Tech. All Rights Reserved</p>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer
