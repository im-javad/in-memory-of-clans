import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { Dna } from "react-loader-spinner";

function Slide(props) {
  const [heroes, setHeroes] = useState([]);
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/heroes")
      .then((response) => response.json())
      .then((result) => setHeroes(result));
  }, []);

  function handlePrev() {
    const current = carousel - 1 < 0 ? heroes.length - 1 : carousel - 1;

    setCarousel(current);
  }

  function handleNext() {
    const current = carousel + 1 > heroes.length - 1 ? 0 : carousel + 1;

    setCarousel(current);
  }

  return (
    <div className="slide-container">
      <div className="wrapper">
        {!heroes.length ? (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : (
          <>
            <Arrow direction={"prev"} handleClick={handlePrev} />

            <Card hero={heroes[carousel]} />

            <Arrow direction={"next"} handleClick={handleNext} />
          </>
        )}
      </div>
    </div>
  );
}

export default Slide;
