// import location from '@/assets/img/icons/vl-contact-iner-location.svg'
// import email from '@/assets/img/icons/vl-contact-iner-mail.svg'
// import phone from '@/assets/img/icons/vl-contact-iner-phone.svg'
// import MainLayout from '@/components/MainLayout'
// import PageTitle from '@/components/PageTitle'
// import React, { useState } from 'react'
// import { Button, Col, Container, Row } from 'react-bootstrap'
// import { FaArrowRight } from 'react-icons/fa6'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const Page = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     number: '',
//     subject: '',
//     message: '',
//   })
//   const [loading, setLoading] = useState(false)

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // ✅ Handle form submit — now calls your backend
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const response = await fetch(
//         process.env.GATSBY_API_URL || 'http://localhost:5000/api/contact', // ✅ Your backend endpoint
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         }
//       )

//       if (!response.ok) {
//         throw new Error('Failed to send message')
//       }

//       toast.success('✅ Message sent successfully!')

//       // Reset form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         number: '',
//         subject: '',
//         message: '',
//       })
//     } catch (error) {
//       console.error('Backend Error:', error)
//       toast.error('❌ Failed to send. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       <MainLayout>
//         <PageTitle
//           title="Contact us"
//           items={[
//             { label: 'home', link: '/' },
//             { label: 'contact us', link: '/contact' },
//           ]}
//         />
//         <section className="vl-contact-iner pt-50 pb-50">
//           <Container>
//             <Row className="align-items-center">
//               <Col lg={6}>
//                 <div className="vl-contact-iner-box br-8 vl-gray-bg-4 mb-30">
//                   <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">send us a message</h3>
//                   <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-30 m-0">
//                     have questions or need assistance? We're here to help! whether <br />
//                     you're exploring solutions, looking for a consultation, or need.
//                   </p>
//                   <div className="vl-contact-iner-form">
//                     <form onSubmit={handleSubmit}>
//                       <Row>
//                         <Col lg={6} className="mb-20">
//                           <input
//                             type="text"
//                             name="firstName"
//                             placeholder="first name"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                             disabled={loading}
//                           />
//                         </Col>
//                         <Col lg={6} className="mb-20">
//                           <input
//                             type="text"
//                             name="lastName"
//                             placeholder="last name"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                             disabled={loading}
//                           />
//                         </Col>
//                         <Col lg={6} className="mb-20">
//                           <input
//                             type="email"
//                             name="email"
//                             placeholder="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             disabled={loading}
//                           />
//                         </Col>
//                         <Col lg={6} className="mb-20">
//                           <input
//                             type="text"
//                             name="number"
//                             placeholder="number"
//                             value={formData.number}
//                             onChange={handleChange}
//                             required
//                             disabled={loading}
//                           />
//                         </Col>
//                         <Col lg={12} className="mb-20">
//                           <input
//                             type="text"
//                             name="subject"
//                             placeholder="subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                             disabled={loading}
//                           />
//                         </Col>
//                         <Col lg={12} className="mb-20">
//                           <textarea
//                             name="message"
//                             id="message"
//                             placeholder="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             disabled={loading}
//                           ></textarea>
//                         </Col>
//                         <Col lg={12}>
//                           <div className="vl-about-inner-btn fl-right">
//                             <Button
//                               className="vl-iner-btn text-lowercase"
//                               type="submit"
//                               disabled={loading}
//                             >
//                               {loading ? 'sending...' : 'send now'}{' '}
//                               <span>
//                                 <FaArrowRight className="fs-2" />
//                               </span>
//                             </Button>
//                           </div>
//                         </Col>
//                       </Row>
//                     </form>
//                   </div>
//                 </div>
//               </Col>

//               {/* --- Right Side Contact Info --- */}
//               <Col lg={6}>
//                 <div className="vl-contact-iner-widget ml-50 mb-30">
//                   <div className="vl-section-title-wrapper">
//                     <h4 className="vl-section-subtitle-7 vl-upper">Contact us</h4>
//                     <h2 className="vl-section-title vl-section-title-2 pt-16 pb-36">
//                       let’s connect empower <br /> and your business
//                     </h2>
//                   </div>

