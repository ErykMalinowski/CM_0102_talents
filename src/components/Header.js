import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Championship Manager 2001/02 Talents</h1>
      <h1 className={`${styles.title} ${styles["title--mobile"]}`}>
        CM 01/02 Talents
      </h1>
    </header>
  );
}
