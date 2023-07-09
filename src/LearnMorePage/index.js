import React from "react";
import styled from "styled-components";
import Graduation from "../images/Graduation.jpg";
import { ProgressBar } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffe4e1;
  padding-bottom: 60px;
`;

const BottomContainer = styled.div`
  background-color: #c19c99;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading2Container = styled.div`
  font-size: 60px;
  color: white;
  font-family: Pairfair Display;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 25px;
`;

const HeadingContainer = styled.div`
  background-color: #c19c99;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  font-size: 60px;
  color: white;
  font-family: Pairfair Display;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const LeftContainer = styled.div`
  width: 40%;
  text-align: center;
  margin-top: 55px;
  justify-content: center;
  padding-bottom: 30px;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-right: 15px;
    margin-left: 10px;
    border: 13px solid #c19c99;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 55px;
  margin-right: 60px;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 27px;
  color: #866161;
  font-family: Pairfair Display;
  font-weight: 500;
  word-break: break-word;
`;

const SubText = styled.div`
  font-size: 23px;
  color: #866161;
  font-family: Pairfair Display;
  margin-top: 20px;
`;

const SubText2 = styled.div`
  font-size: 17px;
  color: #563f3f;
  font-family: Pairfair Display;
  margin-top: 35px;
  margin-bottom: 5px;
  & > div + div {
    margin-top: 10px;
  }
`;

const EducationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EducationLabel = styled.div`
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px; /* Decrease the margin bottom */
`;

function LearnMorePage() {
  const BarStyle = {
    width: "300px",
    height: "30px",
    backgroundColor: "#ffe4e1",
    fontSize: "16px"
  };

  return (
    <div>
      <Container>
        <TopContainer>
          <HeadingContainer>
            <Heading>About Me</Heading>
          </HeadingContainer>
          <div style={{ display: "flex", width: "100%" }}>
            <LeftContainer>
              <img src={Graduation} alt="Graduation" />
            </LeftContainer>
            <RightContainer>
              <Text>
                My name is Iris (Jimin) Kang. I am a rising 9th grader in KIS Jeju.
              </Text>
              <SubText>
                I am passionate about architecture and design. I am also a skier. Some of my hobbies are reading, painting, and playing the violin.
              </SubText>
              <SubText2>
                <div>Name: Iris (Jimin) Kang</div>
                <div>Email: jmkang27@kis.ac & iriskang37@gmail.com</div>
                <div>Phone: 010-7708-8856</div>
                <div>Date of Birth: 17 March 2008</div>
                <div>Age: 15</div>
                <div>Nationality: Korea</div>
              </SubText2>
            </RightContainer>
          </div>
        </TopContainer>
        <BottomContainer>
          <Heading2Container>
            <Heading style={{ margin: "0 auto" }}>Education</Heading>
          </Heading2Container>
          <BarWrapper>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "-10px" }}>
              <span style={{ padding: "10px", fontSize: "23px", color: "#795757", fontFamily: "Pairfair Display", margin: "14px" }}>GPA</span>
              <ProgressBar
                style={BarStyle}
                label={<span style={{ fontFamily: "Pairfair Display" }}>5.0/5.0</span>}
                max={5.0}
                min={0.0}
                now={5.0}
              />
            </div>
          </BarWrapper>
          <BarWrapper>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "-5px" }}>
              <span style={{ padding: "10px", fontSize: "23px", color: "#795757", fontFamily: "Pairfair Display", margin: "14px", bottommargin: "-15px" }}>SAT</span>
              <ProgressBar
                style={BarStyle}
                label={<span style={{ fontFamily: "Pairfair Display" }}>1580/1600</span>}
                max={1600}
                min={0}
                now={1600}
              />
            </div>
          </BarWrapper>
          <BarWrapper>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ padding: "10px", fontSize: "23px", color: "#795757", fontFamily: "Pairfair Display" }}>TOEFL</span>
              <ProgressBar
                style={BarStyle}
                label={<span style={{ fontFamily: "Pairfair Display" }}>120/120</span>}
                max={120}
                min={0}
                now={120}
              />
            </div>
          </BarWrapper>
        </BottomContainer>
      </Container>
    </div>
  );
}

export default LearnMorePage;
