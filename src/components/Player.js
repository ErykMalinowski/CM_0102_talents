import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import styles from "./Player.module.css";

import loader from '../images/loader.gif';

import {db} from "../firebase/firebase";

export default function Player(props) {
  const [url, setUrl] = useState("");
  const playerId = props.match.params.playerId;

  useEffect(() => {
    const fetchData = async() => {
      const player = await db.collection('talents').doc(playerId).get();
      setUrl(player.data().image);
    }

    fetchData()
  }, [playerId])

  return (
    <main className="container">
      <div className="content">
        <Title title="Player Details" />
        <div className={styles.img}>
          {url ? <img src={url} alt="" /> : <img src={loader} className={styles.loader} alt="" /> }
        </div>
        <Link to="/" className={styles.btn}>Back</Link>
      </div>
    </main>
  );
}
