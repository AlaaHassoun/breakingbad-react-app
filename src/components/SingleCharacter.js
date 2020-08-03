import React from "react";
import { useParams } from "react-router-dom";
import useType from "../hooks/useType";
import Layout from "./Layout";
import Loader from "./Loader";

function SingleCharacter() {

  const { characterId } = useParams();
  const { response, loading, error } = useType("characters", characterId);

  if (loading === true) {
    return <Loader/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout page="characters" background={response[0].img} title={response[0].name}>
      <div className="bb-character bb-section">
        <div className="bb-character__container bb-container">
          {response.map(
            ({
              appearance,
              birthday,
              category,
              char_id,
              img,
              name,
              nickname,
              occupation,
              portrayed,
              status,
            }) => (
              <div className="bb-character__content" key={char_id}>
                <div className="bb-character__column bb-character__column--left">
                  <img className="bb-character__img" src={img} alt={name} />
                </div>
                <div className="bb-character__column bb-character__column--right">
                  <div className="bb-character__info">
                    <ul className="bb-character__list">
                      <li className="bb-character__item">{`Name : ${name}`}</li>
                      <li className="bb-character__item">{`Nickname : ${nickname}`}</li>
                      <li className="bb-character__item">{`Portrayed : ${portrayed}`}</li>
                      {birthday !== "Unknown" && (
                        <li className="bb-character__item">{`Birthday : ${birthday}`}</li>
                      )}
                      <li className="bb-character__item">
                        {`Occupation : `}
                        {occupation.map((item, index, arr) => {
                          return index === arr.length - 1 ? (
                            <span key={index}>{` ${item}`}</span>
                          ) : (
                            <span key={index}>{` ${item} -`}</span>
                          );
                        })}
                      </li>
                      <li className="bb-character__item">{`Status : ${status}`}</li>
                      <li className="bb-character__item">
                        {`Appearance : `}
                        {appearance.map((item, index, arr) => {
                          return index === arr.length - 1 ? (
                            <span key={index}>{` ${item}`}</span>
                          ) : (
                            <span key={index}>{` ${item} -`}</span>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SingleCharacter;
