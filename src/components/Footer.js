import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.summary}>Created by Eryk Malinowski</p>
    </footer>
  );
}


// komponenty funkcyjne mozna zapisac tez:
// export const Footer = () =>  (
//    <footer className={styles.footer}>
//      <p className={styles.summary}>Created by Eryk Malinowski</p>
//    </footer>
//  );
