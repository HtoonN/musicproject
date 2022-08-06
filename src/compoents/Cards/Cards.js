import React from "react";

import {
  CardButton,
  CardItem,
  CardSubTitle,
  CardText,
  CardTitle,
} from "./Cards.Style";

function Cards(props) {
  return (
    <CardItem className="Tilt" options={{ max: 15, scale: 1.01, speed: 200 }}>
      <CardTitle>{props.data.title}</CardTitle>
      <CardSubTitle>{props.data.subtitle}</CardSubTitle>
      <CardText>{props.data.text}</CardText>
      <CardButton>More</CardButton>
    </CardItem>
  );
}

export default Cards;
