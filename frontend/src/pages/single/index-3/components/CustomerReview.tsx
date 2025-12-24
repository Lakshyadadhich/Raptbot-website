import tstimonial1 from '@/assets/img/testimonial/vl-testimonial-1.2.png'
import testimonialBg from '@/assets/img/testimonial/vl-testimonial-bg-3.1.jpg'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

interface UserData {
  name: string
  role: string
  image: string
  content: string
  rating: number
}

const testimonials: UserData[] = [
  {
    name: 'Ben Stokes',
    role: 'Developer',
    image: tstimonial1,
    content: `“From seamless cloud migrations to enhanced cybersecurity, our work has helped businesses grow, adapt, and succeed in an ever-evolving digital landscape. But don't just take our word for it—hear directly from those who have experienced the difference.”`,
    rating: 5,
  },
  {
    name: 'Emma Watson',
    role: 'Product Manager',
    content: `“From seamless cloud migrations to enhanced cybersecurity, our work has helped businesses grow, adapt, and succeed in an ever-evolving digital landscape. But don't just take our word for it—hear directly from those who have experienced the difference.”`,
    image: tstimonial1,
    rating: 5,
  },
]

const CustomerReview = () => {
  const sliderRef = useRef<Slider>(null)
  const setting = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()
  return (
    <section
      className="vl-testimonial vl-testimonial-bg pt-100 pb-100"
      id="testimonial"
      style={{
        backgroundImage: `url(${testimonialBg})`,
      }}>
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-4 review-bg vl-white vl-fs-16 m-0 vl-theme-color3 vl-upper">Customer Review</h4>
          <h2 className="vl-section-title vl-white pt-16">Why Our Clients Trust Us</h2>
        </div>

        <Row className="align-items-center">
          <Col lg={6} className="p-relative mx-auto">
            <Row>
              <Slider ref={sliderRef} {...setting} className="vl-testimonial-active-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="vl-testimonial-box vl-testimonial-box-3 p-relative br-8">
                    <div className="vl-testimonial-box-icon text-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <a href="#" key={i}>
                          <FaStar />
                        </a>
                      ))}
                    </div>
                    <div className="vl-testimonial-box-content text-center pt-20 pb-30">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="vl-testimonial-box-auth vl-testimonial-box-auth-3 p-relative">
                      <div className="vl-testimonial-box-auth-img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="vl-testimonial-box-auth-content">
                        <h4 className="vl-testimonial-box-auth-title pb-10">
                          <a href="#">{testimonial.name}</a>
                        </h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="btn-wrap-4">
                <button className="prev-btn" onClick={previous}>
                  <FaArrowLeft />
                </button>
                <button className="next-btn" onClick={next}>
                  <FaArrowRight />
                </button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CustomerReview
