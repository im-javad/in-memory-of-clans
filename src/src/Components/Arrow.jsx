import React from "react";

function Arrow({direction}) {
  return (
    <div className="arrow-wrapper">
      <div className="round">
        <div id="cta">
          <span className={`arrow ${direction}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Arrow;
