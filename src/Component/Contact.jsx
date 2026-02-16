import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', color: '#1877F2' },
    { name: 'Twitter', icon: '🐦', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: '💼', color: '#0077B5' },
    { name: 'Instagram', icon: '📷', color: '#E4405F' },
    { name: 'WhatsApp', icon: '💚', color: '#25D366' }
  ];

  return (
    <div className="ct-contact-wrapper">
      {/* Animated Background */}
      <div className="ct-bg-animated">
        <div className="ct-shape ct-shape-1"></div>
        <div className="ct-shape ct-shape-2"></div>
        <div className="ct-shape ct-shape-3"></div>
        <div className="ct-particle ct-particle-1"></div>
        <div className="ct-particle ct-particle-2"></div>
        <div className="ct-particle ct-particle-3"></div>
        <div className="ct-particle ct-particle-4"></div>
      </div>

      {/* Hero Section */}
      <section className="ct-hero-section">
        <div className="ct-container">
          <div className="ct-hero-content">
            <h1 className="ct-hero-title">
              <span className="ct-title-line">Contact Us</span>
            </h1>
            <p className="ct-hero-subtitle">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="ct-hero-illustration">
              <div className="ct-ill-circle ct-ill-circle-1"></div>
              <div className="ct-ill-circle ct-ill-circle-2"></div>
              <div className="ct-ill-circle ct-ill-circle-3"></div>
              <div className="ct-ill-icon">📞</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="ct-main-section" ref={sectionRef}>
        <div className="ct-container">
          <div className="ct-grid">
            {/* Contact Form */}
            <div className="ct-form-wrapper">
              <div className="ct-form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-group">
                  <div className="ct-input-wrapper">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="ct-input-field"
                      placeholder=" "
                    />
                    <label className="ct-input-label">Name</label>
                    <div className="ct-input-highlight"></div>
                  </div>
                </div>

                <div className="ct-form-group">
                  <div className="ct-input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="ct-input-field"
                      placeholder=" "
                    />
                    <label className="ct-input-label">Email</label>
                    <div className="ct-input-highlight"></div>
                  </div>
                </div>

                <div className="ct-form-group">
                  <div className="ct-input-wrapper">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="ct-input-field"
                      placeholder=" "
                    />
                    <label className="ct-input-label">Phone</label>
                    <div className="ct-input-highlight"></div>
                  </div>
                </div>

                <div className="ct-form-group">
                  <div className="ct-input-wrapper ct-textarea-wrapper">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="ct-input-field ct-textarea-field"
                      placeholder=" "
                    ></textarea>
                    <label className="ct-input-label">Message / Complaint</label>
                    <div className="ct-input-highlight"></div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`ct-submit-btn ${isSubmitting ? 'ct-submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="ct-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="ct-btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="ct-info-wrapper">
              <div className="ct-info-card">
                <div className="ct-card-glow"></div>
                
                {/* Address Section */}
                <div className="ct-info-section">
                  <div className="ct-info-icon">📍</div>
                  <div className="ct-info-content">
                    <h3>Our Address</h3>
                    <div className="ct-address-details">
                      <p><strong>CIN:</strong> U74999HR2022PTC100527</p>
                      <p>Chagans Technologies Ltd</p>
                      <p>SCO-4, Dayal Bagh Market,</p>
                      <p>Sector-39, Faridabad - 121009</p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="ct-info-section">
                  <div className="ct-info-icon">📞</div>
                  <div className="ct-info-content">
                    <h3>Call Us</h3>
                    <div className="ct-phone-numbers">
                      <a href="tel:01294020010" className="ct-phone-link">
                        <span className="ct-phone-icon">📱</span>
                        01294020010
                      </a>
                      <a href="tel:01244053323" className="ct-phone-link">
                        <span className="ct-phone-icon">📱</span>
                        0124-4053323
                      </a>
                      <a href="tel:01244996280" className="ct-phone-link">
                        <span className="ct-phone-icon">📱</span>
                        0124-4996280
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="ct-info-section">
                  <div className="ct-info-icon">✉️</div>
                  <div className="ct-info-content">
                    <h3>Email Us</h3>
                    <a href="mailto:info@chagans.com" className="ct-email-link">
                      info@chagans.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="ct-info-section">
                  <div className="ct-info-icon">🌐</div>
                  <div className="ct-info-content">
                    <h3>Connect with us</h3>
                    <div className="ct-social-links">
                      {socialLinks.map((social, index) => (
                        <a
                          key={social.name}
                          href="#"
                          className="ct-social-link"
                          style={{ '--ct-delay': index * 0.1 + 's' }}
                        >
                          <span className="ct-social-icon">{social.icon}</span>
                          <span className="ct-social-tooltip">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="ct-map-section">
        <div className="ct-container">
          <div className="ct-section-header">
            <h2>Find Us Here</h2>
            <p>Visit our office or get in touch with us</p>
          </div>
          <div className="ct-map-container">
            <div className="ct-interactive-map">
              <div className="ct-map-pin">
                <div className="ct-pin-main">📍</div>
                <div className="ct-pin-pulse"></div>
                <div className="ct-pin-pulse ct-pin-delay-1"></div>
                <div className="ct-pin-pulse ct-pin-delay-2"></div>
              </div>
              <div className="ct-map-overlay">
                <div className="ct-location-info">
                  <h4>Chagans Technologies Ltd</h4>
                  <p>SCO-4, Dayal Bagh Market, Sector-39</p>
                  <p>Faridabad - 121009</p>
                  <button className="ct-directions-btn">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Corporate Info */}
      <section className="ct-corporate-section">
        <div className="ct-container">
          <div className="ct-corporate-grid">
            <div className="ct-corporate-card">
              <h3>Corporate Address</h3>
              <div className="ct-corporate-details">
                <p><strong>CIN:</strong> U74999HR2022PTC100527</p>
                <p><strong>Company:</strong> Chagans Technologies Limited</p>
                <p>Sco-4 , First Floor</p>
                <p>Dayal Bagh Market, Sector-39</p>
                <p>Faridabad-121009, HR</p>
              </div>
            </div>

            <div className="ct-links-card">
              <h3>Useful Links</h3>
              <div className="ct-useful-links">
                <a href="#" className="ct-useful-link">About us</a>
                <a href="#" className="ct-useful-link">Contact Us</a>
                <a href="#" className="ct-useful-link">Login</a>
                <a href="#" className="ct-useful-link">Our Services</a>
                <a href="#" className="ct-useful-link">Terms & Conditions</a>
                <a href="#" className="ct-useful-link">Privacy policy</a>
                <a href="#" className="ct-useful-link">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ct-footer">
        <div className="ct-container">
          <div className="ct-footer-content">
            <p>© Copyright Chagans Technologies Ltd. All Rights Reserved</p>
            <p>Designed by Chagans Technologies Ltd</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="ct-floating-btn-wrapper">
        <button className="ct-floating-btn">
          <span className="ct-floating-icon">💬</span>
          <span className="ct-floating-text">Need Help?</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;