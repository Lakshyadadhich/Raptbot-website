import quot from '@/assets/img/icons/vl-testimonial-quot-1.1.svg'
import shape from '@/assets/img/shape/vl-shape-testimonial4.svg'
import { default as Test2, default as test3 } from '@/assets/img/testimonial/vl-testimonial-1.1.png'
import Test1 from '@/assets/img/testimonial/vl-testimonial-1.2.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

interface Testimonial {
  id: number
  name: string
  title: string
  content: string
  image: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ben Stokes',
    title: 'Developer',
    content:
      '“Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.”',
    image: Test1,
    stars: 5,
  },
  {
    id: 2,
    name: 'Tim Ferguson',
    title: 'CEO & Founder',
    content:
      '“We believe that the true measure of success lies in the satisfaction & trust of our clients. Their stories of growth and transformation inspire us to deliver excellence every step.”',
    image: Test2,
    stars: 5,
  },
  {
    id: 3,
    name: 'Ben Stokes',
    title: 'Developer',
    content:
      '“Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.”',
    image: test3,
    stars: 5,
  },
]

const Testimonial = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  return (
    <section className="vl-testimonial vl-comn-black p-relative z-index-1 fix pt-100 pb-100" id="testimonial">
      <div className="vl-shpate-testimonial">
        <img src={shape} alt="" />
      </div>
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="mb-30">
            <div suppressHydrationWarning className="vl-section-title-wrapper aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <h4 className="vl-section-subtitle vl-white vl-upper">Testimonial</h4>
              <h2 className="vl-section-title vl-white pt-16 pb-32">Our Success Is A Measured By Are Satisfaction</h2>
              <div className="vl-testimonial-btn">
                <Link to="/testimonial" className="vl-btn-sec">
                  <span className="vl-btn-wrap">
                    <span className="vl-btn-y-1">Read more reviews</span>
                    <span className="vl-btn-y-2">Read more reviews</span>
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <Row>
              <Slider {...setting} className="vl-testimonial-active">
                {testimonials.map((testimonial) => (
                  <div className="vl-testimonial-box vl-testimonial-box-5 p-relative br-8" key={testimonial.id}>
                    <div className="vl-testimonial-box-icon">
                      {[...Array(testimonial.stars)].map((_, index) => (
                        <a href="#" key={index}>
                          <FaStar />
                        </a>
                      ))}
                    </div>
                    <div className="vl-testimonial-box-content pt-20 pb-30">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="vl-testimonial-box-auth p-relative">
                      <div className="vl-testimonial-box-auth-img">
                        <img src={testimonial.image} alt="" />
                      </div>
                      <div className="vl-testimonial-box-auth-content">
                        <h4 className="vl-testimonial-box-auth-title pb-10">
                          <Link to="/team">{testimonial.name}</Link>
                        </h4>
                        <span>{testimonial.title}</span>
                      </div>
                      <div className="vl-testimonial-box-quote">
                        <img src={quot} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
