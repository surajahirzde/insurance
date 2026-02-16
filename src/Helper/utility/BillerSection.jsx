import React, { useState, useEffect } from 'react';
import './BillersSection.css';

const BillersSection = () => {
  const [billers, setBillers] = useState([]);
  const [filteredBillers, setFilteredBillers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [error, setError] = useState(null);
  const [selectedBiller, setSelectedBiller] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [billerDetails, setBillerDetails] = useState(null);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const [formData, setFormData] = useState({});
  const [apiError, setApiError] = useState(null);
  const [billResult, setBillResult] = useState(null);
  const [showBillResult, setShowBillResult] = useState(false);
  const [validationError, setValidationError] = useState('');
  
  // Your valid JWT token
  const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzEwODhmZjM4ZGJhNzhhZDY2YjVmZWIiLCJwaG9uZU51bWJlciI6ODgxMDMwMDcyNCwiZW1haWwiOiJzeTI0MTUyN0BnbWFpbC5jb20iLCJyb2xlIjoiY2hhZ2Fuc0VtcGxveWVlMiIsImxvZ2luSWQiOiJmOGUzOWRhOC03MmQ2LTRmNTUtYWJlMC0xM2Q5YWIxMjJmZTkiLCJpYXQiOjE3NjkxNDM0NDUsImV4cCI6MTc3NjkxOTQ0NX0.Y8_yAqXxKhw7Hijfn5zJkHfWDHqijjRyxDom2XwqzFs';

  // Only LIC in the biller list for testing
  const staticBillersData = [
            {
                "billerId": "ACKO00000NATJ1",
                "billerName": "Acko General Insurance Health",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ACKO00000NATX2",
                "billerName": "Acko General Insurance Motor",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ADIT00000NAT0T",
                "billerName": "Aditya Birla Sun Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ADIT00000NATVO",
                "billerName": "Aditya Birla Health Insurance Co Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "AEGO00000NATRJ",
                "billerName": "Bandhan Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "AGRI00000NAT6A",
                "billerName": "Agriculture Insurance Company of India Ltd",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "AVIV00000NAT5I",
                "billerName": "Aviva Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "BAJA00000NAT58",
                "billerName": "Bajaj General Insurance Limited (BGIL)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "BAJA00000NATP5",
                "billerName": "Bajaj Life Insurance Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "BAJA00000NATR1",
                "billerName": "Bajaj Finance Ltd - Corporate agent",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "BHAR00000NATVB",
                "billerName": "BHARTI AXA Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "CANA00000NATPI",
                "billerName": "Canara HSBC Life Insurance Co Ltd",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "CARE00000NATT1",
                "billerName": "Care Health Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "CHOL00000NATTL",
                "billerName": "Cholamandalam MS (PREMIUM COLLECTIONS) General Insurance Co. Ltd.",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "CHOL00000TND6P",
                "billerName": "Cholamandalam MS General Insurance Co Ltd",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND-TND"
            },
            {
                "billerId": "CRED00000NATYL",
                "billerName": "CreditAccess Life Insurance Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "EDEL00000NATNS",
                "billerName": "Edelweiss Tokio Life Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "EXID00000NATSX",
                "billerName": "HDFC Life Insurance (for Former Exide Life Customers only)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "FUTU00000NATBB",
                "billerName": "Future Generali India Insurance Co ltd-General Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "FUTU00000NATBZ",
                "billerName": "Generali Central Life Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "GODI00000NATBO",
                "billerName": "Go digit Life Insurance Ltd",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "GODI00000NATLR",
                "billerName": "Go Digit Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "HDFC00000NAT0D",
                "billerName": "HDFC Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "HDFC00000NATNJ",
                "billerName": "HDFC Ergo General Insurance Company (Health)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "HDFC00000NATTK",
                "billerName": "HDFC ERGO General Insurance (Motor)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ICIC00000NAT7I",
                "billerName": "ICICI Lombard General Insurance (Motor)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ICIC00000NATAT",
                "billerName": "ICICI Prudential Life Insurance First Premium",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ICIC00000NATGF",
                "billerName": "ICICI Prudential Life Insurance Renewal",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ICIC00000NATMN",
                "billerName": "ICICI Lombard General Insurance (Health)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "IDBI00000NATRX",
                "billerName": "Ageas Federal Life Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "IFFC00000NATRB",
                "billerName": "Iffco Tokio General Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "INDI00000NAT3L",
                "billerName": "IndiaFirst Life Insurance Company Ltd",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "KOTA00000NATDP",
                "billerName": "Kotak Life Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "KOTA00000NATJK",
                "billerName": "Kotak Mahindra General Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "LIBE00000NAT1B",
                "billerName": "Liberty General Insurance Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "LIBE00000NATTO",
                "billerName": "Liberty General Insurance Limited - Health",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "LIFE00000NATL6",
                "billerName": "Life Insurance Corporation of India",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "MAGM00000NAT61",
                "billerName": "Magma HDI - Motor Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "MAGM00000NAT6B",
                "billerName": "Magma HDI - Health Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "MAGM00000NATQI",
                "billerName": "Magma HDI - Non Motor Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "MANI00000NATJD",
                "billerName": "ManipalCigna Health Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "MAXB00000NAT28",
                "billerName": "Niva Bupa Health Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "MAXL00000NAT0Q",
                "billerName": "Axis Max Life Insurance Co Ltd.",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "PNBM00000NATXG",
                "billerName": "Pnb Metlife India Insurance Company Ltd",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "PRAM00000NATDP",
                "billerName": "Pramerica Life Insurance Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "RELI00000NAT06",
                "billerName": "Reliance General Insurance Company Limited (Health)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "RELI00000NATBP",
                "billerName": "Reliance General Insurance Company Limited (Motor)",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "RELI00000NATKB",
                "billerName": "Reliance Nippon Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ROYA00000NAT2C",
                "billerName": "Royal Sundaram General Insurance Co. Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "SBIL00000NATT0",
                "billerName": "SBI Life Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "SHRI00000NAT51",
                "billerName": "Shriram General Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "SHRI00000NATI6",
                "billerName": "Shriram Life Insurance Co. Ltd.",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "SHRI00000NATIW",
                "billerName": "Shriram General Insurance - Quote Payment",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "SHRI00000TELTZ",
                "billerName": "Shriram Life Insurance - Quote Payment",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND-TEL"
            },
            {
                "billerId": "STAR00000NAT83",
                "billerName": "Star Union Dai Ichi Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "STAR00000NATMS",
                "billerName": "Star Health And Allied Insurance Company",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "TATA00000NATGL",
                "billerName": "TATA AIA Life Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "TATA00000NATRK",
                "billerName": "TATA AIG General Insurance co. Ltd Retail",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "TATA00000NATZD",
                "billerName": "TATA AIG General Insurance co. Ltd - Group",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "THEO00000NATHH",
                "billerName": "The Oriental Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "UNIT00000NATQ4",
                "billerName": "United India Insurance Company Limited",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "UNIT00000NATYL",
                "billerName": "United India Insurance - Agent Collection",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "UNIV00000NAT67",
                "billerName": "Universal Sompo General Insurance Co Limited Motor",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            },
            {
                "billerId": "ZUNO00000NATEN",
                "billerName": "Zuno General Insurance",
                "category": "Insurance",
                "fetchRequirement": false,
                "paymentAmountExactness": "Any",
                "status": "ACTIVE",
                "coverage": "IND"
            }
        ];

  useEffect(() => {
    // Use static data immediately to show content
    setBillers(staticBillersData);
    setFilteredBillers(staticBillersData);
    setIsLoading(false);
    
    // Try API call in background (optional)
    fetchBillersFromAPI();
  }, []);

  const fetchBillersFromAPI = async () => {
    try {
      console.log('Fetching billers from API...');
      
      const response = await fetch('https://chagans.com/billAvenue/billers?category=Insurance', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${JWT_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.log('Non-JSON response received:', text.substring(0, 200));
        return;
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.success && data.data && data.data.billerList) {
        const activeBillers = data.data.billerList.filter(
          biller => biller.status === "ACTIVE"
        );
        setBillers(activeBillers);
        setFilteredBillers(activeBillers);
      }
    } catch (err) {
      console.error('Background API fetch failed:', err);
    }
  };

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

  // Parameters for LIC
  const getLICParameters = () => {
    return {
      parameters: [
        {
          paramName: "dateOfBirth",
          dataType: "string",
          optional: false,
          label: "Date of Birth (DD/MM/YYYY)",
          pattern: "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}$"
        },
        {
          paramName: "emailId",
          dataType: "email",
          optional: false,
          label: "Email ID"
        },
        {
          paramName: "policyNumber",
          dataType: "string",
          optional: false,
          label: "Policy Number"
        }
      ]
    };
  };

  const fetchBillerDetails = async (billerId) => {
    setIsFetchingDetails(true);
    setApiError(null);
    setValidationError('');
    
    try {
      console.log('Fetching details for billerId:', billerId);
      
      // Try API call
      const response = await fetch(`https://chagans.com/billAvenue/getBillerDetails?billerId=${billerId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${JWT_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.log('API returned non-JSON, using LIC parameters');
        // Use LIC parameters as fallback
        const licParams = getLICParameters();
        setBillerDetails(licParams);
        
        // Initialize form data
        const initialFormData = {};
        licParams.parameters.forEach(param => {
          initialFormData[param.paramName] = '';
        });
        setFormData(initialFormData);
        return;
      }
      
      const data = await response.json();
      console.log('Biller details response:', data);
      
      if (data.success && data.data) {
        setBillerDetails(data.data);
        // Initialize form data with empty values for all required fields
        const initialFormData = {};
        if (data.data.parameters && Array.isArray(data.data.parameters)) {
          data.data.parameters.forEach(param => {
            initialFormData[param.paramName] = '';
          });
        }
        setFormData(initialFormData);
      } else {
        // Use LIC parameters as fallback
        const licParams = getLICParameters();
        setBillerDetails(licParams);
        
        const initialFormData = {};
        licParams.parameters.forEach(param => {
          initialFormData[param.paramName] = '';
        });
        setFormData(initialFormData);
      }
    } catch (err) {
      console.error('Error fetching biller details:', err);
      setApiError(err.message);
      
      // Use LIC parameters as fallback
      const licParams = getLICParameters();
      setBillerDetails(licParams);
      
      const initialFormData = {};
      licParams.parameters.forEach(param => {
        initialFormData[param.paramName] = '';
      });
      setFormData(initialFormData);
    } finally {
      setIsFetchingDetails(false);
    }
  };

  const handlePayPremium = (biller) => {
    setSelectedBiller(biller);
    setShowPaymentModal(true);
    setBillerDetails(null);
    setFormData({});
    setApiError(null);
    setBillResult(null);
    setShowBillResult(false);
    setValidationError('');
    fetchBillerDetails(biller.billerId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    setValidationError('');
  };

  const validateForm = () => {
    // Validate date format (DD/MM/YYYY)
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[0-9]{4}$/;
    if (formData.dateOfBirth) {
      const cleanDate = formData.dateOfBirth.trim();
      if (!dateRegex.test(cleanDate)) {
        setValidationError('Please enter date in DD/MM/YYYY format (e.g., 25/04/1993)');
        return false;
      }
      // Update form data with cleaned date
      formData.dateOfBirth = cleanDate;
    } else {
      setValidationError('Date of Birth is required');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailId) {
      const cleanEmail = formData.emailId.trim();
      if (!emailRegex.test(cleanEmail)) {
        setValidationError('Please enter a valid email address');
        return false;
      }
      formData.emailId = cleanEmail;
    } else {
      setValidationError('Email ID is required');
      return false;
    }

    // Validate policy number
    if (formData.policyNumber) {
      const cleanPolicy = formData.policyNumber.trim();
      if (cleanPolicy.length < 5) {
        setValidationError('Policy number should be at least 5 characters');
        return false;
      }
      formData.policyNumber = cleanPolicy;
    } else {
      setValidationError('Policy Number is required');
      return false;
    }

    return true;
  };

  const handleFetchBill = async (e) => {
    e.preventDefault();
    
    // Validate form first
    if (!validateForm()) {
      return;
    }

    setIsFetchingDetails(true);
    setApiError(null);
    setValidationError('');
    
    try {
      console.log('Fetching bill for:', selectedBiller.billerName);
      console.log('Form Data:', formData);
      
      // Format the input parameters with proper labels
      const inputParams = {
        "Date of Birth (DD/MM/YYYY)": formData.dateOfBirth,
        "Email ID": formData.emailId,
        "Policy Number": formData.policyNumber
      };
      
      // Prepare the request body with the exact structure
      const requestBody = {
        billerId: selectedBiller.billerId,
        billerName: selectedBiller.billerName,
        inputParams: inputParams,
        serviceType: "Insurance",
        type: "all"
      };
      
      console.log('Request Payload:', JSON.stringify(requestBody, null, 2));
      
      const response = await fetch('https://chagans.com/billAvenue/getBillFetch', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${JWT_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      
      const data = await response.json();
      console.log('Bill fetch response:', data);
      
      if (response.ok && data.success) {
        // Bill fetched successfully
        setBillResult(data.data);
        setShowBillResult(true);
      } else {
        // Show the error message from API
        if (data.code === 400) {
          setValidationError(data.message || 'Validation error. Please check your inputs.');
        } else {
          alert(`Error: ${data.message || 'Failed to fetch bill'}`);
        }
      }
    } catch (err) {
      console.error('Error fetching bill:', err);
      alert(`Error: ${err.message}`);
    } finally {
      setIsFetchingDetails(false);
    }
  };

  const handleProceedToPayment = () => {
    alert(`Redirecting to payment gateway for ₹${billResult.amount}`);
    // window.location.href = `/payment?amount=${billResult.amount}&billNumber=${billResult.billNumber}`;
    closeModal();
  };

  const closeModal = () => {
    setShowPaymentModal(false);
    setSelectedBiller(null);
    setBillerDetails(null);
    setFormData({});
    setApiError(null);
    setBillResult(null);
    setShowBillResult(false);
    setValidationError('');
  };

  // Generate fallback icon using initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  };

  // Format parameter name for display
  const formatParamName = (paramName) => {
    // Handle special cases
    if (paramName === "dateOfBirth") return "Date of Birth";
    if (paramName === "emailId") return "Email ID";
    if (paramName === "policyNumber") return "Policy Number";
    if (paramName === "mobileNumber") return "Mobile Number";
    if (paramName === "customerName") return "Customer Name";
    
    return paramName
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
      .trim();
  };

  // Get input type based on dataType
  const getInputType = (param) => {
    if (param.dataType === 'email') return 'email';
    if (param.dataType === 'tel' || param.paramName === 'mobileNumber') return 'tel';
    if (param.dataType === 'number') return 'number';
    return 'text';
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
              <span className="title-sub">Pay Premiums for {billers.length}+ Insurance Providers</span>
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
                >
                  <div className="card-glow"></div>
                  
                  {/* Company Logo */}
                  <div className="biller-logo">
                    <div className="logo-container">
                      <img 
                        src={`https://static.instantpay.in/assets/logo/products/${biller.billerId}.svg`}
                        alt={biller.billerName}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="logo-fallback">
                        {getInitials(biller.billerName)}
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="biller-info">
                    <h3 className="biller-name">{biller.billerName}</h3>
                    <div className="biller-meta">
                      <span className="biller-category">{biller.category || 'Insurance'}</span>
                      <div className="availability">
                        <span className="status-dot"></span>
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="biller-details">
                    <span className="coverage-badge">{biller.coverage || 'IND'}</span>
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

            {/* Load More Button - Only show if more than visible count */}
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

        {/* Payment Details Modal */}
        {showPaymentModal && selectedBiller && !showBillResult && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <div className="modal-logo">
                  <img 
                    src={`https://static.instantpay.in/assets/logo/products/${selectedBiller.billerId}.svg`}
                    alt={selectedBiller.billerName}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="modal-logo-fallback">
                    {getInitials(selectedBiller.billerName)}
                  </div>
                </div>
                <h2 className="modal-title">{selectedBiller.billerName}</h2>
                {apiError && (
                  <p className="api-error-note">Using default parameters (API unavailable)</p>
                )}
              </div>

              {isFetchingDetails ? (
                <div className="modal-loading">
                  <div className="loading-spinner-small"></div>
                  <p>Fetching biller details...</p>
                </div>
              ) : billerDetails ? (
                <form onSubmit={handleFetchBill} className="payment-form">
                  {validationError && (
                    <div className="validation-error">
                      <span className="error-icon">⚠️</span>
                      <p>{validationError}</p>
                    </div>
                  )}
                  
                  {billerDetails.parameters && Array.isArray(billerDetails.parameters) ? (
                    billerDetails.parameters.map((param, index) => (
                      <div key={index} className="form-group">
                        <label htmlFor={param.paramName}>
                          {formatParamName(param.paramName)} {param.optional ? '(Optional)' : '*'}
                        </label>
                        
                        {param.paramName === 'dateOfBirth' ? (
                          <>
                            <input
                              type="text"
                              id={param.paramName}
                              name={param.paramName}
                              value={formData[param.paramName] || ''}
                              onChange={handleInputChange}
                              placeholder="DD/MM/YYYY (e.g., 25/04/1993)"
                              required={!param.optional}
                              pattern="^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}$"
                              title="Please enter date in DD/MM/YYYY format (e.g., 25/04/1993)"
                              className={validationError && validationError.includes('Date') ? 'error' : ''}
                            />
                            <small className="input-hint">Format: DD/MM/YYYY (e.g., 25/04/1993)</small>
                          </>
                        ) : param.paramName === 'emailId' ? (
                          <>
                            <input
                              type="email"
                              id={param.paramName}
                              name={param.paramName}
                              value={formData[param.paramName] || ''}
                              onChange={handleInputChange}
                              placeholder="Enter your email address"
                              required={!param.optional}
                              className={validationError && validationError.includes('Email') ? 'error' : ''}
                            />
                          </>
                        ) : (
                          <input
                            type={getInputType(param)}
                            id={param.paramName}
                            name={param.paramName}
                            value={formData[param.paramName] || ''}
                            onChange={handleInputChange}
                            placeholder={`Enter ${formatParamName(param.paramName).toLowerCase()}`}
                            required={!param.optional}
                            maxLength={param.maxLength || undefined}
                            className={validationError && validationError.includes('Policy') ? 'error' : ''}
                          />
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No parameters required for this biller</p>
                  )}

                  <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="submit-btn" disabled={isFetchingDetails}>
                      {isFetchingDetails ? 'Fetching...' : 'Fetch Bill'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="modal-error">
                  <p>Failed to load biller details. Please try again.</p>
                  <button className="retry-btn" onClick={() => fetchBillerDetails(selectedBiller.billerId)}>
                    Retry
                  </button>
                </div>
              )}

              <div className="modal-footer">
                <p>🔒 Your information is secure and encrypted</p>
              </div>
            </div>
          </div>
        )}

        {/* Bill Result Modal */}
        {showBillResult && billResult && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content bill-result-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <div className="success-icon">✅</div>
                <h2 className="modal-title">Bill Fetched Successfully!</h2>
              </div>

              <div className="bill-details">
                <div className="bill-detail-item">
                  <span className="detail-label">Insurance Company:</span>
                  <span className="detail-value">{selectedBiller?.billerName}</span>
                </div>
                <div className="bill-detail-item">
                  <span className="detail-label">Bill Number:</span>
                  <span className="detail-value">{billResult.billNumber || 'N/A'}</span>
                </div>
                <div className="bill-detail-item">
                  <span className="detail-label">Amount Due:</span>
                  <span className="detail-value amount">₹{billResult.amount}</span>
                </div>
                <div className="bill-detail-item">
                  <span className="detail-label">Due Date:</span>
                  <span className="detail-value">{billResult.dueDate || 'N/A'}</span>
                </div>
                <div className="bill-detail-item">
                  <span className="detail-label">Policy Status:</span>
                  <span className="detail-value status-active">{billResult.policyStatus || 'Active'}</span>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Close
                </button>
                <button type="button" className="submit-btn pay-now-btn" onClick={handleProceedToPayment}>
                  Proceed to Pay ₹{billResult.amount}
                </button>
              </div>

              <div className="modal-footer">
                <p>🔒 Secure payment gateway</p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics Banner */}
        <div className="stats-banner">
          <div className="stat-item">
            <div className="stat-number">{billers.length}+</div>
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