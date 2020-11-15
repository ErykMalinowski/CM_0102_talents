import React, { useContext } from "react";
import styles from "./Home.module.css";

import { PlayersContext } from "../contexts/PlayersContext"
import PlayerItem from "./PlayerItem";

export default function Home() {
  const { players, loading } = useContext(PlayersContext);

  console.log(players)

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.content__title}>Players</h2>
        <ul className={styles.players}>
          {loading ? (
            <li className={styles.loading}>Loading...</li>
          ) : players.length > 0 ? (
            players.map((player) => (
              <PlayerItem player={player} key={player.id} />
            ))
          ) : (
            <li className={styles.player}>
              <div className={styles.none}>No players found</div>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}