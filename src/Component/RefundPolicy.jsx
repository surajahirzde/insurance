import React from 'react';
import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="rp-wrapper">
      {/* Animated Background */}
      <div className="rp-bg-animated">
        <div className="rp-shape rp-shape-1"></div>
        <div className="rp-shape rp-shape-2"></div>
        <div className="rp-shape rp-shape-3"></div>
        <div className="rp-particle rp-particle-1"></div>
        <div className="rp-particle rp-particle-2"></div>
        <div className="rp-particle rp-particle-3"></div>
        <div className="rp-particle rp-particle-4"></div>
      </div>

      {/* Hero Section */}
      <section className="rp-hero-section">
        <div className="rp-container">
          <div className="rp-hero-content">
            <h1 className="rp-hero-title">
              <span className="rp-title-line">Refund Policy</span>
            </h1>
            <p className="rp-hero-subtitle">
              Understanding our refund process for insurance premium payments
            </p>
            <div className="rp-hero-illustration">
              <div className="rp-ill-circle rp-ill-circle-1"></div>
              <div className="rp-ill-circle rp-ill-circle-2"></div>
              <div className="rp-ill-circle rp-ill-circle-3"></div>
              <div className="rp-ill-icon">💰</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="rp-main-section">
        <div className="rp-container">
          <div className="rp-content-grid">
            {/* Last Updated */}
            <div className="rp-last-updated">
              <span className="rp-updated-badge">Last Updated: February 16, 2026</span>
            </div>

            {/* Introduction */}
            <div className="rp-content-card">
              <h2>1. Introduction</h2>
              <p>
                At Chagans Technologies Ltd, we strive to provide the best insurance premium payment services to our customers. This Refund Policy outlines the terms and conditions regarding refunds for insurance premium payments made through our platform. Please read this policy carefully before making any payments.
              </p>
            </div>

            {/* General Refund Policy */}
            <div className="rp-content-card">
              <h2>2. General Refund Policy</h2>
              <p>
                Insurance premiums are generally non-refundable as they are payments for coverage provided by insurance companies. However, there are certain circumstances where refunds may be applicable:
              </p>
              <ul className="rp-bullet-list">
                <li>Duplicate payment made for the same policy</li>
                <li>Payment made for the wrong insurance policy</li>
                <li>Technical errors resulting in excess payment</li>
                <li>Cancellation of policy within the free-look period (as per insurance company guidelines)</li>
                <li>Policy rejection by the insurance company</li>
              </ul>
            </div>

            {/* Refund Timeline */}
            <div className="rp-content-card">
              <h2>3. Refund Timeline</h2>
              <p>
                Once a refund request is approved, the timeline for refund processing depends on the payment method used:
              </p>
              <div className="rp-timeline-grid">
                <div className="rp-timeline-item">
                  <div className="rp-timeline-icon">💳</div>
                  <div className="rp-timeline-content">
                    <h4>Credit/Debit Card</h4>
                    <p>5-7 business days</p>
                  </div>
                </div>
                <div className="rp-timeline-item">
                  <div className="rp-timeline-icon">📱</div>
                  <div className="rp-timeline-content">
                    <h4>UPI Payments</h4>
                    <p>3-5 business days</p>
                  </div>
                </div>
                <div className="rp-timeline-item">
                  <div className="rp-timeline-icon">🏦</div>
                  <div className="rp-timeline-content">
                    <h4>Net Banking</h4>
                    <p>5-7 business days</p>
                  </div>
                </div>
                <div className="rp-timeline-item">
                  <div className="rp-timeline-icon">💰</div>
                  <div className="rp-timeline-content">
                    <h4>Wallet</h4>
                    <p>24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Refundable Cases */}
            <div className="rp-content-card">
              <h2>4. Non-Refundable Cases</h2>
              <p>
                The following cases are not eligible for refunds:
              </p>
              <ul className="rp-bullet-list">
                <li>Premium paid for active insurance policies</li>
                <li>Partial refund requests for ongoing policies</li>
                <li>Payments made due to customer negligence</li>
                <li>Refund requests made after 30 days of payment</li>
                <li>Policy cancellation after the free-look period</li>
                <li>Claims already filed under the policy</li>
              </ul>
            </div>

            {/* Refund Request Process */}
            <div className="rp-content-card">
              <h2>5. Refund Request Process</h2>
              <p>
                To request a refund, please follow these steps:
              </p>
              <div className="rp-process-steps">
                <div className="rp-step">
                  <div className="rp-step-number">1</div>
                  <div className="rp-step-content">
                    <h4>Contact Support</h4>
                    <p>Email us at support@chagans.com with your transaction details</p>
                  </div>
                </div>
                <div className="rp-step">
                  <div className="rp-step-number">2</div>
                  <div className="rp-step-content">
                    <h4>Provide Details</h4>
                    <p>Share transaction ID, policy number, and reason for refund</p>
                  </div>
                </div>
                <div className="rp-step">
                  <div className="rp-step-number">3</div>
                  <div className="rp-step-content">
                    <h4>Verification</h4>
                    <p>Our team will verify the request within 2-3 business days</p>
                  </div>
                </div>
                <div className="rp-step">
                  <div className="rp-step-number">4</div>
                  <div className="rp-step-content">
                    <h4>Refund Processing</h4>
                    <p>Approved refunds will be processed as per the timeline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="rp-content-card">
              <h2>6. Policy Cancellation & Refunds</h2>
              <p>
                Insurance policy cancellation and refunds are governed by the respective insurance company's guidelines:
              </p>
              <ul className="rp-bullet-list">
                <li><strong>Free-look Period:</strong> 15-30 days from policy issuance (varies by insurer)</li>
                <li><strong>Full Refund:</strong> Applicable during free-look period minus stamp duty and medical exam fees</li>
                <li><strong>Partial Refund:</strong> May apply for specific policy types after free-look period</li>
                <li><strong>No Refund:</strong> For policies where claims have been made</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="rp-content-card">
              <h2>7. Contact Us for Refunds</h2>
              <p>
                For any refund-related queries or to initiate a refund request, please contact us:
              </p>
              <div className="rp-contact-details">
                <div className="rp-contact-item">
                  <span className="rp-contact-icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:refunds@chagans.com"> refunds@chagans.com</a>
                  </div>
                </div>
                <div className="rp-contact-item">
                  <span className="rp-contact-icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:01294020010"> 0129-4020010</a> (Mon-Fri, 9 AM - 6 PM)
                  </div>
                </div>
                <div className="rp-contact-item">
                  <span className="rp-contact-icon">🏢</span>
                  <div>
                    <strong>Address:</strong>
                    <p>SCO-4, Dayal Bagh Market, Sector-39, Faridabad - 121009</p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </section>

   

    </div>
  );
};

export default RefundPolicy;