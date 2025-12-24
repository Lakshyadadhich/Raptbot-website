import stud1 from '@/assets/img/studies/medical.jpg'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const keyPoints = [
  'Centralized, scalable architecture for healthcare operations',
  'Enhanced compliance and secure PHI data management',
  'Standardized enrollment workflows with manual override',
  'Accelerated sales cycle with optimized Salesforce quotes',
  'Seamless collaboration and precise revenue attribution',
  'Improved growth readiness without performance bottlenecks',
]

const advancedChecklist = [
  'Secure, integrated PHI storage with custom objects',
  'Standardized enrollment with version-controlled records',
  'Salesforce Quotes for proposal and workflow optimization',
  'Opportunity Splits & Field Trip analysis for efficiency',
]

const TopicDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">
            Accelerate Healthcare Sales and Enrollment with Salesforce
          </h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            The lack of a centralized system resulted in fragmented data, scalability challenges, and
            growing technical debt. Process inefficiencies, overuse of triggers, and poorly documented
            workflows exacerbated integration issues and undermined long-term growth in healthcare
            operations.
          </p>
        </div>

        {/* Image */}
        <div className="vl-service-details-larg-img fix br-8 mb-30">
          <img className="w-100" src={stud1} alt="Salesforce in Healthcare" />
        </div>

        {/* Section 2 - Solution */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our solution</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            <strong>Enrollment solution:</strong> We built a secure, integrated PHI storage solution
            using custom objects to ensure compliance and data protection. The enrollment process was
            standardized with flexible workflows and manual override options, enabling both efficiency and
            adaptability. Versioning ensured a complete, auditable history of health record updates for
            transparency, accuracy, and regulatory readiness.
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            <strong>Sales solution:</strong> We leveraged Salesforce quotes to streamline proposal
            management and optimized insurance workflows through dynamic field tracking. A consolidated
            account record unified customer insights, providing a 360-degree client view. Opportunity
            splits ensured precise revenue allocation, while field trip analysis simplified field usage,
            refined processes, and enhanced Salesforce effectiveness.
          </p>
        </div>

        {/* Quote */}
        <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            “Our Salesforce-driven healthcare solutions delivered a secure, scalable, and compliant
            architecture—accelerating sales, simplifying enrollment, and empowering long-term growth.”
          </p>
        </div>

        {/* Section 3 - Outcome (Updated Layout) */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Key outcomes</h3>
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
              The healthcare transformation introduced streamlined automation, secure data management,
              and Salesforce-driven integration touchpoints that simplified operations and ensured
              scalability across sales and enrollment processes.
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

      {/* ✅ Keeping your custom container styling */}
    </>
  )
}

export default TopicDetails