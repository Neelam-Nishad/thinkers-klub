import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

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
        <>Hey YOU are on Dashboard</>
      )}
    </Container>
  );
};

export default Dashboard;
