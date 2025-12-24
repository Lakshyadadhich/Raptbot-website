import shape1 from '@/assets/img/icons/vl-tean-shap1.svg'
import team1 from '@/assets/img/team/prabhakarsirp.png'
import team2 from '@/assets/img/team/rahulsirp.png'
import team3 from '@/assets/img/team/sanjeevsirp.png'
// import team4 from '@/assets/img/team/vl-team-4.4.png'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

type TeamMember = {
  name: string
  role: string
  image: string
  linkedin: string
}

const teamData: TeamMember[] = [
  {
    name: 'Prabhakar sharma',
    role: 'CEO',
    image: team1,
    linkedin: 'https://www.linkedin.com/in/rapt-prabhakar',
  },
  {
    name: 'Rahul gupta',
    role: 'CTO',
    image: team2,
    linkedin: 'https://www.linkedin.com/in/rahulguptarapt',
  },
  {
    name: 'Sanjeev kumar',
    role: 'Digital engineering services head',
    image: team3,
    linkedin: 'https://www.linkedin.com/in/sanjeev-kumar-6223b87',
  },
]

const Team = () => {
  return (
    <section className="vl-team vl-team-bg p-relative pt-40 pb-50">
      <div className="container p-relative">
        <div className="row">
          <div className="col-lg-8">
            <div
              className="vl-section-title-wrapper mb-60"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <div className="vl-section-subheading">
                <h4 className="vl-section-subtitle-6 vl-upper">Our Leaders</h4>
              </div>
              <h2 className="vl-section-title vl-section-title-2 pt-16">
                Dedicated professionals, proven results
              </h2>
            </div>
          </div>
        </div>

        {/* Static 3 Members */}
        <div className="row">
          {teamData.map((member, index) => (
            <div className="col-md-4" key={index}>
              <div className="vl-team-sin">
                <div className="vl-team-thumb position-relative">
                  <div className="vl-team-shape">
                    <img src={shape1} alt="shape1" />
                  </div>
                  <img
                    className="w-100 img-fluid"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="vl-team-content text-center">
                  <h4 className="title">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </a>
                  </h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team