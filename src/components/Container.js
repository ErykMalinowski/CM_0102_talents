import React, { useContext, useEffect, useState } from "react";
import styles from "./Container.module.css";
import PlayersContext from "../contexts/PlayersContext";

export default function Container() {
  const data = useContext(PlayersContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = data.players.filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm) ||
        player.club.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <div className={styles.search}>
          <span>Search For</span>
          <input type="text" value={searchTerm} onChange={handleChange} />
        </div>
        <button className={styles.filters}>Filters</button>
      </div>
      <h2 className={styles.subtitle}>Players</h2>
      <ul className={styles.players}>
        {data.loading ? (
          <li className={styles.player}>Loading...</li>
        ) : searchResults.length > 0 ? (
          searchResults.map((item) => (
            <li key={item.id} className={styles.player}>
              <div className={styles.player__name}>{item.name}</div>
              <div className={styles.player__club}>{item.club}</div>
              <div className={styles.player__position}>{item.position}</div>
            </li>
          ))
        ) : (
          <li className={styles.player}>
            <div className={styles.player__name}>No players found</div>
          </li>
        )}
      </ul>
    </div>
  );
}
