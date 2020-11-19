import React, { useContext, useMemo, useState } from "react";
import styles from "./Home.module.css";

import { PlayersContext } from "../contexts/PlayersContext"
import PlayerItem from "./PlayerItem";

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
        <div className={styles.searchbar}>
          <div className={styles.search}>
            <span>Search For</span>
            <input type="text" value={filters.searchTerm} onChange={handleChange} />
          </div>
          <button className={styles.reset} onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="filters">
          <div className={styles.filter} onChange={handleAge}>
            <span>Age</span>
            <input type="radio" value="0-18" name="age" id="age1" defaultChecked={filters.ageValues.minAge === 0 && filters.ageValues.maxAge === 18} />
            <label htmlFor="age1">0-18</label>
            <input type="radio" value="19-25" name="age" id="age2" defaultChecked={filters.ageValues.minAge === 19 && filters.ageValues.maxAge === 25} />
            <label htmlFor="age2">19-25</label>
            <input type="radio" value="26-32" name="age" id="age3" defaultChecked={filters.ageValues.minAge === 26 && filters.ageValues.maxAge === 32} />
            <label htmlFor="age3">26-32</label>
            <input type="radio" value="33-99" name="age" id="age4" defaultChecked={filters.ageValues.minAge === 33 && filters.ageValues.maxAge === 99} />
            <label htmlFor="age4">33+</label>
            <input type="radio" value="0-99" name="age" id="age5" defaultChecked={filters.ageValues.minAge === 0 && filters.ageValues.maxAge === 99} />
            <label htmlFor="age5">ALL</label>
          </div>
          <div className={styles.filter} onChange={handlePosition}>
            <span>Position</span>
            <input type="radio" value="GK" name="position" id="position1" defaultChecked={filters.positions === "GK"} />
            <label htmlFor="position1">GK</label>
            <input type="radio" value="Def" name="position" id="position2" defaultChecked={filters.positions === "SW/DR/DC/DL"} />
            <label htmlFor="position2">Def</label>
            <input type="radio" value="Mid" name="position" id="position3" defaultChecked={filters.positions === "DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC"} />
            <label htmlFor="position3">Mid</label>
            <input type="radio" value="Att" name="position" id="position4" defaultChecked={filters.positions === "FL/FC/FR/SC"} />
            <label htmlFor="position4">Att</label>
            <input type="radio" value="All" name="position" id="position5" defaultChecked={filters.positions === "GK/SW/DR/DC/DL/DML/DMC/DMR/ML/MC/MR/AMR/AML/AMC/FL/FC/FR/SC"} />
            <label htmlFor="position5">ALL</label>
          </div>
        </div>

        <h2 className={styles.content__title}>Players</h2>
        <ul className={styles.players}>
          {loading ? (
            <li className={styles.loading}>Loading...</li>
          ) : filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <>
              <PlayerItem player={player} key={player.id} />
              <PlayerItem player={player} key={player.id} />
              <PlayerItem player={player} key={player.id} />
              </>
            ))
          ) : (
            <li className={styles.none}>No players found</li>
          )}
        </ul>
      </div>
    </main>
  );
}