import team1 from '@/assets/img/team/vl-team-1.1.png'
import team2 from '@/assets/img/team/vl-team-1.2.png'
import team3 from '@/assets/img/team/vl-team-1.3.png'
import team4 from '@/assets/img/team/vl-team-1.4.png'
import team5 from '@/assets/img/team/vl-team-1.5.png'
import team6 from '@/assets/img/team/vl-team-1.6.png'
import team7 from '@/assets/img/team/vl-team-1.7.png'
import team8 from '@/assets/img/team/vl-team-1.8.png'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import Paginations from './components/Paginations'

type Team = {
  name: string
  image: string
  title: string
}

const teamMembers: Team[] = [
  { name: 'Kendra Cremin', title: 'Network Engineer', image: team1 },
  { name: 'Dennis Jacobson', title: 'CEO & Founder', image: team2 },
  { name: 'Patricia Wilkinson', title: 'Digital Marketer', image: team3 },
  { name: 'Jack Williamson', title: 'Digital Marketer', image: team4 },
  { name: "Julio O'Connell", title: 'CEO & Founder', image: team5 },
  { name: 'Regina Klocko', title: 'Network Engineer', image: team6 },
  { name: 'Geneva Herzog', title: 'Network Engineer', image: team7 },
  { name: 'Mitchell Rice', title: 'Digital Marketer', image: team8 },
]

const page = () => {
  return (
    <MainLayout>
      <PageTitle
        title="Our Team"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Our Team', link: '/team' },
        ]}
      />

      <section className="vl-team-iner pt-100 pb-70">
        <Container>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="vl-team-single vl-team-single-inner text-center p-relative fix mr-0 mb-30">
                  <div className="vl-team-single-image vl-team-single-image-2 z-index-1 p-relative">
                    <img className="w-100" src={member.image} alt={member.name} />

                    <div className="vl-team-single-image-social vl-team-single-image-social-2 vl-team-single-image-social-2-iner">
                      <ul>
                        <li>
                          <a href="#">
                            <span>
                              <FaFacebookF />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <FaLinkedinIn />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <FaInstagram />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <FaYoutube />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="vl-team-single-content mt-20">
                    <h4 className="vl-team-single-title pb-16">
                      <a href="#">{member.name}</a>
                    </h4>
                    <span>{member.title}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Paginations />
        </Container>
      </section>
    </MainLayout>
  )
}

export default page
export { Head } from '@/components/PageMeta'
