import testimonial1 from '@/assets/img/testimonial/Ljiljana Juric.jpeg'
import testimonial2 from '@/assets/img/testimonial/Adam Wiebe.jpeg'
import testimonial3 from '@/assets/img/testimonial/luke.jpeg'
import testimonial4 from '@/assets/img/testimonial/jhone.jpeg'
import testimonial5 from '@/assets/img/testimonial/adam mcc.jpeg'
import testimonial6 from '@/assets/img/testimonial/vadim.jpeg'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import '@/assets/scss/component/_testimonial.scss'

interface Testimonial {
  id: number
  name: string
  img: string
  quote: string
  stars: number
  position?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ljiljana Juric',
    img: testimonial1,
    quote:
      'I have worked with Prabhakar for 1.5 years and I can confidently say that he is an amazing Senior Salesforce Developer. His deep expertise and extensive knowledge of Salesforce make him an invaluable asset to any team. He is highly solution-oriented, always approaching challenges with a strategic mindset and finding efficient, scalable solutions. His dedication and hard-working nature ensure that projects are delivered with precision and excellence and on time. Beyond his technical skills, he is a great team player who is always willing to share his knowledge. I highly recommend Prab for any role that requires a skilled and dependable Salesforce expert. Any team would be lucky to have him and be in good hands!',
    stars: 5,
    position: 'Salesforce Expert'
  },
  {
    id: 2,
    name: 'Adam Wiebe',
    img: testimonial2,
    quote:
      'Congratulations to any LinkedIN visitor looking for a Salesforce expertise. You have found it.I had the pleasure of working with Prabhakar and have seen him grow from a team leader to a manager of managers. He has a humble attitude and easy going approach that belies how intense of a thinker he can be when solving tough challenges. Cannot recommend highly enough.',
    stars: 5,
    position: 'Team Manager'
  },
  {
    id: 3,
    name: 'Luke Aiken',
    img: testimonial3,
    quote:
      'Prabhakar and his team provide a rare quality of Salesforce development. Work is produced timely, with an awareness of platform constraints and best practice, and with a comprehensive understanding of underlying business requirements. Additionally, they are wonderful people! I am hoping for another opportunity to work together.',
    stars: 5,
    position: 'Salesforce Expert'
  },
  {
    id: 4,
    name: 'John McGrath',
    img: testimonial4,
    quote:
      'Prabhakar is a rockstar! He is incredibly knowledgeable and a very skilled developer. Always willing to lend a hand, learn something new or go the extra mile. One of my favorite people to work with!',
    stars: 5,
    position: 'Business Analyst'
  },
  {
    id: 5,
    name: 'Adam McCune',
    img: testimonial5,
    quote:
      'Prabhakar is highly-skilled as a Salesforce Developer, and a great Team Leader. Prabhakar is very dedicated to solving problems and helping team members resolve issues, and is also a pleasure to work with all the time. I would definitely recommend Prabhakar for a Senior Salesforce Developer or a Team Lead position.Prabhakar is highly-skilled as a Salesforce Developer, and a great Team Leader. Prabhakar is very dedicated to solving problems and helping team members resolve issues, and is also a pleasure to work with all the time. I would definitely recommend Prabhakar for a Senior Salesforce Developer or a Team Lead position.',
    stars: 5,
    position: 'Business Analyst'
  },
  {
    id: 6,
    name: 'Vadim Yerokhin',
    img: testimonial6,
    quote:
      'Prabhakar is a very strong all-around developer and team leader. He balances priorities, consistently delivers high quality work and knows when to ask for clarification. He always puts in the extra effort to make sure the project is successful!',
    stars: 5,
    position: 'Business Analyst'
  },
]

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ')
  if (words.length > wordLimit) {
    return { text: words.slice(0, wordLimit).join(' '), isTruncated: true }
  }
  return { text, isTruncated: false }
}

const TestimonialSection = () => {
  const sliderRef = useRef<Slider>(null)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // ✅ only 2 at a time
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } }, // tablets still 2
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // mobile 1
    ],
  }

  const handleReadMore = (testimonial: any) => setSelectedTestimonial(testimonial)
  const handleCloseModal = () => setSelectedTestimonial(null)

  return (
    <>
      <section className="vl-testimonial-section pb-16 mb-16">
        <Container>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <h2 className="section-title mt-5">What our clients say</h2>
            </Col>
            <Col md={6} className="text-md-end">
              <button className="nav-btn" onClick={() => sliderRef.current?.slickPrev()}>
                <FaArrowLeft />
              </button>
              <button className="nav-btn" onClick={() => sliderRef.current?.slickNext()}>
                <FaArrowRight />
              </button>
            </Col>
          </Row>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item) => {
              const truncated = truncateText(item.quote, 50)
              return (
                <div key={item.id} className="px-3">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <img src={item.img} alt={item.name} className="testimonial-img" />
                      <div>
                        <h3 className="testimonial-name">{item.name}</h3>
                        <span className="testimonial-pos">{item.position}</span>
                        <div className="testimonial-stars">
                          {Array.from({ length: item.stars }, (_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-body">
                      <p>
                        {truncated.text}
                        {truncated.isTruncated && (
                          <button className="readmore-btn" onClick={() => handleReadMore(item)}>
                            ...
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </Container>

        {selectedTestimonial && (
          <div className="testimonial-modal-overlay" onClick={handleCloseModal}>
            <div className="testimonial-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleCloseModal}>
                ✖
              </button>
              <div className="testimonial-card modal-version">
                <div className="testimonial-header">
                  <img
                    src={selectedTestimonial.img}
                    alt={selectedTestimonial.name}
                    className="testimonial-img"
                  />
                  <div>
                    <h3 className="testimonial-name">{selectedTestimonial.name}</h3>
                    <span className="testimonial-pos">{selectedTestimonial.position}</span>
                    <div className="testimonial-stars">
                      {Array.from({ length: selectedTestimonial.stars }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>{selectedTestimonial.quote}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

    </>
  )
}

export default TestimonialSection
