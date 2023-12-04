import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword"
import UserList from "../Pages/UserList";
import Buttons from '../Pages/buttons/index';
<<<<<<< HEAD
import Switches from '../Pages/switches';
import Ratings from '../Pages/rating';
=======
import Cards from '../Pages/cards/index';


>>>>>>> 9f4d89e6fe7323b7bd7cba3f19c07845444c4136
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                {/* <Route path="/" index element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} /> */}
                {/* <Route path="/users" element={<UserList />} /> */}
                <Route path="/" index element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/buttons" element={<Buttons />} />
<<<<<<< HEAD
                <Route path="/switch" element={<Switches />} />
                <Route path="/ratings" element={<Ratings />} />
=======
                <Route path="/cards" element={<Cards />} />
>>>>>>> 9f4d89e6fe7323b7bd7cba3f19c07845444c4136
            </Routes>
        </div>
    )
}

export default MainRoutes