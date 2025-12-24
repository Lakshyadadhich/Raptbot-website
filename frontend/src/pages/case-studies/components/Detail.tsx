import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const categories = [
  { label: 'Category', value: 'IT Service & Technology' },
  { label: 'Client', value: 'David Millar' },
  { label: 'Location', value: '73 Bridge St Brooklyn, USA.' },
  { label: 'Date', value: '20/10/2024' },
]

const services = [
  'Technology Consultancy',
  'Managed Services',
  'Ayanda Machine Learning',
  'Cloud Computing',
  'Automation Solutions',
  'Business Innovation',
]

const advancedChecklist = ['Software Development', 'AI and Machine Learning', 'Digital Transformation']

const TopicDetails = () => {
  return (
    <>
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Building Resilient Networks</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          In today’s connected world, network resilience is for uninterrupted business operations. <br /> Our approach focuses on designing,
          implementing, and maintaining robust networks <br /> that can withstand disruptions whether from cyberattacks, hardware failures.
        </p>
      </div>
      <div className="vl-service-details-cat pt-24 pb-24 mb-30">
        {categories.map((item, idx) => (
          <div className="vl-service-details-cat-single" key={idx}>
            <h3 className="vl-fs-20 vl-lineheight-20 vl-text-cmn-blck pb-16 m-0">{item.label}</h3>
            <p className="vl-text-para vl-fs-18 vl-lineheight-18 m-0">{item.value}</p>
          </div>
        ))} 
      </div>

      <div className="vl-service-details-larg-img fix br-8 mb-30">
        <img className="w-100" src={stud1} alt="" />
      </div>

      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Ready Networks for Seamless Connectivity</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
          Our resilient network solutions are designed to provide businesses with the reliability & <br /> flexibility needed to thrive in a
          digital-first environment. We integrate redundancy, load <br /> balancing, real-time monitoring tools to minimize downtime and maximize
          performance.
        </p>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Whether you're managing multiple locations or cloud environments, our solutions keep <br /> your data flowing smoothly and securely across
          your entire infrastructure minimizing.
        </p>
      </div>

      <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          We build networks anticipate challenges & respond instantly. Through intelligent <br /> monitoring, automated recovery processes, & secure
          backup systems, our resilient <br /> networks are prepared for the unexpected. From network redundancy to disaster.
        </p>
      </div>

      <div className="p-4 bg-light rounded mb-4">
        <p>
          We build networks anticipate challenges & respond instantly. Through intelligent <br />
          monitoring, automated recovery processes, & secure backup systems, our resilient <br />
          networks are prepared for the unexpected. From network redundancy to disaster.
        </p>
      </div>

      <div className="vl-block-grid pt-30 mb-14">
        <div className="vl-block-check">
          {services.map((service, index) => (
            <h3 key={index}>
              <span>
                <FaCheck />
              </span>{' '}
              {service}
            </h3>
          ))}
        </div>
      </div>

      <div className="vl-service-details-content">
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Reliable Networks for Critical Operations</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            For industries where every second counts, network resilience is non-negotiable. Our Best <br /> solutions are tailored to meet the demands
            of mission-critical operations by combining.
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
              <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-24 m-0">
                As your business scales, do the demands <br /> on your network. Our resilient network <br /> solutions grow you, ensuring consistent{' '}
                <br /> performance, uptime. By implementing <br /> advanced protocols SD-WAN.
              </p>
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
    </>
  )
}

export default TopicDetails
