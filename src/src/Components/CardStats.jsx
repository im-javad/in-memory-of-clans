import React from "react";
import CardStat from "./CardStat";

function CardStats({ units , name }) {
  const stats = units.map((unit, index) => (
    <CardStat
      noBorder={index === units.length - 1}
      stat={unit.state}
      statValue={unit.value}
    />
  ));

  return (
    <div
      className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}
    >
      {stats}
    </div>
  );
}

export default CardStats;
