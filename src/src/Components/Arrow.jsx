import React from "react";

function Arrow({direction , handleClick}) {
  return (
    <div className="arrow-wrapper" onClick={handleClick}>
      <div className="round">
        <div id="cta">
          <span className={`arrow ${direction}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Arrow;
