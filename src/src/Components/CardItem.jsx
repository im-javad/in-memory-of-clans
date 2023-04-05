import React from "react";

function CardItem({ type, des }) {
  return <div className={type}>{des}</div>;
}

export default CardItem;
