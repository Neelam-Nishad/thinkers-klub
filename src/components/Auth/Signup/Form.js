import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase";
import GoogleIcon from "../../assets/home/google.svg";

const Container = styled.form`
  background-color: #b1cce7;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 300px;
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
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [user, loading, error] = useAuthState(auth);

  const handleChange = (type, event) => {
    setData({ ...data, [type]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (data.password === data.password2) alert("passwords are not matching");
    if (!data.name || !data.password) alert("Please enter all the details");
    registerWithEmailAndPassword(data.name, data.email, data.password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) window.location.href = "./dashboard";
  }, [user, loading]);

  return (
    <Container onSubmit={handleSubmit}>
      <Google
        onClick={signInWithGoogle}
        src={GoogleIcon}
        alt="Sigbin with google"
      />
      <Input
        type="text"
        placeholder="Enter your name"
        value={data.name}
        onChange={e => handleChange("name", e)}
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
      <Input
        type="password"
        placeholder="Confirm Password"
        value={data.password2}
        onChange={e => handleChange("password2", e)}
      />
      <Submit type="submit">SIGNUP</Submit>
      <Text>
        Already have an account <Link to="/login">login</Link>
      </Text>
    </Container>
  );
};

export default Form;
