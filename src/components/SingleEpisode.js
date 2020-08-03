import React from "react";
import { useParams } from "react-router-dom";
import useType from "../hooks/useType";
import Layout from "./Layout";
import seImg from "../images/ww-jp-3.png";
import Loader from "./Loader";

function SingleEpisode() {
  const { episodeId } = useParams();
  const { response, loading, error } = useType("episodes", episodeId);

  if (loading === true) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      {response && loading === false && (
        <>
          {response.map(
            (
              { air_date, characters, episode, episode_id, season, title },
              index
            ) => (
              <Layout
                key={index}
                page="episodes"
                background={seImg}
                title={`season${season}, episode${episode}:`}
              >
                <div className="bb-episode bb-section">
                  <div className="bb-episode__container bb-container">
                    <div className="bb-episode__content">
                      <ul className="bb-episode__list">
                        <li className="bb-episode__item">
                          <h2 className="bb-episode__title">title :</h2>
                          <p className="bb-episode__description">{title}</p>
                        </li>
                        <li className="bb-episode__item">
                          <h2 className="bb-episode__title">release date :</h2>
                          <p className="bb-episode__description">{air_date}</p>
                        </li>
                        <li className="bb-episode__item">
                          <h2 className="bb-episode__title">season :</h2>
                            <p className="bb-episode__description">{season}</p>
                        </li>
                        <li className="bb-episode__item">
                          <h2 className="bb-episode__title">episode :</h2>
                          <p className="bb-episode__description">{episode}</p>
                        </li>
                        <li className="bb-episode__item">
                          <h2 className="bb-episode__title">characters :</h2>
                          {characters.map((character, index) => (
                              <p className="bb-episode__description" key={index}>
                                {character}
                              </p>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Layout>
            )
          )}
        </>
      )}
    </>
  );
}

export default SingleEpisode;
