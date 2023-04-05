import React from "react";
import CardImg from "./CardImg";
import CardStats from "./CardStats";
import CardBody from "./CardBody";

function Card({ hero }) {
  return (
    <div className={`clash-card ${hero.name}`}>
      <CardImg char={hero.name} />

      <CardBody hero={hero} />

      <CardStats units={hero.units} name={hero.name} />
    </div>
  );
}

export default Card;
