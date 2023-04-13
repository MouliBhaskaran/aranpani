import React from "react";
import { FC, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import isAuthenticated from "../shared/components/HOC/requireAuth"; //  HOC
import Home from "../views/Home";
import Login from "../views/Login/Login";


export const appHistory = createBrowserHistory();

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/" element={isAuthenticated(<Home />)} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
