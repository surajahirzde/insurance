import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    transactions: 0,
    support: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = { customers: 50000, transactions: 100000, support: 100 };
    const duration = 2000;
    const steps = 60;
    const stepValues = {
      customers: targets.customers / steps,
      transactions: targets.transactions / steps,
      support: targets.support / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedStats({
        customers: Math.min(Math.floor(stepValues.customers * currentStep), targets.customers),
        transactions: Math.min(Math.floor(stepValues.transactions * currentStep), targets.transactions),
        support: Math.min(Math.floor(stepValues.support * currentStep), targets.support)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  return (
    <div className="about-enhanced-container">
      {/* Animated Background Elements */}
      <div className="background-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-square square-1"></div>
        <div className="floating-square square-2"></div>
      </div>

   

      {/* Hero Section */}
      <section className="about-hero-enhanced">
        <div className="container">
          <div className="hero-content-enhanced">
            <div className="hero-text">
              <h1 className="hero-title-enhanced">
                <span className="title-line-1">About</span>
                <span className="title-line-2">Chagans Technologies</span>
                <span className="title-line-3">Limited</span>
              </h1>
              <p className="hero-subtitle-enhanced">
                Pioneering the Future of Insurance Premium Payments in India
              </p>
              <div className="hero-cta">
                <button className="cta-btn primary">
                  Get Started
                  <span className="btn-arrow">→</span>
                </button>
                <button className="cta-btn secondary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="card-icon">💳</div>
                <span>Card Payments</span>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">📱</div>
                <span>UPI Payments</span>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🛡️</div>
                <span>Secure</span>
              </div>
              <div className="main-visual">
                <div className="visual-glow"></div>
                <div className="company-logo">CTL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={sectionRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-target="50000">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="stat-label">Happy Customers</div>
              <div className="stat-bar">
                <div className="stat-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="100000">
                {animatedStats.transactions.toLocaleString()}+
              </div>
              <div className="stat-label">Successful Transactions</div>
              <div className="stat-bar">
                <div className="stat-progress" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="100">
                {animatedStats.support}%
              </div>
              <div className="stat-label">Support Satisfaction</div>
              <div className="stat-bar">
                <div className="stat-progress" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with 24/7 Support */}
      <section className="support-section">
        <div className="container">
          <div className="support-highlight-enhanced">
            <div className="support-badge">
              <div className="badge-icon">🌙</div>
              <span>24/7 Support</span>
            </div>
            <h2 className="support-title">Always Here When You Need Us</h2>
            <p className="support-description">
              Our Support Team is a specialized group of individuals who are dedicated 
              to providing round-the-clock help and support for all your insurance 
              premium payment needs.
            </p>
          </div>

          <div className="content-grid-enhanced">
            <div className="text-content-enhanced">
              <div className="company-intro">
                <h3>Who We Are</h3>
                <p>
                  Chagans Technologies Limited is registered at Ministry of Company Affairs, 
                  and established in year 2022 with the main objective of boosting online 
                  Insurance Premium Payments & Transactions, to provide easy way to complete 
                  all sorts of Insurance Premium payment services over its simple and easy 
                  to use online platform.
                </p>
                
                <p>
                  Chagans Technologies works on deep insights and understanding of Insurance 
                  Premium transaction technology space. We operate on a B2C model, where we 
                  enable each registered User to transact on our interface with 24*7 assisted 
                  financial and digital commerce services. Our innovative solutions are 
                  modelled to make transactions seamless and quick to pay with just few clicks.
                </p>
              </div>
            </div>
            
            <div className="image-content-enhanced">
              <div className="floating-image-container">
                <div className="image-placeholder-enhanced">
                  <div className="image-glow"></div>
                  <div className="placeholder-content">
                    <div className="tech-icon">⚡</div>
                    <span>Innovative Technology</span>
                  </div>
                </div>
                <div className="floating-dots">
                  <div className="dot dot-1"></div>
                  <div className="dot dot-2"></div>
                  <div className="dot dot-3"></div>
                  <div className="dot dot-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Enhanced */}
      <section className="mission-vision-enhanced">
        <div className="container">
          <div className="mv-grid-enhanced">
            <div className="mission-card-enhanced">
              <div className="card-glow-effect"></div>
              <div className="card-header-mv">
                <div className="mv-icon mission-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Our Mission</h3>
              </div>
              <div className="card-body-mv">
                <p>
                  Chagans Technologies aims to provide a convenient and hassle-free way to pay 
                  monthly and quarterly insurance premiums, ensuring timely and secure transactions 
                  for life, health, vehicle, and property insurance policies.
                </p>
                <div className="mission-features">
                  <span className="feature-tag">Convenient</span>
                  <span className="feature-tag">Secure</span>
                  <span className="feature-tag">Timely</span>
                </div>
              </div>
            </div>
            
            <div className="vision-card-enhanced">
              <div className="card-glow-effect"></div>
              <div className="card-header-mv">
                <div className="mv-icon vision-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Our Vision</h3>
              </div>
              <div className="card-body-mv">
                <p>
                  Chagans Technologies is the ultimate platform for all consumers who want to 
                  pay their insurance premium via online payment services. We assure our clients 
                  and customers safe, secure and convenient mode of transactions.
                </p>
                <div className="vision-features">
                  <span className="feature-tag">Ultimate Platform</span>
                  <span className="feature-tag">Safe & Secure</span>
                  <span className="feature-tag">Customer First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Address Enhanced */}
      <section className="corporate-address-enhanced">
        <div className="container">
          <div className="address-header">
            <h2>Corporate Address</h2>
            <p>Visit us or get in touch</p>
          </div>
          <div className="address-card-enhanced">
            <div className="address-details-enhanced">
              <div className="address-info">
                <div className="info-item">
                  <strong>CIN:</strong> U74999HR2022PTC100527
                </div>
                <div className="info-item">
                  <strong>Company:</strong> Chagans Technologies Limited
                </div>
                <div className="info-item">
                Sc0-4 , FIrst Floor 
                </div>
                <div className="info-item">
                  Dayal Bagh Market, Sector-39
                </div>
                <div className="info-item">
                  Faridabad-121009 , HR
                </div>
               
              </div>
              <div className="contact-actions">
                <button className="contact-btn">
                  <span className="btn-icon">📍</span>
                  Get Directions
                </button>
                <button className="contact-btn outline">
                  <span className="btn-icon">📞</span>
                  Call Us
                </button>
              </div>
            </div>
            <div className="map-visual-enhanced">
              <div className="interactive-map">
                <div className="map-pin">
                  <div className="pin-icon">📌</div>
                  <div className="pin-pulse"></div>
                  <div className="pin-pulse delay-1"></div>
                  <div className="pin-pulse delay-2"></div>
                </div>
                <div className="map-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="floating-action">
        <button className="fab">
          <span>↑</span>
        </button>
      </div>
    </div>
  );
};

export default About;