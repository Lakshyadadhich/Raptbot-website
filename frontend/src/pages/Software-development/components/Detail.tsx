import stud1 from '@/assets/img/service/software banner.jpg'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const serviceBenefits = [
  'Custom application development',
  'Agile, scalable delivery',
  'End-to-end product engineering',
  'Seamless system integration',
  'Continuous support & maintenance',
]

const services = [
  {
    title: 'Product engineering & SaaS development',
    desc: 'We partner with businesses to conceptualize, design, and launch SaaS-based platforms. Our product engineering services include MVP development, iterative enhancements, and long-term scalability planning to support rapid growth and market readiness.',
  },
  {
    title: 'Enterprise software solutions',
    desc: 'From ERP and CRM platforms to HR and financial management systems, we deliver enterprise-grade applications that improve efficiency and enable seamless collaboration across departments, backed by secure integrations and analytics.',
  },
  {
    title: 'Custom application development',
    desc: 'We design and build tailor-made applications that address unique business needs, ensuring scalability, performance, and seamless integration. Our solutions span web, desktop, and enterprise-grade software with a focus on user-centric design and future scalability.',
  },
  {
    title: 'UI/UX design & prototyping',
    desc: 'We create intuitive, visually engaging user interfaces backed by deep UX research and wireframing. Our design-first approach ensures applications are easy to use, visually appealing, and aligned with customer expectations.',
  },
  {
    title: 'Maintenance & continuous improvement',
    desc: 'Beyond development, we provide ongoing support, version upgrades, patch management, and performance tuning. Our CSI (Continuous Service Improvement) approach ensures applications evolve with business needs and remain resilient over time.',
  },
  {
    title: 'Quality assurance & testing',
    desc: 'We offer end-to-end testing services including functional, performance, automation, and security testing. Our QA framework ensures bug-free, high-performance software that delivers a consistent user experience.',
  },
]

const SalesforceServicesDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Software development</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Unlock the full potential of your business with our digital transformation services. We help organizations embrace innovation, modernize
            operations, and create outstanding customer experiences in today’s competitive landscape. By leveraging the combined power of cloud
            platforms, crm solutions, integration tools, and mobile technologies, we enable a seamless shift towards agility, efficiency, and growth.
          </p>
        </div>

        {/* Image */}
        <div className="vl-service-details-larg-img fix br-8 mb-30">
          <img className="w-100" src={stud1} alt="" />
        </div>

        {/* Section 2 - Service Benefits (Updated Layout) */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our service benefits</h3>
          <Row className="g-4">
            {serviceBenefits.map((service, index) => (
              <Col lg={6} md={6} key={index}>
                <h3 className="vl-check-item">
                  <span className="vl-check-icon-circle">
                    <FaCheck />
                  </span>
                  {service}
                </h3>
              </Col>
            ))}
          </Row>
        </div>

        {/* Quote */}
        <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Our software development approach combines business insight with technical expertise to deliver innovative, scalable, and future-ready
            solutions that drive growth and efficiency.
          </p>
        </div>

        {/* Section 3 - Comprehensive Software Solutions */}
        <div className="vl-block-content mb-40">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">
            Comprehensive solutions for every need
          </h3>

          <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-20 m-0">
            We design and deliver solutions that cater to businesses of all sizes and industries. Whether it’s enterprise software, mobile applications, or web platforms, we ensure:
          </p>

          {/* Key Highlights (Updated Layout) */}
          <Row className="g-4 mb-30">
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Performance & reliability
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> User-focused design
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Long-term adaptability
              </h3>
            </Col>
          </Row>

          <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-20 m-0">
            With expertise across Salesforce, MuleSoft, AWS, and cloud-native technologies, our solutions provide modern, integrated, and future-ready architectures that maximize ROI and enable organizations to scale confidently in the digital era.
          </p>

          {/* Key Services (Updated Layout) */}
          <Row className="g-4 mb-0">
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Custom-built software solutions
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Mobile & web applications
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Platform & API integrations
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Cloud-native development
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-check-item">
                <span className="vl-check-icon-circle"><FaCheck /></span> Testing, upgrades & support
              </h3>
            </Col>
          </Row>
        </div>

        {/* Grid of Solutions - Updated Layout (remains the same) */}
        <Row className="g-4 mb-5">
          {services.map((sol, index) => (
            <Col lg={6} md={6} key={index}>
              <div className="detail-card salesforce-cloud-card">
                {/* Icon and Title Row */}
                <div className="cloud-header d-flex align-items-center mb-3">
                  <h4 className="cloud-title">{sol.title}</h4>
                </div>

                {/* Description */}
                <p className="cloud-description">{sol.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

    </>
  )
}

export default SalesforceServicesDetails