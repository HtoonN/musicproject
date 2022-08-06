import styled from "styled-components";
import { motion } from "framer-motion";

export const ContantContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  background-color: rgba(230, 126, 22);
  padding: 0 10%;
`;

export const ContantText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px;
`;

export const Title = styled(motion.h2)`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  color: rgba(248, 246, 244, 0.788);
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const Text = styled.p`
  font-size: 17px;
`;

export const ImgBox = styled(motion.img)`
  width: 350px;
  height: 200px;
  background-size: cover;
  margin: 50px;
  border-radius: 20px;
  box-shadow: 0px 6px 10px 3px rgba(20, 11, 2, 0.199);
`;

export const CardBox = styled.div`
  width: 100%;
  height: 90vh;
  background-color: black;
  color: white;
`;
