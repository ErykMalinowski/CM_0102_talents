import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Player from "./components/Player";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/:playerId" component={Player} />
      <Route exact path="/player/add" component={Form} />
    </Router>
  );
}

export default App;
