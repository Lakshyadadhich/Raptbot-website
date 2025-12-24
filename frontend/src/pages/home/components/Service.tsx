import ser11 from '@/assets/img/icons/vl-ser-ic-4.11.svg'
import ser22 from '@/assets/img/icons/vl-ser-ic-4.22.svg'
import ser3 from '@/assets/img/icons/vl-ser-ic-4.3.svg'
import ser4 from '@/assets/img/icons/vl-ser-ic-4.4.svg'
import ser5 from '@/assets/img/icons/vl-ser-ic-4.5.svg'
import ser6 from '@/assets/img/icons/vl-ser-ic-4.6.svg'
import { Link } from 'gatsby'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

interface Service {
  title: string
  description: string
  image: string
  link: string
}

const services: Service[] = [
  {
   title: 'Salesforce services',
description:
  'End-to-end Salesforce consulting services delivering tailored CRM solutions that enhance customer engagement, sales growth, and business efficiency.',
    image: ser3,
    link: '/Salesforce-services',
  },
  {
    title: 'Digital transformation',
    description:
      'Helping organizations embrace change with technology-driven digital transformation strategies for long-term success, growth and innovation ',
    image: ser6,
    link: '/Digital-transformation',
  },
  {
    title: 'Software development',
    description:
      'Comprehensive software development services with cutting-edge technologies to deliver robust, scalable, and reliable business applications',
    image: ser4,
    link: '/Software-development',
  },
  {
    title: 'Managed services',
    description:
      'Simplifying IT complexity with integrated infrastructure enables businesses to maximize uptime, and achieve sustainable digital growth.',
    image: ser22,
    link: '/Managed-services',
  },
]

const Service = () => {
  return (
<>
        <section className="vl-service-area vl-gray-bg-4 pt-50 pb-50">
          <Container>
            <div
              suppressHydrationWarning
              className="vl-section-title-wrapper text-center mb-30 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <div className="vl-section-subheading">
                <h4 className="vl-section-subtitle-6 vl-upper">Our Services</h4>
              </div>
              <h2 className="vl-section-title vl-section-title-2 pt-16">
                Future-ready IT services, built for your growth
              </h2>
            </div>
            <Row>
              {services.map((service, index) => (
                <Col
                  suppressHydrationWarning
                  key={index}
                  lg={6}
                  md={6}
                  className="mb-15 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration={900 + index * 100}
                >
                  <div className="vl-service-icon-box-4 p-relative z-index-1 fix br-8">
                    <div className="d-flex align-items-center">
                      <div className="vl-service-icon-box-4-icon4 me-3">
                        <span>
                          <img src={service.image} alt={service.title} />
                        </span>
                      </div>
                      <h3 className="vl-service-icon-box-4-title m-0">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                    </div>

                    <div className="vl-service-icon-box-4-content4">
                      <p className="vl-fs-18 vl-lineheight-28 pb-20">{service.description}</p>
                      <Link to={service.link} className="readmore">
                        Learn more{' '}
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