//                   <div className="vl-contact-iner-widget-1 vl-gray-bg-4 br-8 mb-20 d-flex">
//                     <div className="vl-contact-iner-widget-1-icon mr-16">
//                       <span>
//                         <img src={phone} alt="Phone" />
//                       </span>
//                     </div>
//                     <div className="vl-contact-iner-widget-1-content">
//                       <h5 className="vl-contact-iner-widget-1-content-title pb-14 m-0">gives us a call</h5>
//                       <a href="tel:1234567890">+91 9001378790</a>
//                     </div>
//                   </div>

//                   <div className="vl-contact-iner-widget-1 vl-gray-bg-4 br-8 mb-20 d-flex">
//                     <div className="vl-contact-iner-widget-1-icon mr-16">
//                       <span>
//                         <img src={email} alt="Email" />
//                       </span>
//                     </div>
//                     <div className="vl-contact-iner-widget-1-content">
//                       <h5 className="vl-contact-iner-widget-1-content-title pb-14 m-0">send us email</h5>
//                       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=consulting@raptbot.com" target="_blank" rel="noreferrer">
//                         consulting@raptbot.com
//                       </a>
//                     </div>
//                   </div>

//                   <div className="vl-contact-iner-widget-1 vl-gray-bg-4 br-8 mb-20 d-flex">
//                     <div className="vl-contact-iner-widget-1-icon mr-16">
//                       <span>
//                         <img src={location} alt="Location" />
//                       </span>
//                     </div>
//                     <div className="vl-contact-iner-widget-1-content">
//                       <h5 className="vl-contact-iner-widget-1-content-title pb-14 m-0">contact us</h5>
//                       <a href="#">C 22 Maha Laxmi Nagar, Malviya Nagar, D-Block Jaipur, Rajasthan 302017</a>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         {/* --- Map --- */}
//         <div className="vl-contact-iner-map pb-70">
//           <Container>
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.816031030118!2d75.805886!3d26.8513626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db511d8271aaf%3A0x1b630be8a9eb8e67!2sC22%2C%20Mahalaxmi%20Nagar%20Rd%2C%20D-Block%2C%20Malviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1726316400000!5m2!1sen!2sin"
//               className="vl-contact-iner-google-map mb-30 br-8"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               loading="lazy"></iframe>
//           </Container>
//         </div>
//       </MainLayout>

//       {/* ✅ Toast Notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </>
//   )
// }

// export default Page
// export { Head } from '@/components/PageMeta'




