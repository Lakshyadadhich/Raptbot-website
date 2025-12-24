import studies1 from '@/assets/img/studies/vl-studies-2.1.png'
import studies2 from '@/assets/img/studies/vl-studies-2.2.png'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle' 
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import TopicDetails from '../cloud-operations-home-automation/components/Detail'

type std = {
  img: string
  title: string
   link: string
}

const studies: std[] = [
    { 
    title: 'Automating legal agreement process - using conga', 
    img: studies1,
    link: '/automating-legal-agreement-process' 
  },
  { 
    title: 'Accelerate Healthcare Sales and Enrollment with Salesforce', 
    img: studies2,
    link: '/healthcare-sales-enrollment' 
  },
 
]

const page = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Cloud operations support"
          items={[
            { label: 'home', link: '/' },
            { label: 'case studies ', link: '/case-studies' },
            { label: 'cloud operations support', link: '/cloud-operations-home-automation' },
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
            <h2 className="vl-text-cmn-blck text-center vl-fs-44 vl-lineheight-44 mb-60">View more case studies</h2>
            <Row>
              {studies.map((item, index) => (
                <Col key={index} lg={6} md={6} className="mb-4">
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
                        <Link to={item.link}>Read More</Link>
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
