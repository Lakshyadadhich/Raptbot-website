import testimonialQuote from '@/assets/img/icons/vl-testimonial-q2.svg'
import testimonial1 from '@/assets/img/testimonial/vl-testimonial-1.1.png'
import testimonial2 from '@/assets/img/testimonial/vl-testimonial-1.2.png'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

const testimonials = [
  {
    id: 1,
    name: 'Ben Stokes',
    role: 'Developer',
    img: testimonial2,
    quote:
      ' Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Ben Stokes',
    role: 'Developer',
    img: testimonial1,
    quote:
      'We believe that the true measure of success lies in the satisfaction & trust of our clients. Their stories of growth and transformation inspire us to deliver excellence every step.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Ben Stokes',
    role: 'Developer',
    img: testimonial1,
    quote:
      ' Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.',
    stars: 5,
  },
]

const settings = {
  infinite: true,
  arrows: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 600,
  responsive: [
    {
      breakpoint: 1200, // <1200px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992, // <992px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const Testimonial = () => {
  const sliderRef = useRef<Slider>(null)
  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()
  return (
    <section className="vl-testimonial vl-testimonial-bg-2 pt-100 pb-100" id='testimonial'>
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div suppressHydrationWarning className="vl-testimonial-2 mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-5 vl-white vl-upper">Testimonial</h4>
                <h2 className="vl-section-title vl-white pt-16 pb-16">Our Success is Measured by Our Satisfaction</h2>
                <p className="desc-4 pb-32">
                  Their success is the greatest reflection <br /> of our commitment to excellence.
                </p>
              </div>
              <div className="vl-testimonialbtn-2">
                <div className="vl-herobtn">
                  <Link to="/pages/testimonial" className="theme-btn vl-upper">
                    Read more reviews
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="slider-nav d-flex justify-content-end gap-2 mb-3">
              <button type="button" role="presentation" className="slick-prev position-static" onClick={previous}>
                <FaArrowLeft size={24} />
              </button>
              <button type="button" role="presentation" className="slick-next position-static mt-0" onClick={next}>
                <FaArrowRight size={24} />
              </button>
            </div>

            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((item) => (
                <div key={item.id} className="vl-testimonial-box vl-testimonial-box-4 p-relative br-8">
                  <div className="vl-testimonial-box-icon">
                    {[...Array(item.stars)].map((_, idx) => (
                      <a key={idx}>
                        <FaStar />
                      </a>
                    ))}
                  </div>
                  <div className="vl-testimonial-box-content pt-20 pb-30">
                    <p>“{item.quote}”</p>
                  </div>
                  <div className="vl-testimonial-box-auth p-relative">
                    <div className="vl-testimonial-box-auth-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="vl-testimonial-box-auth-content">
                      <h4 className="vl-testimonial-box-auth-title pb-10">
                        <Link to="/team">{item.name}</Link>
                      </h4>
                      <span>{item.role}</span>
                    </div>
                    <div className="vl-testimonial-box-quote">
                      <img src={testimonialQuote} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
