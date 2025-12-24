import testimonial2 from '@//assets/img/testimonial/vl-testimonial-1.1.png'
import testimonial3 from '@//assets/img/testimonial/vl-testimonial-1.3.png'
import testimonial4 from '@//assets/img/testimonial/vl-testimonial-1.4.png'
import testimonial5 from '@//assets/img/testimonial/vl-testimonial-1.5.png'
import testimonial6 from '@//assets/img/testimonial/vl-testimonial-1.6.png'
import testimonial7 from '@//assets/img/testimonial/vl-testimonial-1.7.png'
import testimonial8 from '@//assets/img/testimonial/vl-testimonial-1.8.png'
import testimonial9 from '@//assets/img/testimonial/vl-testimonial-1.9.png'
import icon from '@/assets/img/icons/qt-iner.svg'
import testimonial1 from '@/assets/img/testimonial/vl-testimonial-1.2.png'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Paginations from './components/Paginations'
import MainLayout from '@/components/MainLayout'

export type TestType = {
  name: string
  title: string
  image: string
  quote: string
}

const testimonials: TestType[] = [
  {
    name: 'Ben Stokes',
    title: 'Developers',
    image: testimonial1,
    quote:
      '“Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.”',
  },
  {
    name: 'Tim Ferguson',
    title: 'CEO Funder',
    image: testimonial2,
    quote:
      '“We believe that the true measure of success lies in the satisfaction & trust of our clients. Their stories of growth and transformation inspire us to deliver excellence every step.”',
  },
  {
    name: 'Andres Spinka',
    title: 'CEO Funder',
    image: testimonial3,
    quote:
      '“From streamlining operations the delivering innovative solutions, we pride in the positive impact we’ve had on businesses of all sizes. Hear directly from satisfied customers.”',
  },
  {
    name: 'Arturo Sanford',
    title: 'Developers',
    image: testimonial4,
    quote:
      '“We believe the best measure our success the success of the clients. With every project, our goal is to exceed expectations and provide exceptional Explore testimonials.”',
  },
  {
    name: 'Danielle Joss',
    title: 'CEO Funder',
    image: testimonial5,
    quote:
      '“From startups to large enterprises, we’ve had the privilege supporting businesses across industries. Read what our partners have say about the quality, reliability, and impact.”',
  },
  {
    name: 'Abel Johnston',
    title: 'CEO Funder',
    image: testimonial6,
    quote:
      "“Client satisfaction our top priority, & nothing speaks louder than the words of those helped. Whether it's through managed IT services, cybersecurity solutions, or cloud.”",
  },
  {
    name: 'Wade Balistreri',
    title: 'Developers',
    image: testimonial7,
    quote:
      '“Their trust and satisfaction inspire us to constantly raise bar. Explore the stories and testimonials from businesses that have benefited from our reliable services.”',
  },
  {
    name: 'Miguel Kutch',
    title: 'CEO Funder',
    image: testimonial8,
    quote:
      '“The true value of our services lies in the success stories of our clients. Each partnership our dedication to understanding needs & delivering tailored solution whether through.”',
  },
  {
    name: 'Miss Kirk Corkery',
    title: 'CEO Funder',
    image: testimonial9,
    quote:
      '“Each testimonial reflects the trust our clients place in us the success we achieve together. With a focus on innovation, proactive support, and customer satisfaction.”',
  },
]

const Testimonials = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Our Testimonials"
          items={[
            { label: 'Home', link: '/' },
            { label: 'Our Testimonials', link: '#' },
          ]}
        />
        <section className="vl-tesimonial-iner pt-100 pb-70">
          <Container>
            <Row>
              {testimonials.map((testimonial, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="vl-testimonial-box vl-testimonial-box-inner vl-gray-bg-4 p-relative br-8 mb-30">
                    <div className="vl-testimonial-box-icon vl-testimonial-box-icon-2">
                      {[...Array(5)].map((_, i) => (
                        <Link to="" key={i}>
                          <FaStar />
                        </Link>
                      ))}
                    </div>
                    <div className="vl-testimonial-box-content pt-20 pb-30">
                      <p className="vl-text-cmn-blck vl-medium vl-fs-20 vl-lineheight-32">{testimonial.quote}</p>
                    </div>
                    <div className="vl-testimonial-box-auth p-relative">
                      <div className="vl-testimonial-box-auth-img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="vl-testimonial-box-auth-content">
                        <h4 className="vl-text-cmn-blck vl-fs-20 vl-lineheight-32 m-0">
                          <a href="#">{testimonial.name}</a>
                        </h4>
                        <span className="degsination">{testimonial.title}</span>
                      </div>
                      <div className="vl-testimonial-box-quote">
                        <img src={icon} alt="Quote" />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <Paginations />
        </section>
      </main>
    </MainLayout>
  )
}

export default Testimonials
export { Head } from '@/components/PageMeta'
