import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleIcon from "../../assets/home/google.svg";

const Container = styled.form`
  background-color: #b1cce7;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  width: fit-content;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 320px;
  padding: 1rem 1.5rem;
  margin: 1rem;
  font-size: 0.8rem;
  border: none;
  border-radius: 8px;
  display: block;
`;

const Submit = styled.button`
  border: none;
  margin: auto;
  width: 60%;
  border-radius: 16px;
  background-color: #3673b0;
  padding: 1rem 0.5rem;
  font-size: 0.8rem;
  letter-spacing: 1.4px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`;

const Google = styled.img`
  cursor: pointer;
`;

const Text = styled.p``;

const Form = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) window.location.href = "/dashboard";
  }, [user, loading]);

  const handleChange = (type, e) => {
    setData({ ...data, [type]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    logInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Google
        onClick={signInWithGoogle}
        src={GoogleIcon}
        alt="login-with-google"
      />
      <Input
        type="email"
        placeholder="Enter your email"
        value={data.email}
        onChange={e => handleChange("email", e)}
      />
      <Input
        type="password"
        placeholder="Enter your passoword"
        value={data.password}
        onChange={e => handleChange("password", e)}
      />
      <Submit type="submit">LOGIN</Submit>
      <Text>
        Don't have an account <Link to="/signup">Sign-up</Link>
      </Text>
    </Container>
  );
};

export default Form;
