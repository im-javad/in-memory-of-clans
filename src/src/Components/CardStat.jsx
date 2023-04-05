import React from "react";

function CardStat({ noBorder, stat, statValue }) {
  let className = "one-third";
  if (noBorder) className += " no-border";
  return (
    <div className={className}>
      <div className="stat">{stat}</div>
      <div className="stat-value">{statValue}</div>
    </div>
  );
}

export default CardStat;
