import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Intro from "../Intro";
import Form from "./Form";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100vw;
  background-color: #204060;
`;

const InnerContainer = styled.div`
  margin: auto;
  max-width: 1280px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 60%;
`;

const RightContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
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

export default Login;
