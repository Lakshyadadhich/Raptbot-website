import blog1 from '@/assets/img/blog/vl-blog-3.1.png'
import blog2 from '@/assets/img/blog/vl-blog-3.2.png'
import blog3 from '@/assets/img/blog/vl-blog-3.3.png'
import calender from '@/assets/img/icons/vl-calender-3.1.svg'
import user from '@/assets/img/icons/vl-user-3.2.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

interface blog {
  id: number
  image: string
  tag: string
  date: string
  author: string
  title: string
}

const blogs: blog[] = [
  {
    id: 1,
    image: blog1,
    tag: 'Cyber Service',
    date: '10 October 2024',
    author: 'Shakib Mahmud',
    title: 'Revolutionize Your Operations with Our Expertise',
  },
  {
    id: 2,
    image: blog2,
    tag: 'It Management',
    date: '10 October 2024',
    author: 'Shakib Mahmud',
    title: 'Empowering Your Business with Cutting-Edge Insights',
  },
  {
    id: 3,
    image: blog3,
    tag: 'It Service',
    date: '10 October 2024',
    author: 'Shakib Mahmud',
    title: 'Transform Your Business with Innovative Solutions',
  },
]

const Blog = () => {
  return (
    <section className="vl-blog pt-100 pb-70" id="blog">
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-4 vl-fs-16 m-0 vl-theme-color3">OUR BLOG</h4>
          <h2 className="vl-section-title vl-blc-text-4 pt-16">Latest Insights & Updates</h2>
        </div>
        <Row>
          {blogs.map((blog, index) => (
            <Col lg={4} md={6} key={blog.id}>
              <div
                suppressHydrationWarning
                className={`vl-single-blog-item vl-single-blog-item-3 mb-30 aos-init aos-animate`}
                data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'}
                data-aos-duration={`${900 + index * 100}`}>
                <div className="vl-single-blog-img p-relative fix br-8">
                  <Link to="/blog-single">
                    <img className="br-8 w-100" src={blog.image} alt={blog.title} />
                  </Link>
                  <div className="vl-single-blog-tag">
                    <a href="#">{blog.tag}</a>
                  </div>
                </div>
                <div className="vl-single-blog-meta">
                  <div className="vl-single-blog-meta-box pt-16 mr-16">
                    <div className="vl-single-blog-meta-box-icon mr-4">
                      <span>
                        <img src={calender} alt="" />
                      </span>
                    </div>
                    <div className="vl-single-blog-meta-box-content meta-content-4">
                      <a href="#">{blog.date}</a>
                    </div>
                  </div>

                  <div className="vl-single-blog-meta-box pt-16 mr-16">
                    <div className="vl-single-blog-meta-box-icon mr-4">
                      <span>
                        <img src={user} alt="" />
                      </span>
                    </div>
                    <div className="vl-single-blog-meta-box-content meta-content-4">
                      <a href="#">{blog.author}</a>
                    </div>
                  </div>
                </div>
                <div className="vl-single-blog-content vl-single-blog-content-3">
                  <h3 className="vl-single-blog-title vl-blc-text-4 pt-16 pb-24">
                    <Link to="/blog-single">{blog.title}</Link>
                  </h3>
                  <Link to="/blog-single" className="vl-readmore more3">
                    Learn More{' '}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Blog
