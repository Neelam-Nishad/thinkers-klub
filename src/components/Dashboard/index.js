import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import DashboardMain from "./DashboardMain";

const Container = styled.div`
  background-color: #e6eeff;
  min-height: 100vh;
  padding: 24px;
`;

const Dashboard = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log("here the user is ", user);
    setTimeout(() => {
      //   if (!user) window.location.href = "login";
    }, [2000]);
  }, [user]);

  return (
    <Container>
      {!user ? (
        <>
          Plese ..<Link to="/login">Login</Link>.. to access this page
        </>
      ) : (
        <DashboardMain user={user}/>
      )}
    </Container>
  );
};

export default Dashboard;
