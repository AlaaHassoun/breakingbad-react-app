import React from "react";

function StatisticsBlock() {
  return (
    <div className="bb-statistics bb-section">
      <div className="bb-statistics__container bb-container">
        <ul className="bb-statistics__list">
          <li className="bb-statistics__item">
            <span className="bb-statistics__count">57</span>
            <div className="bb-statistics__divider"></div>
            <h2 className="bb-statistics__title">characters</h2>
          </li>
          <li className="bb-statistics__item">
            <span className="bb-statistics__count">62</span>
            <div className="bb-statistics__divider"></div>
            <h2 className="bb-statistics__title">episodes</h2>
          </li>
          <li className="bb-statistics__item">
            <span className="bb-statistics__count">84</span>
            <div className="bb-statistics__divider"></div>
            <h2 className="bb-statistics__title">quotes</h2>
          </li>
          <li className="bb-statistics__item">
            <span className="bb-statistics__count">271</span>
            <div className="bb-statistics__divider"></div>
            <h2 className="bb-statistics__title">deaths</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StatisticsBlock;
