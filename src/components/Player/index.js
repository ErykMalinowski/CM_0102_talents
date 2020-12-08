import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Title } from "../Title/index";
import styles from "./style.module.css";

import { Loader } from "../Loader/index"

import loader from '../../images/placeholder.png';

import { db } from "../../firebase/firebase";

export const Player = (props) => {
  const [imagePath, setImagePath] = useState("");
  const [error, setError] = useState(false);
  const playerId = props.match.params.playerId;

  useEffect(() => {
    const fetchData = async() => {
      const player = await db.collection('talents').doc(playerId).get();
      
      player.data() ? setImagePath(player.data().image) : setError(true);
    }

    fetchData()
  }, [playerId])

  return (
    <main className="container">
      <div className="content">
        <Title title="Player Details" />
        <div className={styles.img}>
          {imagePath ? <Loader src={imagePath} alt="player profile" /> : (error ? <Redirect to="/404" /> : <Loader src={loader} alt="loader" />) }
        </div>
        <Link to="/" className={styles.btn}>Back</Link>
      </div>
    </main>
  );
}
