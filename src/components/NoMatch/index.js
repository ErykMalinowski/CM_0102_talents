import React from 'react';
import styles from "./style.module.css";

import { Title } from '../Title/index';

export const NoMatch = () => {
    return (
        <main className="container">
            <div className="content">
                <Title title="Error 404" />
                <p className={styles.error}>Page not found.</p>
            </div>
        </main>
    )
}