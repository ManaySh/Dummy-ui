import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogInfo from "../Pages/DialogInfo";
import AlertInfo from "../Pages/AlertInfo";
import Switches from "../Pages/Switches";
import Rating from "../Pages/Rating";
import Cards from "../Pages/cards/index";
import UserList from "../Pages/UserList";
import Buttons from "../Pages/buttons/index";
import PaginationInfo from "../Pages/PaginationInfo";
<<<<<<< HEAD
import Paginations from "../Pages/paginations";
import Accordion from "../Pages/accordion";
import LandingPage from "../Pages/landingPage";
=======
import Progress from "../Pages/progress/index";

>>>>>>> 00088e0ccdc30e13016cf400556a5a3c3bb551e0

function MainRoutes() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/components/dialog-info" element={<DialogInfo />} />
      <Route path="/components/alert" element={<AlertInfo />} />
      <Route path="/components/switches" element={<Switches />} />
      <Route path="/components/ratings" element={<Rating />} />
      <Route path="/components/cards" element={<Cards />} />
      <Route path="/components/tables" element={<UserList />} />
      <Route path="/components/pagination" element={<Paginations />} />
      <Route path="/components/buttons" element={<Buttons />} />
      <Route path="/components/accordion" element={<Accordion />} />
      <Route path="/landingPage" element={<LandingPage/>}/>
=======
      <Route path="/advance/dialog-info" element={<DialogInfo />} />
      <Route path="/advance/alert" element={<AlertInfo />} />
      <Route path="/advance/switches" element={<Switches />} />
      <Route path="/advance/ratings" element={<Rating />} />
      <Route path="/advance/cards" element={<Cards />} />
      <Route path="/advance/userlist" element={<UserList />} />
      <Route path="/advance/pagination" element={<PaginationInfo />} />
      <Route path="/advance/buttons" element={<Buttons />} />
      <Route path="/advance/progress" element={<Progress/>} />
>>>>>>> 00088e0ccdc30e13016cf400556a5a3c3bb551e0
    </Routes>
  );
}

export default MainRoutes;
