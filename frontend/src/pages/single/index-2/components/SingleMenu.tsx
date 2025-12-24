import iconsLo from '@/assets/img/icons/offcanvas-lo-2.1.svg'
import iconsMail from '@/assets/img/icons/offcanvas-mail-2.1.svg'
import iconsPh from '@/assets/img/icons/offcanvas-ph-2.1.svg'
import contactLocation from '@/assets/img/icons/vl-contact-iner-location.svg'
import contactMail from '@/assets/img/icons/vl-contact-iner-mail.svg'
import contactPhone from '@/assets/img/icons/vl-contact-iner-phone.svg'
import logo4 from '@/assets/img/logo/vl-footer-logo-4.2.png'
import logo2 from '@/assets/img/logo/vl-logo-2.2.png'
import SingleMenuItems from '@/components/SingleMenuItems'
import { Link } from 'gatsby'
import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

interface MobileMenuProps {
  show: boolean
  handleClose: () => void
}

const SingleMenu = ({ handleClose, show }: MobileMenuProps) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="vl-offcanvas vl-offcanvas-4">
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-50">
            <div className="vl-offcanvas-logo">
              <Link to="/single/index-1">
                <img src={logo4} alt="logo4" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle" onClick={handleClose}>
                <IoMdClose />
              </button>
            </div>
          </div>
          <div className="vl-offcanvas-menu d-lg-none mb-40">
            <SingleMenuItems />
          </div>
          <div className="vl-offcanvas-btnm text-center mb-30">
            <div className="vl-herobtn vl-aboutbtn w-100 vl-upper">
              <Link to="/contact" className="theme-btn theme-btn2">
                get started
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="vl-offcanvas-info mb-30">
            <h3 className="vl-offcanvas-sm-title pb-15">Contact Us</h3>
            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={contactPhone} alt="contactPhone" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="tel:5799546476">+57 9954 6476</a>
                </span>
              </div>
            </div>
            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={contactMail} alt="contactMail" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="mailto:OTechItService.com">OTech It Service.com</a>
                </span>
              </div>
            </div>
            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={contactLocation} alt="contactLocation" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="mailto:OTechItService.com">8708 Technology, USA </a>
                </span>
              </div>
            </div>
          </div>
          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title mb-15">Follow Us</h3>
            <a href="#">
              <FaFacebookF />
            </a>
            &nbsp;
            <a href="#">
              <FaXTwitter />
            </a>
            &nbsp;
            <a href="#">
              <FaLinkedinIn />
            </a>
            &nbsp;
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </Offcanvas>
      <div className="vl-offcanvas-overlay" />

      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="vl-offcanvas">
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-50">
            <div className="vl-offcanvas-logo">
              <Link to="/">
                <img src={logo2} alt="logo2" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button onClick={handleClose} className="vl-offcanvas-close-toggle">
                <IoMdClose />
              </button>
            </div>
          </div>
          <div className="vl-offcanvas-menu vl-offcanvas-menu-2 d-lg-none mb-40">
            <SingleMenuItems />
          </div>
          <div className="vl-offcanvas-btnm text-center mb-30">
            <a href="#" className="them-btn2 w-100">
              get started{' '}
              <span>
                <FaAngleRight />
              </span>
            </a>
          </div>
          <div className="vl-offcanvas-info mb-30">
            <h3 className="vl-offcanvas-sm-title pb-15">Contact Us</h3>
            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={iconsPh} alt="iconsPh" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="tel:5799546476">+57 9954 6476</a>
                </span>
              </div>
            </div>
            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={iconsMail} alt="iconsMail" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="mailto:OTechItService.com">OTech It Service.com</a>
                </span>
              </div>
            </div>
            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={iconsLo} alt="iconsLo" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="mailto:OTechItService.com">8708 Technology, USA </a>
                </span>
              </div>
            </div>
          </div>
          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title mb-15">Follow Us</h3>
            <a href="#">
              <FaFacebookF />
            </a>
            &nbsp;
            <a href="#">
              <FaXTwitter />
            </a>
            &nbsp;
            <a href="#">
              <FaLinkedinIn />
            </a>
            &nbsp;
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </Offcanvas>
      <div className="vl-offcanvas-overlay" />
    </>
  )
}

export default SingleMenu
