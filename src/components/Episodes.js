import React from "react";
import useType from "../hooks/useType";
import { filterTypeOfSeries } from "../utils/utils";
import Loader from "./Loader";
import Accordion from "./Accordion";

function Episodes({ type }) {
  const { response, loading, error } = useType(type);

  if (loading === true) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredData = filterTypeOfSeries(response, type);

  const seasonOne = filteredData.filter((item) => item.season.trim() === "1");
  const seasonTwo = filteredData.filter((item) => item.season.trim() === "2");
  const seasonThree = filteredData.filter((item) => item.season.trim() === "3");
  const seasonFour = filteredData.filter((item) => item.season.trim() === "4");
  const seasonFive = filteredData.filter((item) => item.season.trim() === "5");

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

export default Episodes;
