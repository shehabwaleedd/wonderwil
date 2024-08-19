'use client'

import React from 'react';
import styles from "./style.module.scss"
import { useAccess } from '@/context/AccessContext';

const Background = () => {

    const { hasAccess } = useAccess();

    return (
        <div className={styles.fixed}>
            {hasAccess && <video autoPlay loop playsInline muted>
                <source src="/WonderIntro.mp4" type="video/mp4" />
            </video>}
        </div>
    );
};

export default Background;