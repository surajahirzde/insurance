import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Chagans Technologies Limited</h3>
              <p className="footer-tagline">Fintech solutions for the digital age</p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon"></span>
                <div>
                  <p>Plot No. SCO-4, Dayal Bagh Market,</p>
                  <p>Sector-39, Surajkund,</p>
                  <p>Faridabad - 121009 Haryana, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon"></span>
                <a href="tel:01294020010">01294020010</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon"></span>
                <a href="mailto:info@chagans.com">info@chagans.com</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon"></span>
                <span>GSTIN: 06AAGCC6826R2Z0</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/fastag">Fastag Payments</a></li>
              <li><a href="/tools">Tools</a></li>
            </ul>
            
            <h4 className="tools-subheading">Tools</h4>
            <ul className="footer-links">
              <li><a href="/geo-map">Geo Map Generator</a></li>
              <li><a href="/emi-calculator">Loan EMI Calculator</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/cookie-policy">Cookie Policy</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Chagans Technologies Limited. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;