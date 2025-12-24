import blog1 from '@/assets/img/blog/vl-blog-1.1.png'
import blog2 from '@/assets/img/blog/vl-blog-1.2.png'
import shape from '@/assets/img/shape/vl-blog-shape-4.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa6'

interface BlogData {
  id: number
  title: string
  description: string
  image: string
  aosDelay: number
}

const blogPosts: BlogData[] = [
  {
    id: 1,
    title: 'Your Trusted Partner in Technology Transformation',
    description: 'As your trusted partner, we take the time understand your business objectives and challenges.',
    image: blog1,
    aosDelay: 900,
  },
  {
    id: 2,
    title: 'Driving Success Through Innovation and Collaboration',
    description: 'We foster a culture of teamwork & creative problem-solving to deliver exceptional results for our clients.',
    image: blog2,
    aosDelay: 1100,
  },
]

const Blog = () => {
  return (
    <section className="vl-blog vl-comn-black p-relative z-index-1 fix pt-100 pb-70" id="blog">
      <div className="vl-shape-blog">
        <img src={shape} alt="Background Shape" />
      </div>
      <Container>
        <Row>
          <Col lg={5}>
            <div
              suppressHydrationWarning
              className="vl-section-title-wrapper mb-30 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="900">
              <h4 className="vl-section-subtitle vl-white vl-upper">Our Recent Blog Post</h4>
              <h2 className="vl-section-title vl-white pt-16 pb-16">Stay Informed with Our Recent Posts</h2>
              <p className="vl-section-title-wrapper-description pb-32">
                Our expert team works closely with you to <br />
                understand your unique challenges and design <br />
                strategies that propel your business forward into the <br />
                future.
              </p>
              <div className="vl-blog-btn">
                <Link to="/blog" className="vl-btn-sec">
                  <span className="vl-btn-wrap">
                    <span className="vl-btn-y-1">READ MORE BLOG</span>
                    <span className="vl-btn-y-2">READ MORE BLOG</span>
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="vl-single-blog ml-60">
              {blogPosts.map((post) => (
                <div
                  suppressHydrationWarning
                  key={post.id}
                  className="vl-single-blog-item vl-single-blog-content-7 vl-comn-black-2 mb-30 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration={post.aosDelay}>
                  <Row>
                    <Col lg={5}>
                      <div className="vl-single-blog-img fix br-8">
                        <Link to="/blog-single">
                          <img className="w-100" src={post.image} alt={post.title} />
                        </Link>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="vl-single-blog-content">
                        <h3 className="vl-single-blog-title vl-white">
                          <Link to="/blog-single">{post.title}</Link>
                        </h3>
                        <p className="vl-single-blog-desc pt-10 pb-24">{post.description}</p>
                        <Link to="/blog-single" className="vl-readmore rot-minus">
                          Read More
                          <span className="rot-minus">
                            <FaChevronRight />
                          </span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
