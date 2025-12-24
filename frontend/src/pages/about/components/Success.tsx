import arrow from '@/assets/img/icons/vl-arow-4.1.svg'
import arrowActive from '@/assets/img/icons/vl-work-pro-arow.svg'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import icon1 from '@/assets/img/icons/vl-work-3.1.svg'
import icon2 from '@/assets/img/icons/vl-work-3.2.svg'
import icon3 from '@/assets/img/icons/vl-work-3.3.svg'
import icon4 from '@/assets/img/icons/vl-work-3.4.svg'

interface StepItem {
  id: number
  title: string
  description: string
  icon: string
  number: string
  showArrow?: boolean
}

const steps: StepItem[] = [
  {
    id: 1,
    title: 'Discovery & planning',
    description: 'We begin by understanding your business needs, challenges, & goals.',
    icon: icon1,
    number: '01',
    showArrow: true,
  },
  {
    id: 2,
    title: 'Design & development',
    description: 'With a clear plan in place, our experts move into the design and development phase.',
    icon: icon2,
    number: '02',
    showArrow: true,
  },
  {
   
     id: 3,
    title: 'Launch & support',
    description: 'Once everything is in place, we launch the solution with full support – but our work doesn’t stop there.',
    icon: icon4,
    number: '03',
    showArrow: false,
  },
  {
     id: 4,
    title: 'Continuous improvement',
    description: 'In a fast-changing digital world, staying ahead is essential. That’s why we continuously monitor.',
    icon: icon3,
    number: '04',
    showArrow: true,
  },
]

const Success = () => {
  return (
    <section className="vl-success p-relative z-index-1 pt-100 pb-70">
      <Container>
        <div className="vl-section-title-wrapper text-center mb-60">
          <h4 className="vl-section-subtitle-8 vl-upper">Work Process</h4>
          <h2 className="vl-section-title vl-section-title-2 pt-16">How we get things done</h2>
        </div>

        <Row>
          {steps.map((step) => (
            <Col key={step.id} lg={3} md={6} className="mb-30">
              <div className="vl-success-box vl-success-box-3 vl-success-box-iner text-center">
                <div className="vl-success-box-icon vl-success-box-icon-3 position-relative">
                  <span>
                    <img src={step.icon} alt={`Step ${step.number}`} />
                  </span>
                  <div className="vl-success-box-icon-3-number">
                    <cite>{step.number}</cite>
                  </div>
                  {step.showArrow && (
                    <div className="vl-success-box-3-arow d-none d-md-block">
                      <img src={arrow} alt="Arrow" />
                      <img src={arrowActive} className="arow-active" alt="Arrow Active" />
                    </div>
                  )}
                </div>

                <div className="vl-success-box-desc">
                  <h3 className="vl-success-box-title pt-32 pb-16">
                    <a href="#">{step.title}</a>
                  </h3>
                  <p>{step.description}</p>
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
