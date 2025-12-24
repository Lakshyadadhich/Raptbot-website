import std1 from '@/assets/img/studies/vl-studies-2.1.png'
import std2 from '@/assets/img/studies/vl-studies-2.2.png'
import std3 from '@/assets/img/studies/vl-studies-2.3.png'
import { Link } from 'gatsby'
import React, { CSSProperties } from 'react'
import { Container } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6'
import Slider from 'react-slick'

type CaseStudy = {
  id: number
  title: string
  image: string
  link: string
}

const caseStudies: CaseStudy[] = [
  { id: 1, title: 'Efficiency Managed IT Services', image: std1, link: '/case-studies-single' },
  { id: 2, title: 'Building Resilient Networks', image: std2, link: '/case-studies-single' },
  { id: 3, title: 'Seamless Cloud Migration', image: std3, link: '/case-studies-single' },
  { id: 4, title: 'Seamless Cloud Migration', image: std1, link: '/case-studies-single' },
]

type ArrowProps = {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const NextArrow = (props: ArrowProps) => {
  const { onClick, className } = props
  return (
    <button className={className} onClick={onClick}>
      <FaAngleRight size={32} />
    </button>
  )
}

const PrevArrow = (props: ArrowProps) => {
  const { onClick, className } = props
  return (
    <button className={className} onClick={onClick}>
      <FaAngleLeft size={32} />
    </button>
  )
}

const CaseStudies: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="slick-next d-none d-md-block" />,
    prevArrow: <PrevArrow className="slick-prev d-none d-md-block" />,
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
    <section className="vl-gallery3 p-relative z-index-1 pt-100 pb-100" id='case'>
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-black-border">Case Studies</h4>
          <h2 className="vl-section-title vl-black-theme-2 pt-16">Proof of Excellence in Action</h2>
        </div>

        <Slider {...settings} className="slider-carousel slider-theme">
          {caseStudies.map((study) => (
            <div key={study.id} className="vl-gallery-testimonial-2 br-4 fix p-relative z-index-1">
              <div className="vl-gallery-testimonial-2-image">
                <img className="w-100" src={study.image} alt={study.title} />
              </div>
              <div className="vl-gallery-testimonial-2-con">
                <h3 className="vl-gallery-testimonial-2-title">
                  <Link to={study.link}>{study.title}</Link>
                </h3>
              </div>
              <div className="vl-gallery-poligon poligon2">
                <h3>
                  <Link to={study.link}>Read More</Link>
                </h3>
                <Link to={study.link}>
                  <span className="arow2">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default CaseStudies
