import React from "react";

function CardImg({ char }) {
  return (
    <div className={`clash-card__image clash-card__image--${char}`}>
      <img src={`./assets/${char}.png`} alt={char} />
    </div>
  );
}

export default CardImg;
