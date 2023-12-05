import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogInfo from "../Pages/DialogInfo";
import AlertInfo from "../Pages/AlertInfo";
import Switches from "../Pages/Switches";
import Rating from "../Pages/Rating";
import Cards from "../Pages/cards/index";
import UserList from "../Pages/UserList";
import Buttons from "../Pages/buttons/index";
import Paginations from "../Pages/paginations";
import Accordion from "../Pages/accordion";
import LandingPage from "../Pages/landingPage";
import Progress from "../Pages/progress/index";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/components/dialog-info" element={<DialogInfo />} />
      <Route path="/components/alert" element={<AlertInfo />} />
      <Route path="/components/switches" element={<Switches />} />
      <Route path="/components/ratings" element={<Rating />} />
      <Route path="/components/cards" element={<Cards />} />
      <Route path="/components/tables" element={<UserList />} />
      <Route path="/components/pagination" element={<Paginations />} />
      <Route path="/components/buttons" element={<Buttons />} />
      <Route path="/components/accordion" element={<Accordion />} />
      <Route path="/components/progress" element={<Progress/>}/>
      <Route path="/landingPage" element={<LandingPage/>}/>
    </Routes>
  );
}

export default MainRoutes;
