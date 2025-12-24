import shape from '@/assets/img/shape/vl-team-shape.svg'
import team1 from '@/assets/img/team/vl-team-2.1.png'
import team2 from '@/assets/img/team/vl-team-2.2.png'
import team3 from '@/assets/img/team/vl-team-2.3.png'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import Slider from 'react-slick'

const Team = () => {
  const sliderRef = useRef<Slider>(null)
  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()
  const Settings = {
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const teamMembers = [
    { id: 1, name: 'Kendra Cremin', role: 'Network Engineer', image: team1 },
    { id: 2, name: 'Dennis Jacobson', role: 'CEO & Founder', image: team2 },
    { id: 3, name: 'Patricia Wilkinson', role: 'Network Engineer', image: team3 },
    { id: 4, name: 'Kendra Cremin', role: 'Network Engineer', image: team1 },
    { id: 5, name: 'Dennis Jacobson', role: 'CEO & Founder', image: team2 },
  ]

  return (
    <section className="vl-teamm p-relative z-index-1 pt-100 pb-100" id="team">
      <Container className="p-relative">
        <Row>
          <Col lg={8}>
            <div suppressHydrationWarning className="vl-section-title-wrapper mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <h4 className="vl-section-subtitle-black-border">Our Team</h4>
              <h2 className="vl-section-title vl-black-theme-2 pt-16">
                Dedicated Professionals,
                <br /> Proven Results
              </h2>
            </div>
          </Col>

          <Col lg={4}></Col>
          <Slider {...Settings} ref={sliderRef} className="slider-carousel slider-theme">
            {teamMembers.map((member) => (
              <div key={member.id} className="vl-team-single text-center p-relative fix">
                <div className="vl-team-single-image p-relative">
                  <div className="vl-team-single-image-shape">
                    <img src={shape} alt="" />
                  </div>
                  <img className="w-100" src={member.image} alt={member.name} />
                  <div className="vl-team-single-image-social">
                    <ul>
                      <li>
                        <a>
                          <span>
                            <FaFacebookF />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>
                            <FaLinkedinIn />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>
                            <FaInstagram />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>
                            <FaYoutube />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="vl-team-single-content mt-20">
                  <h4 className="vl-team-single-title pb-16">
                    <Link to="/team">{member.name}</Link>
                  </h4>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </Slider>
          <div className="slider-nav">
            <button type="button" role="presentation" className="slick-prev" onClick={previous}>
              <FaAngleLeft />
            </button>
            <button type="button" role="presentation" className="slick-next" onClick={next}>
              <FaAngleRight />
            </button>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Team
