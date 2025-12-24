import testimonialQuote from '@/assets/img/icons/vl-testimonial-q2.svg'
import testimonial1 from '@/assets/img/testimonial/Ljiljana Juric.jpeg'
import testimonial2 from '@/assets/img/testimonial/Adam Wiebe.jpeg'
import { Link } from 'gatsby'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'


const testimonials = [
  {
    id: 1,
    name: 'Ljiljana Juric',
    img: testimonial1,
    quote:
      'I have worked with Prabhakar for 1.5 years and I can confidently say that he is an amazing Senior Salesforce Developer. His deep expertise and extensive knowledge of Salesforce make him an invaluable asset to any team. He is highly solution-oriented, always approaching challenges with a strategic mindset and finding efficient, scalable solutions. His dedication and hard-working nature ensure that projects are delivered with precision and excellence and on time. Beyond his technical skills, he is a great team player who is always willing to share his knowledge. I highly recommend Prab for any role that requires a skilled and dependable Salesforce expert. Any team would be lucky to have him and be in good hands!',
    stars: 5,
  },
  {
    id: 2,
    name: 'Adam Wiebe',
    img: testimonial2,
    quote:
      'Congratulations to any LinkedIN visitor looking for a Salesforce expertise. You have found it.I had the pleasure of working with Prabhakar and have seen him grow from a team leader to a manager of managers. He has a humble attitude and easy going approach that belies how intense of a thinker he can be when solving tough challenges. Cannot recommend highly enough.',
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
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ')
  if (words.length <= wordLimit) return text
  return words.slice(0, wordLimit).join(' ') + '...'
}

const Testimonial = () => {
  const sliderRef = useRef<Slider>(null)
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})

  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()

  

  return (
    <section className="vl-testimonial vl-testimonial-bg-2 pt-50 pb-50">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div suppressHydrationWarning className="vl-testimonial-2 mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-5 vl-white vl-upper">Testimonial</h4>
                <h2 className="vl-section-title vl-white pt-16 pb-16">Our success is measured by our satisfaction</h2>
                <p className="desc-4 pb-32">
                  Their success is the greatest reflection <br /> of our commitment to excellence.
                </p>
              </div>
              <div className="vl-testimonialbtn-2">
                <div className="vl-herobtn">
                  <Link to="/about#Testimonials" className="theme-btn vl-lower">
                    read more reviews
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="slider-nav d-flex justify-content-end gap-2 ">
              <button type="button" role="presentation" className="slick-prev position-static" onClick={previous}>
                <FaArrowLeft size={20} />
              </button>
              <button type="button" role="presentation" className="slick-next position-static mt-0" onClick={next}>
                <FaArrowRight size={20} />
              </button>
            </div>

            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((item) => {
                const isExpanded = expanded[item.id] || false
                const displayText = isExpanded ? item.quote : truncateText(item.quote, 30)

                return (
                  <div key={item.id} className="vl-testimonial-box vl-testimonial-box-4 p-relative br-8">
                    <div className="vl-testimonial-box-icon">
                      {[...Array(item.stars)].map((_, idx) => (
                        <a key={idx}>
                          <FaStar />
                        </a>
                      ))}
                    </div>
                    <div className="vl-testimonial-box-content pt-20 pb-30">
                      <p>
                        “{displayText}” 
                        {item.quote.split(' ').length > 35 && (
                          <Link to="/about#Testimonials" style={{ cursor: 'pointer', color: '#007bff', marginLeft: '6px' }}>
                            Read more
                          </Link>
                        )}
                      </p>
                    </div>
                    <div className="vl-testimonial-box-auth p-relative">
                      <div className="vl-testimonial-box-auth-img">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="vl-testimonial-box-auth-content">
                        <h4 className="vl-testimonial-box-auth-title pb-10">
                          {item.name}
                        </h4>
                        
                      </div>
                      <div className="vl-testimonial-box-quote">
                        <img src={testimonialQuote} alt="" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
