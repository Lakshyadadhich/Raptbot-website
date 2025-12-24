import demo1 from '@/assets/img/demo/vl-demo-1.1.png'
import demo2 from '@/assets/img/demo/vl-demo-1.2.png'
import demo3 from '@/assets/img/demo/vl-demo-1.3.png'
import demo4 from '@/assets/img/demo/vl-demo-1.4.png'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Col, Collapse, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight, FaArrowRight } from 'react-icons/fa6'

const MobilMenuItems = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menuName: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setOpenDropdown((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <nav>
      <ul>
        <li>
          <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('home', e)}>
            <a href="/home">Home</a>
          </div>
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>

        <li>
          <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('service', e)}>
            <a href="/services" onClick={(e) => toggleDropdown('service', e)}>
              Services
            </a>
            <button className="vl-menu-close" onClick={(e) => toggleDropdown('service', e)}>
              {openDropdown === 'service' ? <FaAngleDown /> : <FaAngleRight />}
            </button>
          </div>
          <Collapse in={openDropdown === 'service'}>
            <ul style={{ paddingLeft: '10px' }}>
              <li>
                <Link to="/services">Services</Link>
              </li>
              
            </ul>
          </Collapse>
        </li>

        

        <li>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/case-studies" >
              Case Studies
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default MobilMenuItems
