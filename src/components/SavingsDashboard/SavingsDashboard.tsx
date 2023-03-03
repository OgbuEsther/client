import React from "react";
import styled from "styled-components";
import SideBar from "../SideBar";
// import SideBar from "../DashBoard/SideBar";

import Saving from "./Saving";

const SavingsDashboard = () => {
  return (
    <Container>
      <SideBar />
      {/* <SideBar /> */}
      {/* <Savings /> */}
      <Saving />
    </Container>
  );
};

export default SavingsDashboard;

const Container = styled.div`
  display: flex;
`;
