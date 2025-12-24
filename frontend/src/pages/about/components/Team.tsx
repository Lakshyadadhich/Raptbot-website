import shape1 from '@/assets/img/icons/vl-tean-shap1.svg'
import team1 from '@/assets/img/team/vl-team-4.1.png'
import team2 from '@/assets/img/team/vl-team-4.2.png'
import team3 from '@/assets/img/team/vl-team-4.3.png'
import team4 from '@/assets/img/team/vl-team-4.4.png'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Slider from 'react-slick'

type TeamMember = {
  name: string
  role: string
  image: string
}

const teamData: TeamMember[] = [
  { name: 'Kendra Cremin', role: 'Network Engineer', image: team1 },
  { name: 'Dennis Jacobson', role: 'CEO & Founder', image: team2 },
  { name: 'Patricia Wilkinson', role: 'Digital Marketer', image: team3 },
  { name: 'Jack Williamson', role: 'Digital Marketer', image: team4 },
  { name: 'Kendra Cremin', role: 'Network Engineer', image: team1 },
]

const Team = () => {
  const sliderRef = useRef<Slider | null>(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="vl-team vl-team-bg p-relative pt-100 pb-100">
      <div className="container p-relative">
        <div className="row">
          <div className="col-lg-8">
            <div className="vl-section-title-wrapper mb-60" data-aos="fade-up" data-aos-duration={900}>
              <div className="vl-section-subheading">
                <h4 className="vl-section-subtitle-6 vl-upper">Our Team</h4>
              </div>
              <h2 className="vl-section-title vl-section-title-2 pt-16">
                Dedicated professionals,
                <br /> proven results
              </h2>
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {teamData.map((member, index) => (
            <div key={index}>
              <div className="vl-team-sin">
                <div className="vl-team-thumb position-relative">
                  <div className="vl-team-shape">
                    <img src={shape1} alt="shape1" />
                  </div>
                  <img className="w-100 img-fluid" src={member.image} alt={member.name} />
                  <div className="vl-tem-social">
                    <ul>
                      <li>
                        <Link to="">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaLinkedinIn />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="vl-team-content text-center">
                  <h4 className="title">
                    <Link to="/team">{member.name}</Link>
                  </h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="slider-nav d-flex gap-3 justify-content-center slick-nav">
          <button type="button" role="presentation" className="slider-prev" onClick={() => sliderRef.current?.slickPrev()}>
            <FaArrowLeft />
          </button>
          <button type="button" role="presentation" className="slider-next" onClick={() => sliderRef.current?.slickNext()}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team
