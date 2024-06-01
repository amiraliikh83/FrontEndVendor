import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import RealClient from "./RealClient";
import LegalClient from "./LegalClient";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/realclient" element={<RealClient />} />
        <Route path="/legalclient" element={<LegalClient />} />
      </Routes>
    </Router>
  );
};

export default App;
