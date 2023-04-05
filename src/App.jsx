import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
