import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import Login from './Login';
import RealClient from './RealClient';
import LegalClient from './LegalClient';
import Captcha from './Captcha';
// import PrivateRoute from './ProtectedRoute'; // Import PrivateRoute from the correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route
          path="/realclient"
          element={
            // <PrivateRoute>
              <RealClient />
            // </PrivateRoute>
          }
        />
        <Route
          path="/legalclient"
          element={
            // <PrivateRoute>
              <LegalClient />
              // </PrivateRoute>
          }
        />
        <Route path="/captcha" element={<Captcha />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;