import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'

import brand1 from '@/assets/img/brand/vl-brand-1.1.png'
import brand2 from '@/assets/img/brand/vl-brand-1.2.png'
import brand3 from '@/assets/img/brand/vl-brand-1.3.png'
import brand4 from '@/assets/img/brand/vl-brand-1.4.png'
import brand5 from '@/assets/img/brand/vl-brand-1.5.png'

export const brandImages = [brand1, brand2, brand3, brand4, brand5, brand3]

const Brand = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="vl-brand-area vl-nblue pt-60 pb-30">
      <Container>
        <Row className="align-items-center">
          <Col lg={2} className="mb-30">
            <h4 className="vl-brand-title vl-white">
              Trusted by <br /> Top Companies
            </h4>
          </Col>
          <Col lg={10}>
            <Slider {...settings} className="vl-brand-logo-active">
              {brandImages.map((brand, index) => (
                <div key={index} className="vl-brand-logo mb-30 px-3">
                  <img src={brand} alt={`Brand ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Brand
