import std1 from '@/assets/img/service/salesforcedp.png'
import std2 from '@/assets/img/service/managed services2.jpg'
import std3 from '@/assets/img/service/software dev.jpg'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import TopicDetails from './components/Detail'

type Std = {
  img: string
  title: string
  link: string
}

const services: Std[] = [
  { img: std1, title: 'Salesforce services', link: '/Salesforce-services' },
  { img: std3, title: 'Software development', link: '/Software-development' },
  { img: std2, title: 'Managed services', link: '/Managed-services' },
]

const page = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Digital transformation"
          items={[
            { label: 'home', link: '/' },
            { label: 'services', link: '/services' },
            { label: 'digital transformation', link: '/Digital-transformation' },
          ]}
        />
        <section className="vl-service-deatil pt-100">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto">
                <div className="vl-service-details">
                  <TopicDetails />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="vl-service-area pt-70 pb-70">
          <Container>
            <div className="d-flex justify-content-center align-items-center mb-40">
              <h2 className="vl-section-subtitle-7 vl-fs-25 vl-lineheight-30">View more services</h2>
            </div>
            <Row>
              {services.map((item, index) => (
                <Col key={index} lg={4} md={6} className="mb-4">
                  <div className="vl-gallery-testimonial-2 br-4 fix p-relative z-index-1">
                    <div className="vl-gallery-testimonial-2-image">
                      <img className="w-100" src={item.img} alt={item.title} />
                    </div>
                    <div className="vl-gallery-testimonial-2-con">
                      <h3 className="vl-gallery-testimonial-2-title">
                        <Link to={item.link}>{item.title}</Link>
                      </h3>
                    </div>
                    <div className="vl-gallery-poligon d-flex align-items-center justify-content-between">
                      <h3>
                        <Link to={item.link}>Read more</Link>
                      </h3>
                      <span className="blu-bg">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </MainLayout>
  )
}

export default page

export { Head } from '@/components/PageMeta'
