import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Onboarding from './components/Onboarding/Onboarding';
import PhoneNumberAuth from './components/PhoneNumberAuth/PhoneNumberAuth';
import OtpVerification from './components/OtpVerification/OtpVerification';
import BusinessDetails from './components/BusinessDetails/BusinessDetails';
import BusinessCategories from './components/Businesscategories/BusinessCategories';
import ReviewSubmit from './components/ReviewSubmit/ReviewSubmit';

function App() {
  return (
    <div>
    <Router>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/">Onboarding</Link></li>
          <li><Link to="/phone-auth">Phone Auth</Link></li>
          <li><Link to="/otp-verification">OTP Verification</Link></li>
          <li><Link to="/business-details">Business Details</Link></li>
          <li><Link to="/business-categories">Business Categories</Link></li>
          <li><Link to="/review-submit">Review & Submit</Link></li>
        </ul>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/phone-auth" element={<PhoneNumberAuth />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/business-details" element={<BusinessDetails />} />
        <Route path="/business-categories" element={<BusinessCategories />} />
        <Route path="/review-submit" element={<ReviewSubmit />} />
      </Routes>
    </Router>
    <section>
      
    </section>
    </div>
  );
}

export default App;
