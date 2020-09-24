import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Container from "./Container";
import PlayersContext from "../contexts/PlayersContext";

import firebase from "../firebase/firebase";

export default function Main() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const db = firebase.firestore();

  useEffect(() => {
    db.collection("talents")
      .orderBy("name")
      .get()
      .then((response) => {
        const talents = [];
        response.docs.forEach((document) => {
          const talent = {
            id: document.id,
            ...document.data(),
          };
          talents.push(talent);
        });
        setPlayers(talents);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <PlayersContext.Provider value={{ players, error, loading }}>
        <Container />
      </PlayersContext.Provider>
    </main>
  );
}
