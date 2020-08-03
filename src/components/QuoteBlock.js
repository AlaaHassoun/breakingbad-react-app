import React from "react";
import { Link } from "react-router-dom";

function QuoteBlock() {
  return (
    <div className="bb-quote bb-section">
      <div className="bb-quote__container bb-container">
        <div className="bb-quote__content">
          <h2 className="bb-heading">quotes</h2>
          <div className="bb-quote__quote">
            <span className="bb-quote__icon bb-quote__icon--left">,,</span>I am
            not in danger, Skyler. I am the danger!
            <span className="bb-quote__icon bb-quote__icon--right">,,</span>
            {/* <h2 className="bb-quote__author">Walter White</h2> */}
          </div>
          <Link className="bb-quote__link bb-link" to="/quotes">
            all quotes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuoteBlock;
