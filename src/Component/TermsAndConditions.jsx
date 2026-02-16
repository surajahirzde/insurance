import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="tc-wrapper">
      {/* Animated Background */}
      <div className="tc-bg-animated">
        <div className="tc-shape tc-shape-1"></div>
        <div className="tc-shape tc-shape-2"></div>
        <div className="tc-shape tc-shape-3"></div>
        <div className="tc-particle tc-particle-1"></div>
        <div className="tc-particle tc-particle-2"></div>
        <div className="tc-particle tc-particle-3"></div>
        <div className="tc-particle tc-particle-4"></div>
      </div>

      {/* Hero Section */}
      <section className="tc-hero-section">
        <div className="tc-container">
          <div className="tc-hero-content">
            <h1 className="tc-hero-title">
              <span className="tc-title-line">Terms & Conditions</span>
            </h1>
            <p className="tc-hero-subtitle">
              Please read these terms carefully before using our services
            </p>
            <div className="tc-hero-illustration">
              <div className="tc-ill-circle tc-ill-circle-1"></div>
              <div className="tc-ill-circle tc-ill-circle-2"></div>
              <div className="tc-ill-circle tc-ill-circle-3"></div>
              <div className="tc-ill-icon">📜</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="tc-main-section">
        <div className="tc-container">
          <div className="tc-content-grid">
            {/* Last Updated */}
            <div className="tc-last-updated">
              <span className="tc-updated-badge">Last Updated: February 16, 2026</span>
            </div>

            {/* Introduction */}
            <div className="tc-content-card">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Chagans Technologies Ltd platform for insurance premium payments, you agree to be bound by these Terms and Conditions. If you do not agree to all terms and conditions, please do not use our services.
              </p>
            </div>

            {/* Definitions */}
            <div className="tc-content-card">
              <h2>2. Definitions</h2>
              <div className="tc-definition-grid">
                <div className="tc-definition-item">
                  <span className="tc-def-term">"Platform"</span>
                  <span className="tc-def-sep">→</span>
                  <span className="tc-def-desc">The Chagans Technologies Ltd website and mobile application</span>
                </div>
                <div className="tc-definition-item">
                  <span className="tc-def-term">"Services"</span>
                  <span className="tc-def-sep">→</span>
                  <span className="tc-def-desc">Insurance premium payment processing and related services</span>
                </div>
                <div className="tc-definition-item">
                  <span className="tc-def-term">"User/You"</span>
                  <span className="tc-def-sep">→</span>
                  <span className="tc-def-desc">Any individual or entity using our platform</span>
                </div>
                <div className="tc-definition-item">
                  <span className="tc-def-term">"Insurance Provider"</span>
                  <span className="tc-def-sep">→</span>
                  <span className="tc-def-desc">The insurance company issuing the policy</span>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="tc-content-card">
              <h2>3. Eligibility</h2>
              <p>
                To use our services, you must:
              </p>
              <ul className="tc-bullet-list">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information</li>
                <li>Not be located in a jurisdiction where our services are prohibited</li>
                <li>Be the policyholder or an authorized representative</li>
              </ul>
            </div>

            {/* Account Registration */}
            <div className="tc-content-card">
              <h2>4. Account Registration</h2>
              <p>
                To access certain features, you may need to register for an account:
              </p>
              <ul className="tc-bullet-list">
                <li>You are responsible for maintaining account confidentiality</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>We reserve the right to suspend or terminate accounts for violations</li>
                <li>Each user may maintain only one account</li>
                <li>Account sharing is strictly prohibited</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="tc-content-card">
              <h2>5. Payment Terms</h2>
              <div className="tc-payment-terms">
                <div className="tc-term-item">
                  <h4>5.1 Payment Processing</h4>
                  <p>All premium payments are processed through secure payment gateways. We do not store your complete payment information.</p>
                </div>
                <div className="tc-term-item">
                  <h4>5.2 Transaction Fees</h4>
                  <p>We may charge a nominal convenience fee for payment processing, which will be disclosed before transaction completion.</p>
                </div>
                <div className="tc-term-item">
                  <h4>5.3 Payment Authorization</h4>
                  <p>By making a payment, you authorize us to charge your selected payment method for the premium amount plus applicable fees.</p>
                </div>
                <div className="tc-term-item">
                  <h4>5.4 Failed Transactions</h4>
                  <p>We are not responsible for failed transactions due to technical issues, insufficient funds, or bank processing delays.</p>
                </div>
              </div>
            </div>

            {/* Insurance Premium Payments */}
            <div className="tc-content-card">
              <h2>6. Insurance Premium Payments</h2>
              <ul className="tc-bullet-list">
                <li>We act as an intermediary between you and insurance providers</li>
                <li>Payment confirmation is subject to verification by the insurance company</li>
                <li>Premium amounts are determined by the insurance provider</li>
                <li>We are not responsible for policy terms, coverage, or claims</li>
                <li>Auto-pay features require explicit user consent</li>
                <li>Payment receipts will be generated upon successful transaction</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="tc-content-card">
              <h2>7. User Responsibilities</h2>
              <p>
                As a user of our platform, you agree to:
              </p>
              <div className="tc-responsibility-grid">
                <div className="tc-responsibility-item">
                  <span className="tc-res-icon">✓</span>
                  <span>Provide accurate information</span>
                </div>
                <div className="tc-responsibility-item">
                  <span className="tc-res-icon">✓</span>
                  <span>Maintain account security</span>
                </div>
                <div className="tc-responsibility-item">
                  <span className="tc-res-icon">✓</span>
                  <span>Comply with applicable laws</span>
                </div>
                <div className="tc-responsibility-item">
                  <span className="tc-res-icon">✓</span>
                  <span>Not misuse the platform</span>
                </div>
                <div className="tc-responsibility-item">
                  <span className="tc-res-icon">✓</span>
                  <span>Report unauthorized access</span>
                </div>
                <div className="tc-responsibility-item">
                  <span className="tc-res-icon">✓</span>
                  <span>Keep records of transactions</span>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="tc-content-card">
              <h2>8. Intellectual Property</h2>
              <p>
                All content on our platform, including but not limited to logos, text, graphics, software, and designs, is the property of Chagans Technologies Ltd and is protected by intellectual property laws. You may not:
              </p>
              <ul className="tc-bullet-list">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks without written consent</li>
                <li>Reverse engineer any part of our platform</li>
                <li>Remove copyright or proprietary notices</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className="tc-content-card">
              <h2>9. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites (insurance companies, payment gateways, etc.). We are not responsible for:
              </p>
              <ul className="tc-bullet-list">
                <li>The content or practices of these websites</li>
                <li>Any damages or losses from using third-party services</li>
                <li>The accuracy of information on external sites</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="tc-content-card">
              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Chagans Technologies Ltd shall not be liable for:
              </p>
              <ul className="tc-bullet-list">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or technical issues</li>
                <li>Actions of insurance providers or third parties</li>
                <li>Unauthorized access to your account</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="tc-content-card">
              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Chagans Technologies Ltd, its officers, employees, and agents from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="tc-bullet-list">
                <li>Your use of our services</li>
                <li>Violation of these terms</li>
                <li>Violation of any third-party rights</li>
                <li>Your provided information</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="tc-content-card">
              <h2>12. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for:
              </p>
              <ul className="tc-bullet-list">
                <li>Violation of these terms</li>
                <li>Fraudulent or illegal activities</li>
                <li>Non-payment of fees</li>
                <li>Extended periods of inactivity</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="tc-content-card">
              <h2>13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="tc-content-card">
              <h2>14. Dispute Resolution</h2>
              <p>
                Any dispute, controversy, or claim arising out of or relating to these terms shall be resolved through:
              </p>
              <div className="tc-dispute-steps">
                <div className="tc-dispute-step">
                  <div className="tc-step-number">1</div>
                  <div className="tc-step-desc">Informal negotiation within 30 days</div>
                </div>
                <div className="tc-dispute-step">
                  <div className="tc-step-number">2</div>
                  <div className="tc-step-desc">Mediation if negotiation fails</div>
                </div>
                <div className="tc-dispute-step">
                  <div className="tc-step-number">3</div>
                  <div className="tc-step-desc">Arbitration as final recourse</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="tc-content-card">
              <h2>15. Contact Us</h2>
              <p>
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="tc-contact-details">
                <div className="tc-contact-item">
                  <span className="tc-contact-icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:legal@chagans.com"> legal@chagans.com</a>
                  </div>
                </div>
                <div className="tc-contact-item">
                  <span className="tc-contact-icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:01294020010"> 0129-4020010</a> (Legal Department)
                  </div>
                </div>
                <div className="tc-contact-item">
                  <span className="tc-contact-icon">🏢</span>
                  <div>
                    <strong>Address:</strong>
                    <p>SCO-4, Dayal Bagh Market, Sector-39, Faridabad - 121009</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="tc-content-card rp-note-card">
              <h3>📋 Acknowledgment</h3>
              <p>
                By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. These terms constitute the entire agreement between you and Chagans Technologies Ltd regarding the use of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

   

   
    </div>
  );
};

export default TermsAndConditions;