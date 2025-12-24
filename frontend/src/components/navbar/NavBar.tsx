import logo from '@/assets/img/logo/white logo without.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Link } from 'gatsby'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import MobileMenu from '../MobileMenu'
import AppMenu from './AppMenu'
import { menuItems } from './data'

const NavBar = () => {
  const backToTop = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { scrollY } = useScrollEvent()

  return (
    <header>
      <div
        ref={backToTop}
        className={`vl-header-area vl-transparent-header vl-transparent-header-4 ${scrollY > 100 && 'header-sticky'}`}
        id="vl-header-sticky">
        <Container className="vl-header-bg-4">
          <Row className="align-items-center">
            <Col lg={3} md={6} xs={6}>
              <div className="vl-logo" >
                <Link to="/">
                  <img src={logo} alt="logo" className='nav-logo' height="60" width="110"/> 
                </Link>
              </div>
            </Col>

            <Col lg={6} className="d-none d-lg-block">
              <div className="vl-main-menu text-center">
                <nav className="vl-mobile-menu-active">
                  <AppMenu
                    menuItems={menuItems}
                    submenuClassName="sub-menu"
                    buttonContainerClass="vl-home-btn"
                    labelOneClassName="vl-herobtn vl-aboutbtn vl-upper"
                    labelTwoClassName="vl-herobtn vl-aboutbtn vl-upper mt-20"
                    buttonThemeClassName="theme-btn theme-btn2"
                    icon={<FaArrowRight />}
                  />
                </nav>
              </div>
            </Col>

            <Col lg={3} md={6} xs={6}>
              <div className="vl-herobtn d-none d-lg-block fl-right">
                <Link to="/contact" className="theme-btn ">
                  contact us
                  <span>
                    <FaArrowRight size={13} />
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

        <MobileMenu show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </header>
  )
}

export default NavBar
