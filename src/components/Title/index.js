import React from 'react';
import styles from "./style.module.css"; 

export const Title = (props) => {
    const { title } = props;

    return (
        <h2 className={styles.title}>{ title }</h2>
    )
}
