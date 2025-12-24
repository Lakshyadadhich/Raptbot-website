import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

interface faq {
  question: string
  answer: string
}

const faqs: faq[] = [
  {
    question: 'How long does it take to implement a solution?',
    answer:
      'The implementation timeline varies depending on the complexity and scope of the project. We prioritize efficiency without compromising quality & keep you informed.',
  },
  {
    question: 'Can you customize solutions for my business?',
    answer:
      'The implementation timeline varies depending on the complexity and scope of the project. We prioritize efficiency without compromising quality & keep you informed.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'The implementation timeline varies depending on the complexity and scope of the project. We prioritize efficiency without compromising quality & keep you informed.',
  },
  {
    question: 'What if we already have an in-house IT team?',
    answer:
      'The implementation timeline varies depending on the complexity and scope of the project. We prioritize efficiency without compromising quality & keep you informed.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'The implementation timeline varies depending on the complexity and scope of the project. We prioritize efficiency without compromising quality & keep you informed.',
  },
]

const FAQSection = () => {
  return (
    <section className="vl-faq vl-gray-bg-2 pt-100 pb-70" id="faq">
      <Container>
        <div
          suppressHydrationWarning
          className="vl-section-title-wrapper text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="900">
          <h4 className="vl-section-subtitle-4 vl-fs-16 m-0 vl-theme-color3 vl-upper">Frequently Asked Questions</h4>
          <h2 className="vl-section-title vl-blc-text-4 pt-16">Your Questions Answered</h2>
        </div>
        <Row>
          <Col suppressHydrationWarning lg={8} className="mx-auto aos-init aos-animate" data-aos="fade-up" data-aos-duration="1100">
            <Accordion defaultActiveKey="1" id="accordionExample">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} eventKey={`${idx + 1}`} className="vl-accordion-item mb-20">
                  <AccordionHeader as={'h2'}>{faq.question}</AccordionHeader>
                  <AccordionBody>
                    <p>{faq.answer}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQSection
