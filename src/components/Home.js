import React from "react";
import CharactersHomeBlock from "./CharactersHomeBlock";
import Layout from "./Layout";
import homeBg from '../images/ww-jp.jpg';
import StatisticsBlock from "./StatisticsBlock";
import QuoteBlock from "./QuoteBlock";

function Home() {
  return (
    <div className="bb-wrapper">
      <Layout page="home" background={homeBg}>
        <CharactersHomeBlock />
        <StatisticsBlock />
        <QuoteBlock/>
      </Layout>
    </div>
  );
}

export default Home;
