import React from 'react';
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const PlayerItem = (props) => {
    const { player } = props;

    return (
        <li className={styles.player}>
            <Link to={`/player/${player.id}`} className={styles.player__name}>{ player.name }</Link>
            <div className={styles.player__nationality}>{ player.nationality }</div>
            <div className={styles.player__club}>{ player.club }</div>
            <div className={styles.player__position}>{ player.position }</div>
            <div className={styles.player__age}>{ player.age }</div>
        </li>
    )
}
