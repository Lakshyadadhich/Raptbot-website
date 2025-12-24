import insta1 from '@/assets/img/footer/vl-ft-post-3.1.png'
import insta2 from '@/assets/img/footer/vl-ft-post-3.2.png'
import insta3 from '@/assets/img/footer/vl-ft-post-3.3.png'
import insta4 from '@/assets/img/footer/vl-ft-post-3.4.png'
import insta5 from '@/assets/img/footer/vl-ft-post-3.5.png'
import insta6 from '@/assets/img/footer/vl-ft-post-3.6.png'
import logo from '@/assets/img/logo/vl-logo-3.2.png'
import { currentYear } from '@/components/CurrentYear'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

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

const services = ['Cyber Security', 'Network Analysis', 'Data Recovery', 'It Service']

const instagramPosts = [insta1, insta2, insta3, insta4, insta5, insta6]

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="vl-footer vl-gray-bg-4 pt-160">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-30">
              <div className="vl-footer-widget-1">
                <div className="vl-footer-logo">
                  <Link to="/">
                    <img src={logo} alt="Footer Logo" />
                  </Link>
                </div>
                <div className="vl-footer-content vl-footer-content-3">
                  <p className="pt-16 pb-32">
                    We foster a culture of teamwork & <br />
                    creative problem-solving to deliver <br />
                    exceptional results for our clients.
                  </p>
                </div>
                <div className="vl-footer-social vl-footer-social-3">
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-30">
              <div className="vl-footer-widget-2">
                <h3 className="vl-footer-widget-title vl-fs-20 mb-20">Quick Links</h3>
                <div className="vl-footer-menu vl-footer-menu-3">
                  <ul>
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-30">
              <div className="vl-footer-widget-3 ml-40">
                <h3 className="vl-footer-widget-title vl-fs-20 mb-20">Our Service</h3>
                <div className="vl-footer-menu vl-footer-menu-3">
                  <ul>
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <a href="#">{service}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-22">
              <div className="vl-footer-widget-4">
                <h3 className="vl-footer-widget-title vl-fs-20 mb-20">Instagram Post</h3>
                <Row className="gx-2">
                  {instagramPosts.map((img, idx) => (
                    <Col lg={4} md={4} xs={4} key={idx}>
                      <div className="vl-footer-instapost p-relative z-index-1 fix mb-8">
                        <img className="w-100" src={img} alt={`Insta post ${idx + 1}`} />
                        <div className="vl-footer-instapost-icon">
                          <a href="#">
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="vl-footer-copyright-text vl-footer-copyright-text-3 text-center pb-32">
            <p className="m-0">Copyright © {currentYear} O-Tech. All Rights Reserved</p>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer
