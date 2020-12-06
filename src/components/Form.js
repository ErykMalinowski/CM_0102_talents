import React, { useState } from "react";
import styles from "./Form.module.css";

import Title from './Title';

import {db, storage} from "../firebase/firebase";


// w tym kompoenencie sprawdzasz, czy w urlu jest twój poprawny token, jesli tak to zrwacasz form, jesli nie, zwracasz redirect do 404
export default function Form() {

  // trzymałaym te wszystkie dane w jednym obiekcie, zamiast ustawiać state dla kazdego propa osobno, 
  // do usatwiania wartości storzyłabym wtedy funkcje, która będzie w argumentach przyjomować nazwę klucza i wartość, którą chcesz dodać
  // zmienić w obiekcie
  // wtedy w newTalentRef.set() przekazesz obiekt i czyszczenie stanu jakby przyjemniejsze, mniej kodu :)

  const [name, setName] = useState("");
  const [club, setClub] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // nie mieszalalbym const/let z varami chyba, ze masz ku temu konkretny powod
    var newTalentRef = db.collection("talents").doc();
    const uploadTask = storage.ref(`/images/${newTalentRef.id}`).put(file);

    // czy jesteś pewnien, ze chcesz robić parseFloat na age?
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(newTalentRef.id)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
          newTalentRef.set({
            name: name,
            club: club,
            age: parseFloat(age),
            nationality: nationality,
            position: position,
            image: url
            })
            .then(function () {
              alert("Player added successfully!");
            })
            .catch(function (error) {
              console.error("Error: ", error);
            });
        })
    });

    setName("");
    setClub("");
    setAge("");
    setNationality("");
    setPosition("");
    setURL("");
  };

  // w pormie potencjał na wykorzsytanie iteratora, zamiast pisania z ręki 7 niemal takich samych pól
  return (
    <main className="container">
      <div className="content">
        <Title title="Add Player" />
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
          Name:
            <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
          </label>
          <label>
          Club:
            <input
            type="text"
            name="club"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            required
            />
          </label>
          <label>
          Age:
            <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            />
          </label>
          <label>
          Nationality:
            <input
            type="text"
            name="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
            />
          </label>
          <label>
          Position:
            <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            />
          </label>
          <label>
          Image:
            <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            />
          </label>
          <input type="submit" value="Add Player" />
        </form>
        <img src={url} alt="" />
      </div>
    </main>
    
  );
}
