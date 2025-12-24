import location from '@/assets/img/icons/offcanvas-lo-2.1.svg'
import contact from '@/assets/img/icons/offcanvas-mail-2.1.svg'
import phone from '@/assets/img/icons/offcanvas-ph-2.1.svg'
import logo from '@/assets/img/logo/white logo without.png'
import { Link } from 'gatsby'
import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { } from 'react-icons/bi'
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import MobilMenuItems from '../MobilMenuItems'

interface MobileMenuProps {
  show: boolean
  handleClose: () => void
  classname: number
}

const MobileMenu2 = ({ show, handleClose }: MobileMenuProps) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="vl-offcanvas">
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
            <MobilMenuItems />
          </div>

          <div className="vl-offcanvas-btnm text-center mb-30">
            <Link to="/contact" className="them-btn2 w-100">
              get started{' '}
              <span>
                <FaAngleRight />
              </span>
            </Link>
          </div>

          <div className="vl-offcanvas-info mb-30">
            <h3 className="vl-offcanvas-sm-title pb-15">Contact Us</h3>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={phone} alt="" />
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
                  <img src={contact} alt="" />
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
                  <img src={location} alt="" />
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
    </>
  )
}

export default MobileMenu2
