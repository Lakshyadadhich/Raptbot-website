// import cta1 from '@/assets/img/cta/vl-cta-main-4.1.png'
// import shape1 from '@/assets/img/icons/vl-cta-shape-4.1.svg'
// import cta2 from '@/assets/img/shape/vl-cta-iner-shape.png'
// import React, { useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import { FaArrowRight } from 'react-icons/fa6'
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify' // ✅ Import toast
// import 'react-toastify/dist/ReactToastify.css' // ✅ Import CSS

// const Cta = () => {
//   const [email, setEmail] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const response = await axios.post('http://localhost:5000/api/newsletter/subscribe', {
//         email,
//       })

//       if (response.data.success) {
//         toast.success('✅ Subscription successful!') // ✅ Success toast
//         setEmail('')
//       } else {
//         toast.error('❌ Subscription failed, please try again.') // ❌ Error toast
//       }
//     } catch (error) {
//       console.error('Subscription error:', error)
//       toast.error('❌ ' + (error.response?.data?.message || 'Subscription failed, please try again.'))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="vl-cta">
//       <Container>
//         <div className="vl-cta-bg-1 vl-cta-bg-4 p-relative fix br-8 pt-80 pb-50">
//           <div className="vl-cta-shape">
//             <img src={shape1} alt="" />
//           </div>
//           <Row>
//             <Col lg={6}>
//               <div className="vl-cta-wrapper mb-30">
//                 <h2 className="vl-cta-wrapper-title vl-white pb-32">Transform your business contact us today</h2>

//                 <div className="vl-cta-mailform">
//                   <form onSubmit={handleSubmit}>
//                     <div className="vl-cta-mail">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         disabled={loading}
//                       />
//                       <div className="vl-cta-mail-btn">
//                         <div className="vl-herobtn vl-aboutbtn vl-upper mt-2">
//                           <button type="submit" className="theme-btn theme-btn2 vl-lower" disabled={loading}>
//                             {loading ? 'Subscribing...' : 'subscribe now'}{' '}
//                             <span>
//                               <FaArrowRight />
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </Col>
//             <Col lg={6}>
//               <div className="vl-cta-img p-relative z-index-1">
//                 <img src={cta1} alt="" />
//                 <div className="vl-cta-half-circle">
//                   <img src={cta2} alt="" />
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>

//       {/* ✅ Toast container */}
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
//     </section>
//   )
// }

// export default Cta

import cta1 from '@/assets/img/cta/vl-cta-main-4.1.png'
import shape1 from '@/assets/img/icons/vl-cta-shape-4.1.svg'
import cta2 from '@/assets/img/shape/vl-cta-iner-shape.png'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cta = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  // ✅ Handle form submit - Backend API
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/api/cta`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit request')
      }

      toast.success('✅ Thank you for your interest! We will contact you soon.')
      setEmail('')
    } catch (error) {
      console.error('CTA Form Error:', error)
      toast.error('❌ ' + (error.message || 'Failed to submit. Please try again.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="vl-cta">
      <Container>
        <div className="vl-cta-bg-1 vl-cta-bg-4 p-relative fix br-8 pt-80 pb-50">
          <div className="vl-cta-shape">
            <img src={shape1} alt="" />
          </div>
          <Row>
            <Col lg={6}>
              <div className="vl-cta-wrapper mb-30">
                <h2 className="vl-cta-wrapper-title vl-white pb-32">
                  Transform your business contact us today
                </h2>

                <div className="vl-cta-mailform">
                  <form onSubmit={handleSubmit}>
                    <div className="vl-cta-mail">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                      />
                      <div className="vl-cta-mail-btn">
                        <div className="vl-herobtn vl-aboutbtn vl-upper mt-2">
                          <button
                            type="submit"
                            className="theme-btn theme-btn2 vl-lower"
                            disabled={loading}
                          >
                            {loading ? 'Subscribing...' : 'subscribe now'}{' '}
                            <span>
                              <FaArrowRight />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="vl-cta-img p-relative z-index-1">
                <img src={cta1} alt="" />
                <div className="vl-cta-half-circle">
                  <img src={cta2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* ✅ Toast notifications */}
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
    </section>
  )
}

export default Cta
