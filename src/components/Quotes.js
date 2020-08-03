import React from "react";
import useType from "../hooks/useType";
import { filterTypeOfSeries } from "../utils/utils";
import Loader from "./Loader";

function Quotes({ type }) {
  const { response, loading, error } = useType(type);

  if (loading === true) {
    return <Loader/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredData = filterTypeOfSeries(response, type);


  return (
    <div className="bb-quotes bb-section">
      <div className="bb-quotes__container bb-container">
        {filteredData && loading === false && (
          <div className="bb-quotes__content">
            {filteredData.map(({ author, quote, quote_id, series }, index) => (
              <div key={quote_id} className="bb-quotes__quote">
                <div className="bb-quotes__text">
                  <span className="bb-quotes__icon bb-quotes__icon--left">,,</span>
                  {quote}
                  <span className="bb-quotes__icon bb-quotes__icon--right">,,</span>
                  </div>
                <h2 className="bb-quotes__author">{author}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quotes;
