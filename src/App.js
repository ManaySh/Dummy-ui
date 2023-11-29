import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/screens/Login";
import SignUp from "../src/screens/SignUp";
import ForgetPassword from "../src/screens/ForgetPassword";
import Dashboard from "./components/Dashboard";
import UserList from "./Pages/UserList";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Sidebar />
       {/* <Idletimecontainer/> */}
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
