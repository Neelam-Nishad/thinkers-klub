import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  width: 100%;
`;

const Name = styled.h1`
  font-size: 68px;
  color: #ffffff;
  margin: 0;
`;

const Des1 = styled.h2`
  font-size: 48px;
  color: #d8e6f3;
  margin: 0;
`;

const Des2 = styled.h3`
  color: #9dc0e1;
`;

const Intro = () => {
  return (
    <Container>
      <Name>Thinkers Klub</Name>
      <Des1>If you think, you can</Des1>
      <Des2>
        We are an innovation platform which offers research-based skilling
        programs. Our programs are scientifically designed for holistic
        cognitive development of kids aged 6-14 years. We provide kids a proper
        platform to develop their thinking, understanding, technical and logical
        skills.
      </Des2>
    </Container>
  );
};

export default Intro;
