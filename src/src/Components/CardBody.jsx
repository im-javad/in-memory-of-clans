import React from "react";
import CardItem from "./CardItem";

function CardBody({ hero }) {
  const name = hero.name;

  return (
    <>
      <CardItem
        type={`clash-card__level clash-card__level--${hero.name}`}
        des={hero.level}
      />
      <CardItem
        type={"clash-card__unit-name"}
        des={`The ${name.charAt(0).toUpperCase() + name.slice(1)}`}
      />
      <CardItem type={"clash-card__unit-description"} des={hero.description} />
    </>
  );
}

export default CardBody;
