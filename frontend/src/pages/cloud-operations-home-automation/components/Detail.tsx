import stud1 from '@/assets/img/studies/product.jpg'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const keyPoints = [
  '70% faster response time with redefined SLAs and KPIs',
  'Proactive monitoring minimized downtime',
  'Streamlined infrastructure management and DevOps processes',
  'Automation reduced manual efforts significantly',
  'Continuous optimization lowered overall infrastructure costs',
]

const advancedChecklist = [
  '24/7 cloud operations support',
  'SLA & KPI tracking with reporting',
  'Proactive monitoring & incident management',
  'Cost optimization & efficiency improvements',
]

const TopicDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">
            Cloud operations support for leading product company
          </h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Our client, a global leader in product delivering smart, connected solutions for modern
            living, faced challenges in maintaining scalability, reliability, and efficiency. With diverse
            applications ranging from incident management and certification to infrastructure and knowledge
            management, their microservices-based system required a well-defined cloud support model. Raptbot
            is engage to provide end-to-end AWS cloud operations support to enhance system performance and
            accountability.
          </p>
        </div>

        {/* Image */}
        <div className="vl-service-details-larg-img fix br-8 mb-30">
          <img className="w-100" src={stud1} alt="Cloud Operations Support" />
        </div>

        {/* Section 2 - Solution */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our solution</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            We conducted a thorough analysis of the existing environment to identify gaps and deployed a
            dedicated team of DevOps and cloud operations engineers. SLAs and KPIs were redefined with
            continuous tracking through reporting and regular status updates. Our comprehensive support included:
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            <strong>Infrastructure & operations:</strong> 24/7 monitoring, patch management, deployments, SOP
            execution, and incident logging/reporting enhanced system reliability. Cost optimization
            opportunities were implemented to maximize efficiency and reduce expenses.
          </p>
        </div>

        {/* Quote */}
        <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            “Through Raptbot’s cloud operations support, our client achieved unmatched reliability and cost
            efficiency—transforming their cloud-first strategy into a scalable, resilient, and transparent
            model for long-term success.”
          </p>
        </div>

        {/* Section 3 - Outcome (Updated Layout) */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Business outcomes</h3>
          <Row className="g-4">
            {keyPoints.map((point, index) => (
              <Col lg={6} md={6} key={index}>
                <h3 className="vl-check-item">
                  <span className="vl-check-icon-circle">
                    <FaCheck />
                  </span>{' '}
                  {point}
                </h3>
              </Col>
            ))}
          </Row>
        </div>

        {/* Section 4 - Highlights (Updated Layout) */}
        <div className="vl-service-details-content">
          <div className="vl-block-content mb-30">
            <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">
              Highlights of implementation
            </h3>
            <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-0 m-0">
              The engagement enabled proactive monitoring, redefined SLAs, and robust infrastructure
              management—delivering transparency, efficiency, and measurable value.
            </p>
          </div>

          <Row className="g-4">
            {advancedChecklist.map((point, index) => (
              <Col lg={6} md={6} key={index}>
                <h3 className="vl-check-item">
                  <span className="vl-check-icon-circle">
                    <FaCheck />
                  </span>{' '}
                  {point}
                </h3>
              </Col>
            ))}
          </Row>
        </div>
      </div>

    </>
  )
}

export default TopicDetails