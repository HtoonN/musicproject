import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = styled.div`
  color: White;
  text-align: center;
  width: 100%;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const SubHeader = styled.div`
  color: whitesmoke;
  opacity: 0.7;
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 80px;
`;

export const Button = styled.span`
  background-color: ${({ border }) => (border ? "" : "rgb(236, 155, 61,.5)")};
  border-radius: 10px;
  padding: 15px 42px;
  border: ${({ border }) =>
    border ? "0.5px solid rgb(236, 155, 61)" : "none"};
  margin: 0 5px;
  color: white;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-out;
    color: black;
    background-color: rgb(248, 244, 240, 0.7);
    border: ${({ border }) =>
      border ? "0.5px solid  rgb(248, 244, 240,)" : ""};
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
`;

export const OverButton = styled(motion.button)`
  width: 80px;
  height: 80px;
  border: 1px solid whitesmoke;
  position: fixed;
  top: 80vh;
  left: 90vw;
  border-radius: 50px;
  background-color: whitesmoke;
  color: grey;
  font-size: 40px;
  text-align: center;
  padding: 8px 0 0 0;
  box-shadow: 0 0px 7px 2px grey;
  z-index: 100;

  :hover {
    box-shadow: 0 0px 7px 4px whitesmoke;
  }
`;
