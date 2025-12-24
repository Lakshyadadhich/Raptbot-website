import brand1 from '@/assets/img/brand/vl-brand-in-1.1.png'
import brand2 from '@/assets/img/brand/vl-brand-in-1.2.png'
import brand3 from '@/assets/img/brand/vl-brand-in-1.3.png'
import brand4 from '@/assets/img/brand/vl-brand-in-1.4.png'
import brand5 from '@/assets/img/brand/vl-brand-iner-1.5.png'
import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

const BrandSlider = () => {
  const brandImages = [brand1, brand2, brand3, brand4, brand5, brand3]

  const Settings = {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="vl-brand-inner pb-70">
      <Container>
        <h2 className="vl-text-cmn-blck text-center vl-fs-44 vl-lineheight-44 mb-60">Our Official Sponsors</h2>
        <Slider {...Settings} className="vl-brand-inner-active">
          {brandImages.map((img, index) => (
            <div className="vl-brand-single-iner" key={index}>
              <img className="w-100" src={img} alt="image" />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default BrandSlider
