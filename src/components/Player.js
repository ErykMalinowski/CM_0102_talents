import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Title } from "./Title";
import styles from "./Player.module.css";

import loader from '../images/placeholder.png';

import { db } from "../firebase/firebase";

export const Player = (props) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const playerId = props.match.params.playerId;

  useEffect(() => {
    const fetchData = async() => {
      const player = await db.collection('talents').doc(playerId).get();
      
      player.data() ? setUrl(player.data().image) : setError(true);
    }

    fetchData()
  }, [playerId])

  return (
    <main className="container">
      <div className="content">
        <Title title="Player Details" />
        <div className={styles.img}>
          {url ? <img src={url} alt="" /> : (error ? <Redirect to="/404" /> : <img src={loader} alt="" />) }
        </div>
        <Link to="/" className={styles.btn}>Back</Link>
      </div>
    </main>
  );
}
