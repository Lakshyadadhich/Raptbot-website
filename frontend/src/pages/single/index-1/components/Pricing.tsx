import { pricingData } from '@/pages/pricing'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'

const Pricing = () => {
  return (
    <section className="vl-pricing pt-100 pb-70" id="pricing">
      <Container>
        <div suppressHydrationWarning className="vl-section-title-wrapper text-center mb-60" data-aos="fade-up" data-aos-duration="900">
          <div className="vl-section-subheading">
            <h4 className="vl-section-subtitle-6 vl-upper">Our Pricing Plan</h4>
          </div>
          <h2 className="vl-section-title vl-section-title-2 pt-16">
            Technology Solutions <br /> Within Your Budget
          </h2>
        </div>
        <Row>
          {pricingData.map((plan, idx) => {
            const aosAnimation = idx === 0 ? 'fade-right' : idx === 1 ? 'fade-up' : 'fade-left'

            return (
              <Col lg={4} md={6} key={idx}>
                <div
                  suppressHydrationWarning
                  className={`vl-pricing-box p-relative z-index-1 mb-30 ${plan.active ? 'active' : ''}`}
                  data-aos={aosAnimation}
                  data-aos-duration={900 + idx * 200}>
                  <div className="vl-pricing-box-price">
                    <h3 className="price-title pb-16">{plan.title}</h3>
                    <h2 className="price-number">
                      ${plan.price}/<span>{plan.billing}</span>
                    </h2>
                  </div>

                  <div className={`vl-pricing-box-content ${plan.active ? 'active-border' : ''}`}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: plan.description.replace(/\n/g, '<br>'),
                      }}
                    />
                  </div>

                  <div className="vl-pricing-box-list">
                    {plan.features.map((feature, i) => (
                      <div className="vl-pricing-box-list-box mb-20" key={i}>
                        <div className="vl-icon">
                          <span>
                            <FaCheck />
                          </span>
                        </div>
                        <div className="vl-icon-content">
                          <p>{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="vl-pricing-box-btn mt-12">
                    <div className={`vl-herobtn vl-upper ${!plan.active ? 'vl-aboutbtn' : ''}`}>
                      <a href="#" className={`theme-btn ${!plan.active ? 'theme-btn2' : ''}`}>
                        choose a plan{' '}
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
