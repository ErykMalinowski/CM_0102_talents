import React, { useState, useEffect } from "react";
import styles from "./Players.module.css";

import firebase from "../firebase/firebase";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const db = firebase.firestore();

  useEffect(() => {
    db.collection("talents")
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
    <ul className={styles.players}>
      {error ? <p>Ops, there is an error :(</p> : null}
      {loading ? (
        <li className={styles.player}>Loading...</li>
      ) : (
        players.map((player) => (
          <li key={player.id} className={styles.player}>
            {player.surname}
            {player.name !== "" && `, ${player.name}`}
            {player.club}
            {player.position}
          </li>
        ))
      )}
    </ul>
  );
}
