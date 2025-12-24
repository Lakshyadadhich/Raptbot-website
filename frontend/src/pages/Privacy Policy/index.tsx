import React from 'react'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import '@/assets/scss/component/_legal-pages.scss'

// Mock components to match your theme structure

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <PageTitle
        title="Privacy policy"
        items={[
          { label: 'home', link: '/' },
          { label: 'privacy policy', link: '/privacy-policy' },
        ]}
      />

      <section className="vl-privacy-section pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="vl-privacy-content-box br-8 vl-gray-bg-4 p-4">
                {/* Header */}
                <div className="vl-section-title-wrapper mb-40">
                  <h2 className="vl-section-title vl-section-title-2 pb-16">Privacy policy</h2>
                  <p className="vl-text-para vl-fs-16 vl-lineheight-26">
                    <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                  </p>
                </div>

                {/* Introduction */}
                <div className="vl-privacy-section-item mb-30">
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-20">
                      <strong>Raptbot Technologies Private Limited</strong> ("Company," "We," "Us," or "Our") is committed to protecting your privacy
                      and ensuring that your personal data is handled responsibly. This privacy policy describes how we collect, use, disclose, and
                      safeguard your information when you visit Our Website (www.raptbot.com) or use our services.
                    </p>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      By accessing or using Our website and services, You agree to the terms of this privacy policy.
                    </p>
                  </div>
                </div>

                {/* Interpretation and Definitions */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">1. Interpretation and definitions</h3>
                  <div className="vl-privacy-content">
                    <h4 className="vl-fs-20 vl-text-cmn-blck pb-12 mb-16">Interpretation</h4>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-20">
                      Words with initial capital letters are defined under the following conditions. These definitions apply equally to singular and
                      plural forms.
                    </p>

                    <h4 className="vl-fs-20 vl-text-cmn-blck pb-12 mb-16">Definitions</h4>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">For the purposes of this privacy policy:</p>
                    <div className="vl-definitions-list">
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Account</strong> means a unique account created for you to access our service or parts of it.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Affiliate</strong> refers to any entity controlled by, controlling, or under common control with the company.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Company</strong> refers to Raptbot Technologies Private Limited, registered at C 22 Maha Laxmi Nagar, Malviya Nagar,
                        D-Block Jaipur, Rajasthan 302017.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Cookies</strong> are small files placed on Your Device to store browsing details, preferences, or session data.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Country</strong> refers to India.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Device</strong> means any device capable of accessing the Service, such as a computer, smartphone, or tablet.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Personal data</strong> refers to any information that can directly or indirectly identify an individual.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Service</strong> means the Website and IT services operated by Raptbot Technologies Private Limited
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Service provider</strong> means any third party who processes data on behalf of the Company, such as hosting or
                        analytics providers.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Usage data</strong> refers to automatically collected data generated by the service, such as pages visited, duration,
                        and technical identifiers.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        <strong>Website</strong> refers to www.raptbot.com.
                      </p>
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                        <strong>You</strong> refers to the individual using Our Service, or the company/legal entity represented by such individual.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information We Collect */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">2. Information we collect</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-20">
                      We may collect different types of information to provide and improve our service:
                    </p>

                    <h4 className="vl-fs-20 vl-text-cmn-blck pb-12 mb-16">Personal data</h4>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">
                      When interacting with our service, You may provide Us with personally identifiable information, including:
                    </p>
                    <ul className="vl-privacy-list mb-20">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Name </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Email address</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Phone number</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Company name and role</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Billing and payment details (if applicable)</li>
                    </ul>

                    <h4 className="vl-fs-20 vl-text-cmn-blck pb-12 mb-16">Usage data</h4>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">
                      Collected automatically when you use the website. This may include:
                    </p>
                    <ul className="vl-privacy-list mb-20">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">IP address of your device</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Browser type and version</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Operating system and device type</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Pages visited, time spent, navigation patterns</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Unique identifiers and diagnostic information</li>
                    </ul>

                    <h4 className="vl-fs-20 vl-text-cmn-blck pb-12 mb-16">Tracking technologies & cookies</h4>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">We use cookies, beacons, tags, and scripts to:</p>
                    <ul className="vl-privacy-list mb-16">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Improve user experience</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Store preferences</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Monitor analytics and performance</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Deliver relevant content and marketing</li>
                    </ul>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      You may disable cookies via your browser settings, but certain features may not work properly.
                    </p>
                  </div>
                </div>

                {/* How We Use Your Data */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">3. How we use your data</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">The company may use personal data for the following purposes:</p>
                    <ul className="vl-privacy-list mb-0">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        To deliver and maintain the Service (including monitoring site performance).
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">To manage accounts and access for registered users.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        To communicate with you about updates, security alerts, or service-related information.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">To provide customer support and resolve issues.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        To improve and personalize services, based on user behavior and feedback.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        For marketing and promotions, including sending you offers about new features, services, or events (with the option to
                        opt-out).
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        For analytics to understand usage trends and optimize performance.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12 bulletsList">
                        For legal compliance, including obligations under applicable laws and regulations.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0 bulletsList">
                        For business transfers, such as mergers, acquisitions, or restructuring.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sharing of Information */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">4. Sharing of information</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">We may share your information:</p>
                    <ul className="vl-privacy-list mb-16">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">
                        With service providers assisting in operations, analytics, hosting, or communications.
                      </li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">With business partners for joint services or promotions.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">In case of business transactions like mergers or acquisitions.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">
                        To comply with legal obligations or protect Our rights, safety, or property.
                      </li>
                    </ul>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      <strong>We do not sell personal data to third parties.</strong>
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">5. Data retention</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      We retain Personal Data only as long as necessary for the purposes described in this Policy, or as required by law. Once data is
                      no longer needed, it will be securely deleted or anonymized.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">6. Data security</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      We implement technical, organizational, and administrative measures to safeguard your data from unauthorized access, disclosure,
                      or misuse. However, no method of transmission over the internet or storage system is 100% secure.
                    </p>
                  </div>
                </div>

                {/* Your Privacy Rights */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">7. Your privacy rights</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-16">Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="vl-privacy-list mb-16">
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Access, correct, or delete your personal information.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Object to or restrict processing of your data.</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Withdraw consent at any time (for marketing communications).</li>
                      <li className="vl-text-para vl-fs-16 vl-lineheight-26 mb-8 bulletsList">Request data portability.</li>
                    </ul>
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">You may exercise these rights by contacting Us (see Section 10).</p>
                  </div>
                </div>

                {/* Third-Party Links */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">8. Third-party links</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      Our website may contain links to third-party websites. We are not responsible for their content, policies, or practices. Please
                      review their privacy policies separately.
                    </p>
                  </div>
                </div>

                {/* Changes to Privacy Policy */}
                <div className="vl-privacy-section-item mb-30">
                  <h3 className="vl-fs-24 vl-lineheight-24 vl-text-cmn-blck pb-20 m-0">9. Changes to this privacy policy</h3>
                  <div className="vl-privacy-content">
                    <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-0">
                      We may update this privacy policy from time to time to reflect changes in technology, law, or business operations. Updates will
                      be posted on this page with a revised "Effective Date."
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
                      <p className="vl-text-para vl-fs-16 vl-lineheight-26 mb-12">
                        📧 <strong>Email:</strong>{' '}
                        <a href="mailto:consulting@raptbot.com" className="text-decoration-none">
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

export default PrivacyPolicyPage

// Add custom styles to match your theme