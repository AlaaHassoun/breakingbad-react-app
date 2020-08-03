import React from "react";
import useType from "../hooks/useType";
import { filterTypeOfSeries } from "../utils/utils";
import Loader from "./Loader";
import Accordion from "./Accordion";

function Deaths({ type }) {
  const { response, loading, error } = useType(type);

  if (loading === true) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredData = filterTypeOfSeries(response, type);

  const seasonOne = filteredData
    .filter((item) => item.season === 1)
    .sort((a, b) => a.death_id - b.death_id);
  const seasonTwo = filteredData
    .filter((item) => item.season === 2)
    .sort((a, b) => a.death_id - b.death_id);
  const seasonThree = filteredData
    .filter((item) => item.season === 3)
    .sort((a, b) => a.death_id - b.death_id);
  const seasonFour = filteredData
    .filter((item) => item.season === 4)
    .sort((a, b) => a.death_id - b.death_id);
  const seasonFive = filteredData
    .filter((item) => item.season === 5)
    .sort((a, b) => a.death_id - b.death_id);

  const seasons = [
    {
      season_id: 1,
      episodes: seasonOne,
    },
    {
      season_id: 2,
      episodes: seasonTwo,
    },
    {
      season_id: 3,
      episodes: seasonThree,
    },
    {
      season_id: 4,
      episodes: seasonFour,
    },
    {
      season_id: 5,
      episodes: seasonFive,
    },
  ];


  return (
    <Accordion type={type} seasons={seasons} loading={loading} filteredData={filteredData}/>
  );
}

export default Deaths;
