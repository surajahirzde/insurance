import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="pp-wrapper">
      {/* Animated Background */}
      <div className="pp-bg-animated">
        <div className="pp-shape pp-shape-1"></div>
        <div className="pp-shape pp-shape-2"></div>
        <div className="pp-shape pp-shape-3"></div>
        <div className="pp-particle pp-particle-1"></div>
        <div className="pp-particle pp-particle-2"></div>
        <div className="pp-particle pp-particle-3"></div>
        <div className="pp-particle pp-particle-4"></div>
      </div>

      {/* Hero Section */}
      <section className="pp-hero-section">
        <div className="pp-container">
          <div className="pp-hero-content">
            <h1 className="pp-hero-title">
              <span className="pp-title-line">Privacy Policy</span>
            </h1>
            <p className="pp-hero-subtitle">
              How we protect and manage your personal information
            </p>
            <div className="pp-hero-illustration">
              <div className="pp-ill-circle pp-ill-circle-1"></div>
              <div className="pp-ill-circle pp-ill-circle-2"></div>
              <div className="pp-ill-circle pp-ill-circle-3"></div>
              <div className="pp-ill-icon">🔒</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pp-main-section">
        <div className="pp-container">
          <div className="pp-content-grid">
            {/* Last Updated */}
            <div className="pp-last-updated">
              <span className="pp-updated-badge">Last Updated: February 16, 2026</span>
            </div>

            {/* Introduction */}
            <div className="pp-content-card">
              <h2>1. Introduction</h2>
              <p>
                At Chagans Technologies Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our insurance premium payment platform.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="pp-content-card">
              <h2>2. Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>
              <div className="pp-info-grid">
                <div className="pp-info-item">
                  <h4>📋 Personal Information</h4>
                  <ul className="pp-bullet-list">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Date of birth</li>
                    <li>PAN card number</li>
                    <li>Aadhaar number (optional)</li>
                  </ul>
                </div>
                <div className="pp-info-item">
                  <h4>💳 Payment Information</h4>
                  <ul className="pp-bullet-list">
                    <li>Bank account details</li>
                    <li>Credit/Debit card information</li>
                    <li>UPI IDs</li>
                    <li>Transaction history</li>
                  </ul>
                </div>
                <div className="pp-info-item">
                  <h4>📱 Technical Information</h4>
                  <ul className="pp-bullet-list">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Cookies and usage data</li>
                  </ul>
                </div>
                <div className="pp-info-item">
                  <h4>📄 Policy Information</h4>
                  <ul className="pp-bullet-list">
                    <li>Insurance policy numbers</li>
                    <li>Premium payment history</li>
                    <li>Policy documents</li>
                    <li>Nominee details</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="pp-content-card">
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <div className="pp-usage-list">
                <div className="pp-usage-item">
                  <span className="pp-usage-badge">01</span>
                  <div className="pp-usage-content">
                    <h4>Processing Premium Payments</h4>
                    <p>To facilitate and process your insurance premium payments securely</p>
                  </div>
                </div>
                <div className="pp-usage-item">
                  <span className="pp-usage-badge">02</span>
                  <div className="pp-usage-content">
                    <h4>Customer Support</h4>
                    <p>To respond to your inquiries and provide assistance</p>
                  </div>
                </div>
                <div className="pp-usage-item">
                  <span className="pp-usage-badge">03</span>
                  <div className="pp-usage-content">
                    <h4>Policy Management</h4>
                    <p>To help you manage your insurance policies and renewals</p>
                  </div>
                </div>
                <div className="pp-usage-item">
                  <span className="pp-usage-badge">04</span>
                  <div className="pp-usage-content">
                    <h4>Fraud Prevention</h4>
                    <p>To detect and prevent fraudulent transactions</p>
                  </div>
                </div>
                <div className="pp-usage-item">
                  <span className="pp-usage-badge">05</span>
                  <div className="pp-usage-content">
                    <h4>Legal Compliance</h4>
                    <p>To comply with applicable laws and regulations</p>
                  </div>
                </div>
                <div className="pp-usage-item">
                  <span className="pp-usage-badge">06</span>
                  <div className="pp-usage-content">
                    <h4>Service Improvement</h4>
                    <p>To enhance our platform and user experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="pp-content-card">
              <h2>4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information:
              </p>
              <div className="pp-security-grid">
                <div className="pp-security-item">
                  <span className="pp-security-icon">🔐</span>
                  <h4>256-bit Encryption</h4>
                  <p>All data is encrypted using SSL/TLS protocols</p>
                </div>
                <div className="pp-security-item">
                  <span className="pp-security-icon">🛡️</span>
                  <h4>PCI DSS Compliant</h4>
                  <p>We follow strict payment security standards</p>
                </div>
                <div className="pp-security-item">
                  <span className="pp-security-icon">🔑</span>
                  <h4>Two-Factor Authentication</h4>
                  <p>Additional security for account access</p>
                </div>
                <div className="pp-security-item">
                  <span className="pp-security-icon">📊</span>
                  <h4>Regular Audits</h4>
                  <p>Periodic security assessments and audits</p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="pp-content-card">
              <h2>5. Information Sharing</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="pp-bullet-list">
                <li><strong>Insurance Companies:</strong> To process premium payments and policy services</li>
                <li><strong>Payment Gateways:</strong> For secure transaction processing</li>
                <li><strong>Regulatory Authorities:</strong> As required by law</li>
                <li><strong>Service Providers:</strong> For platform maintenance and support</li>
              </ul>
              <p className="pp-note">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Cookies Policy */}
            <div className="pp-content-card">
              <h2>6. Cookies Policy</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <div className="pp-cookies-table">
                <div className="pp-cookie-row pp-cookie-header">
                  <span>Cookie Type</span>
                  <span>Purpose</span>
                  <span>Duration</span>
                </div>
                <div className="pp-cookie-row">
                  <span>Essential Cookies</span>
                  <span>Required for basic functionality</span>
                  <span>Session</span>
                </div>
                <div className="pp-cookie-row">
                  <span>Preference Cookies</span>
                  <span>Remember your settings</span>
                  <span>1 year</span>
                </div>
                <div className="pp-cookie-row">
                  <span>Analytics Cookies</span>
                  <span>Understand user behavior</span>
                  <span>2 years</span>
                </div>
                <div className="pp-cookie-row">
                  <span>Marketing Cookies</span>
                  <span>Personalized content</span>
                  <span>90 days</span>
                </div>
              </div>
              <p className="pp-cookie-note">
                You can control cookie preferences through your browser settings.
              </p>
            </div>

            {/* Your Rights */}
            <div className="pp-content-card">
              <h2>7. Your Rights</h2>
              <p>
                You have the following rights regarding your personal information:
              </p>
              <div className="pp-rights-grid">
                <div className="pp-right-item">
                  <span className="pp-right-icon">👁️</span>
                  <h4>Right to Access</h4>
                  <p>Request a copy of your data</p>
                </div>
                <div className="pp-right-item">
                  <span className="pp-right-icon">✏️</span>
                  <h4>Right to Rectify</h4>
                  <p>Correct inaccurate information</p>
                </div>
                <div className="pp-right-item">
                  <span className="pp-right-icon">🗑️</span>
                  <h4>Right to Delete</h4>
                  <p>Request data deletion</p>
                </div>
                <div className="pp-right-item">
                  <span className="pp-right-icon">⏸️</span>
                  <h4>Right to Restrict</h4>
                  <p>Limit data processing</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pp-content-card">
              <h2>8. Contact Us</h2>
              <p>
                For privacy-related concerns or questions, please contact our Data Protection Officer:
              </p>
              <div className="pp-contact-details">
                <div className="pp-contact-item">
                  <span className="pp-contact-icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:privacy@chagans.com"> privacy@chagans.com</a>
                  </div>
                </div>
                <div className="pp-contact-item">
                  <span className="pp-contact-icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:01294020010"> 0129-4020010</a> (Privacy Team)
                  </div>
                </div>
                <div className="pp-contact-item">
                  <span className="pp-contact-icon">🏢</span>
                  <div>
                    <strong>Address:</strong>
                    <p>SCO-4, Dayal Bagh Market, Sector-39, Faridabad - 121009</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="pp-content-card rp-note-card">
              <h3>📢 Policy Updates</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>



 
    </div>
  );
};

export default PrivacyPolicy;