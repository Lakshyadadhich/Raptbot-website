import shape from '@/assets/img/icons/service-shape.svg'
import success1 from '@/assets/img/icons/vl-success-1.1.svg'
import success2 from '@/assets/img/icons/vl-success-1.2.svg'
import success3 from '@/assets/img/icons/vl-success-1.3.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

interface Success {
  id: number
  number: string
  icon: string
  title: string
  description: string
}

const successData: Success[] = [
  {
    id: 1,
    number: '01',
    icon: success1,
    title: 'Small & Medium Businesses',
    description: `Whether it’s cloud computing,
                  cybersecurity, or IT consulting, we help small & medium businesses.`,
  },
  {
    id: 2,
    number: '02',
    icon: success2,
    title: 'Enterprises & Corporations',
    description: `Our tailored IT services—ranging from infrastructure management to advanced analytics support.`,
  },
  {
    id: 3,
    number: '03',
    icon: success3,
    title: 'Financial Services & Banks',
    description: `In the financial sector, security and efficiency are paramount. Our IT services help banks & financial.`,
  },
]

const Success = () => {
  return (
    <section className="vl-success p-relative z-index-1 vl-black-bg pt-100 pb-70" id="work">
      <div className="vl-gallery-shape d-none d-lg-block">
        <img src={shape} alt="Decorative shape" />
      </div>
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle vl-white vl-upper">Our Benefited</h4>
          <h2 className="vl-section-title vl-white pt-16">Our Impact Their Success</h2>
        </div>
        <Row>
          {successData.map((item, index) => (
            <Col lg={4} md={6} key={item.id}>
              <div
                suppressHydrationWarning
                className="vl-success-box text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={`${1000 + index * 200}`}>
                <div className="vl-success-box-number">
                  <span>{item.number}</span>
                </div>
                <div className="vl-success-box-icon">
                  <span>
                    <img src={item.icon} alt={`Success Icon ${item.number}`} />
                  </span>
                </div>
                <div className="vl-success-box-desc">
                  <h3 className="vl-success-box-title title4 vl-white pt-24 pb-16">
                    <Link to="/service-single">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Success
