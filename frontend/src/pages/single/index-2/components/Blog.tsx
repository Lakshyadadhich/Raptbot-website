import blog1 from '@/assets/img/blog/vl-blog-1.1.png'
import blog2 from '@/assets/img/blog/vl-blog-1.2.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Blog = () => {
  return (
    <section className="vl-blog pt-100 pb-70" id="blog">
      <Container>
        <Row>
          <Col lg={5}>
            <div suppressHydrationWarning className="vl-blog-content-2 mb-30 aos-init aos-animate" data-aos="fade-right" data-aos-duration="900">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-black-border">Our Recent Blog Post</h4>
                <h2 className="vl-section-title vl-black-theme-2 pt-16 pb-20">Stay Informed with Our Recent Posts</h2>
                <p className="vl-section-description-2 pb-32">
                  Our expert team works closely with you to understand <br /> your unique challenges and design strategies that <br /> propel your
                  business forward into the future.
                </p>
              </div>
              <div className="vl-blog-btn">
                <div className="vl-blog-btn">
                  <Link to="/blog" className="them-btn2">
                    read more blog{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="vl-single-blog ml-60">
              <div
                suppressHydrationWarning
                className="vl-single-blog-item vl-blg2 vl-gray-bg mb-30 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1100">
                <Row className="align-items-center">
                  <Col lg={5}>
                    <div className="vl-single-blog-img fix br-8">
                      <Link to="/blog/single">
                        <img src={blog1} alt="Blog 1" className="br-8 w-100 image-fluid" />
                      </Link>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="vl-single-blog-content vl-single-blog-content-2">
                      <h3 className="vl-single-blog-title vl-black-theme-2">
                        <Link to="blog/single">
                          Your Trusted Partner in <br /> Technology Transformation
                        </Link>
                      </h3>
                      <p className="vl-single-blog-desc pt-10 pb-24">
                        As your trusted partner, we take <br /> the time to understand your business objectives and challenges.
                      </p>
                      <Link to="blog/single" className="vl-readmore">
                        Read More{' '}
                        <span className="rot-minus">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                suppressHydrationWarning
                className="vl-single-blog-item vl-blg2 vl-gray-bg mb-30 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1300">
                <Row className="align-items-center">
                  <Col lg={5}>
                    <div className="vl-single-blog-img fix br-8">
                      <Link to="/blog/single">
                        <img src={blog2} alt="Blog 2" className="br-8 w-100 image-fluid" />
                      </Link>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="vl-single-blog-content vl-single-blog-content-2">
                      <h3 className="vl-single-blog-title vl-black-theme-2">
                        <Link to="/blog/single">
                          Driving Success Through <br /> Innovation and Collaboration
                        </Link>
                      </h3>
                      <p className="vl-single-blog-desc pt-10 pb-24">
                        We foster a culture of teamwork & <br /> creative problem-solving to deliver exceptional results for our clients.
                      </p>
                      <Link to="blog/single" className="vl-readmore">
                        Read More{' '}
                        <span className="rot-minus">
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
