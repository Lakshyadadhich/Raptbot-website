import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaAngleRight, FaChevronLeft } from 'react-icons/fa6'

const Paginations = () => {
  return (
    <Row>
      <Col xs={12} className="m-auto">
        <div className="theme-pagination text-center mt-18">
          <ul>
            <li>
              <a href="#">
                <FaChevronLeft />
              </a>
            </li>
            <li>
              <a className="active" href="#">
                01
              </a>
            </li>
            <li>
              <a href="#">02</a>
            </li>
            <li>...</li>
            <li>
              <a href="#">12</a>
            </li>
            <li>
              <a href="#">
                <FaAngleRight />
              </a>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  )
}

export default Paginations
