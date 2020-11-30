import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Form from "./components/Form";
import NoMatch from "./components/NoMatch";

import PlayersContextProvider from "./contexts/PlayersContext";

function App() {
  return (
      <Router>
        <PlayersContextProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/player/add">
              <Form />
            </Route>
            <Route path="/player/:playerId" render={(props) => 
              <Player {...props} />}>
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <Footer />
        </PlayersContextProvider>
      </Router>
  );
}

export default App;
