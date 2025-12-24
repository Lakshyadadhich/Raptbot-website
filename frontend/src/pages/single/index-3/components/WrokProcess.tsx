import arrows from '@/assets/img/icons/vl-arow-4.1.svg'
import work1 from '@/assets/img/icons/vl-work-3.1.svg'
import work2 from '@/assets/img/icons/vl-work-3.2.svg'
import work3 from '@/assets/img/icons/vl-work-3.3.svg'
import work4 from '@/assets/img/icons/vl-work-3.4.svg'
import proarrow from '@/assets/img/icons/vl-work-pro-arow.svg'
import { Link } from 'gatsby'
import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

interface work {
  id: number
  title: string
  description: string
  icon: string
  arrow: boolean
  duration: number
}

const workSteps: work[] = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description: 'We begin by understanding your business needs, challenges, & goals through in-depth.',
    icon: work1,
    arrow: true,
    duration: 900,
  },
  {
    id: 2,
    title: 'Design & Development',
    description: 'With a clear plan in place, our experts move into the design and development phase.',
    icon: work2,
    arrow: true,
    duration: 1100,
  },
  {
    id: 3,
    title: 'Continuous Improvement',
    description: 'In a fast-changing digital world, staying ahead is essential. That’s why we continuously monitor.',
    icon: work3,
    arrow: true,
    duration: 1300,
  },
  {
    id: 4,
    title: 'Launch & Support',
    description: 'Once everything is in place, we launch the solution with comprehensive support but our work doesn’t stop there.',
    icon: work4,
    arrow: false,
    duration: 1500,
  },
]

const WorkProcess = () => {
  return (
    <section className="vl-success p-relative z-index-1 pt-100 pb-70" id="work">
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-4 vl-fs-16 m-0 vl-theme-color3 vl-upper">Work process</h4>
          <h2 className="vl-section-title vl-blc-text-4 pt-16">How We Get Things Done</h2>
        </div>

        <Row>
          {workSteps.map(({ id, title, description, icon, arrow, duration }) => (
            <Col lg={3} md={6} key={id}>
              <div
                suppressHydrationWarning
                className="vl-success-box vl-success-box-3 text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={duration}>
                <div className="vl-success-box-icon vl-success-box-icon-3">
                  <span>
                    <img src={icon} alt={`Step ${id}`} />
                  </span>
                  <div className="vl-success-box-icon-3-number">
                    <cite>{id.toString().padStart(2, '0')}</cite>
                  </div>
                  {arrow && (
                    <div className="vl-success-box-3-arow d-none d-md-block">
                      <img src={arrows} alt="Arrow" />
                      <img className="arow-active" src={proarrow} alt="Arrow Active" />
                    </div>
                  )}
                </div>
                <div className="vl-success-box-desc">
                  <h3 className="vl-success-box-title pt-32 pb-16">
                    <Link to="service/single">{title}</Link>
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WorkProcess
