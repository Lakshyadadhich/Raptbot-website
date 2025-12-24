import demo1 from '@/assets/img/demo/vl-demo-1.1.png'
import demo2 from '@/assets/img/demo/vl-demo-1.2.png'
import demo3 from '@/assets/img/demo/vl-demo-1.3.png'
import demo4 from '@/assets/img/demo/vl-demo-1.4.png'
import location from '@/assets/img/icons/vl-contact-iner-location.svg'
import contact from '@/assets/img/icons/vl-contact-iner-mail.svg'
import phone from '@/assets/img/icons/vl-contact-iner-phone.svg'
import logo from '@/assets/img/logo/white logo without.png'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Col, Collapse, Offcanvas, Row } from 'react-bootstrap'
import {} from 'react-icons/bi'
import { FaAngleDown, FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube} from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

interface MobileMenuProps {
  show: boolean
  handleClose: () => void
}

const MobileMenu = ({ show, handleClose }: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menuName: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setOpenDropdown((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="vl-offcanvas vl-offcanvas-4">
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-50">
            <div className="vl-offcanvas-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle" onClick={handleClose}>
                <IoMdClose />
              </button>
            </div>
          </div>

          <div className="vl-offcanvas-menu mb-40">
            <nav>
              <ul>
                <li> <div className="d-flex justify-content-between align-items-center">
                    <a href="/home">Home</a>
                  </div></li>

                <li>
                  <Link to="/about">About us</Link>
                </li>

                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="/services" >
                      Services
                    </a>
                    
                  </div>
                  
                </li>

                <li>
                  <div className="d-flex justify-content-between align-items-center" >
                    <Link to="/case-studies" >
                      Case Studies
                    </Link>
                    
                  </div>
                 
                </li>
              </ul>
            </nav>
          </div>

          <div className="vl-offcanvas-btnm text-center mb-30">
            <div className="vl-herobtn vl-aboutbtn w-100">
              <Link to="/contact" className="theme-btn theme-btn2">
                contact us
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="vl-offcanvas-info mb-30">
            <h3 className="vl-offcanvas-sm-title pb-15">Contact us</h3>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={phone} alt="" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="tel:+91 90013 78790">+91 90013 78790</a>
                </span>
              </div>
            </div>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={contact} alt="" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="consulting@raptbot.com">consulting@raptbot.com</a>
                </span>
              </div>
            </div>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={location} alt="" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
<a href="https://www.google.com/maps/dir//C22,+Mahalaxmi+Nagar+Rd,+D-Block,+Malviya+Nagar,+Jaipur,+Rajasthan+302017/@26.8513387,75.7234845,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x396db511d8271aaf:0x1b630be8a9eb8e67!2m2!1d75.805886!2d26.8513626?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D">Get directions to C22, Mahalaxmi Nagar Rd</a>
                </span>
              </div>
            </div>
          </div>

          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title mb-15">Follow Us</h3>
            <a href="https://www.facebook.com/share/1AFW38W1LW/">
              <FaFacebookF />
            </a>
            &nbsp;
            <a href="https://www.linkedin.com/company/raptbot-technologies-private-limited/posts/?feedView=all">
              <FaLinkedinIn />
            </a>
            &nbsp;
            <a href="https://www.instagram.com/raptbot_technologies?igsh=dWNxM2Q2cW9vanUz">
              <FaInstagram />
            </a>
             &nbsp;
            <a > 
               <FaYoutube/>

            </a>
          </div>
        </div>
      </Offcanvas>
    </>
  )
}

export default MobileMenu
