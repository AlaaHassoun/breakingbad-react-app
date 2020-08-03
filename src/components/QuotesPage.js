import React from "react";
import Layout from "./Layout";
import Quotes from "./Quotes";
import qImg from "../images/ww-jp-2.webp";

function QuotesPage() {
  return (
    <Layout page="quotes" background={qImg} title="quotes">
      <Quotes type="quotes" page="quotes" />
    </Layout>
  );
}

export default QuotesPage;
