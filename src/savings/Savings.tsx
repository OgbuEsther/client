import React from "react";
import styled from "styled-components";

const Savings = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h1>Savings </h1>
            <p>Let's see how well you're doing.</p>
          </Top>
          <Middle>
            <One>
              <p>Total Balance</p>
              <h1>₦0.00</h1>
            </One>
            <Two></Two>
          </Middle>
          <Third></Third>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Savings;

const One = styled.div`
  width: 70%;
  height: 70px;
  border: 1px solid gray;

  p {
    color: #718096;
    /* line-height: 24px; */
    font-size: 18px;
    font-weight: 400;
  }
`;

const Two = styled.div``;

const Third = styled.div``;

const Middle = styled.div``;

const Top = styled.div`
  margin-right: 190px;
  h1 {
    margin: 0;
    font-family: U8, sans-serif;
    font-weight: 700;
    font-size: 30px;
    /* line-height: 45px; */
    color: #000000;
  }

  p {
    color: #718096;
    /* line-height: 24px; */
    font-size: 18px;
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
  /* background-color: aliceblue; */
`;

const Container = styled.div`
  width: calc(100% - 19%);
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-left: 290px;
  /* background-color: red; */
`;
