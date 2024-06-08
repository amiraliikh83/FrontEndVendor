import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import RealClient from "./RealClient";
import LegalClient from "./LegalClient";
import Table from "./Table"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/realclient" element={<RealClient />} />
       <Route path="/legalclient" element={<LegalClient />} />
       <Route path="/table" element={<Table />}/>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App; 
