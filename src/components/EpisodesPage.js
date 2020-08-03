import React from "react";
import Layout from "./Layout";
import Episodes from "./Episodes";
import eImg from "../images/ww-jp-7.jpg";

function EpisodesPage() {
  return (
    <Layout page="episodes" background={eImg} title="episodes">
      <Episodes type="episodes" page="episodes" />
    </Layout>
  );
}

export default EpisodesPage;
