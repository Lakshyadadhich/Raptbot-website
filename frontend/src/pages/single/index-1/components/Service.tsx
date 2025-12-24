import ser11 from '@/assets/img/icons/vl-ser-ic-4.11.svg'
import ser22 from '@/assets/img/icons/vl-ser-ic-4.22.svg'
import ser3 from '@/assets/img/icons/vl-ser-ic-4.3.svg'
import ser4 from '@/assets/img/icons/vl-ser-ic-4.4.svg'
import ser5 from '@/assets/img/icons/vl-ser-ic-4.5.svg'
import ser6 from '@/assets/img/icons/vl-ser-ic-4.6.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

interface Service {
  id: number
  title: string
  description: string
  image: string
  url: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Cloud Computing Solutions',
    description: 'Leverage the power cloud to enhance scalability, flexibility, and performance. Our cloud computing solutions secure.',
    image: ser11,
    url: '#',
  },
  {
    id: 2,
    title: 'Managed services',
    description: 'Optimize your business operations with reliable Managed services. From network setup to hardware.',
    image: ser22,
    url: '#',
  },
  {
    id: 3,
    title: 'Cybersecurity Services',
    description: 'In today’s digital world, protecting your data is more critical than ever. Our best comprehensive cybersecurity services.',
    image: ser3,
    url: '#',
  },
  {
    id: 4,
    title: 'Software Development',
    description: 'We deliver high-quality software tailored to your needs. From web apps to enterprise-level systems, we code your success.',
    image: ser4,
    url: '#',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    description: 'Build seamless mobile experiences. Our apps are fast, secure, and intuitive—designed to engage and retain users.',
    image: ser5,
    url: '#',
  },
  {
    id: 6,
    title: 'Digital Transformation',
    description: 'Transform your business with digital strategies that drive growth. Modernize workflows, tools, and processes.',
    image: ser6,
    url: '#',
  },
]

const Service = () => {
  return (
    <>
      <section className="vl-service-area vl-gray-bg-4 pt-100 pb-70" id="service">
        <Container>
          <div
            suppressHydrationWarning
            className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <div className="vl-section-subheading">
              <h4 className="vl-section-subtitle-6 vl-upper">Our Service</h4>
            </div>
            <h2 className="vl-section-title vl-section-title-2 pt-16">
              Empowering Growth with <br />
              Smart IT Services
            </h2>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col
                suppressHydrationWarning
                key={service.id}
                lg={4}
                md={6}
                className="mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={900 + index * 100}>
                <div className="vl-service-icon-box-4 p-relative z-index-1 fix br-8">
                  <div className="vl-service-icon-box-4-icon4">
                    <span>
                      <img src={service.image} alt={service.title} />
                    </span>
                  </div>
                  <div className="vl-service-icon-box-4-content4">
                    <h3 className="vl-service-icon-box-4-title pt-32 pb-16">
                      <Link to={service.url}>{service.title}</Link>
                    </h3>
                    <p className="vl-fs-18 vl-lineheight-28 pb-24">{service.description}</p>
                    <Link to="/services" className="readmore">
                      Learn More{' '}
                      <span>
                        <FaArrowRight size={22} />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Service
