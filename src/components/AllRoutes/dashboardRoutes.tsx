import React from "react";
import { useRoutes } from "react-router-dom";
import Savings from "../../savings/Savings";
import Home from "../DashBoard/Home";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/savings",
      element: <Savings />,
    },
  ]);

  return <div>{element} </div>;
};

export default Routes;
