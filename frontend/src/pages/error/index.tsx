import error from '@/assets/img/banner/vl-404.png'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Page = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Error 404"
          items={[
            { label: 'Home', link: '/' },
            { label: 'Error 404 ', link: '#' },
          ]}
        />
        <section className="vl-error-sec pt-100 pb-70">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto text-center">
                <div className="vl-error-con">
                  <div className="vl-error-thumb pb-48">
                    <img className="w-100" src={error} alt="404 Error" />
                  </div>
                  <div className="vl-error-text">
                    <h3 className="vl-fs-40 vl-lineheight-40 vl-text-cmn-blck pb-20 m-0">Sorry, Page Not Found!</h3>
                    <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-30 m-0">
                      Sorry, the page you are looking for doesn’t exist or has <br />
                      been moved. Here are some helpful links.
                    </p>
                  </div>

                  <div className="vl-error-btn">
                    <div className="vl-herobtn vl-aboutbtn vl-upper">
                      <Link to="/" className="theme-btn theme-btn2">
                        Back To Home{' '}
                        <span>
                          <FaArrowRight className="fs-2" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </MainLayout>
  )
}

export default Page
export { Head } from '@/components/PageMeta'
