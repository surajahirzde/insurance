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
    <div className="contact-premium">
      {/* Animated Background */}
      <div className="animated-background-contact">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-particle part-1"></div>
        <div className="floating-particle part-2"></div>
        <div className="floating-particle part-3"></div>
        <div className="floating-particle part-4"></div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-contact">
        <div className="container">
          <div className="breadcrumb-nav">
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content-contact">
            <h1 className="hero-title-contact">
              <span className="title-line">Contact Us</span>
            </h1>
            <p className="hero-subtitle-contact">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="hero-illustration">
              <div className="illustration-circle circle-1"></div>
              <div className="illustration-circle circle-2"></div>
              <div className="illustration-circle circle-3"></div>
              <div className="contact-icon">📞</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section" ref={sectionRef}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                    <label className="form-label">Name</label>
                    <div className="input-highlight"></div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                    <label className="form-label">Email</label>
                    <div className="input-highlight"></div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                    <label className="form-label">Phone</label>
                    <div className="input-highlight"></div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper textarea-wrapper">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="form-input textarea-input"
                    ></textarea>
                    <label className="form-label">Message / Complaint</label>
                    <div className="input-highlight"></div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="submit-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <div className="info-card">
                <div className="card-glow"></div>
                
                {/* Address Section */}
                <div className="info-section">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Our Address</h3>
                    <div className="address-details">
                      <p><strong>CIN:</strong> U74999HR2022PTC100527</p>
                      <p>Chagans Technologies Ltd</p>
                      <p>SCO-4, Dayal Bagh Market,</p>
                      <p>Sector-39, Faridabad - 121009</p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="info-section">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Call Us</h3>
                    <div className="phone-numbers">
                      <a href="tel:01294020010" className="phone-link">
                        <span className="phone-icon">📱</span>
                        01294020010
                      </a>
                      <a href="tel:01244053323" className="phone-link">
                        <span className="phone-icon">📱</span>
                        0124-4053323
                      </a>
                      <a href="tel:01244996280" className="phone-link">
                        <span className="phone-icon">📱</span>
                        0124-4996280
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="info-section">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <a href="mailto:info@chagans.com" className="email-link">
                      info@chagans.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="info-section">
                  <div className="info-icon">🌐</div>
                  <div className="info-content">
                    <h3>Connect with us</h3>
                    <div className="social-links">
                      {socialLinks.map((social, index) => (
                        <a
                          key={social.name}
                          href="#"
                          className="social-link"
                          style={{ '--delay': index * 0.1 + 's' }}
                        >
                          <span className="social-icon">{social.icon}</span>
                          <span className="social-tooltip">{social.name}</span>
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
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Us Here</h2>
            <p>Visit our office or get in touch with us</p>
          </div>
          <div className="map-container">
            <div className="interactive-map">
              <div className="map-pin">
                <div className="pin-main">📍</div>
                <div className="pin-pulse"></div>
                <div className="pin-pulse delay-1"></div>
                <div className="pin-pulse delay-2"></div>
              </div>
              <div className="map-overlay">
                <div className="location-info">
                  <h4>Chagans Technologies Ltd</h4>
                  <p>SCO-4, Dayal Bagh Market, Sector-39</p>
                  <p>Faridabad - 121009</p>
                  <button className="directions-btn">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Corporate Info */}
      <section className="corporate-info-section">
        <div className="container">
          <div className="corporate-grid">
            <div className="corporate-card">
              <h3>Corporate Address</h3>
              <div className="corporate-details">
                <p><strong>CIN:</strong> U74999HR2022PTC100527</p>
                <p><strong>Company:</strong> Chagans Technologies Limited</p>
                <p>Unit#250-251, FIRST FLOOR</p>
                <p>TOWER-B, ANSAL CORPORATE PLAZA</p>
                <p>BLOCK -C2, PALAM VIHAR, GURUGRAM</p>
                <p>HARYANA - 122017</p>
              </div>
            </div>

            <div className="links-card">
              <h3>Useful Links</h3>
              <div className="useful-links">
                <a href="#" className="useful-link">About us</a>
                <a href="#" className="useful-link">Contact Us</a>
                <a href="#" className="useful-link">Login</a>
                <a href="#" className="useful-link">Our Services</a>
                <a href="#" className="useful-link">Terms & Conditions</a>
                <a href="#" className="useful-link">Privacy policy</a>
                <a href="#" className="useful-link">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="container">
          <div className="footer-content">
            <p>© Copyright Chagans Technologies Ltd. All Rights Reserved</p>
            <p>Designed by Chagans Technologies Ltd</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="floating-contact">
        <button className="floating-btn">
          <span className="btn-icon">💬</span>
          <span className="btn-text">Need Help?</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;