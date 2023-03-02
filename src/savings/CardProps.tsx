import React from "react";
import styled from "styled-components";

interface props {
  h1: string;
  p: string;
  icn: string;
  naira: string;
  bg: string;
}

const CardProps: React.FC<props> = ({ h1, p, icn, naira, bg }) => {
  return (
    <div>
      <Container>
        <Card bg={bg}>
          <Icn></Icn>
          <h1>{h1} </h1>
          <p>{p}</p>
          <Naira>{naira} </Naira>
        </Card>
      </Container>
    </div>
  );
};

export default CardProps;

const Naira = styled.div``;

const Icn = styled.div``;

const Card = styled.div<{ bg: string }>`
  width: 350px;
  height: 300px;
  background-color: ${(props) => props.bg};
`;

const Container = styled.div``;
