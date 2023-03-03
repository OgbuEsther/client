import React from "react";
import { useRoutes } from "react-router-dom";
import Create from "./Create/Create";
import Dashboard from "./DashBoard/Dashboard";

import Homescreen from "./HomeScreen/HomeScreen";
import Login from "./Login/Login";
import Flex from "./SavingsDashboard/Flex";
import Piggybank from "./SavingsDashboard/Piggybank";
import Safelock from "./SavingsDashboard/Safelock";
import SavingsDashboard from "./SavingsDashboard/SavingsDashboard";
import Target from "./SavingsDashboard/Target";

const Allroute = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/signup",
      element: <Create />,
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
      children: [
        {
          index: true,
          element: <SavingsDashboard />,
        },
        {
          path: "/savings/piggybank",
          element: <Piggybank />,
        },
        {
          path: "/savings/flex",
          element: <Flex />,
        },
        {
          path: "/savings/safelock",
          element: <Safelock />,
        },
        {
          path: "/savings/target",
          element: <Target />,
        },
      ],
    },
  ]);
  return element;
};

export default Allroute;
