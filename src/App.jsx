import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./Helper/RootLayout";
import Error from "./Helper/Error";
import BillersSection from "./Helper/utility/BillerSection";

const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));
const Services = lazy(() => import("./Component/Service"));
const Contact = lazy(() => import("./Component/Contact"));

const RefundPolicy = lazy(() => import("./Component/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./Component/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./Component/TermsAndConditions"));


const routes = createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<Error />} path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
   
    <Route path="/billerlist" element={<BillersSection />} />

  <Route path="refund-policy" element={<RefundPolicy />} />
  <Route path="privacy-policy" element={<PrivacyPolicy />} />
  <Route path="terms-and-conditions" onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } element={<TermsAndConditions />} />
  </Route>
))

const App = () => {
  return <Suspense fallback={<div>Loading...</div>} >
    <RouterProvider router={routes} />
  </Suspense>
}

export default App