import React, { useContext } from "react";
import styles from "./Players.module.css";
import PlayersContext from "../contexts/PlayersContext";

export default function Players() {
  const data = useContext(PlayersContext);

  return (
    <ul className={styles.players}>
      {/* {data.error ? <p>Ops, there is an error :(</p> : null} */}
      {data.loading ? (
        <li className={styles.player}>Loading...</li>
      ) : (
        data.players.map((player) => (
          <li key={player.id} className={styles.player}>
            <div className={styles.player__name}>{player.name}</div>
            <div className={styles.player__club}>{player.club}</div>
            <div className={styles.player__position}>{player.position}</div>
          </li>
        ))
      )}
    </ul>
  );
}