import location from '@/assets/img/icons/vl-contact-iner-location.svg'
import email from '@/assets/img/icons/vl-contact-iner-mail.svg'
import phone from '@/assets/img/icons/vl-contact-iner-phone.svg'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify' // ✅ Import Toastify
import 'react-toastify/dist/ReactToastify.css' // ✅ Toastify CSS

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false) // ✅ Add loading state

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // ✅ Handle form submit - Backend API
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      toast.success('✅ Message sent successfully!')

      // Reset form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Contact Form Error:', error)
      toast.error('❌ ' + (error.message || 'Failed to send. Please try again.'))
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <MainLayout>
        <PageTitle
          title="Contact us"
          items={[
            { label: 'home', link: '/' },
            { label: 'contact us', link: '/contact' },
          ]}
        />
        <section className="vl-contact-iner pt-50 pb-50">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="vl-contact-iner-box br-8 vl-gray-bg-4 mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">send us a message</h3>
                  <p className="vl-text-para vl-fs-18 vl-lineheight-28 pb-30 m-0">
                    have questions or need assistance? We're here to help! whether <br />
                    you're exploring solutions, looking for a consultation, or need.
                  </p>
                  <div className="vl-contact-iner-form">
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg={6} className="mb-20">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            disabled={loading} // ✅ Disable during loading
                          />
                        </Col>
                        <Col lg={6} className="mb-20">
                          <input
                            type="text"
                            name="lastName"
                            placeholder="last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            disabled={loading} // ✅ Disable during loading
                          />
                        </Col>
                        <Col lg={6} className="mb-20">
                          <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading} // ✅ Disable during loading
                          />
                        </Col>
                        <Col lg={6} className="mb-20">
                          <input
                            type="text"
                            name="number"
                            placeholder="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                            disabled={loading} // ✅ Disable during loading
                          />
                        </Col>
                        <Col lg={12} className="mb-20">
                          <input
                            type="text"
                            name="subject"
                            placeholder="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={loading} // ✅ Disable during loading
                          />
                        </Col>
                        <Col lg={12} className="mb-20">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={loading} // ✅ Disable during loading
                          ></textarea>
                        </Col>
                        <Col lg={12}>
                          <div className="vl-about-inner-btn fl-right">
                            <Button
                              className="vl-iner-btn text-lowercase"
                              type="submit"
                              disabled={loading} // ✅ Disable button during loading
                            >
                              {loading ? 'sending...' : 'send now'}{' '}
                              <span>
                                <FaArrowRight className="fs-2" />
                              </span>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </Col>

              {/* --- Right Side Contact Info --- */}
              <Col lg={6}>
                <div className="vl-contact-iner-widget ml-50 mb-30">
                  <div className="vl-section-title-wrapper">
                    <h4 className="vl-section-subtitle-7 vl-upper">Contact us</h4>
                    <h2 className="vl-section-title vl-section-title-2 pt-16 pb-36">
                      let’s connect empower <br /> and your business
                    </h2>
                  </div>

                  <div className="vl-contact-iner-widget-1 vl-gray-bg-4 br-8 mb-20 d-flex">
                    <div className="vl-contact-iner-widget-1-icon mr-16">
                      <span>
                        <img src={phone} alt="Phone" />
                      </span>
                    </div>
                    <div className="vl-contact-iner-widget-1-content">
                      <h5 className="vl-contact-iner-widget-1-content-title pb-14 m-0">gives us a call</h5>
                      <a href="tel:1234567890">+91 9001378790</a>
                    </div>
                  </div>

                  <div className="vl-contact-iner-widget-1 vl-gray-bg-4 br-8 mb-20 d-flex">
                    <div className="vl-contact-iner-widget-1-icon mr-16">
                      <span>
                        <img src={email} alt="Email" />
                      </span>
                    </div>
                    <div className="vl-contact-iner-widget-1-content">
                      <h5 className="vl-contact-iner-widget-1-content-title pb-14 m-0">send us email</h5>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=consulting@raptbot.com" target="_blank" rel="noreferrer">
                        consulting@raptbot.com
                      </a>
                    </div>
                  </div>

                  <div className="vl-contact-iner-widget-1 vl-gray-bg-4 br-8 mb-20 d-flex">
                    <div className="vl-contact-iner-widget-1-icon mr-16">
                      <span>
                        <img src={location} alt="Location" />
                      </span>
                    </div>
                    <div className="vl-contact-iner-widget-1-content">
                      <h5 className="vl-contact-iner-widget-1-content-title pb-14 m-0">contact us</h5>
                      <a href="#">C 22 Maha Laxmi Nagar, Malviya Nagar, D-Block Jaipur, Rajasthan 302017</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* --- Map --- */}
        <div className="vl-contact-iner-map pb-70">
          <Container>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.816031030118!2d75.805886!3d26.8513626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db511d8271aaf%3A0x1b630be8a9eb8e67!2sC22%2C%20Mahalaxmi%20Nagar%20Rd%2C%20D-Block%2C%20Malviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1726316400000!5m2!1sen!2sin"
              className="vl-contact-iner-google-map mb-30 br-8"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"></iframe>
          </Container>
        </div>

        {/* ✅ Toast Container */}
      </MainLayout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Page
export { Head } from '@/components/PageMeta'
