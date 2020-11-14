import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Container.module.css";
import { PlayersContext } from "../contexts/PlayersContext";

export default function Container() {
  const { players, error, loading } = useContext(PlayersContext);
  const data = players;
  const defaultFilters = {
    searchTerm: "",
    ageValues: { minAge: 0, maxAge: 99 },
    positions: ""
  }

  const [filters, setFilters] = useState(defaultFilters);

  // const [filteredData, setFilteredData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [ageValues, setAgeValues] = useState({ minAge: 0, maxAge: 99 });
  // const [position, setPosition] = useState("");

  const handleReset = () => {
    setFilters({...filters, searchTerm: "", ageValues: {minAge: 0, maxAge: 99}});
    console.log(filters);
    console.log(data)
    // setSearchTerm("");
    // setAgeValues({
    //   ...ageValues,
    //   minAge: 0,
    //   maxAge: 99,
    // });
  };

  const handleChange = (event) => {
    setFilters({...filters, searchTerm: event.target.value});
    console.log(filters);
    // setSearchTerm(event.target.value);
  };

  const handleAge = (event) => {
    const values = event.target.value.split("-");
    setFilters({...filters, ageValues: {minAge: parseFloat(values[0]), maxAge: parseFloat(values[1])}});
    console.log(filters);
    // setAgeValues({
    //   ...ageValues,
    //   minAge: parseFloat(values[0]),
    //   maxAge: parseFloat(values[1]),
    // });
  };

  const handlePosition = (event) => {
    const position = event.target.value;

    if (position === "GK") {
      setFilters({...filters, positions: "GK"});
      // setPosition("GK");
    } else if (position === "Def") {
      setFilters({...filters, positions: "SW/DR/DC/DL"});
      // setPosition("SW/DR/DC/DL");
    } else if (position === "Mid") {
      setFilters({...filters, positions: "DML/DMC/DMR/ML/MC/MR/AML/AMC/AMR"});
      // setPosition("DML/DMC/DMR/ML/MC/MR/AML/AMC/AMR");
    } else if (position === "Att") {
      setFilters({...filters, positions: "FL/FC/FR/SC"});
      // setPosition("FL/FC/FR/SC");
    }

    console.log(filters);
  };

  // useEffect(() => {
  //   console.log("use effect used");
  //   console.log(ageValues);

  //   if(!data.loading) {
  //     let temp = filteredData.players.filter(
  //     (result) =>
  //       result.age >= ageValues.minAge && result.age <= ageValues.maxAge
  //   );
  //   setFilteredData(temp);
  //   }

  // }, [ageValues]);

  // useEffect(() => {
  //   console.log("use effect used");
  //   console.log(position);

  //   if(!data.loading) {
    
  //   let temp = filteredData.players.filter(
  //     (result) =>
  //       position.includes(result.position)
  //   );

  //   setFilteredData(temp);
  //   }

  // }, [position]);

  // useEffect(() => {
  //   console.log("use effect used");
  //   console.log(searchTerm);

  //   if(!data.loading) {
   
  //   let temp = filteredData.players.filter(
  //     (player) =>
  //       player.name.toLowerCase().includes(searchTerm) ||
  //       player.club.toLowerCase().includes(searchTerm) ||
  //       player.nationality.toLowerCase().includes(searchTerm)
  //   )

  //   setFilteredData(temp);

  //   }

  // }, [searchTerm]);

  const searchResults = useMemo(() => filters.searchTerm === "" && filters.ageValues.minAge === 0 && filters.ageValues.maxAge === 99 && filters.positions === ""
        ? data.players
        : data.players.filter(
            (player) =>
              (player.age >= filters.ageValues.minAge && player.age <= filters.ageValues.maxAge &&
              filters.positions.includes(player.position)) &&
              (player.name.toLowerCase().includes(filters.searchTerm) ||
              player.club.toLowerCase().includes(filters.searchTerm) ||
              player.nationality.toLowerCase().includes(filters.searchTerm))
          ),
    [data, filters]
  );

  return (
    <div className={styles.container}>
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
          <input type="radio" value="0-18" name="age" id="age1" />
          <label htmlFor="age1">0-18</label>
          <input type="radio" value="19-25" name="age" id="age2" />
          <label htmlFor="age2">19-25</label>
          <input type="radio" value="26-32" name="age" id="age3" />
          <label htmlFor="age3">26-32</label>
          <input type="radio" value="33-99" name="age" id="age4" />
          <label htmlFor="age4">33+</label>
        </div>
        <div className={styles.filter} onChange={handlePosition}>
          <span>Position</span>
          <input type="radio" value="GK" name="position" id="position1" />
          <label htmlFor="position1">GK</label>
          <input type="radio" value="Def" name="position" id="position2" />
          <label htmlFor="position2">Def</label>
          <input type="radio" value="Mid" name="position" id="position3" />
          <label htmlFor="position3">Mid</label>
          <input type="radio" value="Att" name="position" id="position4" />
          <label htmlFor="position4">Att</label>
        </div>
      </div>

      <h2 className={styles.subtitle}>Players</h2>
      <ul className={styles.players}>
        {data.loading ? (
          <li className={styles.player}>Loading...</li>
        ) : searchResults.length > 0 ? (
          searchResults.map((item) => (
            <li key={item.id} className={styles.player}>
              <Link to={`/${item.id}`} className={styles.player__name}>
                {item.name}
              </Link>
              <div className={styles.player__nationality}>
                {item.nationality}
              </div>
              <div className={styles.player__club}>{item.club}</div>
              <div className={styles.player__position}>{item.position}</div>
              <div className={styles.player__age}>{item.age}</div>
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
