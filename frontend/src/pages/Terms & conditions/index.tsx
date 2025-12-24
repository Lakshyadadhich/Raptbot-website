import React from 'react'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import '@/assets/scss/component/_legal-pages.scss'

// Mock components to match your theme structure

const TermsConditionsPage = () => {
  return (
    <MainLayout>
      <PageTitle
        title="Terms & conditions"
        items={[
          { label: 'home', link: '/' },
          { label: 'Terms & conditions', link: '/terms-conditions' },
        ]}
      />

      <section className="vl-terms-section pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="vl-terms-content-box br-8 vl-gray-bg-4 p-4">
                {/* Header */}
                <div className="vl-section-title-wrapper mb-40">
                  <h2 className="vl-section-title vl-section-title-2 pb-16">Terms and conditions</h2>
                  <p className="vl-text-para vl-fs-16 vl-lineheight-26">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Acknowledgment Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Acknowledgment</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-20">
                      These Terms and Conditions ("Terms") outline the rules and regulations governing your use of the services, website, and digital
                      platforms provided by <strong>Raptbot Technologies Private Limited</strong> ("Company," "We," "Us," or "Our"). By accessing or
                      using Our services, you agree to be legally bound by these Terms.
                    </p>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-20">
                      If you do not agree with any part of these terms, you must discontinue using our services immediately.
                    </p>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-20">
                      By using our services, You confirm that you are at least 18 years old. The company does not knowingly allow individuals under 18
                      years of age to access or use its services.
                    </p>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      Your use of the Service is also governed by Our <strong>Privacy policy</strong>, which explains how We collect, use, and protect
                      Your personal data. Please review the privacy policy carefully before using our services.
                    </p>
                  </div>
                </div>

                {/* Use of Services Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Use of services</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">
                      1. You agree to use the service only for lawful purposes and in compliance with applicable laws and regulations.
                    </p>

                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">2. You must not:</p>
                    <ul className="vl-terms-list mb-16">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Attempt to gain unauthorized access to Our systems or networks.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">
                        Use the service in a way that could damage, disable, or impair its functionality.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">
                        Distribute malicious software, spam, or content that infringes on intellectual property rights.
                      </li>
                    </ul>
                    
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      3. The Company reserves the right to restrict, suspend, or terminate access if any misuse or unlawful activity is detected.
                    </p>
                  </div>
                </div>

                {/* Intellectual Property Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Intellectual property</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      All content, design, trademarks, software, and other intellectual property available on the Website or through the service are
                      owned by or licensed to the Company. You are not permitted to copy, distribute, modify, or reproduce such materials without
                      prior written consent from the Company.
                    </p>
                  </div>
                </div>

                {/* Third-Party Links Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Links to third-party websites</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      Our service may include links to external websites or resources not owned or operated by the company. We do not control and are
                      not responsible for the content, policies, or practices of third-party websites. Your interaction with such websites is at your
                      own risk.
                    </p>
                  </div>
                </div>

                {/* Termination Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Termination of service</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">
                      We may suspend or permanently terminate your access to the Service at any time, without prior notice, if You:
                    </p>
                    <ul className="vl-terms-list mb-16">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Violate these terms,</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Engage in fraudulent or unlawful behavior, or</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Cause harm to other users or to the company.</li>
                    </ul>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">Upon termination, Your right to use the service ceases immediately.</p>
                  </div>
                </div>

                {/* Limitation of Liability Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Limitation of liability</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">To the fullest extent permitted by law:</p>
                    <ul className="vl-terms-list mb-0">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        The company shall not be liable for indirect, incidental, or consequential damages, including but not limited to loss of
                        profits, data, or goodwill.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0 bulletsList">
                        The company's total liability, whether in contract, tort, or otherwise, will not exceed the greater of the amount You paid to
                        use the service or <strong>₹10,000 INR / $100 USD</strong> (whichever is applicable).
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Disclaimer Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Disclaimer of warranties</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">
                      The service is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis. We make no warranties,
                      expressed or implied, regarding:
                    </p>
                    <ul className="vl-terms-list mb-0">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">The availability, reliability, or accuracy of the service,</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Freedom from errors, viruses, or harmful components,</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0 bulletsList">Suitability of the service for your specific needs.</li>
                    </ul>
                  </div>
                </div>

                {/* Governing Law Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Governing law</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>, specifically the
                      jurisdiction of <strong>Jaipur, Rajasthan</strong>, without regard to its conflict of law principles.
                    </p>
                  </div>
                </div>

                {/* Dispute Resolution Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Dispute resolution</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      In case of any dispute, You agree to first attempt resolution by contacting Us directly. If an amicable resolution is not
                      achieved, disputes shall be subject to the exclusive jurisdiction of the courts in <strong>Jaipur, Rajasthan, India</strong>.
                    </p>
                  </div>
                </div>

                {/* Changes Section */}
                <div className="vl-terms-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">Changes to these terms</h3>
                  <div className="vl-terms-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      The company may update or modify these Terms at any time, with or without notice. Any updates will take effect immediately upon
                      posting on the Website. You are encouraged to review these Terms periodically to stay informed.
                    </p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="vl-privacy-section-item">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">10. Contact us</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">
                      If You have any questions about this privacy policy or how We handle Your data, please contact Us at:
                    </p>
                    <div className="vl-contact-info">
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 ">
                        📧 <strong>Email:</strong>{' '}
                        <a href="mailto:consulting@raptbot.com" className="text-decoration-none ">
                          consulting@raptbot.com
                        </a>
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        🌐 <strong>Website:</strong>{' '}
                        <a href="https://www.raptbot.com" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                          www.raptbot.com
                        </a>
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        📍 <strong>Address:</strong> C 22 Maha Laxmi Nagar, Malviya Nagar, D-Block Jaipur, Rajasthan 302017
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                        📞 <strong>Phone:</strong>{' '}
                        <a href="tel:+919001378790" className="text-decoration-none">
                          +91 9001378790
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>

     
  )
}

export default TermsConditionsPage



export { Head } from '@/components/PageMeta'
