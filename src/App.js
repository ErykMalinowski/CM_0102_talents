import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";

import firebase from "./firebase/firebase";

function App() {
  const db = firebase.firestore();

  const renderItems = (data) => {
    data.forEach((doc) => {
      console.log(doc.data()["surname"]);
    });
  };

  db.collection("talents")
    .get()
    .then((snapshot) => {
      renderItems(snapshot.docs);
    });

  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
