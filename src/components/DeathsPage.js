import React from "react";
import Layout from "./Layout";
import Deaths from "./Deaths";
import dImg from "../images/ww-jp-6.jpg";

function DeathsPage() {
  return (
    <Layout page="deaths" background={dImg} title="deaths">
      <Deaths type="deaths" page="deaths" />
    </Layout>
  );
}

export default DeathsPage;
