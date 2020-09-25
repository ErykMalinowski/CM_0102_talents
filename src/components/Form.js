import React, { useState } from "react";
import styles from "./Form.module.css";

import firebase from "../firebase/firebase";

export default function Form() {
  const [name, setName] = useState("");
  const [club, setClub] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const db = firebase.firestore();

    db.collection("talents")
      .add({
        name: name,
        club: club,
        age: parseFloat(age),
        nationality: nationality,
        position: position,
      })
      .then(function () {
        alert("Player added successfully!");
      })
      .catch(function (error) {
        console.error("Error: ", error);
      });

    setName("");
    setClub("");
    setAge("");
    setNationality("");
    setPosition("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.form__title}>Add Player</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Club:
        <input
          type="text"
          name="club"
          value={club}
          onChange={(e) => setClub(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Nationality:
        <input
          type="text"
          name="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <input type="submit" value="Add Player" />
    </form>
  );
}
