import React from "react";
import {
  BtnContainer,
  Header,
  SubHeader,
  Button,
  OverButton,
} from "./Hero.Styled";
import { StyleLink } from "./Hero.Styled";
import { useInView } from "react-intersection-observer";
import { AiOutlineMessage } from "react-icons/ai";
function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div id="hero">
      <Header>This is Your Music World</Header>
      <SubHeader>You can listen your favourate musics</SubHeader>
      <BtnContainer>
        <StyleLink to="/">
          <Button border={true}>Listen</Button>
        </StyleLink>

        <Button ref={ref}>
          {inView ? (
            "Chat - Us"
          ) : (
            <OverButton
              drag
              dragConstraints={{
                top: -500,
                right: 0,
                bottom: 0,
                left: -1000,
              }}
              whileDrag={{ cursor: "grabbing" }}
            >
              <AiOutlineMessage />
            </OverButton>
          )}
        </Button>
      </BtnContainer>
    </div>
  );
}

export default Hero;
