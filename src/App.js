import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/screens/Login";
import SignUp from "../src/screens/SignUp";
import ForgetPassword from "../src/screens/ForgetPassword";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard/default" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
