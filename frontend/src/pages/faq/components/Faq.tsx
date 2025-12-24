import React from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa6'

const tabContent = [
  { id: 'all-tab', title: 'All' },
  { id: 'service-tab', title: 'It Service' },
  { id: 'technology-tab', title: 'Technology' },
  { id: 'security-tab', title: 'Cyber security' },
  { id: 'support-tab', title: 'Tech Support' },
]

const faq = [
  {
    question: 'What types of IT services do you offer?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'How do you ensure data security & protection?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'Can your services scale with our business growth?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'Do you offer remote IT support?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'How can cloud services benefit my business?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
]

const faq2 = [
  {
    question: 'Do you offer multi-location IT support?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'Can we try your services on a trial basis?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'Do you provide staff training new technologies?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'Do you offer IT consulting services?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We prioritize security by implementing multi-layered protection strategies, including firewalls, encryption, threat monitoring.',
  },
]

const Faq = () => {
  return (
    <>
      <section className="vl-faq-iner pt-100 pb-70">
        <Container>
          <TabContainer defaultActiveKey={'All'}>
            <div className="vl-faq-iner-title text-center">
              <h3 className="vl-fs-44 vl-lineheight-44 vl-text-cmn-blck pb-32 m-0">Frequently Asked Questions</h3>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="vl-faq-tab mb-48">
                  <Nav as={'ul'} className="nav-tabs" id="myTab" role="tablist">
                    {(tabContent || []).map((item, idx) => {
                      return (
                        <NavItem as={'li'} key={idx} role="presentation">
                          <NavLink
                            as={'button'}
                            id={item.id}
                            eventKey={item.title}
                            data-bs-toggle="tab"
                            type="button"
                            role="tab"
                            aria-selected="true">
                            {item.title}
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                </div>
              </div>
              <Row>
                <Col lg={12}>
                  <TabContent id="myTabContent">
                    {(tabContent || []).map((item, idx) => {
                      return (
                        <TabPane key={idx} eventKey={item.title} id={item.id} className="fade" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
                          <Row>
                            <Col lg={6}>
                              <Accordion defaultActiveKey={'1'} id="accordion1">
                                {faq.map((item, idx) => (
                                  <AccordionItem key={idx} eventKey={`${idx + 1}`} className="vl-accordion-item vl-accordion-item-2 mb-20">
                                    <AccordionHeader as={'h2'} id="heading1">
                                      {item.question}
                                      <span>
                                        <FaAngleDown className="fa-regular fa-angle-down" />
                                      </span>
                                    </AccordionHeader>
                                    <AccordionBody>
                                      <p>{item.answer}</p>
                                    </AccordionBody>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </Col>
                            <Col lg={6}>
                              <Accordion defaultActiveKey={'1'} id="accordion1">
                                {faq2.map((item, idx) => (
                                  <AccordionItem key={idx} eventKey={`${idx + 1}`} className="vl-accordion-item vl-accordion-item-2 mb-20">
                                    <AccordionHeader as={'h2'} id="heading1">
                                      {item.question}
                                      <span>
                                        <FaAngleDown className="fa-regular fa-angle-down" />
                                      </span>
                                    </AccordionHeader>
                                    <AccordionBody>
                                      <p>{item.answer}</p>
                                    </AccordionBody>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </Col>
                          </Row>
                        </TabPane>
                      )
                    })}
                  </TabContent>
                </Col>
              </Row>
            </div>
          </TabContainer>
        </Container>
      </section>
    </>
  )
}

export default Faq
