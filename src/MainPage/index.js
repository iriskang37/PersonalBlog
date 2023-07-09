import React from "react";
import styled from "styled-components";
import myphoto from "../images/myphoto.png";
import instagram from "../images/instagram.png";
import globe from "../images/globe.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-color: #ffe4e1;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 65%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px; 
`;

const Heading = styled.div`
  font-size: 60px;
  color: #866161;
  font-family: Pairfair Display;
  font-weight: 500;
`;

const RightContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 10px;
`;

const Image = styled.img`
  max-width: 70%;
  max-height: 70%;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-top: 30px;
  background-color: #C19C99;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 5px;
  margin-right: 10px;
`;

const Image2 = styled.img`
  max-width: 35%;
  max-height: 35%;
  filter: brightness(0) invert(1);
`;

const Image3 = styled.img`
  max-width: 35%;
  max-height: 35%;
  filter: brightness(0) invert(1);
`;

const Text = styled.div`
  font-size: 20px;
  color: #FFFFFF;
  margin-top: 10px;
  font-family: Pairfair Display;
  font-weight: 400;
  `;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 29px;
  background-color: #C19C99;
  top: -10px;
`;

const BottomLine = styled(Line)`
  top: unset;
  bottom: -10px;
`;

const Button = styled.button`
  font-size: 25px;
  width: 35%;
  color: white;
  background-color: #C19C99;
  padding: 9px;
  font-family: "Pairfair Display";
  font-weight: 500;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  transition: filter 0.3s ease, background-color 0.3s ease, color 0.3s ease; 
  
  &:hover {
    filter: grayscale(0%);
    background-color: #ffe4e1;
    color: #866161;
    font-family: "Pairfair Display";
  }
`;

const SubText = styled.div`
  font-size: 24px;
  color: #866161;
  font-family: Pairfair Display;
  font-weight: 400;
  margin-top: 25px;
  padding-left: 45px;
  padding-right: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MainPage() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/learnmorepage");
  };
  return (
    <Container>
      <Line />
      <LeftContainer>
        <Heading>Hello, I am Iris Kang!</Heading>
        <SubText>I'm a student in KIS Jeju. I am passionate about architecture and design.</SubText>
        <ImageContainer>
          <IconContainer>
          <a href="https://sites.google.com/kis.ac/kang-jimin-2027/home" target="_blank">
            <Image2 src={globe} alt="Growth Portfolio" />
          </a>
            <Text>Growth Portfolio</Text>
          </IconContainer>
          <IconContainer>
          <a href="https://www.instagram.com/iris031517/" target="_blank">
            <Image3 src={instagram} alt="Instagram" />
          </a>
            <Text>Instagram</Text>
          </IconContainer>
        </ImageContainer>
        <Button onClick={handleLearnMore}>Learn More</Button>
      </LeftContainer>
      <RightContainer>
        <Image src={myphoto} alt="My Photo" />
      </RightContainer>
      <BottomLine />
    </Container>
  );
}

export default MainPage;
