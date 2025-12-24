import arrow from '@/assets/img/icons/caseRight.svg'
import studies1 from '@/assets/img/studies/vl-studies-2.1.png'
import studies2 from '@/assets/img/studies/vl-studies-2.2.png'
import studies3 from '@/assets/img/studies/vl-studies-2.3.png'
import React, { CSSProperties } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'gatsby'
import Slider from 'react-slick'

type CaseType = {
  title: string
  image: string
}

const caseData: CaseType[] = [
  { title: 'Efficiency Managed IT Services', image: studies1 },
  { title: 'Building Resilient Networks', image: studies2 },
  { title: 'Seamless Cloud Migration', image: studies3 },
  { title: 'End-to-End Cybersecurity', image: studies1 },
]

type ArrowProps = {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const NextArrow = (props: ArrowProps) => {
  const { onClick } = props
  return (
    <button className="custom-arrow next slick-next slick-arrow" onClick={onClick}>
      <img src={arrow} alt="Next" />
    </button>
  )
}

const PrevArrow = (props: ArrowProps) => {
  const { onClick } = props
  return (
    <button className="custom-arrow prev slick-prev slick-arrow" onClick={onClick}>
      <img src={arrow} alt="Previous" />
    </button>
  )
}

const CaseStudies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
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

  return (
    <section className="vl-gallery p-relative z-index-1 pt-100 pb-100" id='cases'>
      <div className="container">
        <div className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate">
          <div className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration={900}>
            <div className="vl-section-subheading">
              <h4 className="vl-section-subtitle-6 vl-upper">CASE STUDIES</h4>
            </div>
            <h2 className="vl-section-title vl-section-title-2 pt-16">Proof of Excellence in Action</h2>
          </div>

          <Slider {...settings}>
            {caseData.map((item, idx) => (
              <div key={idx} className="vl-gallery-testimonial-2  br-4 fix p-relative z-index-1">
                <div className="vl-gallery-testimonial-2-image">
                  <img className="w-100" src={item.image} alt="img" />
                </div>
                <div className="vl-gallery-testimonial-2-con">
                  <h3 className="vl-gallery-testimonial-2-title">
                    <Link to="/case-studies-single">{item.title} </Link>
                  </h3>
                </div>
                <div className="vl-gallery-poligon">
                  <h3>
                    <Link to="/case-studies-single">Read More</Link>
                  </h3>
                  <Link to="/case-studies-single">
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
