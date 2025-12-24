import about1 from '@/assets/img/about/vl-about-1.1.png'
import about2 from '@/assets/img/about/vl-about-1.2.png'
import videoImg from '@/assets/img/about/vl-video-img.png'
import GlightBox from '@/components/GlightBox'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck, FaPlay } from 'react-icons/fa6'
import Slider from 'react-slick'

interface SliderContentType {
  title: string
  description: string
}

const sliderContent: SliderContentType[] = [
  {
    title: 'Innovation',
    description:
      'Our cloud database powers Salesforce innovation with real-time intelligence, AWS scalability, and Conga integration, enabling enterprises to accelerate deals, optimize workflows, and drive transformative growth.',
  },
  {
    title: 'Mission',
    description:
      ' We are committed to delivering tailored, future-ready cloud solutions that empower clients, foster enduring partnerships, and uphold trust, transparency, and shared success as our foundation.',
  },
  {
    title: 'Vision',
    description:
      'We strive to be the trusted innovation partner for organizations scaling in the cloud-powered digital era. By leveraging Salesforce and AWS Cloud solutions, we drive smarter, faster, and more resilient growth.',
  },
]

const settings = {
   dots: false,
  infinite: true,
  speed: 600,          // smooth transition speed
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,       // hide arrows for cleaner look (optional)
  autoplay: true,      // enables auto sliding
  autoplaySpeed: 4000, // 4 seconds per slide
  pauseOnHover: true,  // pause when user hovers
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
}

const Features = () => {
  return (
    <section id="about" className="features-section vl-about-area pt-50 pb-50">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-30">
            <div className="vl-about-imgs mr-60">
              <div className="vl-about-img-1">
                <img src={about1} alt="About Image 1" />
              </div>
              <div className="vl-about-img-1 vl-about-img-2">
                <img src={about2} alt="About Image 2" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-about-content iner-about">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-7 vl-upper">About us</h4>
                <h2 className="vl-section-title vl-section-title-2 pt-16 pb-20">
                  Empower your business <br /> every step of the way
                </h2>
                <p className="vl-section-description-2 pb-32">
                 At Raptbot Technologies, we empower businesses with innovative Salesforce solutions to strengthen customer relationships and leverage AWS to optimize cloud infrastructure. 
                </p>
              </div>

              <div className="vl-about-icon-box vl-about-icon-box-2 mb-30 d-flex">
                <div className="vl-about-icon vl-about-icon-2">
                  <span>
                    <FaCheck />
                  </span>
                </div>
                <div className="vl-about-icon-content vl-about-icon-content-2">
                  <h4 className="vl-about-icon-title pb-16 m-0">Strategic planning</h4>
                  <p className="vl-about-icon-desc m-0">
                    Through tailored customization, seamless integration, and efficient implementation, we boost operational efficiency and ensure sustainable growth. Our solutions deliver agility, cost efficiency, and scalability—secure, high-performing systems that unify data, streamline workflows, and enable real-time intelligence.
                  </p>
                </div>
              </div>

              <div className="vl-about-inner-btn">
                <a href="/services" className="vl-iner-btn text-lowercase">
                  learn more{' '}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={5} className="mb-30">
            <Slider {...settings} className="vl-about-inner-box-active">
              {sliderContent.map((item, idx) => (
                <div key={idx} className="vl-about-inner-box-content vl-gray-bg-4 p-relative br-8">
                  <h3 className="vl-about-inner-box-title pb-16">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </Slider>
          </Col>

          <Col lg={7}>
            <div className="vl-about-vido fix p-relative br-8 mb-30">
              <img className="w-100" src={videoImg} alt="Video" />

              <div className="vl-sec-img-vi-4">
                <GlightBox href="https://www.youtube.com/watch?v=vi8GrSp4Y6w" className="glightbox popup-video">
                  <span>
                    <i>
                      <FaPlay />
                    </i>
                  </span>
                </GlightBox>
              </div>
            </div>
          </Col>
        </Row> 
      </Container>
    </section>
  )
}

export default Features