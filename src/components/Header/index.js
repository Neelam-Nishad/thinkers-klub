import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

const Container = styled.div`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ffffff;
`;

const InnerContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
`;

const OrgName = styled.h1`
  font-size: 28px;
  color: #204060;
  margin: 0;
  font-weight: 700;
  cursor: pointer;
`;

const Button = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 24px;
  background-color: #3673b0;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  color: #ffffff;
  margin-left: auto;
`;

const Header = () => {
  const [user] = useAuthState(auth);

  const handleClick = () => {
    if (auth) {
      logout();
    }
    window.location.href = "/login";
  };

  return (
    <Container>
      <InnerContainer>
        <OrgName onClick={() => (window.location.href = "/")}>
          Thinkers Klub{" "}
        </OrgName>
        <Button onClick={handleClick}>{user ? "Logout" : "Login"}</Button>
      </InnerContainer>
    </Container>
  );
};

export default Header;
