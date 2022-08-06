import styled from "styled-components";
import TiltProps from "react-parallax-tilt";

export const CardBox = styled.section`
  width: 100%;
  height: 90vh;
  background: linear-gradient(to bottom, rgba(230, 126, 22), rgb(238, 30, 30));
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

export const CardItem = styled(TiltProps)`
  background-color: white;
  width: 20%;
  height: 80%;
  box-shadow: 0px 0px 10px 3px grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
  padding: 0 20px;
  cursor: pointer;
  z-index: 60;
`;

export const CardTitle = styled.h1`
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardSubTitle = styled.h2`
  color: gray;
  opacity: 0.5;
  font-size: 10px;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 12px;
  font-family: "Noto Sans Myanmar", sans-serif;
  color: black;
  width: 95%;
  height: 60%;
  text-align: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CardButton = styled.button`
  width: 70px;
  height: 40px;
  color: white;
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;

  :hover {
    background-color: orange;
    color: black;
  }
`;
