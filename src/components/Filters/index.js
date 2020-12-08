import React from 'react';
import styles from "./style.module.css";

export const Filters = (props) => {
    const { filters, handleAge, handlePosition } = props;
    
    return (
        <div className={styles.filters}>
          <div className={styles.filter}>
            <span>Age</span>
            <input type="radio" value="0-18" name="age" id="age1" checked={filters.ageValues.minAge === 0 && filters.ageValues.maxAge === 18} onChange={handleAge} />
            <label htmlFor="age1">0-18</label>
            <input type="radio" value="19-25" name="age" id="age2" checked={filters.ageValues.minAge === 19 && filters.ageValues.maxAge === 25} onChange={handleAge} />
            <label htmlFor="age2">19-25</label>
            <input type="radio" value="26-32" name="age" id="age3" checked={filters.ageValues.minAge === 26 && filters.ageValues.maxAge === 32} onChange={handleAge} />
            <label htmlFor="age3">26-32</label>
            <input type="radio" value="33-99" name="age" id="age4" checked={filters.ageValues.minAge === 33 && filters.ageValues.maxAge === 99} onChange={handleAge} />
            <label htmlFor="age4">33+</label>
            <input type="radio" value="0-99" name="age" id="age5" checked={filters.ageValues.minAge === 0 && filters.ageValues.maxAge === 99} onChange={handleAge} />
            <label htmlFor="age5">ALL</label>
          </div>
          <div className={styles.filter}>
            <span>Position</span>
            <input type="radio" value="GK" name="position" id="position1" checked={JSON.stringify(filters.positions) === JSON.stringify(['GK'])} onChange={handlePosition} />
            <label htmlFor="position1">GK</label>
            <input type="radio" value="Def" name="position" id="position2" checked={JSON.stringify(filters.positions) === JSON.stringify(['SW','DR','DC','DL'])} onChange={handlePosition} />
            <label htmlFor="position2">Def</label>
            <input type="radio" value="Mid" name="position" id="position3" checked={JSON.stringify(filters.positions) === JSON.stringify(['DML','DMC','DMR','ML','MC','MR','AMR','AML','AMC'])} onChange={handlePosition} />
            <label htmlFor="position3">Mid</label>
            <input type="radio" value="Att" name="position" id="position4" checked={JSON.stringify(filters.positions) === JSON.stringify(['FL','FC','FR','SC'])} onChange={handlePosition} />
            <label htmlFor="position4">Att</label>
            <input type="radio" value="All" name="position" id="position5" checked={JSON.stringify(filters.positions) === JSON.stringify(['GK','SW','DR','DC','DL','DML','DMC','DMR','ML','MC','MR','AMR','AML','AMC','FL','FC','FR','SC'])} onChange={handlePosition} />
            <label htmlFor="position5">ALL</label>
          </div>
        </div>
    )
}
