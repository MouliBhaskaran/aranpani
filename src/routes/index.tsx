import React from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { RouterProps } from "../shared/types/route.type";
import { AppRoutes } from "./routeConstants/appRoutes";
import AuthWrapper from "../views/Auth/AuthWrapper";
import isAuthenticated from "../shared/components/HOC/requireAuth";
import Home from "../views/Home/index";
import SideMenu from "../shared/components/SideMenu";

const AppRouter = () => {
  const routes: RouterProps[] = [
    { path: AppRoutes.AUTH, component: <AuthWrapper /> },
    { path: AppRoutes.HOME, component: isAuthenticated(<Home />) },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map(({ component, ...route }, index) => (
            <Route key={index} {...route} element={component} />
          ))}
          <Route path="*" element={<Navigate to={AppRoutes.PROJECTS} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
