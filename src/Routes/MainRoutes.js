import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword"
import UserList from "../Pages/UserList";
import Buttons from '../Pages/Buttons';
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
            </Routes>
        </div>
    )
}

export default MainRoutes