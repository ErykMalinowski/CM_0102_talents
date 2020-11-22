import React from "react";
import Title from "./Title";
import styles from "./Player.module.css";

export default function Player() {
  return (
    <main className="container">
      <div className="content">
        <Title title="Player Details" />
        <p className={`${styles["player-details"]}`}>obrazek + button back do homepage na dole strony</p>
      </div>
    </main>
  );
}
