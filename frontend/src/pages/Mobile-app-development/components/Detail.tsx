import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const serviceBenefits = [
  'Native & cross-platform development',
  'Engaging UI/UX design',
  'Secure & scalable architectures',
  'Seamless API & system integration',
  'Continuous support & maintenance',
]

const advancedChecklist = [
  'Native and hybrid app solutions',
  'Intuitive, engaging user experiences',
  'Seamless, secure system integrations',
  'Continuous testing and optimization',
]

const MobileAppDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Mobile App Development</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Empower your business with high-performing mobile applications designed for seamless user experiences and measurable impact. From engaging
            consumer apps to enterprise-grade mobility solutions, we build apps that drive innovation, accessibility, and growth. Our team leverages
            modern frameworks, agile methodologies, and cloud-native technologies to deliver apps that are scalable, secure, and user-friendly. From
            concept and design to development and post-launch support, we ensure your app stays relevant in a fast-changing digital landscape.
          </p>
        </div>

        {/* Image */}
        <div className="vl-service-details-larg-img fix br-8 mb-30">
          <img className="w-100" src={stud1} alt="" />
        </div>

        {/* Section 2 - Service Benefits */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our service benefits</h3>
          <div className="vl-block-check">
            {serviceBenefits.map((service, index) => (
              <h3 key={index}>
                <span>
                  <FaCheck />
                </span>{' '}
                {service}
              </h3>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            We deliver end-to-end mobile solutions that ensure apps are not only functional and engaging but also scalable, secure, and adaptable for
            future growth.
          </p>
        </div>

        {/* Section 3 - Comprehensive Mobile Solutions */}
        <div className="vl-service-details-content">
          <div className="vl-block-content mb-30">
            <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive mobile solutions for every need</h3>
            <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
              We create custom mobile applications that serve diverse industry needs—be it e-commerce, healthcare, finance, or enterprise collaboration.
              Our solutions focus on performance, usability, and adaptability, ensuring apps work flawlessly across devices and platforms. By combining
              modern technologies with business-driven strategies, we help companies improve customer engagement, streamline processes, and unlock new
              opportunities through mobility.
            </p>
          </div>

          <Row>
            <Col lg={6} md={6}>
              <div className="vl-service-details-sm fix br-8 mb-30">
                <img className="w-100" src={stud2} alt="" />
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="vl-service-details-content mb-30">
                <div className="vl-service-details-content-check vl-service-details-content-check-bold">
                  <ul>
                    {advancedChecklist.map((item, index) => (
                      <li key={index}>
                        <span>
                          <FaCheck />
                        </span>{' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Section 4 - Innovative Apps */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Innovative apps for a competitive edge</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            We specialize in creating future-ready mobile apps that not only meet current business needs but also evolve with changing trends. Whether
            it’s enhancing customer experiences or enabling workforce mobility, our expertise ensures apps that deliver real value.
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            By leveraging cutting-edge frameworks and agile practices, we design apps that are reliable today and adaptable for tomorrow’s opportunities.
          </p>
        </div>
      </div>

    </>
  )
}

export default MobileAppDetails
