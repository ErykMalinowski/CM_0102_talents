import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <div className={styles.search}>
        <span>Search For</span>
        <input type="text" />
      </div>
      <button className={styles.filters}>Filters</button>
    </div>
  );
}
