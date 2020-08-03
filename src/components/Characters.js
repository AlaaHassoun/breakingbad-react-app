import React from "react";
import useType from "../hooks/useType";
import { filterTypeOfSeries } from "../utils/util";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import Loader from "./Loader";

function Characters({ type, page }) {
  const { response, loading, error } = useType(type);

  if (loading === true) {
    return <Loader/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredData = filterTypeOfSeries(response, type);

  return (
    <div className="bb-characters bb-section ">
      <div className="bb-characters__container bb-container">
        {page !== type && <h1 className="bb-heading">{type}</h1>}
        {filteredData && loading === false && (
          <ul className="bb-characters__list">
            {filteredData
              .slice(0, page === type ? filteredData.length : 3)
              .map((character) => {
                const { char_id, img, name } = character;
                let splitName = name.split(" ");
                let firstName = splitName[0];
                let lastName = splitName[1];

                return (
                  <li className="bb-characters__item" key={char_id}>
                    <img className="bb-characters__img" src={img} />
                    <h2 className="bb-characters__name">
                      <span className="bb-characters__firstname">
                        {firstName}
                      </span>
                      <span className="bb-characters__lastname">
                        {splitName.length > 2
                          ? lastName.concat(` ${splitName[2]}`)
                          : lastName}
                      </span>
                    </h2>
                    <Link
                      className="bb-characters__bg"
                      to={`/characters/${char_id}`}
                    >
                      <AiOutlinePlus className="bb-characters__icon" />
                    </Link>
                  </li>
                );
              })}
          </ul>
        )}
        {page !== type && (
          <Link className="bb-characters__link bb-link" to="/characters">
            all characters
          </Link>
        )}
      </div>
    </div>
  );
}

export default Characters;
