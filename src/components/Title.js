import React from 'react';
import styles from "./Title.module.css"; 

export const Title = (props) => {
    const { title } = props;

    return (
        <h2 className={styles.title}>{ title }</h2>
    )
}
