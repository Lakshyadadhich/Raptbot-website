import studies1 from '@/assets/img/studies/vl-studies-2.1.png'
// import studies2 from '@/assets/img/studies/vl-studies-2.2.png'
import studies3 from '@/assets/img/studies/caseStudy3.png'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

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
  // { 
  //   title: 'Accelerate Healthcare Sales and Enrollment with Salesforce', 
  //   img: studies2,
  //   link: '/healthcare-sales-enrollment' 
  // },
  { 
    title: 'Cloud operations support for one of the leading product company', 
    img: studies3,
    link: '/cloud-operations-home-automation' 
  },
]

const Page = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Case studies"
          items={[
            { label: 'home', link: '/' },
            { label: 'case studies', link: '/case-studies' },
          ]}
        />
        <section className="vl-gallery p-relative z-index-1 pt-100 pb-70">
          <Container>
            <div
              suppressHydrationWarning
              className="vl-section-title-wrapper text-center mb-30 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <div className="vl-section-subheading">
                <h4 className="vl-section-subtitle-6 vl-upper">CASE STUDIES</h4>
              </div>
              <h2 className="vl-section-title vl-section-title-2 pt-16">
                Proof of excellence in action
              </h2>
            </div>
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
                        <Link to={item.link}>Read more</Link>
                      </h3>
                      <span className="blu-bg">
                        <FaArrowRight className="fs-2" />
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            {/* <Paginations /> */}
          </Container>
        </section>
      </main>
    </MainLayout>
  )
}

export default Page
export { Head } from '@/components/PageMeta'
