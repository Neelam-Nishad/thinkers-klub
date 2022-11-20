import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Intro from "../Intro";
import Form from "./Form";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100vw;
  background-color: #204060;

  @media (max-width: 990px) {
    width: 100vw;
    overflow: hidden;
  }
`;

const InnerContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1280px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;

  @media (max-width: 990px) {
    box-sizing: border-box;
    width: 100vw;
    display: block;
    padding: 1rem;
  }
`;

const LeftContainer = styled.div`
  width: 60%;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Signup = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <Intro />
        </LeftContainer>
        <RightContainer>
          <Form />
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Signup;
