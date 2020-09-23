import React from "react";
import Players from "./Players";
import styles from "./Container.module.css";

export default function Container() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>All Players</h2>
      <Players />
    </div>
  );
}
