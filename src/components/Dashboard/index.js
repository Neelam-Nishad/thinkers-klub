import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

const Container = styled.div`
  background-color: pink;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dashboard = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) window.location.href = "login";
  }, []);

  return <Container>Dashboard</Container>;
};

export default Dashboard;
