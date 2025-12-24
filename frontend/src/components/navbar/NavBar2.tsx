import logo from '@/assets/img/logo/vl-logo-1.1.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Link } from 'gatsby'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa6'
import AppMenu from './AppMenu'
import { menuItems } from './data'
import MobileMenu2 from './MobileMenu2'

const NavBar2 = () => {
  const backToTop = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { scrollY } = useScrollEvent()

  return (
    <header>
      <div
        ref={backToTop}
        id="vl-header-sticky"
        className={`vl-header-area vl-transparent-header vl-transparent-header-4 ${scrollY > 100 && 'header-sticky'}`}>
        <Container className="vl-header-bg-4">
          <Row className="align-items-center">
            <Col lg={3} md={6} xs={6}>
              <div className="vl-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="vl-main-menu vl-main-menu-2 text-center">
                <nav className="vl-mobile-menu-active">
                  <AppMenu
                    menuItems={menuItems}
                    submenuClassName="sub-menu sub-menu-2"
                    buttonContainerClass="vl-home-btn"
                    labelOneClassName="vl-hero-btn2"
                    labelTwoClassName="vl-hero-btn2 mt-20"
                    buttonThemeClassName="them-btn2"
                    icon={<FaChevronRight />}
                  />
                </nav>
              </div>
            </Col>
            <Col lg={3} md={6} xs={6}>
              <div className="vl-hero-btn2 d-none d-lg-block text-lg-end">
                <Link to="/contact" className="them-btn2">
                  get started{' '}
                  <span>
                    <FaChevronRight />
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
        </Container>
      </div>

      <MobileMenu2 classname={2} show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
    </header>
  )
}

export default NavBar2
