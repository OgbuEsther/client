import React from "react";
import styled from "styled-components";
import Routes from "../AllRoutes/dashboardRoutes";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <Routes />
    </Container>
  );
};

export default Dashboard;
const Container = styled.div`
  display: flex;
`;
