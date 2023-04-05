import React from "react";
import CardImg from "./CardImg";
import CardStats from "./CardStats";
import CardBody from "./CardBody";

function Card() {
  return (
    <div className="clash-card barbarian">
      <CardImg char={"barbarian"} />

      <CardBody />

      <CardStats />
    </div>
  );
}

export default Card;
