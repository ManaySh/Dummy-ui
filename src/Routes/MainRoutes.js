import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogInfo from "../Pages/DialogInfo";
import AlertInfo from "../Pages/AlertInfo";
import Switches from "../Pages/Switches";
import Rating from "../Pages/Rating";
import Cards from "../Pages/cards/index";
import UserList from "../Pages/UserList";
import Buttons from "../Pages/buttons/index";

import Checkboxes from "../Pages/checkboxes";
import Paginations from "../Pages/paginations";
import LandingPage from "../Pages/landingPage";
import Progress from "../Pages/progress/index";
import Analytics from "../Pages/analytics";
import Accordions from "../Pages/accordion";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/advance/dialog-info" element={<DialogInfo />} />
      <Route path="/advance/alert" element={<AlertInfo />} />
      <Route path="/advance/switches" element={<Switches />} />
      <Route path="/advance/ratings" element={<Rating />} />
      <Route path="/advance/cards" element={<Cards />} />
      <Route path="/advance/userlist" element={<UserList />} />
      <Route path="/advance/buttons" element={<Buttons />} />
      <Route path="/components/checkboxes" element={<Checkboxes />} />
      <Route path="/components/dialog-info" element={<DialogInfo />} />
      <Route path="/components/alert" element={<AlertInfo />} />
      <Route path="/components/switches" element={<Switches />} />
      <Route path="/components/ratings" element={<Rating />} />
      <Route path="/components/tables" element={<UserList />} />
      <Route path="/components/pagination" element={<Paginations />} />
      <Route path="/components/buttons" element={<Buttons />} />
      <Route path="/components/progress" element={<Progress/>}/>
      <Route path="/surfaces/cards" element={<Cards />} />
      <Route path="/surfaces/accordions" element={<Accordions />} />
      <Route path="/landingPage" element={<LandingPage/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
    </Routes>
  );
}

export default MainRoutes;
