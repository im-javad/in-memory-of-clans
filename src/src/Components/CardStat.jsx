import React from "react";

function CardStat({ type, stat, statValue }) {
  return (
    <div className={type}>
      <div className="stat">{stat}</div>
      <div className="stat-value">{statValue}</div>
    </div>
  );
}

export default CardStat;
