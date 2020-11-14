import React, { useEffect, useState } from "react";

import styles from "./Main.module.css";
import Container from "./Container";
import PlayersContextProvider from "../contexts/PlayersContext";

export default function Main() {
  // const [players, setPlayers] = useState([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   db.collection("talents")
  //     .orderBy("name")
  //     .get()
  //     .then((response) => {
  //       const talents = [];
  //       response.docs.forEach((document) => {
  //         const talent = {
  //           id: document.id,
  //           ...document.data(),
  //         };
  //         talents.push(talent);
  //       });
  //       setPlayers(talents);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = db.collection('talents')
  //     .onSnapshot(snapshot => {
  //       console.log(snapshot)
  //       if (snapshot.size) {
  //         const temp = []
  //         snapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }))
  //         setPlayers(temp)
  //       }
  //       setLoading(false);
  //     })

  //   return () => {
  //     unsubscribe();
  //   }
  // }, [])

  return (
    <main className={styles.main}>
      <PlayersContextProvider>
        <Container />
      </PlayersContextProvider>
    </main>
  );
}
