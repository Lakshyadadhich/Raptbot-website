import stud1 from '@/assets/img/studies/legal.jpg'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const keyPoints = [
  'Automated repetitive contract-related tasks',
  'Reduced manual effort and human errors',
  'Improved compliance with legal standards',
  'Streamlined Salesforce–Conga data flow',
  'Scalable solution to handle growing contract volumes',
]

const advancedChecklist = [
  'Custom Legal Agreement Object',
  'Automated Document Generation with Conga',
  'Salesforce–Conga Integration',
]

const TopicDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">
            Automating legal agreement process
          </h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Faced with a time-consuming and error-prone contract process, our client needed a smarter,
            automated solution. We deployed Conga integrated with Salesforce to streamline document creation
            and automate signing workflows. This not only reduced human error but also drove faster deal
            closures by eliminating bottlenecks in the approval cycle.
          </p>
        </div>

        {/* Image */}
        <div className="vl-service-details-larg-img fix br-8 mb-30">
          <img className="w-100" src={stud1} alt="Automating Legal Process" />
        </div>

        {/* Section 2 - Solution */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our solution</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            We introduced a comprehensive solution that focused on centralization, automation, and compliance:
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            <strong>New custom object:</strong> We created a custom Legal Agreement object as a single source
            of truth, enabling centralized and streamlined contract management. By automating contract creation
            through Conga and Salesforce, we enhanced accuracy, minimized errors, and significantly accelerated
            processing, ensuring greater efficiency and consistency across the contract lifecycle.
          </p>
        </div>

        {/* Quote */}
        <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            “By integrating Salesforce and Conga, our client transformed legal operations with accuracy,
            compliance, and speed—replacing manual, error-prone tasks with a reliable, scalable process.”
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
              The project introduced streamlined automation and integration touchpoints that simplified
              operations and ensured scalability.
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