import stud1 from '@/assets/img/service/digital banner.jpg'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const serviceBenefits = [
  'Streamlined processes & efficiency',
  'Enhanced customer engagement',
  'Seamless system integration',
  'Scalable, secure infrastructure',
  'Agility & continuous innovation',
]

const services = [
  {
    title: 'Cloud modernization & migration',
    desc: 'We help organizations move from legacy systems to modern, scalable cloud platforms such as AWS, Azure, and Salesforce. This includes end-to-end migration planning, workload optimization, and hybrid/multi-cloud strategies to ensure agility, cost efficiency, and resilience.',
  },
  {
    title: 'CRM & customer experience transformation',
    desc: 'By implementing Salesforce and other leading CRM platforms, we enable personalized, data-driven customer engagement. This covers sales automation, service optimization, marketing personalization, and experience cloud solutions that elevate customer satisfaction and loyalty.',
  },
  {
    title: 'Application development & modernization',
    desc: 'We design, build, and modernize enterprise applications using cloud-native, mobile-first, and serverless technologies. Agile methodologies ensure rapid development cycles, scalability, and alignment with evolving business needs',
  },
  {
    title: 'Integration & api-driven connectivity',
    desc: 'We streamline business processes by integrating systems using Mulesoft, APIs, and middleware. Our API-led approach ensures seamless data flow across applications, unlocking real-time insights and supporting connected customer experiences.',
  },
  {
    title: 'Data engineering & analytics',
    desc: 'Our services include building modern data lakes, warehouses, and real-time analytics pipelines. With tools like Snowflake, AWS Redshift, and Tableau, we empower businesses with actionable insights for smarter, faster decision-making',
  },
  {
    title: 'DevOps & continuous delivery',
    desc: 'Through CI/CD pipelines, Infrastructure as Code (IaC), and automated deployments, we accelerate software delivery cycles while ensuring stability. Our DevOps practices improve collaboration, reduce time-to-market, and enable continuous innovation.',
  },
]

const SalesforceServicesDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Digital transformation</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Unlock the full potential of your business with our digital transformation services. we help organizations embrace innovation, modernize
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
                  </span>{' '}
                  {service}
                </h3>
              </Col>
            ))}
          </Row>
        </div>

        {/* Quote */}
        <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            "Digital transformation goes beyond adopting new technologies. It’s about reshaping workflows, connecting systems, and empowering teams. Together, we build agility, efficiency, and lasting customer value."
          </p>
        </div>

        {/* Section 3 - Comprehensive Salesforce Solutions (Updated Layout) */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive solutions for every need</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            Our approach to digital transformation covers every stage of your modernization journey. From reimagining workflows and automating manual tasks to integrating business systems and enabling mobile-first experiences, we ensure technology aligns with your strategic goals
          </p>
          <div>
            {/* The existing list items need to be wrapped in Col/Row for consistency */}
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
        </div>

        {/* Grid of Solutions - Updated Layout */}
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