import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Player from "./components/Player";
import Form from "./components/Form";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/player/add">
          {/* <Form /> */}
        </Route>
        <Route path="/player/:playerId">
          {/* <Player /> */}
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
