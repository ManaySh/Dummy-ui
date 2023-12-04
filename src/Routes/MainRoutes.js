import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogInfo from "../Pages/DialogInfo";
import AlertInfo from "../Pages/AlertInfo";
import Switches from "../Pages/Switches";
import Rating from "../Pages/Rating";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/advance/dialog-info" element={<DialogInfo />} />
      <Route path="/advance/alert" element={<AlertInfo />} />
      <Route path="/advance/switches" element={<Switches />} />
      <Route path="/advance/ratings" element={<Rating />} />
    </Routes>
  );
}

export default MainRoutes;
