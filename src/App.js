import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Router>
        {/* <Dashboard /> */}
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
