import React from "react";
import Nav from "./Nav";
import HeroHomeDescription from "./HeroHomeDescription";

function Hero({ page, background, title }) {
  return (
    <div className="bb-hero">
      <div className="bb-hero__container bb-container">
        <Nav />
        {page === "home" && <HeroHomeDescription />}
        {page !== "home" && <h2 className="bb-hero__heading">{title}</h2>}
      </div>
      <img className="bb-hero__bg" src={background} alt={title} />
    </div>
  );
}

export default Hero;
