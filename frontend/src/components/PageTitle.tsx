import breadcrumb from '@/assets/img/banner/vl-breadcrumb-1.png'
import breadcrumbBg from '@/assets/img/banner/bannerRapt.jpg'

import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

interface BreadcrumbItem {
  label: string
  link: string
}

interface BreadcrumbSectionProps {
  title: string
  items: BreadcrumbItem[]
  subHeading: string
  heading2: string
  pageName?: string // Optional: to override auto-detection
}

// Mapping of page names to their corresponding breadcrumb images
const breadcrumbImageMap: { [key: string]: string } = {
  about: breadcrumb,
  services: breadcrumb,
  'Salesforce-services': breadcrumb,
  'Managed-services': breadcrumb,
  'Software-development': breadcrumb,
  'Digital-transformation': breadcrumb,

  // Add more mappings as needed
}

const PageTitle = ({ title, subHeading, heading2, items, pageName }: BreadcrumbSectionProps) => {
  // Function to determine the current page name
  const getCurrentPageName = (): string => {
    if (pageName) return pageName.toLowerCase()

    // Try to get from current URL pathname (if available)
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      const segments = pathname.split('/').filter(Boolean)
      return segments[segments.length - 1]?.toLowerCase() || ''
    }

    // Try to get from the last breadcrumb item
    if (items.length > 0) {
      const lastItem = items[items.length - 1]
      return lastItem.link.split('/').filter(Boolean).pop()?.toLowerCase() || ''
    }

    // Fallback: try to extract from title
    return title.toLowerCase().replace(/\s+/g, '-')
  }

  const currentPageName = getCurrentPageName()
  const currentBreadcrumbImage = breadcrumbImageMap[currentPageName] || breadcrumb

  return (
    <section
      className="vl-breadcrumb-bg p-relative z-index-1 fix pt-200 "
      style={{
        backgroundImage: `url(${breadcrumbBg})`,
      }}>
      <Container>
        <Row>
          <Col xl={6} md={6} className="mb-30">
            <div className="vl-breadcrumb">
              <h1 className="vl-fs-60 vl-white ">{title}</h1>
              <h1 className="vl-fs-60 vl-white " style={{marginTop:'-5px' }}>{heading2}</h1>
              <h4 className="vl-white">{subHeading}</h4>
              <div className="vl-breadcrumb-list">
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    <span>
                      <Link to={item.link}> {item.label}</Link>
                    </span>
                    {index < items.length - 1 && (
                      <span className="dvir">
                        <FaAngleRight />
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={6} md={6} className="mb-30">
            <div className="vl-hero-img p-relative">
              {/* <div className="vl-hero-shape-4">
                <div className="vl-shape-2">
                  <img src={emoji} alt="emoji" />
                </div>
                <div className="vl-shape-3">
                  <img src={emoji1} alt="emoji" />
                </div>
              </div> */}
              {/* <div className="vl-breadcrumb-fan">
                <img className="w-100" src={fan} alt="fan" />
              </div> */}
              <div className="vl-breadcrumb-img">
                <img src={currentBreadcrumbImage} alt="breadcrumb" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PageTitle

// Usage examples:
//
// Auto-detection (will try to determine from URL/breadcrumb items/title):
// <PageTitle title="About Us" items={breadcrumbItems} />
//
// Manual specification:
// <PageTitle title="About Us" items={breadcrumbItems} pageName="about" />
// <PageTitle title="Our Services" items={breadcrumbItems} pageName="services" />
