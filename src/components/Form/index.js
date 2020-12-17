import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./style.module.css";
import token from "../../token.json"

import { Title } from '../Title/index';

import { db, storage } from "../../firebase/firebase";

export const Form = () => {
  const formUrl = window.location.href.toString();

  const defaultPlayer = {
    name: "",
    club: "",
    age: "",
    nationality: "",
    position: "",
    image: ""
  };

  const [player, setPlayer] = useState(defaultPlayer)
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTalentRef = db.collection("talents").doc();
    const uploadTask = storage.ref(`/images/${newTalentRef.id}`).put(file);

    uploadTask.on("state_changed", null, null, () => {
      storage
        .ref("images")
        .child(newTalentRef.id)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
          newTalentRef.set({
            name: player.name,
            club: player.club,
            age: player.age,
            nationality: player.nationality,
            position: player.position,
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

    setPlayer({...defaultPlayer});
    setURL("");
  };

  return (
    formUrl.includes(token.content) ?
    (
      <main className="container">
        <div className="content">
          <Title title="Add Player" />
          <form onSubmit={handleSubmit} className={styles.form}>

            {Object.keys(player).map((key, i) => (
              key === "image" ? (
                <label key={i}>{key}:
                  <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                  />
                </label>
              ) : (
              <label key={i}>{key}:
                { key === "age" ? (
                    <input
                    type="text"
                    name={key}
                    value={player[key]}
                    onChange={(e) => setPlayer({...player, [key]: parseInt(e.target.value)})}
                    required
                    />
                  ) : (
                    <input
                    type="text"
                    name={key}
                    value={player[key]}
                    onChange={(e) => setPlayer({...player, [key]: e.target.value})}
                    required
                    />
                  )
                }
              </label>
              )
            ))}
            
            <input type="submit" value="Add Player" />
          </form>
          <img src={url} alt="" />
        </div>
      </main>
    ) :
    (
      <Redirect to="/404" />
    )
  );
}
