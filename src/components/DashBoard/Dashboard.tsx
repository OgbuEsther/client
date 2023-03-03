import React from "react";
import styled from "styled-components";
import Allroutes from "../Allroute";
import Homes from "./Homes";
// import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <Container>
      {/* <SideBar /> */}
      <Homes />
    </Container>
  );
};

export default Dashboard;
const Container = styled.div`
  display: flex;
`;
