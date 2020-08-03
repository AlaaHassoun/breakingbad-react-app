import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const CharactersPage = React.lazy(() => import("./components/CharactersPage"));
const SingleCharacter = React.lazy(() => import("./components/SingleCharacter"));
const EpisodesPage = React.lazy(() => import("./components/EpisodesPage"));
const SingleEpisode = React.lazy(() => import("./components/SingleEpisode"));
const QuotesPage = React.lazy(() => import("./components/QuotesPage"));
const DeathsPage = React.lazy(() => import("./components/DeathsPage"));

function Loading() {
  return <p>Loading...</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/characters">
              <CharactersPage />
            </Route>

            <Route exact path="/episodes">
              <EpisodesPage type="episodes" />
            </Route>

            <Route exact path="/quotes">
              <QuotesPage type="quotes" />
            </Route>

            <Route exact path="/deaths">
              <DeathsPage type="deaths" />
            </Route>

            <Route exact path="/characters/:characterId">
              <SingleCharacter />
            </Route>

            <Route exact path="/episodes/:episodeId">
              <SingleEpisode />
            </Route>

            <Route path="*">{() => <p>404 page</p>}</Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
