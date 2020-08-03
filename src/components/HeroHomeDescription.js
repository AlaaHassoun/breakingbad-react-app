import React from "react";
import { Link } from "react-router-dom";

function HeroHomeDescription() {
  return (
    <div className="bb-hero__content">
      <div className="bb-hero__title">
        <div className="bb-hero__line">
          <span className="bb-hero__colored">br</span>eaking
        </div>
        <div className="bb-hero__line">
          <span className="bb-hero__colored">ba</span>d
        </div>
      </div>
      <p className="bb-hero__description">
        A high school chemistry teacher diagnosed with inoperable lung cancer
        turns to manufacturing and selling methamphetamine in order to secure
        his family's future.
      </p>
      <div className="bb-hero__links">
        <Link className="bb-hero__link bb-link" to="/episodes">
          all episodes
        </Link>
        <Link className="bb-hero__link bb-link bb-link--no-border " to="/characters">
          view characters
        </Link>
      </div>
    </div>
  );
}

export default HeroHomeDescription;
