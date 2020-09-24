import React from "react";
import Players from "./Players";
import Searchbar from "./Searchbar";
import styles from "./Container.module.css";

export default function Container() {
  return (
    <div className={styles.container}>
      <Searchbar />
      <h2 className={styles.subtitle}>All Players</h2>
      <Players />
    </div>
  );
}
