import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-color: #ffe4e1;
  display: flex;
  flex-direction: row;
`;

const RightContainer = styled.div`
  width: 50%;
  background-image: url("https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfHwwfHx8MA%3D%3D&amp;w=1000&amp;q=80");
  background-size: cover;
  background-position: 80% top;
`;

const LeftContainer = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 60px;
  color: #866161;
  font-family: Pairfair Display;
  font-weight: 500;
`;

const BoxContainer = styled.div`
  background-color: #cfa8a4;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 4px;
  width: 70%;
`;

const Label = styled.label`
  font-size: 25px;
  color: #422d2d;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 7px;
  font-family: Pairfair Display;
  font-weight: 500;
`;

const Input = styled.input`
  border: none;
  margin-top: 7px;
  border-radius: 4px;
  color: black;
  padding: 6px;
`;

const Label2 = styled.label`
  font-size: 25px;
  color: #422d2d;
  margin-right: 20px;
  margin-left: 20px;
  font-family: Pairfair Display;
  font-weight: 500;
  margin-bottom: 7px;
`;

const LabelWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

const LabelWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Input2 = styled.input`
  border: none;
  margin-bottom: 7px;
  border-radius: 4px;
  color: black;
  padding: 6px;
`;

const Button = styled.button`
  font-size: 25px;
  width: 35%;
  color: #422d2d;
  background-color: #cfa8a4;
  padding: 9px;
  font-family: Pairfair Display;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  transition: filter 0.3s ease, background-color 0.3s ease, color 0.3s ease; 
  
  &:hover {
    filter: grayscale(0%);
    background-color: #ffe4e1;
    color: #866161;
    font-family: "Pairfair Display";
  }
`;

function LoginPage() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const navigate =  useNavigate();

  const changeUserInput = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    console.log(user);
  };

  const verifyUserInformation = () => {
    if (user.id === "iriskang37" && user.password === "03kang17--") {
      navigate("/main");
    } else {
      alert("Wrong Id/Password");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Heading>Welcome to my page!</Heading>
        <BoxContainer>
          <LabelWrapper1>
            <Label>Id</Label>
            <Input
              type="text"
              name="id"
              value={user.id}
              onChange={changeUserInput}
            />
          </LabelWrapper1>
          <LabelWrapper2>
            <Label2>Password</Label2>
            <Input2
              type="password"
              name="password"
              value={user.password}
              onChange={changeUserInput}
            />
          </LabelWrapper2>
        </BoxContainer>
        <Button onClick={verifyUserInformation}>Login</Button>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Container>
  );
}

export default LoginPage;

