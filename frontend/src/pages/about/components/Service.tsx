import choose1 from '@/assets/img/about/vl-about-choose-1.png'
import choose2 from '@/assets/img/about/vl-about-choose-2.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa6'

const stats = [
  { value: 50, suffix: '+', label: 'happy client' },
  { value: 75, suffix: '+', label: 'total projects' },
  { value: 150, suffix: '+', label: 'certifications' },
  { value: 8, suffix: '+', label: 'Year of Experience' },
]

const ChooseUs = () => {
  return (
    <section className="vl-about-choose vl-gray-bg-4 pt-50 pb-50 p-relative">
      <Container>
        <div className="vl-section-title-wrapper mb-60">
          <h4 className="vl-section-subtitle-7 vl-upper">Why choose us</h4>
          <h2 className="vl-section-title vl-section-title-2 pt-16">
            We don’t just deliver solutions <br /> we build partnerships
          </h2>
        </div>
        <Row>
          <Col lg={12}>
            <div className="p-relative z-index-1">
              <Row>
                <Col lg={5} md={6}>
                  <div className="vl-about-choose-img mb-30">
                    <img className="w-100 img-custom-anim-left" src={choose1} alt="" />
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="vl-about-choose-img-2 fix br-8 mb-30">
                    <img className="w-100" src={choose2} alt="" />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="vl-about-choose-content">
                    <p>
                     We understand that every business is unique, which is why we offer customized IT solutions that fit your needs perfectly. Our approach is rooted in collaboration and innovation, ensuring you receive the best tools and strategies.
                    </p>

                    {/* <div className="vl-about-inner-btn">
                      <Link to="/services" className="vl-iner-btn text-lowercase">
                        Learn more{' '}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div> */}
                  </div>
                </Col>

                <div className="vl-hero-counter vl-about-choose-counter">
                  {stats.map((stat, index) => (
                    <div key={index} className="vl-hero-counter-box vl-about-choose-counter-box mb-30">
                      <span className="counter">
                        {' '}
                        <CountUp start={0} end={stat.value} duration={10} />
                      </span>
                      <span>{stat.suffix}</span>

                      <h4 className="vl-hero-counter-box-title title-2 pt-12">{stat.label}</h4>
                    </div>
                  ))}
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUs
