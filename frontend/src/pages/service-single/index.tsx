import ser11 from '@/assets/img/icons/vl-ser-ic-4.11.svg'
import ser22 from '@/assets/img/icons/vl-ser-ic-4.22.svg'
import ser3 from '@/assets/img/icons/vl-ser-ic-4.3.svg'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import ServiceDetails from './components/ServiceDetails'

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Cloud Computing Solutions',
    description: 'Leverage the power cloud to enhance scalability, flexibility, and performance. Our cloud computing solutions secure.',
    image: ser11,
  },
  {
    title: 'Managed services',
    description: 'Optimize your business operations with reliable Managed services. From network setup to hardware.',
    image: ser22,
  },
  {
    title: 'Cybersecurity Services',
    description: 'In today’s digital world, protecting your data is more critical than ever. Our best comprehensive cybersecurity services.',
    image: ser3,
  },
]

const page = () => {
  return (
    <>
      <MainLayout>
        <PageTitle
          title="Our Service"
          items={[
            { label: 'Home', link: '/' },
            { label: ' Our Service ', link: '#' },
            { label: ' Our Service Details', link: '#' },
          ]}
        />
        <section className="vl-service-deatil pt-100">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto">
                <div className="vl-service-details ">
                  <ServiceDetails />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="vl-service-area pt-100 pb-70">
          <Container>
            <h2 className="vl-text-cmn-blck text-center vl-fs-44 vl-lineheight-44 mb-60">View More Service</h2>
            <Row>
              {services.map((service, idx) => (
                <Col key={idx} lg={4} md={6} className="mb-4">
                  <div className="vl-service-icon-box-4 vl-service-icon-box-4-bg vl-gray-bg-4 position-relative z-index-1 overflow-hidden rounded-3">
                    <div className="vl-service-icon-box-4-icon4">
                      <span>
                        <img src={service.image} alt={service.title} />
                      </span>
                    </div>
                    <div className="vl-service-icon-box-4-content4">
                      <h3 className="vl-service-icon-box-4-title pt-3 pb-2">
                        <Link to="">{service.title}</Link>
                      </h3>
                      <p className="pb-3">{service.description}</p>
                      <Link to="/services" className="readmore d-inline-flex align-items-center">
                        Learn More{' '}
                        <span className="ms-1">
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </MainLayout>
    </>
  )
}

export default page
export { Head } from '@/components/PageMeta'
