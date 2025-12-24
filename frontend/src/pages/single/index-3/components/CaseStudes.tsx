import std4 from '@/assets/img/studies/vl-case-studies-3.4.png'
import std1 from '@/assets/img/studies/vl-studies-2.1.png'
import std2 from '@/assets/img/studies/vl-studies-2.2.png'
import std3 from '@/assets/img/studies/vl-studies-2.3.png'
import { Link } from 'gatsby'
import React, { useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Slider from 'react-slick'

const caseStudiesData = [
  {
    id: 1,
    image: std1,
    number: '01',
    title: 'Efficiency Managed IT Services',
    description: 'Our solutions ensure availability, minimal downtime, & improved.',
  },
  {
    id: 2,
    image: std2,
    number: '02',
    title: 'Fortifying Cybersecurity',
    description: 'We focus delivering user-friendly, scalable & secure solutions to help secure.',
  },
  {
    id: 3,
    image: std3,
    number: '03',
    title: 'Building Resilient Networks',
    description: 'From digital transformation to system upgrades, our system consulting services.',
  },
  {
    id: 4,
    image: std4,
    number: '04',
    title: 'Cloud Optimization Services',
    description: 'Helping clients optimize cloud costs, performance, and availability.',
  },
]

const CaseStudies = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()

  return (
    <section className="vl-gallery2 p-relative z-index-1 pt-100 pb-100" id="case">
      <Container className="p-relative">
        <div suppressHydrationWarning className="vl-section-title-wrapper mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
          <h4 className="vl-section-subtitle-4 vl-fs-16 m-0 vl-theme-color3 vl-upper">Case Studies</h4>
          <h2 className="vl-section-title vl-blc-text-4 pt-16">
            Our Journey with Clients <br /> Success Unlocked
          </h2>
        </div>

        <Row>
          <Slider ref={sliderRef} {...settings} className="slider-carousel slider-theme">
            {caseStudiesData.map((study) => (
              <div key={study.id} className="vl-gallery-2 br-8 fix p-relative z-index-1">
                <div className="gallery-number">
                  <span>{study.number}</span>
                </div>
                <div className="gallery-img">
                  <img className="w-100" src={study.image} alt={study.title} />
                </div>
                <div className="gallery-content fix">
                  <div className="gallery-content-trans">
                    <h3 className="gallery-title pb-16">
                      <Link to="/case-studies-single">{study.title}</Link>
                    </h3>
                    <p>{study.description}</p>
                    <Link to="/case-studies-single" className="vl-readmore">
                      Learn More
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Row>
        <div className="slider-nav">
          <button style={{ margin: '5px' }} type="button" role="presentation" className="slick-prev" onClick={previous}>
            <FaArrowLeft />
          </button>
          <button style={{ margin: '5px' }} type="button" role="presentation" className="slick-next" onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      </Container>
    </section>
  )
}

export default CaseStudies
