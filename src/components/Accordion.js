import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";

function Accordion({ type, seasons, filteredData, loading }) {
  const [seasonIndex, setSeasonIndex] = useState(-1);

  const handleOpenSeason = (id) => {
    setSeasonIndex(id);
  };

  const handleCloseSeason = () => {
    setSeasonIndex(-1);
  };

  return (
    <div className="bb-seasons bb-section">
      <div className="bb-seasons__container bb-container">
        {filteredData && loading === false && (
          <div className="bb-seasons__content">
            {seasons.map(({ season_id, episodes }) => (
              <div className="bb-seasons__season-wrapper" key={season_id}>
                <div className="bb-seasons__season-number">
                  <h2 className="bb-seasons__season-title">{`season${season_id}`}</h2>
                  {seasonIndex === season_id ? (
                    <FaChevronUp
                      onClick={handleCloseSeason}
                      className="bb-seasons__arrow-icon"
                    />
                  ) : (
                    <FaChevronDown
                      onClick={() => handleOpenSeason(season_id)}
                      className="bb-seasons__arrow-icon"
                    />
                  )}
                </div>
                <ul
                  className={
                    seasonIndex === season_id
                      ? `bb-seasons__list`
                      : `bb-seasons__list bb-seasons__list--d-none`
                  }
                >
                  {episodes.map((episode) => (
                    <li
                      className="bb-seasons__item"
                      key={
                        type === "episodes"
                          ? episode.episode_id
                          : episode.death_id
                      }
                    >
                      {type === "episodes" ? (
                        <div className="bb-seasons__description">
                          <h2 className="bb-seasons__sub-title">
                            {`episode${episode.episode}: ${episode.title}`}
                          </h2>
                          <Link
                            className="bb-seasons__link"
                            to={`/episodes/${episode.episode_id}`}
                          >
                            <FaArrowRight className="bb-seasons__icon" />
                          </Link>
                        </div>
                      ) : (
                        <h2 className="bb-seasons__sub-title">
                          {`episode${episode.episode}: ${episode.death} ${episode.cause} responsible ${episode.responsible}`}
                        </h2>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
