import logo from '@/assets/img/logo/vl-logo-1.1.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Link } from 'gatsby'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppMenu from './AppMenu'
import { menuItems } from './data'
import MobileMenu4 from './MobileMenu4'

const NavBar4 = () => {
  const backToTop = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { scrollY } = useScrollEvent()

  return (
    <header>
      <div ref={backToTop} id="vl-header-sticky" className={`vl-header-area vl-transparent-header ${scrollY > 100 && 'header-sticky'}`}>
        <Container className="vl-header-bg-5">
          <Row className="align-items-center">
            <Col lg={3} md={6} xs={6}>
              <div className="vl-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="vl-main-menu text-center">
                <nav className="vl-mobile-menu-active">
                  <AppMenu
                    menuItems={menuItems}
                    buttonContainerClass="vl-home-btn vl-home-btn4"
                    submenuClassName="sub-menu sub-menu-4"
                    labelOneClassName="vl-btn-sec"
                    labelTwoClassName="vl-btn-sec mt-20"
                    buttonThemeClassName="vl-btn-y-1"
                  />
                </nav>
              </div>
            </Col>
            <Col lg={3} md={6} xs={6}>
              <div className="vl-hero-btn d-none d-lg-block text-lg-end">
                <Link to="/contact" className="vl-btn-sec">
                  <span className="vl-btn-wrap">
                    <span className="vl-btn-y-1"> get started </span>
                    <span className="vl-btn-y-2"> get started </span>
                  </span>
                </Link>
              </div>

              <div className="vl-header-action-item d-block d-lg-none">
                <button type="button" className="vl-offcanvas-toggle" onClick={() => setIsMenuOpen(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                    <rect x="10" width="20" height="2" fill="currentColor"></rect>
                    <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                    <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
                  </svg>
                </button>
              </div>
            </Col>
          </Row>

          <MobileMenu4 show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
        </Container>
      </div>
    </header>
  )
}

export default NavBar4
