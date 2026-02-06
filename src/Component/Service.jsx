import React, { useState } from 'react';
import './Service.css';

const Service = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Card Payments",
      subtitle: "Pay Your Insurance Premium with Card",
      description: "Secure and convenient card payments for all your insurance premiums. We support all major credit and debit cards with bank-level security.",
      icon: "💳",
      features: ["Visa/Mastercard Support", "Instant Processing", "3D Secure", "Payment History"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "UPI Payments",
      subtitle: "Pay Your Insurance Premium with UPI",
      description: "Quick and easy UPI payments through your favorite apps. Scan QR codes or use UPI ID for seamless transactions.",
      icon: "📱",
      features: ["All UPI Apps Supported", "QR Code Payments", "Instant Verification", "24/7 Availability"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Net Banking",
      subtitle: "Direct Bank Transfer",
      description: "Connect directly with your bank for secure premium payments. Trusted by major banks across India.",
      icon: "🏦",
      features: ["50+ Banks Supported", "Secure Gateway", "Real-time Processing", "e-Mandate Support"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Wallet Payments",
      subtitle: "Use Digital Wallets",
      description: "Pay using popular digital wallets for quick and hassle-free insurance premium payments.",
      icon: "👛",
      features: ["PayTM, PhonePe & More", "One-tap Payments", "Cashback Offers", "Wallet Balance"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  return (
    <div className="services-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span> / <span>Services</span>
      </div>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Click and Pay</span>
              <span className="title-sub">Your Insurance Premium</span>
            </h1>
            <p className="hero-description">
              Multiple secure payment options to make your insurance premium payments 
              quick, easy, and completely hassle-free.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Payment Services</h2>
            <p>Choose from multiple secure payment methods</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${activeCard === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ '--delay': index * 0.1 + 's' }}
              >
                <div 
                  className="card-header"
                  style={{ background: service.gradient }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
                
                <div className="card-body">
                  <p className="service-description">{service.description}</p>
                  
                  <div className="features-list">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="pay-now-btn">
                    Pay Now
                    <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="security-section">
        <div className="container">
          <div className="security-content">
            <div className="security-text">
              <h2>Bank-Level Security</h2>
              <p>Your payments are protected with enterprise-grade security measures</p>
              
              <div className="security-features">
                <div className="security-item">
                  <div className="security-icon">🔒</div>
                  <div>
                    <h4>256-bit Encryption</h4>
                    <p>Military-grade encryption for all transactions</p>
                  </div>
                </div>
                
                <div className="security-item">
                  <div className="security-icon">🛡️</div>
                  <div>
                    <h4>PCI DSS Compliant</h4>
                    <p>Fully compliant with payment security standards</p>
                  </div>
                </div>
                
                <div className="security-item">
                  <div className="security-icon">📊</div>
                  <div>
                    <h4>Fraud Detection</h4>
                    <p>Advanced AI-powered fraud prevention</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="security-visual">
              <div className="shield-animation">
                <div className="shield">🛡️</div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay-1"></div>
                <div className="pulse-ring delay-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Address */}
      <section className="corporate-address">
        <div className="container">
          <h2>Corporate Address</h2>
          <div className="address-card">
            <div className="address-details">
              <p><strong>CIN:</strong> U74999HR2022PTC100527</p>
              <p><strong>Company:</strong> Chagans Technologies Limited</p>
              <p>Unit#250-251, FIRST FLOOR</p>
              <p>TOWER-B, ANSAL CORPORATE PLAZA</p>
              <p>BLOCK -C2, PALAM VIHAR, GURUGRAM</p>
              <p>HARYANA - 122017</p>
            </div>
            <div className="map-visual">
              <div className="location-pin">
                📍
              </div>
              <div className="pulse-effect"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;