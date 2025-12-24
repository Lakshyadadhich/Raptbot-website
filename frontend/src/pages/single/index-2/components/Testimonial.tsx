import brand from '@/assets/img/brand/vl-testimonial-brand-2.1.png'
import testimonial1 from '@/assets/img/testimonial/vl-testimonial-2.1.png'
import testimonial2 from '@/assets/img/testimonial/vl-testimonial-2.22.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

type TestimonialItem = {
  id: number
  name: string
  title: string
  image: string
  brand: string
  rating: number
  quote: string
}

const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: 'Donna Kiehn',
    title: 'Businessman',
    image: testimonial1,
    brand: brand,
    rating: 5,
    quote:
      'Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.',
  },
  {
    id: 2,
    name: 'Donna Kiehn',
    title: 'Businessman',
    image: testimonial2,
    brand: brand,
    rating: 5,
    quote:
      'Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.',
  },
  {
    id: 3,
    name: 'Donna Kiehn',
    title: 'Businessman',
    image: testimonial1,
    brand: brand,
    rating: 5,
    quote:
      'Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.',
  },
  {
    id: 4,
    name: 'Donna Kiehn',
    title: 'Businessman',
    image: testimonial2,
    brand: brand,
    rating: 5,
    quote:
      'Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.',
  },
]

const Settings = {
  dots: true,
  margin: '0 15px',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
}

const Testimonial: React.FC = () => {
  return (
    <div className="vl-testimonial-section2 vl-theme-bg-2 pt-100 pb-100" id='testimonial'>
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-white-border vl-white">Testimonial</h4>
          <h2 className="vl-section-title vl-black-theme-2 pt-16 vl-white">What our clients say?</h2>
        </div>
      </Container>

      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <Slider {...Settings} className="vl-test-2-act">
              {testimonialData.map((item, indx) => (
                <div key={indx}>
                  <div className="vl-test-flex" key={item.id}>
                    <div className="vl-test-thumb">
                      <img src={item.image} alt={`${item.name} testimonial`} />
                    </div>
                    <div className="vl-test-content">
                      <div className="vl-test-icons">
                        <ul>
                          {[...Array(item.rating)].map((_, i) => (
                            <li key={i}>
                              <a href="#" className="d-flex align-items-center justify-content-center">
                                <FaStar />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>“{item.quote}”</p>
                      <div className="vl-test-aut">
                        <div className="vl-test-aut-content">
                          <h3>{item.name}</h3>
                          <span>{item.title}</span>
                        </div>
                        <div className="vl-test-aut-logo">
                          <img src={item.brand} alt="brand logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial
