import service2 from '@/assets/img/icons/vl-service-icon-1.1.svg'
import service3 from '@/assets/img/icons/vl-service-icon-1.2.svg'
import serviceLeft from '@/assets/img/service/vl-service-left-1.1.png'
import service from '@/assets/img/service/vl-service-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const ServiceDetails = () => {
  return (
    <>
      <div className="vl-service-details-larg-img fix br-8 mb-30">
        <img className="w-100" src={serviceLeft} alt="" />
      </div>
      <div className="vl-service-details-content">
        <div className="vl-service-content-block-1 mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Managed services</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            Keep your business running smoothly with reliable and optimized IT infrastructure. We <br /> provide end-to-end infrastructure management
            network design & setup to maintenance <br /> and monitoring. Our solutions ensure high availability, minimal downtime.
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Our managed IT services offer businesses the convenience of outsourcing technology <br />
            needs while maintaining full control and visibility. From 24/7 system monitoring.
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div className="vl-service-details-content mb-30">
              <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-24 m-0">Our Service Benefits</h3>
              <div className="vl-service-details-content-check">
                <ul>
                  {['Technology Consultancy', 'Maintenance And Support', 'We Provide best services', 'Requirements Gathering', 'Business Growth'].map(
                    (item, idx) => (
                      <li key={idx}>
                        <span>
                          <FaCheck />
                        </span>{' '}
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="vl-service-details-sm mb-30">
              <img className="w-100" src={service} alt="" />
            </div>
          </Col>
        </Row>

        <div className="vl-service-content-block-2 mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive IT Solutions for Every Need</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            Our range of IT services is designed to meet the diverse needs of businesses, whether <br /> small startups or large enterprises. From
            managed IT support and cloud computing to <br />
            cybersecurity & software development, we offer end-to-end solutions that enhance.
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            We offer end-to-end solutions that enhance efficiency and drive innovation. Our experts <br /> collaborate with you to identify pain
            points implement tailored strategies that optimize.
          </p>
        </div>

        <Row>
          <Col lg={6} md={6}>
            <div className="vl-about-icon-box-4 vl-service-box vl-gray-bg-4 d-flex br-8 mb-30">
              <div className="vl-service-box-icon">
                <span>
                  <img src={service2} alt="" />
                </span>
              </div>
              <div className="vl-service-box-content">
                <h3 className="vl-fs-18 vl-lineheight-18 pb-16 m-0">
                  <a href="#">Testing & Quality Assurance</a>
                </h3>
                <p className="vl-text-para m-0">
                  Before going live, we rigorously <br /> test every component to ensure
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="vl-about-icon-box-4 vl-service-box vl-gray-bg-4 d-flex br-8 mb-30">
              <div className="vl-service-box-icon">
                <span>
                  <img src={service3} alt="" />
                </span>
              </div>
              <div className="vl-service-box-content">
                <h3 className="vl-fs-18 vl-lineheight-18 pb-16 m-0">
                  <a href="#">Launch & Support</a>
                </h3>
                <p className="vl-text-para m-0">
                  Once everything is in place, we <br /> launch solution comprehensive
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="vl-service-content-block-3">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Innovative Solutions for a Competitive Edge</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            We specialize in delivering customized IT solutions that drive business transformation. <br /> Whether you’re looking to streamline
            operations with automation, enhance customer <br />
            engagement through digital platforms, or safeguard your data with advanced.
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Cybersecurity measures, our services are built to provide a competitive advantage. With <br /> a commitment to excellence, we help you
            stay ahead in today’s fast-evolving digital.
          </p>
        </div>
      </div>
    </>
  )
}

export default ServiceDetails
