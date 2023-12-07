import React from "react";
import { Route, Routes } from "react-router-dom";
import Dialog from "../Pages/DialogInfo/index.jsx";
import AlertInfo from "../Pages/AlertInfo/index.jsx";
import Switches from "../Pages/Switches";
import Rating from "../Pages/Rating";
import Cards from "../Pages/cards/index";
import UserList from "../Pages/UserList";
import Buttons from "../Pages/buttons/index";
import PaginationInfo from "../Pages/PaginationInfo";
import Paginations from "../Pages/paginations";
import Accordion from "../Pages/accordion";
import LandingPage from "../Pages/landingPage";
import ApexChart from "../../src/Pages/Charts/index";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/components/dialog-info" element={<Dialog />} />
      <Route path="/components/alert" element={<AlertInfo />} />
      <Route path="/components/switches" element={<Switches />} />
      <Route path="/components/ratings" element={<Rating />} />
      <Route path="/components/cards" element={<Cards />} />
      <Route path="/components/tables" element={<UserList />} />
      <Route path="/components/pagination" element={<Paginations />} />
      <Route path="/components/buttons" element={<Buttons />} />
      <Route path="/components/accordion" element={<Accordion />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/components/charts" element={<ApexChart />} />
    </Routes>
  );
}

export default MainRoutes;
