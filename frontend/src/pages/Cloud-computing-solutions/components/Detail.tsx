import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const serviceBenefits = [
  'Continuous improvement & innovation roadmaps',
  '24/7 monitoring & incident management',
  'Automation with CI/CD & IaC',
  'Secure, compliant cloud architecture',
  'Cost optimization & governance',
]

const advancedChecklist = [
  'Continuous improvement and innovation roadmaps',
  '24/7 monitoring and reliability checks',
  'Automation pipelines and DevOps practices',
  'End-to-end infrastructure management services',
  'Strong security and compliance governance',
  'Optimized costs with full visibility',
]

const CloudComputingDetails = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Cloud Computing Solutions</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Keep your business agile, scalable, and secure with our cloud computing solutions designed to optimize performance, reduce costs, and
            accelerate digital transformation. From continuous improvement and automation to security, governance, and cost control, we ensure your cloud
            ecosystem is resilient and aligned with your business goals. Our team combines DevOps practices, infrastructure automation, and advanced
            monitoring with platforms like AWS, Salesforce, and MuleSoft to deliver future-ready cloud strategies. With an innovation roadmap and
            continuous service improvement cycle, we help businesses unlock the full potential of the cloud.
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
            We deliver resilient cloud ecosystems with transparency, automation, and governance—helping businesses optimize costs, improve agility, and
            achieve sustainable growth in the digital era.
          </p>
        </div>

        {/* Section 3 - Comprehensive Cloud Solutions */}
        <div className="vl-service-details-content">
          <div className="vl-block-content mb-30">
            <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive cloud solutions for every need</h3>
            <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
              We provide end-to-end cloud services across public, private, and hybrid environments. From EC2, EKS, ECS, and Lambda management to backups,
              disaster recovery, and high availability, our solutions are built for reliability. With real-time monitoring, automated scaling, and
              governance frameworks, we ensure visibility, control, and predictable costs across multiple cloud providers. Businesses benefit from
              simplified operations, enhanced security, and year-over-year cost savings of up to 30–40%.
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

        {/* Section 4 - Cloud Excellence */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Cloud excellence for a competitive edge</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            We specialize in delivering transparent, secure, and cost-effective cloud strategies. From eliminating underutilized resources to aligning
            workloads with demand, our services enable businesses to achieve predictable spending, higher efficiency, and long-term governance.
          </p>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            By leveraging AWS-native tools, automation, and cross-cloud visibility, we provide real-time insights, immediate alerts on unexpected spend,
            and optimized architectures that ensure businesses remain competitive and future-ready.
          </p>
        </div>
      </div>

    </>
  )
}

export default CloudComputingDetails
