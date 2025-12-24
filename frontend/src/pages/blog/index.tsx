import blog1 from '@/assets/img/blog/vl-blog-4.1.png'
import blog2 from '@/assets/img/blog/vl-blog-4.2.png'
import blog3 from '@/assets/img/blog/vl-blog-4.3.png'
import blog4 from '@/assets/img/blog/vl-blog-4.4.png'
import blog5 from '@/assets/img/blog/vl-blog-4.5.png'
import blog6 from '@/assets/img/blog/vl-blog-4.6.png'
import calender from '@/assets/img/icons/vl-calender-3.1.svg'
import user from '@/assets/img/icons/vl-user-3.2.svg'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import Paginations from './components/Paginations'

type BlogPost = {
  id: number
  title: string
  description: string
  image: string
  author: string
  date: string
  url: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Your Trusted Partner in Technology Transformation',
    description: 'Looking to stay ahead in the fast-paced world technology? Our blog offers in-depth articles, case studies, & thought.',
    image: blog1,
    author: 'Shakib Mahmud',
    date: '10 October 2024',
    url: '/blog-single',
  },
  {
    id: 2,
    title: 'The Latest in Tech: News, Tips, and Insights',
    description: 'Our blog is your go-to source for expert opinions practical tips the latest industry updates from digital transformation.',
    image: blog2,
    author: 'Shakib Mahmud',
    date: '10 October 2024',
    url: '/blog-single',
  },
  {
    id: 3,
    title: 'Your Go-To Resource for IT Insights and Solutions',
    description: 'Our blog covers a wide range of IT topics, from business automation and digital transformation to network security.',
    image: blog3,
    author: 'Shakib Mahmud',
    date: '10 October 2024',
    url: '/blog-single',
  },
  {
    id: 4,
    title: 'Explore the Future of Technology with Us',
    description: 'Technology is evolving rapidly—are you keeping up? Our blog offers thought-provoking articles, practical tips.',
    image: blog4,
    author: 'Shakib Mahmud',
    date: '10 October 2024',
    url: '/blog-single',
  },
  {
    id: 5,
    title: 'Updated with Latest in IT & Technology Trends',
    description: 'Discover cutting-edge innovations, industry insights, and expert advice that your business to thrive in the digital.',
    image: blog5,
    author: 'Shakib Mahmud',
    date: '10 October 2024',
    url: '/blog-single',
  },
  {
    id: 6,
    title: 'Unpacking IT Trends to Help You Succeed',
    description: 'Explore our blog for in-depth articles on technology trends, IT solutions, and digital transformation strategies break.',
    image: blog6,
    author: 'Shakib Mahmud',
    date: '10 October 2024',
    url: '/blog-single',
  },
]

const page = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Our Blog "
          items={[
            { label: 'Home', link: '/' },
            { label: 'Our Blog', link: '/blog' },
          ]}
        />
        <section className="vl-blog-sec pt-100 pb-70">
          <Container>
            <Row>
              {blogPosts.map((post) => (
                <Col lg={6} key={post.id}>
                  <div className="vl-single-blog-item vl-single-blog-item-3 inner-blog mb-30">
                    <div className="vl-single-blog-img vl-single-blog-img-4 br-8 fix p-relative">
                      <Link to={post.url}>
                        <img className="w-100" src={post.image} alt={post.title} />
                      </Link>
                    </div>
                    <div className="vl-single-blog-4 p-relative z-index-1">
                      <div className="vl-single-blog-right-arow">
                        <Link to={post.url}>
                          <FaArrowRight />
                        </Link>
                      </div>
                      <div className="vl-single-blog-meta d-flex">
                        <div className="vl-single-blog-meta-box mr-16 d-flex align-items-center">
                          <div className="vl-single-blog-meta-box-icon mr-4">
                            <span>
                              <img src={calender} alt="Calendar" />
                            </span>
                          </div>
                          <div className="vl-single-blog-meta-box-content">
                            <a href="#">{post.date}</a>
                          </div>
                        </div>

                        <div className="vl-single-blog-meta-box mr-16 d-flex align-items-center">
                          <div className="vl-single-blog-meta-box-icon mr-4">
                            <span>
                              <img src={user} alt="User" />
                            </span>
                          </div>
                          <div className="vl-single-blog-meta-box-content">
                            <a href="#">{post.author}</a>
                          </div>
                        </div>
                      </div>

                      <div className="vl-single-blog-content vl-single-blog-content-4 p-relative z-index-1">
                        <h3 className="vl-single-blog-title vl-single-blog-title-4 pt-18 pb-12">
                          <Link to={post.url}>{post.title}</Link>
                        </h3>
                        <p className="pb-24">{post.description}</p>
                        <Link to={post.url} className="vl-readmore">
                          Read More{' '}
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <Paginations />
        </section>
      </main>
    </MainLayout>
  )
}

export default page

export { Head } from '@/components/PageMeta'
