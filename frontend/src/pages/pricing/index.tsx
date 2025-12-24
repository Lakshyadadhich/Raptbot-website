import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import BrandSlider from './components/BrandSlider'

interface PricingPlan {
  title: string
  price: number
  billing: string
  description: string
  features: string[]
  active?: boolean
}

export const pricingData: PricingPlan[] = [
  {
    title: 'Basics Plan',
    price: 49,
    billing: 'Monthly',
    description: 'Our pricing model is designed with your business in mind offer range of packages.',
    features: ['Cyber Analytics', '24/7 Consultant Service', 'Great Customer Support', 'Market Growth Solution', 'Digital Product Design'],
  },
  {
    title: 'Classic Plan',
    price: 65,
    billing: 'Monthly',
    description: 'We understand that every business has unique needs and budgets that’s offer.',
    features: ['Cyber Analytics', '24/7 Consultant Service', 'Great Customer Support', 'Market Growth Solution', 'Digital Product Design'],
    active: true,
  },
  {
    title: 'Normal Plan',
    price: 89,
    billing: 'Monthly',
    description: 'Investing in IT shouldn’t be complicated or costly. Our pricing plans are structured.',
    features: ['Cyber Analytics', '24/7 Consultant Service', 'Great Customer Support', 'Market Growth Solution', 'Digital Product Design'],
  },
]

const PricingSection = () => {
  return (
    <MainLayout>
      <PageTitle
        title="Pricing Plan"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Pricing Plan', link: '/pricing' },
        ]}
      />
      <section className="vl-pricing pt-100 pb-70">
        <Container>
          <Row>
            {pricingData.map((plan, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className={`vl-pricing-box p-relative z-index-1 mb-30 ${plan.active ? 'active active-2' : ''}`}>
                  <div className="vl-pricing-box-price vl-pricing-box-price-iner">
                    <h3 className="price-title pb-16">{plan.title}</h3>
                    <h2 className="price-number">
                      ${plan.price}/<span>{plan.billing}</span>
                    </h2>
                  </div>

                  <div className={`vl-pricing-box-content ${plan.active ? 'active-border' : ''}`}>
                    <p dangerouslySetInnerHTML={{ __html: plan.description }} />
                  </div>

                  <div className="vl-pricing-box-list">
                    {plan.features.map((feature, i) => (
                      <div className="vl-pricing-box-list-box mb-20" key={i}>
                        <div className={`vl-icon ${!plan.active ? 'vl-icon-2' : ''}`}>
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

                  <div className={`vl-about-inner-btn mt-12 ${plan.active ? 'active-btn' : ''}`}>
                    <a href="#" className="vl-iner-btn">
                      choose a plan{' '}
                      <span>
                        <FaArrowRight className="fs-3" />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <BrandSlider />
    </MainLayout>
  )
}

export default PricingSection
export { Head } from '@/components/PageMeta'
