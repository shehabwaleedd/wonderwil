import React from 'react';
import styles from "./page.module.scss";
import List from './(components)/List';

const ExpertisePage: React.FC = () => {


    return (
        <main className={styles.expertise}>
            <List />
        </main>
    );
};

export default ExpertisePage;