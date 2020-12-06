import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>Championship Manager 2001/02 Talents</h1>
        <h1 className={`${styles.title} ${styles["title--mobile"]}`}>CM 01/02 Talents</h1>
      </Link>
    </header>
  );
}
