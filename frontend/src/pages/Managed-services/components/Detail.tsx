import stud1 from '@/assets/img/service/managed services 1.jpg'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import '@/assets/scss/component/_detail-pages.scss'

const serviceBenefits = [
  'Proactive issue resolution',
  'Continuous performance optimization',
  'Streamlined workflow automation',
  'Security & compliance',
  'Cost efficiency assurance',
  'Ongoing competitive innovation',
]

const services = [
  {
    title: 'Infrastructure management',
    desc: 'We deliver end-to-end monitoring and management of AWS services (EC2, EKS, ECS, Lambda) with patching, backups, and disaster recovery to ensure security and continuity. By enabling multi-AZ, auto-scaling, and failover, we provide high availability and resilient operations.',
  },
  {
    title: 'Automation and DevOps',
    desc: 'We streamline DevOps with CI/CD pipelines (CodePipeline, Jenkins) and IaC (CloudFormation, Terraform), enabling efficient cloud management. Automated patching, scaling, and deployments ensure agility, reduced downtime, and secure, optimized operations.',
  },
  {
    title: 'Security and compliance',
    desc: 'We enhance cloud security with IAM governance, enforcing MFA and least-privilege access, while integrating WAF, GuardDuty, and Security Hub for proactive threat detection. Compliance with HIPAA, GDPR, and PCI DSS ensures secure, regulation-ready operations.',
  },
  {
    title: 'Monitoring and incident logging',
    desc: 'We offer 24/7 monitoring with CloudWatch and CloudTrail, combined with automated alerting, escalation, and remediation to minimize downtime. Detailed root cause analysis drives reliability improvements, enhancing overall cloud resilience.',
  },
  {
    title: 'Cost Optimization',
    desc: 'We optimize cloud costs through right-sizing, reserved instances, and savings plans, while leveraging spot nstances, auto scaling, and serverless architectures for efficiency. Cost explorer and trusted advisor dashboards provide visibility and governance for smarter cloud financial management.',
  },
  {
    title: 'Continuous improvement',
    desc: 'We perform regular workload assessments and health checks to ensure optimal performance and security. Through a CSI (Continuous Service Improvement) cycle and an innovation roadmap aligned with business goals, we drive efficiency, reliability, and sustainable growth.',
  },
]

const ManagesServices = () => {
  return (
    <>
      <div className="detail-container salesforce-container">
        {/* Section 1 - Intro */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Managed services</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Keep your business future-ready with our managed services. We deliver seamless ownership and optimized delivery across Salesforce, aws,
            mulesoft, and mobile development. From infrastructure management to platform customization, our team takes complete responsibility for
            monitoring, upgrades, integrations, security, and innovation. With sla-driven execution and proactive support, we ensure scalability,
            reliability, and business continuity while enabling innovation that keeps you ahead in today’s fast-changing digital landscape.
          </p>
        </div>
        {/* Image */}
        <div className="vl-service-details-larg-img fix br-8 mb-30">
          <img className="w-100" src={stud1} alt="" />
        </div>

        {/* Section 2 - Service Benefits - NOW LOOKING LIKE "Comprehensive solutions" */}
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our service benefits</h3>
          <Row className="g-4"> {/* Added g-4 for consistent gap */}
            {serviceBenefits.map((service, index) => (
              <Col lg={6} md={6} key={index}> {/* Use lg={6} md={6} for two columns */}
                <h3 className="vl-fs-18 vl-lineheight-28 mb-2 d-flex align-items-flex-start gap-2"> {/* Added flex classes for alignment */}
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
            “Our Managed Services provide 24/7 monitoring, automation, and proactive security. We optimize performance, compliance, and costs with
            DevOps and AWS solutions. Through continuous improvement, we help businesses scale with confidence.”
          </p>
        </div>
        {/* Section 3 - Comprehensive Software Solutions (remains the same) */}
        <div className="vl-block-content mb-40">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive solutions for every need</h3>

          <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-20 m-0">
            We align our services to your evolving business needs, ensuring uninterrupted operations, proactive support, and scalable growth. Our
            experts manage every layer — from design and deployment to monitoring, automation, and ongoing innovation across:
          </p>

          {/* Key Highlights - Now using Row/Col for consistency and better control */}
          <Row className="g-4 mb-30"> {/* Added g-4 for consistent gap */}
            <Col lg={6} md={6}>
              <h3 className="vl-fs-18 vl-lineheight-28 mb-2 d-flex align-items-flex-start gap-2">
                <span className="vl-check-icon-circle">
                  <FaCheck />
                </span>{' '}
                Network & security – firewall, threat detection, compliance, data protection.
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-fs-18 vl-lineheight-28 mb-2 d-flex align-items-flex-start gap-2">
                <span className="vl-check-icon-circle">
                  <FaCheck />
                </span>{' '}
                AWS – infrastructure management & optimization.
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-fs-18 vl-lineheight-28 mb-2 d-flex align-items-flex-start gap-2">
                <span className="vl-check-icon-circle">
                  <FaCheck />
                </span>{' '}
                End-user support – helpdesk, devices, remote & onsite fixes.
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-fs-18 vl-lineheight-28 mb-2 d-flex align-items-flex-start gap-2">
                <span className="vl-check-icon-circle">
                  <FaCheck />
                </span>{' '}
                Cloud & backup – migration, recovery, scalability
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <h3 className="vl-fs-18 vl-lineheight-28 mb-2 d-flex align-items-flex-start gap-2">
                <span className="vl-check-icon-circle">
                  <FaCheck />
                </span>{' '}
                24/7 support with L1, L2 and L3 teams
              </h3>
            </Col>
          </Row>

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
      </div>

    </>
  )
}

export default ManagesServices