import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Player } from "./components/Player";
import { Form } from "./components/Form";
import { NoMatch } from "./components/NoMatch";

import PlayersContextProvider from "./contexts/PlayersContext";

function App() {
  return (
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <PlayersContextProvider>
                <Home />
              </PlayersContextProvider>
            </Route>
            <Route exact path="/player/add">
               <Form />
            </Route>
            <Route path="/player/:playerId" render={(props) => 
              <Player {...props} />}>
            </Route>
            <Route path="/404">
              <NoMatch />
            </Route>
            <Redirect to="/404" />`
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
