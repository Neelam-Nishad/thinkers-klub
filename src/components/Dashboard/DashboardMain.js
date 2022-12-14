import React from 'react'
import styled from 'styled-components';
import BlocklyImg from "../assets/dashboard/blockly.jpeg"
import HtmlImg from "../assets/dashboard/html-css.jpeg";
import PythonImg from "../assets/dashboard/python.jpeg";
import CImg from "../assets/dashboard/cplus.jpeg";
import AndroidImg from "../assets/dashboard/android.jpeg";
import UnityImg from "../assets/dashboard/unity.jpeg";

const Container = styled.div`
`

const Greeting = styled.h3`
    text-align: right;
`

const BoxContaienr = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 30px;
    margin-top: 50px;
`

const BoxInnerContaiener = styled.div`
  width: 31%;
  cursor: pointer;
`;

const Box = styled.div`
  height: 200px;
  border-radius: 12px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
    border-radius: 12px;
`

const Type = styled.p`
    text-align: center;
    margin: 24px 0;
    font-size: 24px;
    color: grey;
`

const DashboardMain = ({ user }) => {
  return (
    <Container>
      <Greeting style={{ margin: "0" }}>Hi, Divyam</Greeting>
      <BoxContaienr>
        <BoxInnerContaiener
          onClick={() =>
            window.open(
              "https://coderedits.github.io/Block-Code-Editor/",
              "_blank"
            )
          }
        >
          <Box>
            <Image src={BlocklyImg} />
          </Box>
          <Type>Blockly</Type>
        </BoxInnerContaiener>
        <BoxInnerContaiener
          onClick={() =>
            window.open(
              "https://www.programiz.com/html/online-compiler/",
              "_blank"
            )
          }
        >
          <Box>
            <Image src={HtmlImg} />
          </Box>
          <Type>HTML and CSS</Type>
        </BoxInnerContaiener>
        <BoxInnerContaiener
          onClick={() =>
            window.open(
              "https://www.programiz.com/python-programming/online-compiler/",
              "_blank"
            )
          }
        >
          <Box>
            <Image src={PythonImg} />
          </Box>
          <Type>Python</Type>
        </BoxInnerContaiener>
        <BoxInnerContaiener
          onClick={() =>
            window.open(
              "https://www.programiz.com/cpp-programming/online-compiler/",
              "_blank"
            )
          }
        >
          <Box>
            <Image src={CImg} />
          </Box>
          <Type>C and C++</Type>
        </BoxInnerContaiener>
        <BoxInnerContaiener
          onClick={() =>
            window.open(
              "https://developer.android.com/studio?gclid=CjwKCAiAheacBhB8EiwAItVO28yM3SQlt9Yj1MM-jaIWxTq8HaK6qK9sI2Vn8CIkZZEuzIq-NwFP5BoCj0kQAvD_BwE&gclsrc=aw.ds",
              "_blank"
            )
          }
        >
          <Box>
            <Image src={AndroidImg} />
          </Box>
          <Type>Android Studio</Type>
        </BoxInnerContaiener>
        <BoxInnerContaiener
          onClick={() =>
            window.open(
              "https://unity.com/",
              "_blank"
            )
          }
        >
          <Box>
            <Image src={UnityImg} />
          </Box>
          <Type>Unity</Type>
        </BoxInnerContaiener>

        {/* <Box />
        <Box />
        <Box />
        <Box />
        <Box /> */}
      </BoxContaienr>
    </Container>
  );
};

export default DashboardMain