import React from "react";
import CardItem from "./CardItem";

function CardBody() {
  return (
    <>
      <CardItem
        type={"clash-card__level clash-card__level--barbarian"}
        des={"Level 4"}
      />
      <CardItem type={"clash-card__unit-name"} des={"The Barbarian"} />
      <CardItem
        type={"clash-card__unit-description"}
        des={`The Barbarian is a kilt-clad Scottish warrior with an angry,
        battle-ready expression, hungry for destruction. He has Killer yellow
        horseshoe mustache.`}
      />
    </>
  );
}

export default CardBody;
