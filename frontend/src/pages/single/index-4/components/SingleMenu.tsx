import iconsLo from '@/assets/img/icons/vl-contact-iner-location.svg'
import iconsMail from '@/assets/img/icons/vl-contact-iner-mail.svg'
import iconsPh from '@/assets/img/icons/vl-contact-iner-phone.svg'
import logo2 from '@/assets/img/logo/vl-off-logo-4.1.png'
import SingleMenuItems from '@/components/SingleMenuItems'
import { Link } from 'gatsby'
import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

interface MobileMenuProps {
  show: boolean
  handleClose: () => void
}

const SingleMenu = ({ handleClose, show }: MobileMenuProps) => {
  return (
    <>
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
            <Link to="/contact" className="vl-btn-sec w-100">
              <span className="vl-btn-wrap">
                <span className="vl-btn-y-1"> get started </span>
                <span className="vl-btn-y-2"> get started </span>
              </span>
            </Link>
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
