import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RealClient from "./RealClient";
import LegalClient from "./LegalClient";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./Navbar";
import "../index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/private" element={<PrivateRoute />}>
          <Route path="legalclient" element={<LegalClient />} />
          <Route path="realclient" element={<RealClient />} />
        </Route>
        <Route path="/" element={<Login />} />  
      </Routes>
    </Router>
  );
};

export default App;
