import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/screens/Login";
import SignUp from "../src/screens/SignUp";
import ForgetPassword from "../src/screens/ForgetPassword";
import Dashboard from "./components/Dashboard";
import DialogInfo from "./Pages/DialogInfo";
import Profile from "./Pages/DialogInfo";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Router>
        {/* <Dashboard /> */}
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
