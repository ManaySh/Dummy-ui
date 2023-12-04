import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/screens/Login";
import SignUp from "../src/screens/SignUp";
import ForgetPassword from "../src/screens/ForgetPassword";
import Dashboard from "./components/Dashboard";
import DialogInfo from "./Pages/DialogInfo";
import Profile from "./Pages/DialogInfo";
function App() {
  return (
    <div>
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
