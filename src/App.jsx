import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from "./Home";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationAndRefund from "./components/CancellationAndRefund";
import ContactUsPolicy from "./components/ContactUsPolicy";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,          // faster animation
      easing: "ease-out",
      once: true,             // animate only once
      offset: 100,            // trigger BEFORE element enters viewport
      anchorPlacement: "top-bottom",
    });
    
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/cancellationAndRefund" element={<CancellationAndRefund />} />
        <Route path="/contactUsPolicy" element={<ContactUsPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;