import React, { useState, useEffect } from 'react';
import './BillersSection.css';

const BillersSection = () => {
  const [billers, setBillers] = useState([]);
  const [filteredBillers, setFilteredBillers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  // Complete billers data from your API
  const billersData = {
    "records": [
      {
        "billerId": "LIFE00000NATL6",
        "billerName": "Life Insurance Corporation of India (LIC)",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400021,
        "updatedDate": "2023-09-13",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/LIFE00000NATL6.svg"
      },
      {
        "billerId": "ACKO00000NATJ1",
        "billerName": "Acko General Insurance Health",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 560102,
        "updatedDate": "2023-05-24",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/ACKO00000NATJ1.svg"
      },
      {
        "billerId": "ACKO00000NATX2",
        "billerName": "Acko General Insurance Motor",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 560102,
        "updatedDate": "2023-05-31",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/ACKO00000NATX2.svg"
      },
      {
        "billerId": "ADIT00000NATVO",
        "billerName": "Aditya Birla Health Insurance Co Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400013,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/ADIT00000NATVO.svg"
      },
      {
        "billerId": "ADIT00000NAT0T",
        "billerName": "Aditya Birla Sun Life Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400013,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/ADIT00000NAT0T.svg"
      },
      {
        "billerId": "IDBI00000NATRX",
        "billerName": "Ageas Federal Life Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400013,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/IDBI00000NATRX.svg"
      },
      {
        "billerId": "AGRI00000NAT6A",
        "billerName": "Agriculture Insurance Company of India Ltd",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 110023,
        "updatedDate": "2024-07-24",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/AGRI00000NAT6A.svg"
      },
      {
        "billerId": "AVIV00000NAT5I",
        "billerName": "Aviva Life Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 110001,
        "updatedDate": "2020-10-12",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/AVIV00000NAT5I.svg"
      },
      {
        "billerId": "MAXL00000NAT0Q",
        "billerName": "Axis Max Life Insurance Co Ltd.",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 122015,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/MAXL00000NAT0Q.svg"
      },
      {
        "billerId": "BAJA00000NAT58",
        "billerName": "Bajaj Allianz General Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 411006,
        "updatedDate": "2020-10-12",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/BAJA00000NAT58.svg"
      },
      {
        "billerId": "BAJA00000NATP5",
        "billerName": "Bajaj Allianz Life Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 411006,
        "updatedDate": "2020-07-03",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/BAJA00000NATP5.svg"
      },
      {
        "billerId": "HDFC00000NAT0D",
        "billerName": "HDFC Life Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400011,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/HDFC00000NAT0D.svg"
      },
      {
        "billerId": "ICIC00000NATGF",
        "billerName": "ICICI Prudential Life Insurance Renewal",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400025,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/ICIC00000NATGF.svg"
      },
      {
        "billerId": "SBIL00000NATT0",
        "billerName": "SBI Life Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400069,
        "updatedDate": "2021-01-18",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/SBIL00000NATT0.svg"
      },
      {
        "billerId": "TATA00000NATGL",
        "billerName": "TATA AIA Life Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400013,
        "updatedDate": "2024-02-21",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/TATA00000NATGL.svg"
      },
      {
        "billerId": "KOTA00000NATDP",
        "billerName": "Kotak Life Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400051,
        "updatedDate": "2021-01-18",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/KOTA00000NATDP.svg"
      },
      {
        "billerId": "PNBM00000NATXG",
        "billerName": "Pnb Metlife India Insurance Company Ltd",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 560001,
        "updatedDate": "2023-06-21",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/PNBM00000NATXG.svg"
      },
      {
        "billerId": "RELI00000NATKB",
        "billerName": "Reliance Nippon Life Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400055,
        "updatedDate": "2024-02-21",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/RELI00000NATKB.svg"
      },
      {
        "billerId": "STAR00000NATMS",
        "billerName": "Star Health And Allied Insurance Company",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 600034,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/STAR00000NATMS.svg"
      },
      {
        "billerId": "CARE00000NATT1",
        "billerName": "Care Health Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 110001,
        "updatedDate": "2024-02-21",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/CARE00000NATT1.svg"
      },
      {
        "billerId": "MANI00000NATJD",
        "billerName": "ManipalCigna Health Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400063,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/MANI00000NATJD.svg"
      },
      {
        "billerId": "MAXB00000NAT28",
        "billerName": "Niva Bupa Health Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 110044,
        "updatedDate": "2020-10-12",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/MAXB00000NAT28.svg"
      },
      {
        "billerId": "GODI00000NATLR",
        "billerName": "Go Digit Insurance",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 560095,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/GODI00000NATLR.svg"
      },
      {
        "billerId": "LIBE00000NAT1B",
        "billerName": "Liberty General Insurance Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 400013,
        "updatedDate": "2024-07-10",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/LIBE00000NAT1B.svg"
      },
      {
        "billerId": "CHOL00000NATTL",
        "billerName": "Cholamandalam MS General Insurance Co. Ltd.",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 600001,
        "updatedDate": "2025-06-18",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/CHOL00000NATTL.svg"
      },
      {
        "billerId": "IFFC00000NATRB",
        "billerName": "Iffco Tokio General Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 110017,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/IFFC00000NATRB.svg"
      },
      {
        "billerId": "ROYA00000NAT2C",
        "billerName": "Royal Sundaram General Insurance Co. Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 600002,
        "updatedDate": "2020-10-12",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/ROYA00000NAT2C.svg"
      },
      {
        "billerId": "THEO00000NATHH",
        "billerName": "The Oriental Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 110002,
        "updatedDate": "2022-06-06",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/THEO00000NATHH.svg"
      },
      {
        "billerId": "UNIT00000NATQ4",
        "billerName": "United India Insurance Company Limited",
        "categoryKey": "C11",
        "type": "ONUS",
        "categoryName": "Insurance",
        "coverageCity": "-",
        "coverageState": "-",
        "coveragePincode": 600014,
        "updatedDate": "2023-03-14",
        "billerStatus": "ACTIVE",
        "isAvailable": true,
        "iconUrl": "https://static.instantpay.in/assets/logo/products/UNIT00000NATQ4.svg"
      }
      // Add more billers here as needed...
    ]
  };

  useEffect(() => {
    // Simulate API call
    const loadBillers = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      const activeBillers = billersData.records.filter(biller => 
        biller.isAvailable && biller.billerStatus === "ACTIVE"
      );
      setBillers(activeBillers);
      setFilteredBillers(activeBillers);
      setIsLoading(false);
    };

    loadBillers();
  }, []);

  useEffect(() => {
    const filtered = billers.filter(biller =>
      biller.billerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBillers(filtered);
    setVisibleCount(12);
  }, [searchTerm, billers]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handlePayPremium = (biller) => {
    console.log('Pay premium for:', biller.billerName);
    alert(`Redirecting to ${biller.billerName} premium payment...`);
  };

  const visibleBillers = filteredBillers.slice(0, visibleCount);

  return (
    <section className="billers-section">
      <div className="billers-container">
        {/* Header */}
        <div className="billers-header">
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-gradient">All Insurance Companies</span>
              <span className="title-sub">Pay Premiums for 75+ Insurance Providers</span>
            </h2>
            <p className="section-description">
              Choose from our extensive network of trusted insurance companies. 
              Pay your premiums securely with instant confirmation.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              placeholder="Search insurance companies (LIC, HDFC, ICICI, SBI...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>
          <div className="results-count">
            Showing {visibleBillers.length} of {filteredBillers.length} insurance companies
            {searchTerm && ` for "${searchTerm}"`}
          </div>
        </div>

        {/* Billers Grid */}
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading insurance partners...</p>
          </div>
        ) : (
          <>
            <div className="billers-grid">
              {visibleBillers.map((biller, index) => (
                <div 
                  key={biller.billerId}
                  className="biller-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="card-glow"></div>
                  
                  {/* Company Logo */}
                  <div className="biller-logo">
                    <div className="logo-container">
                      <img 
                        src={biller.iconUrl} 
                        alt={biller.billerName}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="logo-fallback">
                        {biller.billerName.split(' ').map(word => word[0]).join('').slice(0, 3)}
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="biller-info">
                    <h3 className="biller-name">{biller.billerName}</h3>
                    <div className="biller-meta">
                      <span className="biller-category">{biller.categoryName}</span>
                      <div className="availability">
                        <span className="status-dot"></span>
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    className="pay-premium-btn"
                    onClick={() => handlePayPremium(biller)}
                  >
                    <span className="btn-icon">💳</span>
                    Pay Premium
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredBillers.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={loadMore}>
                  Load More Companies ({filteredBillers.length - visibleCount} remaining)
                  <span className="load-more-arrow">↓</span>
                </button>
              </div>
            )}

            {/* Show All Loaded Message */}
            {visibleCount >= filteredBillers.length && filteredBillers.length > 0 && (
              <div className="all-loaded">
                <div className="all-loaded-icon">✅</div>
                <p>All {filteredBillers.length} insurance companies are displayed</p>
              </div>
            )}

            {/* No Results */}
            {filteredBillers.length === 0 && (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No insurance companies found</h3>
                <p>Try adjusting your search terms or browse all companies</p>
                <button 
                  className="clear-search-btn"
                  onClick={() => setSearchTerm('')}
                >
                  Show All Companies
                </button>
              </div>
            )}
          </>
        )}

        {/* Statistics Banner */}
        <div className="stats-banner">
          <div className="stat-item">
            <div className="stat-number">75+</div>
            <div className="stat-label">Insurance Companies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Instant</div>
            <div className="stat-label">Payment Processing</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Secure Transactions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillersSection;