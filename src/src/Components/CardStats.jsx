import React from "react";
import CardStat from "./CardStat";

function CardStats(props) {
  return (
    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
      <CardStat type={"one-third"} stat={20} statValue={"Training"} />
      <CardStat type={"one-third"} stat={16} statValue={"Speed"} />
      <CardStat type={"one-third no-border"} stat={150} statValue={"Cost"} />
    </div>
  );
}

export default CardStats;
