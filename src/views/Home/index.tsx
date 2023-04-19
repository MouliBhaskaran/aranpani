import React from "react";
import { Route, Router, Routes, Navigate } from "react-router-dom";
import { AppRoutes } from "../../routes/routeConstants/appRoutes";
import Dashboard from "../Home/Dashboard";
import SideMenu from "../Home/SideMenu";
import "./home.scss";
import Projects from "./Projects";
import Donors from "./Donors";
import Payment from './Payment/Payment';
import Representative from "./Representative";
import InternalUsers from './InternalUsers/index';
import Subscriptions from "./Subscriptions";

const Home = (props: any) => {
  let navRoutes = [
    { path: AppRoutes.DASHBOARD, component: <Dashboard />},
    { path: AppRoutes.PROJECTS, component: <Projects /> },
    { path: AppRoutes.DONORS, component: <Donors />},
    { path: AppRoutes.REPRESENTATIVE, component: <Representative />},
    { path: AppRoutes.PAYMENT, component: <Payment />},
    { path: AppRoutes.INTERNAL_USERS, component: <InternalUsers /> },
    { path: AppRoutes.SUBSCRIPTION, component: <Subscriptions /> },
  ];

  return (
    <div>
      <SideMenu />
      <div className="home-pane">
        <Routes>
          {navRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Home;
