import React, { useContext, useMemo, useState } from "react";
import styles from "./Home.module.css";

import { PlayersContext } from "../contexts/PlayersContext"
import PlayerItem from "./PlayerItem";
import Searchbar from "./Searchbar";
import Filters from "./Filters";

export default function Home() {
  const { players, loading } = useContext(PlayersContext);
  const defaultFilters = {
    searchTerm: "",
    ageValues: { minAge: 0, maxAge: 99 },
    positions: "GK/SW/DR/DC/DL/DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC/FL/FC/FR/SC"
  }
  
  const [filters, setFilters] = useState(defaultFilters);

  const handleChange = (e) => {
    setFilters({...filters, searchTerm: e.target.value});
  }

  const handleAge = (e) => {
    const values = e.target.value.split("-");
    setFilters({...filters, ageValues: {minAge: parseFloat(values[0]), maxAge: parseFloat(values[1])}});
  };

  const handlePosition = (e) => {
    const position = e.target.value;

    if (position === "GK") {
      setFilters({...filters, positions: "GK"});
    } else if (position === "Def") {
      setFilters({...filters, positions: "SW/DR/DC/DL"});
    } else if (position === "Mid") {
      setFilters({...filters, positions: "DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC"});
    } else if (position === "Att") {
      setFilters({...filters, positions: "FL/FC/FR/SC"});
    } else if (position === "All") {
      setFilters({...filters, positions: "GK/SW/DR/DC/DL/DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC/FL/FC/FR/SC"});
    }
  };

  const handleReset = () => {
    setFilters({...filters, searchTerm: "", ageValues: {minAge: 0, maxAge: 99}, positions: "GK/SW/DR/DC/DL/DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC/FL/FC/FR/SC"});
  }

  const filteredPlayers = useMemo(() => filters.searchTerm === "" && filters.ageValues.minAge === 0 && filters.ageValues.maxAge === 99 && filters.positions === "GK/SW/DR/DC/DL/DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC/FL/FC/FR/SC"
        ? players
        : players.filter(
            (player) =>
            (player.age >= filters.ageValues.minAge && player.age <= filters.ageValues.maxAge) &&
            (filters.positions.includes(player.position)) &&
              (player.name.toLowerCase().includes(filters.searchTerm) ||
              player.club.toLowerCase().includes(filters.searchTerm) ||
              player.nationality.toLowerCase().includes(filters.searchTerm))
          ),
    [players, filters.searchTerm, filters.ageValues.minAge, filters.ageValues.maxAge, filters.positions]
  );

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Searchbar filters={filters} handleChange={handleChange} handleReset={handleReset} />
        <Filters filters={filters} handleAge={handleAge} handlePosition={handlePosition} />
        <h2 className={styles.content__title}>Players</h2>
        <ul className={styles.players}>
          {loading ? (
            <li className={styles.loading}>Loading...</li>
          ) : filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <PlayerItem player={player} key={player.id} />
            ))
          ) : (
            <li className={styles.none}>No players found</li>
          )}
        </ul>
      </div>
    </main>
  );
}