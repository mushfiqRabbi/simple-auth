import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import NotFound from "./NotFound";

export default function AllRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
