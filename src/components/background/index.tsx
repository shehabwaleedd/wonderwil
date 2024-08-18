import React from 'react';
import styles from "./style.module.scss"
const Background = () => {
    return (
        <div className={styles.fixed}>
            <video autoPlay muted loop>
                <source src="/WonderIntro.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default Background;