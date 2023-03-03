import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Dashboard from "../DashBoard/Dashboard";
// import DashBoard from "../DashBoard/Dashboard";

import HomeScreen from "../HomeScreen/HomeScreen";
import SavingsDashboard from "../SavingsDashboard/SavingsDashboard";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/savings",
      element: <SavingsDashboard />,
    },
  ]);
  return element;
};

export default AllRoutes;
