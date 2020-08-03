import React from "react";
import Layout from "./Layout";
import Characters from "./Characters";
import castImg from '../images/cast.jpg';

function CharactersPage() {

  return (
    <Layout page="characters" background={castImg} title="characters">
      <Characters type="characters" page="characters" />
    </Layout>
  );
}

export default CharactersPage;
