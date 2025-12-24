import commentImg1 from '@/assets/img/blog/vl-blog-cmt-1.1.png'
import commentImg2 from '@/assets/img/blog/vl-blog-cmt-1.2.png'
import blogLargeImg from '@/assets/img/blog/vl-blog-large-1.1.png'
import blogSmImg from '@/assets/img/blog/vl-blog-sm-1.1.png'
import iconChat from '@/assets/img/icons/vl-chat.svg'
import iconDate from '@/assets/img/icons/vl-dt.svg'
import replyIcon from '@/assets/img/icons/vl-replay.svg'
import iconTag from '@/assets/img/icons/vl-tag.svg'
import studyImg from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const BlogDetails = () => {
  const services = [
    'Technology Consultancy',
    'Managed Services',
    'Ayanda Machine Learning',
    'Cloud Computing',
    'Automation Solutions',
    'Business Innovation',
  ]

  const advancedChecklist = ['Software Development', 'AI and Machine Learning', 'Digital Transformation']

  return (
    <>
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-20 m-0">Unpacking Trends: Technology for Tomorrow</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Stay ahead in the ever-changing world of technology with our insightful blog. We cover a <br />
          wide range of topics, including cloud computing, cybersecurity, IT infrastructure, and <br />
          digital transformation. Whether you're looking for industry updates, expert opinions.
        </p>
      </div>

      <div className="vl-service-details-larg-img fix br-8 mb-30">
        <img className="w-100" src={blogLargeImg} alt="" />
      </div>

      <div className="vl-service-details-cat pt-24 pb-24 mb-30">
        <div className="vl-service-details-cat-single vl-service-details-cat-single-2 d-flex align-items-center">
          <span>
            <img src={blogSmImg} alt="" />
          </span>
          <p className="vl-text-para vl-fs-16 vl-lineheight-16 m-0">Shawna Homesick</p>
        </div>
        <div className="vl-service-details-cat-single vl-service-details-cat-single-2 d-flex align-items-center">
          <span className="icon">
            <img src={iconDate} alt="" />
          </span>
          <p className="vl-text-para vl-fs-16 vl-lineheight-16 m-0">8/10/2024</p>
        </div>
        <div className="vl-service-details-cat-single vl-service-details-cat-single-2 d-flex align-items-center">
          <span className="icon">
            <img src={iconTag} alt="" />
          </span>
          <p className="vl-text-para vl-fs-16 vl-lineheight-16 m-0">It Service & Technology</p>
        </div>
        <div className="vl-service-details-cat-single vl-service-details-cat-single-2 d-flex align-items-center">
          <span className="icon">
            <img src={iconChat} alt="" />
          </span>
          <p className="vl-text-para vl-fs-16 vl-lineheight-16 m-0">2 Comments</p>
        </div>
      </div>

      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-20 m-0">Ready Networks for Seamless Connectivity</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-20 m-0">
          Our blog is your destination for the latest trends and developments in IT and technology.
          <br />
          From in-depth guides to emerging technologies and best practices for business growth, <br />
          we aim to equip you with the knowledge you need to make informed decisions.
        </p>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Delve into our blog for valuable insights into the future of technology and innovation. We <br />
          simplify complex topics, providing expert advice on everything from automation.
        </p>
      </div>

      <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          In a fast-paced digital world, staying informed is crucial. Our blog offers timely <br />
          updates on IT solutions, industry challenges, and new opportunities. Whether <br />
          you're a business leader, IT professional, or tech enthusiast, you'll find relevant.
        </p>
      </div>

      <div className="vl-block-grid pt-30 mb-14">
        <div className="vl-block-check">
          {services.map((service, index) => (
            <h3 key={index}>
              <span>
                <FaCheck />
              </span>{' '}
              {service}
            </h3>
          ))}
        </div>
      </div>

      <div className="vl-service-details-content">
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-20 m-0">Reliable Networks for Critical Operations</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
            Explore our blog for a deep dive into the world of IT services and digital innovation. We <br />
            provide valuable content on topics like cloud services, cybersecurity, data analytics.
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div className="vl-service-details-sm fix br-8 mb-30">
              <img className="w-100" src={studyImg} alt="" />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="vl-service-details-content mb-30">
              <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-24 m-0">
                Cybersecurity, data analytics, & software development. With insights from industry experts and real-world examples, our blog helps you
                stay informed, inspired, and <br />
                ready for the future services.
              </p>

              <div className="vl-service-details-content-check vl-service-details-content-check-bold">
                <ul>
                  {advancedChecklist.map((item, index) => (
                    <li key={index}>
                      <span>
                        <FaCheck />
                      </span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row className="align-items-center">
        <Col lg={8}>
          <div className="vl-blog-tags mb-30">
            <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck m-0 mr-15">Our Tags:</h3>
            <div className="vl-blog-tag">
              <ul>
                <li>
                  <a href="#">
                    <span>#</span>It Service
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>#</span>Creative
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>#</span>Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="vl-blog-share mb-30">
            <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck m-0 mr-15">Share:</h3>
            <div className="vl-sidebar-social vl-sidebar-social-2">
              <ul>
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <div className="vl-blog-comments">
        <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-30 m-0">Blog Comments (2)</h3>

        <div className="vl-blog-single-comment vl-gray-bg-4 br-8 mb-30">
          <div className="vl-blog-single-auth pb-16">
            <div className="vl-blog-single-auth-thumb">
              <div className="vl-blog-single-auth-thumb-1">
                <img src={commentImg1} alt="" />
              </div>
              <div className="vl-blog-single-auth-thumb-content">
                <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck m-0">Mercedes Stiedemann</h3>
                <p className="vl-text-para m-0">8/10/2024</p>
              </div>
            </div>

            <div className="vl-blog-single-auth-share">
              <div className="vl-blog-reply">
                <h3 className="vl-fs-18 vl-lineheight-18 vl-text-cmn-blck m-0">
                  <img className="mr-5" src={replyIcon} alt="" /> <a href="#">Reply</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="vl-blog-single-comment-desc">
            <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
              We value your thoughts and feedback! Join the conversation by sharing your <br />
              insights, opinions, and questions in the comments section below. Your voice <br />
              matters to us, & we’re excited to hear what you think about the topics we cover.
            </p>
          </div>
        </div>

        <div className="vl-blog-single-comment vl-gray-bg-4 br-8 mb-30 ml-30">
          <div className="vl-blog-single-auth pb-16">
            <div className="vl-blog-single-auth-thumb">
              <div className="vl-blog-single-auth-thumb-1">
                <img src={commentImg2} alt="" />
              </div>
              <div className="vl-blog-single-auth-thumb-content">
                <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck m-0">Mr. Adrian Senger</h3>
                <p className="vl-text-para m-0">8/10/2024</p>
              </div>
            </div>
            <div className="vl-blog-single-auth-share">
              <div className="vl-blog-reply">
                <h3 className="vl-fs-18 vl-lineheight-18 vl-text-cmn-blck m-0">
                  <img className="mr-5" src={replyIcon} alt="" /> <a href="#">Reply</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="vl-blog-single-comment-desc">
            <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
              Have something to add? We encourage open discussions and would love to <br />
              hear your perspective! Share your thoughts, experiences, or ask questions in <br />
              the comments, and let’s learn from each other to build a community.
            </p>
          </div>
        </div>
      </div>

      <div className="vl-blog-reply-2 vl-gray-bg-4 br-8">
        <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-16 m-0">Leave a Reply</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-30 m-0">
          Provide clear contact information, including phone number, email, and address.
        </p>
        <div className="vl-blog-reply-form">
          <Row>
            <Col lg={6} className="mb-20">
              <input type="text" placeholder="First Name" />
            </Col>
            <Col lg={6} className="mb-20">
              <input type="text" placeholder="Last Name" />
            </Col>
            <Col lg={12} className="mb-30">
              <textarea name="message" id="message" placeholder="Message"></textarea>
            </Col>
            <Col lg={4}>
              <div className="vl-about-inner-btn">
                <button className="vl-iner-btn">
                  Send Now
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default BlogDetails
