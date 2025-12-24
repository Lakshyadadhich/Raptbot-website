import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/assets/scss/component/_career.scss'
import '@/assets/scss/component/_shared.scss'

const CareerPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({})
  const [resumeFile, setResumeFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const toggleForm = () => setShowForm(!showForm)
  const closeForm = () => setShowForm(false)

  // ✅ Handle input changes (text, checkbox)
  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked ? 'yes' : 'no' })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  // ✅ Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        toast.error('❌ Please upload a PDF, DOC, or DOCX file')
        return
      }
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('❌ File size must be less than 5MB')
        return
      }
      setResumeFile(file)
    }
  }

  // ✅ Handle submit - Backend API with file upload
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:5000'
      
      // Create FormData for file upload
      const formDataToSend = new FormData()
      
      // Append all form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })
      
      // Append resume file if exists
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile)
      } else {
        toast.error('❌ Please upload your resume')
        setLoading(false)
        return
      }

      const response = await fetch(`${apiUrl}/api/career/apply`, {
        method: 'POST',
        body: formDataToSend, // Don't set Content-Type header, browser will set it with boundary
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send application')
      }

      toast.success('✅ Application sent successfully!')
      setShowForm(false)
      setFormData({})
      setResumeFile(null)
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]')
      if (fileInput) fileInput.value = ''
    } catch (error) {
      console.error('Career Form Error:', error)
      toast.error('❌ ' + (error.message || 'Failed to send. Please try again.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <PageTitle
        title="Careers"
        items={[
          { label: 'home', link: '/' },
          { label: 'careers', link: '/career' },
        ]}
      />

      {/* ---------- Job Listings ---------- */}
      <section className="career-job-list pt-100 pb-70">
        <Container>
          <h2 className="vl-section-title pb-40">Open positions</h2>
          <Row>
            {/* Job 1 */}
            <Col lg={6} className="mb-30">
              <div className="career-job-card br-8 vl-gray-bg-4 p-4">
                <h3 className="mb-3">Lead salesforce developer</h3>
                <p className="vl-text-para">
                  We are seeking a skilled and motivated Lead Salesforce Developer to join our team in Jaipur. This role is ideal for someone ready to
                  step into a leadership position and drive technical excellence across Salesforce Clouds. You will collaborate with clients and
                  internal teams to deliver robust Salesforce solutions, mentor junior developers, and contribute to key architectural decisions
                  shaping our Salesforce practice.{' '}
                </p>
                <ul>
                  <li> <b>Role:</b> Lead salesforce developer</li>
                  <li> <b>Location:</b> On-site (Jaipur, Rajasthan, India)</li>
                  <li> <b>Experience:</b> 3-7 years</li>
                  <li> <b>Skills:</b> 3–7 years of hands-on Salesforce development experience (Apex, LWC, Flows, APIs, etc.).</li>
                  <li>Proven experience in leading Salesforce projects and mentoring technical teams.</li>
                  <li>Strong understanding of Salesforce Clouds (Sales, Service, or others — Marketing Cloud is a plus!).</li>
                  <li>Experience with integration patterns, CI/CD tools (Copado, Gearset), and version control (Git).</li>
                  <li>Salesforce certifications preferred (Platform Developer, Admin, App Builder, etc.).</li>
                </ul>
                <Button className="vl-iner-btn mt-3 text-lowercase" onClick={toggleForm}>
                  Apply for Job <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </Col>

            {/* Job 2 */}
            <Col lg={6} className="mb-30">
              <div className="career-job-card br-8 vl-gray-bg-4 p-4">
                <h3 className="mb-3">AWS cloud engineer</h3>
                <p className="vl-text-para">
                  Join our team to deliver L1/L2 operational support for AWS infrastructure, ensuring 24/7 monitoring, proactive incident management,
                  and timely remediation. You’ll work in a dynamic, global environment, collaborating with cross-functional teams to maintain high
                  availability, performance, and security. This role demands strong technical skills, attention to detail, and a commitment to
                  delivering outstanding customer support and operational excellence.
                </p>
                <ul>
                  <li> <b>Role:</b>  AWS cloud engineer</li>
                  <li> <b>Location:</b>  On-site (Jaipur, Rajasthan, India)</li>
                  <li> <b>Experience:</b> 1-3 years</li>
                  <li> <b>Skills:</b> 1–3 years experience in CloudOps/NOC/SOC roles</li>
                  <li>Hands-on with Linux & Windows administration</li>
                  <li>Familiarity with AWS services: EC2, S3, VPC, Lambda, CloudWatch</li>
                  <li>Exposure to monitoring/observability tools: Datadog, Prometheus, Grafana</li>
                  <li>Basic scripting in Bash and Python</li>
                  <li>Understanding of containerized environments (Docker, EKS, K8s)</li>
                  <li>Strong communication skills in English</li>
                  <li>Willingness to work night shifts and rotational weekend coverage</li>
                </ul>
                <Button className="vl-iner-btn mt-3 text-lowercase" onClick={toggleForm}>
                  Apply for Job <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- Application Form (Sliding Panel) ---------- */}
      <div className={`career-form-panel ${showForm ? 'open' : ''}`}>
        <Container>
          <div className="career-form-wrapper br-8 vl-gray-bg-4 p-4">
            {/* Close Button */}
            <button className="career-form-close" onClick={closeForm}>
              ✖
            </button>

            <h2 className="mb-4">Apply for Job</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                {/* Personal Info */}
                <Col lg={6} className="mb-20">
                  <label className="form-label">First Name</label>
                  <input type="text" name="firstName" onChange={handleChange} required />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Last Name</label>
                  <input type="text" name="lastName" onChange={handleChange} required />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" onChange={handleChange} required />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Contact Number</label>
                  <input type="text" name="contact" onChange={handleChange} required />
                </Col>
                <Col lg={12} className="mb-20">
                  <label className="form-label">Address</label>
                  <input type="text" name="address" onChange={handleChange} />
                </Col>
                <Col lg={12} className="mb-20">
                  <label className="form-label">Gender</label>
                  <select name="gender" onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </Col>

                {/* Experience Section */}
                <Col lg={12}>
                  <h4 className="mt-4 mb-3">Experience</h4>
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Job Title</label>
                  <input type="text" name="jobTitle" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Company Name</label>
                  <input type="text" name="companyName" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Office Location</label>
                  <input type="text" name="officeLocation" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Description</label>
                  <input type="text" name="description" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">From Date</label>
                  <input type="date" name="fromDate" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">To Date</label>
                  <input type="date" name="toDate" onChange={handleChange} />
                </Col>

                {/* Checkbox
                <Col lg={12} className="mb-20">
                  <label htmlFor="currentWork">
                    <input type="checkbox" name="currentWork" onChange={handleChange} /> I currently work here
                  </label>
                </Col> */}

                <Col lg={6} className="mb-20">
                  <label className="form-label">Current CTC</label>
                  <input type="text" name="currentCtc" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Expected CTC</label>
                  <input type="text" name="expectedCtc" onChange={handleChange} />
                </Col>

                {/* Resume Upload */}
                <Col lg={12} className="mb-20">
                  <label className="form-label">Upload Resume (PDF, DOC, DOCX - Max 5MB) *</label>
                  <input 
                    type="file" 
                    name="resume" 
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    required
                    disabled={loading}
                  />
                  {resumeFile && (
                    <p className="file-upload-success">
                      ✓ Selected: {resumeFile.name}
                    </p>
                  )}
                </Col>

                {/* Message */}
                <Col lg={12} className="mb-20">
                  <label className="form-label">Message for Hiring Team</label>
                  <textarea name="message" onChange={handleChange}></textarea>
                </Col>

                {/* Submit Button */}
                <Col lg={12}>
                  <Button className="vl-iner-btn" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Apply'} <FaArrowRight className="ml-2" />
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </div>

      
      {/* ✅ Toast Notifications */}
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
    </MainLayout>
  )
}

export default CareerPage
export { Head } from '@/components/PageMeta'