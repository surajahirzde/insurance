import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const billersData = [
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
    "billerId": "BAJA00000NATR1",
    "billerName": "Bajaj Finance Ltd - Corporate agent",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 411035,
    "updatedDate": "2023-06-28",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/BAJA00000NATR1.svg"
  },
  {
    "billerId": "AEGO00000NATRJ",
    "billerName": "Bandhan Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400063,
    "updatedDate": "2020-10-12",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/AEGO00000NATRJ.svg"
  },
  {
    "billerId": "BHAR00000NATVB",
    "billerName": "BHARTI AXA Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400051,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/BHAR00000NATVB.svg"
  },
  {
    "billerId": "CANA00000NATPI",
    "billerName": "Canara HSBC Life Insurance Co. Ltd.",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 110001,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/CANA00000NATPI.svg"
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
    "billerId": "RELI00000NATQ9",
    "billerName": "Care Health Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 110010,
    "updatedDate": "2020-04-11",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/RELI00000NATQ9.svg"
  },
  {
    "billerId": "CHOL00000NATTL",
    "billerName": "Cholamandalam MS (PREMIUM COLLECTIONS) General Insurance Co. Ltd.",
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
    "billerId": "CHOL00000TND6P",
    "billerName": "Cholamandalam MS General Insurance Co Ltd",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 600001,
    "updatedDate": "2024-04-19",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/CHOL00000TND6P.svg"
  },
  {
    "billerId": "CRED00000NATYL",
    "billerName": "CreditAccess Life Insurance Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 560078,
    "updatedDate": "2024-05-15",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/CRED00000NATYL.svg"
  },
  {
    "billerId": "EDEL00000NATNS",
    "billerName": "Edelweiss Tokio Life Insurance Company Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400070,
    "updatedDate": "2022-07-08",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/EDEL00000NATNS.svg"
  },
  {
    "billerId": "EXID00000NATSX",
    "billerName": "Exide Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 560001,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/EXID00000NATSX.svg"
  },
  {
    "billerId": "FUTU00000NATBB",
    "billerName": "Future Generali India Insurance Co ltd-General Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400083,
    "updatedDate": "2023-07-05",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/FUTU00000NATBB.svg"
  },
  {
    "billerId": "FUTU00000NAT09",
    "billerName": "Future Generali India Life Insurance Company Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400013,
    "updatedDate": "2020-05-12",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/FUTU00000NAT09.svg"
  },
  {
    "billerId": "FUTU00000NATBZ",
    "billerName": "Generali Central Life Insurance Company Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400013,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/FUTU00000NATBZ.svg"
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
    "billerId": "GODI00000NATBO",
    "billerName": "Go digit Life Insurance Ltd",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 560095,
    "updatedDate": "2024-05-15",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/GODI00000NATBO.svg"
  },
  {
    "billerId": "HDFC00000NATTK",
    "billerName": "HDFC ERGO General Insurance (Motor)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400020,
    "updatedDate": "2023-06-07",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/HDFC00000NATTK.svg"
  },
  {
    "billerId": "HDFC00000NATNJ",
    "billerName": "HDFC Ergo General Insurance Company (Health)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400020,
    "updatedDate": "2024-02-29",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/HDFC00000NATNJ.svg"
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
    "billerId": "HDFC00000NATV4",
    "billerName": "HDFC Life Insurance Co. Ltd.",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400011,
    "updatedDate": "2020-04-11",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/HDFC00000NATV4.svg"
  },
  {
    "billerId": "ICIC00000NATMN",
    "billerName": "ICICI Lombard General Insurance (Health)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400025,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/ICIC00000NATMN.svg"
  },
  {
    "billerId": "ICIC00000NAT7I",
    "billerName": "ICICI Lombard General Insurance (Motor)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400025,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/ICIC00000NAT7I.svg"
  },
  {
    "billerId": "IPRU00000NAT01",
    "billerName": "ICICI Prudential Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "Mumbai",
    "coverageState": "MAHARASHTRA",
    "coveragePincode": 400025,
    "updatedDate": "2020-04-11",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/IPRU00000NAT01.svg"
  },
  {
    "billerId": "ICIC00000NATAT",
    "billerName": "ICICI Prudential Life Insurance First Premium",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400025,
    "updatedDate": "2024-09-04",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/ICIC00000NATAT.svg"
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
    "billerId": "INDI00000NAT3L",
    "billerName": "IndiaFirst Life Insurance Company Ltd",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400063,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/INDI00000NAT3L.svg"
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
    "billerId": "KOTA00000NATJK",
    "billerName": "Kotak Mahindra General Insurance Company Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400051,
    "updatedDate": "2024-07-24",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/KOTA00000NATJK.svg"
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
    "billerId": "LIBE00000NATTO",
    "billerName": "Liberty General Insurance Limited - Health",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400013,
    "updatedDate": "2025-05-08",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/LIBE00000NATTO.svg"
  },
  {
    "billerId": "MAGM00000NAT6B",
    "billerName": "Magma HDI - Health Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 700141,
    "updatedDate": "2020-10-12",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/MAGM00000NAT6B.svg"
  },
  {
    "billerId": "MAGM00000NAT61",
    "billerName": "Magma HDI - Motor Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 700108,
    "updatedDate": "2020-10-12",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/MAGM00000NAT61.svg"
  },
  {
    "billerId": "MAGM00000NATQI",
    "billerName": "Magma HDI - Non Motor Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 700141,
    "updatedDate": "2020-10-12",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/MAGM00000NATQI.svg"
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
    "billerId": "PRAM00000NATDP",
    "billerName": "Pramerica Life Insurance Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 122002,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/PRAM00000NATDP.svg"
  },
  {
    "billerId": "RAHE00000NATQV",
    "billerName": "Raheja QBE General Insurance Company Limited",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400059,
    "updatedDate": "2024-04-02",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/RAHE00000NATQV.svg"
  },
  {
    "billerId": "RELI00000NAT06",
    "billerName": "Reliance General Insurance Company Limited (Health)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400055,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/RELI00000NAT06.svg"
  },
  {
    "billerId": "RELI00000NATBP",
    "billerName": "Reliance General Insurance Company Limited (Motor)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400055,
    "updatedDate": "2020-07-31",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/RELI00000NATBP.svg"
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
    "billerId": "RELI00000NAT3O",
    "billerName": "Reliance Nippon Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400055,
    "updatedDate": "2020-06-02",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/RELI00000NAT3O.svg"
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
    "billerId": "SBIG00000NAT1H",
    "billerName": "SBI General Health Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400099,
    "updatedDate": "2023-06-07",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SBIG00000NAT1H.svg"
  },
  {
    "billerId": "SBIG00000NATRD",
    "billerName": "SBI General Motor Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400099,
    "updatedDate": "2023-06-07",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SBIG00000NATRD.svg"
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
    "billerId": "SHRI00000NAT51",
    "billerName": "Shriram General Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 302022,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SHRI00000NAT51.svg"
  },
  {
    "billerId": "SHRI00000NATIW",
    "billerName": "Shriram General Insurance - Quote Payment",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 302022,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SHRI00000NATIW.svg"
  },
  {
    "billerId": "SHRI00000NATKR",
    "billerName": "Shriram General Insurance (Old)",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 302022,
    "updatedDate": "2020-10-12",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SHRI00000NATKR.svg"
  },
  {
    "billerId": "SHRI00000TELTZ",
    "billerName": "Shriram Life Insurance - Quote Payment",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 500031,
    "updatedDate": "2023-09-13",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SHRI00000TELTZ.svg"
  },
  {
    "billerId": "SHRI00000NATRI",
    "billerName": "Shriram Life Insurance Co Ltd",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 500032,
    "updatedDate": "2020-05-12",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SHRI00000NATRI.svg"
  },
  {
    "billerId": "SHRI00000NATI6",
    "billerName": "Shriram Life Insurance Co. Ltd.",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 500032,
    "updatedDate": "2022-08-01",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/SHRI00000NATI6.svg"
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
    "billerId": "STAR00000NAT83",
    "billerName": "Star Union Dai Ichi Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400703,
    "updatedDate": "2022-06-06",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/STAR00000NAT83.svg"
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
    "billerId": "TATA00000NATLP",
    "billerName": "TATA AIA Life Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400013,
    "updatedDate": "2020-05-12",
    "billerStatus": "BLOCKED",
    "isAvailable": false,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/TATA00000NATLP.svg"
  },
  {
    "billerId": "TATA00000NATZD",
    "billerName": "TATA AIG General Insurance co. Ltd - Group",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400013,
    "updatedDate": "2025-09-30",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/TATA00000NATZD.svg"
  },
  {
    "billerId": "TATA00000NATRK",
    "billerName": "TATA AIG General Insurance co. Ltd Retail",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400097,
    "updatedDate": "2023-02-08",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/TATA00000NATRK.svg"
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
    "billerId": "UNIT00000NATYL",
    "billerName": "United India Insurance - Agent Collection",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 600014,
    "updatedDate": "2023-07-19",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/UNIT00000NATYL.svg"
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
  },
  {
    "billerId": "UNIV00000NAT67",
    "billerName": "Universal Sompo General Insurance Co Limited Motor",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400093,
    "updatedDate": "2023-11-22",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/UNIV00000NAT67.svg"
  },
  {
    "billerId": "ZUNO00000NATEN",
    "billerName": "Zuno General Insurance",
    "categoryKey": "C11",
    "type": "ONUS",
    "categoryName": "Insurance",
    "coverageCity": "-",
    "coverageState": "-",
    "coveragePincode": 400070,
    "updatedDate": "2023-07-27",
    "billerStatus": "ACTIVE",
    "isAvailable": true,
    "iconUrl": "https://static.instantpay.in/assets/logo/products/ZUNO00000NATEN.svg"
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllBillers, setShowAllBillers] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const insurancePlans = [
    {
      id: 1,
      title: "Comprehensive Health Insurance",
      description: "Complete health coverage with premium benefits and cashless hospitalization at 5000+ network hospitals",
      premium: "₹499/month",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Cashless Treatment", "Pre & Post Hospitalization", "Annual Health Checkups", "No Claim Bonus"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🏥"
    },
    {
      id: 2,
      title: "Life Insurance Protection",
      description: "Secure your family's financial future with comprehensive life coverage plans",
      premium: "₹799/month",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Tax Benefits Under 80C", "Life Cover", "Savings Component", "Loan Facility"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🛡️"
    },
    {
      id: 3,
      title: "Car Insurance",
      description: "Complete protection for your vehicle with zero depreciation and instant claim settlement",
      premium: "₹2,499/year",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Zero Depreciation", "24x7 Roadside Assistance", "Cashless Claims", "Quick Settlement"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🚗"
    },
    {
      id: 4,
      title: "Home Insurance",
      description: "Protect your home and valuable belongings from unexpected events and disasters",
      premium: "₹1,999/year",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Fire & Theft Protection", "Natural Disaster Cover", "Electronic Items Cover", "Terrorism Cover"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "🏠"
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      title: "Card Payments",
      description: "Pay Your Insurance Premium Payment with Card",
      icon: "💳",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["Visa/Mastercard", "Secure Payments", "Instant Processing"]
    },
    {
      id: 2,
      title: "UPI Payments",
      description: "Pay Your Insurance Premium Payment with UPI",
      icon: "📱",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["All UPI Apps", "QR Code", "Instant Verification"]
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % insurancePlans.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [insurancePlans.length]);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((current) => (current + 1) % insurancePlans.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((current) => (current - 1 + insurancePlans.length) % insurancePlans.length);
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const activeBillers = billersData.filter(biller => biller.isAvailable && biller.billerStatus === "ACTIVE");
  const displayedBillers = showAllBillers ? activeBillers : activeBillers.slice(0, 12);

  return (
    <div className="home-premium">
      {/* Animated Background Elements */}
      <div className="animated-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
        <div className="floating-particle particle-4"></div>
      </div>

      {/* Hero Slider Section */}
      <section className="hero-slider-section">
        <div className="slider-container">
          {insurancePlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`hero-slide ${index === activeSlide ? 'slide-active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(26, 42, 108, 0.8) 0%, rgba(58, 123, 213, 0.6) 100%), url(${plan.image})`,
                transform: `translateX(${(index - activeSlide) * 100}%)`
              }}
            >
              <div className="slide-content">
                <div className="premium-badge">
                  <span className="badge-icon">{plan.icon}</span>
                  <div className="badge-text">
                    <span className="premium-label">Starting at</span>
                    <span className="premium-amount">{plan.premium}</span>
                  </div>
                </div>

                <h1 className="plan-title" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}>
                  {plan.title}
                </h1>

                <p className="plan-description">{plan.description}</p>

                <div className="features-grid">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-card">
                      <div className="feature-icon">✓</div>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="action-buttons">
                  <button className="btn-primary">
                    <span>Get Instant Quote</span>
                    <div className="btn-sparkle">✨</div>
                  </button>
                  <button className="btn-secondary">
                    View Plan Details
                  </button>
                </div>
              </div>

              <div className="slide-overlay"></div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button className="nav-btn nav-prev" onClick={handlePrevSlide}>
          <div className="nav-arrow">←</div>
          <div className="nav-glow"></div>
        </button>
        <button className="nav-btn nav-next" onClick={handleNextSlide}>
          <div className="nav-arrow">→</div>
          <div className="nav-glow"></div>
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {insurancePlans.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeSlide ? 'indicator-active' : ''}`}
              onClick={() => handleDotClick(index)}
            >
              <div className="indicator-progress"></div>
            </button>
          ))}
        </div>
      </section>

      {/* Insurance Billers Section */}
      <section className="billers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-main">Insurance Partners</span>
              <span className="title-sub">Wide Range of Insurance Companies</span>
            </h2>
            <p className="section-description">
              Pay premiums for all major insurance providers with instant processing and secure transactions
            </p>
          </div>

          <div className="billers-grid">
            {displayedBillers.map((biller, index) => (
              <div
                key={biller.billerId}
                className="biller-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="biller-image">
                  <img
                    src={biller.iconUrl}
                    alt={biller.billerName}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="biller-fallback">
                    {biller.billerName.charAt(0)}
                  </div>
                </div>
                <h3 className="biller-name">{biller.billerName}</h3>
                <div className="biller-status">
                  <span className="status-dot"></span>
                  Available
                </div>
                <button className="pay-premium-btn" onClick={() => navigate("/billerList", {
                  state: {
                    billerId: biller.billerId
                  }
                })}>
                  Pay Premium
                  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="view-all-container">
            <button className="view-all-btn" onClick={() => setShowAllBillers(!showAllBillers)}>
              {showAllBillers ? 'Show Less' : 'View All Insurance Companies'}
              <svg className="view-all-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number" data-target="50000">50,000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-glow"></div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">💸</div>
              <div className="stat-content">
                <div className="stat-number" data-target="100000">1,00,000+</div>
                <div className="stat-label">Successful Transactions</div>
              </div>
              <div className="stat-glow"></div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <div className="stat-number" data-target="24">24/7</div>
                <div className="stat-label">Customer Support</div>
              </div>
              <div className="stat-glow"></div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">🛡️</div>
              <div className="stat-content">
                <div className="stat-number" data-target="100">100%</div>
                <div className="stat-label">Secure Payments</div>
              </div>
              <div className="stat-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions-section">
        <div className="container">
          <div className="actions-grid">
            <div className="action-card">
              <div className="action-icon">📊</div>
              <h3>Track Premium</h3>
              <p>Monitor your insurance premium payments and due dates</p>
              <button className="action-btn">Track Now</button>
            </div>

            <div className="action-card">
              <div className="action-icon">📝</div>
              <h3>Renew Policy</h3>
              <p>Renew your insurance policies in just a few clicks</p>
              <button className="action-btn">Renew Now</button>
            </div>

            <div className="action-card">
              <div className="action-icon">🆘</div>
              <h3>Claim Support</h3>
              <p>Get assistance with insurance claims and settlements</p>
              <button className="action-btn">Get Help</button>
            </div>

            <div className="action-card">
              <div className="action-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support for all your queries</p>
              <button className="action-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="floating-cta">
        <button className="cta-btn" onClick={() => navigate("/billerList")}>
          <span className="cta-icon">💳</span>
          Pay Premium Now
        </button>
      </div>
    </div>
  );
};

export default Home;