import {
  ContantContainer,
  ContantText,
  Title,
  SubTitle,
  Text,
  ImgBox,
} from "./Contant.Style";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import React from "react";

function Contant(props) {
  const initial = { opacity: 0, x: 100 };
  const transition = { delay: 0.1, duration: 0.7 };
  const animation = useAnimation();
  const animation2 = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
      });

      return;
    }

    animation.start({
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.2,
      },
    });
  }, [inView, animation]);

  useEffect(() => {
    if (inView) {
      animation2.start({
        opacity: 1,
        x: 0,
      });

      return;
    }

    animation2.start({
      opacity: 0,
      x: -300,
      transition: {
        duration: 0.2,
      },
    });
  }, [inView, animation2]);

  return (
    <ContantContainer reverse={props.data.reverse} ref={ref}>
      <ContantText
        initial={{ opacity: 0, x: -300 }}
        transition={transition}
        animate={animation2}
      >
        <Title>{props.data.title}</Title>
        <SubTitle>{props.data.subTitle}</SubTitle>
        <Text>{props.data.contant}</Text>
      </ContantText>
      <ImgBox
        alt="this is photo"
        src={props.data.image}
        initialinitial={initial}
        transition={transition}
        animate={animation}
      ></ImgBox>
    </ContantContainer>
  );
}

export default Contant;
