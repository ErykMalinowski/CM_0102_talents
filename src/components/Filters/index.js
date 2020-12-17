import React from 'react';
import styles from "./style.module.css";

export const Filters = (props) => {
    const { filters, handleAge, handlePosition } = props;

    const ageFilters = [
      {"id": "age1", "minAge": 0, "maxAge": 18, "value": "0-18", "desc": "0-18"},
      {"id": "age2", "minAge": 19, "maxAge": 25, "value": "19-25", "desc": "19-25"},
      {"id": "age3", "minAge": 26, "maxAge": 32, "value": "26-32", "desc": "26-32"},
      {"id": "age4", "minAge": 33, "maxAge": 99, "value": "33-99", "desc": "33+"},
      {"id": "age5", "minAge": 0, "maxAge": 99, "value": "0-99", "desc": "ALL"}
    ]

    const positionFilters = [
      {"id": "position1", "positions": ['GK'], "value": "GK", "desc": "GK"},
      {"id": "position2", "positions": ['SW','DR','DC','DL'], "value": "Def", "desc": "Def"},
      {"id": "position3", "positions": ['DML','DMC','DMR','ML','MC','MR','AMR','AML','AMC'], "value": "Mid", "desc": "Mid"},
      {"id": "position4", "positions": ['FL','FC','FR','SC'], "value": "Att", "desc": "Att"},
      {"id": "position5", "positions": ['GK','SW','DR','DC','DL','DML','DMC','DMR','ML','MC','MR','AMR','AML','AMC','FL','FC','FR','SC'], "value": "All", "desc": "ALL"}
    ]
    
    return (
        <div className={styles.filters}>
          <div className={styles.filter}>
            <span>Age</span>

            {ageFilters.map(ageFilter => (
              <React.Fragment key={ageFilter.id}>
                <input type="radio" value={ageFilter.value} name="age" id={ageFilter.id} checked={filters.ageValues.minAge === ageFilter.minAge && filters.ageValues.maxAge === ageFilter.maxAge} onChange={handleAge} />
                <label htmlFor={ageFilter.id}>{ageFilter.desc}</label>
              </React.Fragment>
            ))}

          </div>
          <div className={styles.filter}>
            <span>Position</span>

            {positionFilters.map(positionFilter => (
              <React.Fragment key={positionFilter.id}>
                <input type="radio" value={positionFilter.value} name="position" id={positionFilter.id} checked={JSON.stringify(filters.positions) === JSON.stringify(positionFilter.positions)} onChange={handlePosition} />
                <label htmlFor={positionFilter.id}>{positionFilter.desc}</label>
              </React.Fragment>
            ))}

          </div>
        </div>
    )
}
