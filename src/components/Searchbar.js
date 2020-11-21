import React from 'react'
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
    const { filters, handleChange, handleReset } = props;

    return (
        <div className={styles.searchbar}>
          <div className={styles.search}>
            <span>Search For</span>
            <input type="text" value={filters.searchTerm} onChange={handleChange} />
          </div>
          <button className={styles.reset} onClick={handleReset}>
            Reset
          </button>
        </div>
    )
}
