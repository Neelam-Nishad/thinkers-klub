import React from "react";
import styled from "styled-components";
import Background from "../assets/home/background.jpg";

const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  min-height: 100vh;
  color: #ffffff;
`;

const Home = () => {
  return <Container>Heyyy I am home</Container>;
};

export default Home;
