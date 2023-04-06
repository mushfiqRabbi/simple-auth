import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AllRoutes from "./routes/AllRoutes";

export default function App() {
  return (
    <div className="overflow-hidden h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<AllRoutes />} />
        </Route>
      </Routes>
    </div>
  );
}
