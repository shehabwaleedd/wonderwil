'use client'
import React, { useRef, useEffect } from 'react'
import styles from "./page.module.scss";
import List from './(components)/List';
import { gsap } from 'gsap'

const ExpertisePage: React.FC = () => {

    const mainRef = useRef(null)

    useEffect(() => {
        const mainElement = mainRef.current
        if (!mainElement) return

        gsap.set(mainElement, { opacity: 0 })

        gsap.to(mainElement, {
            opacity: 1,
            duration: 1,

        })

    }, [])


    return (
        <main className={styles.expertise} ref={mainRef}>
            <video loop muted playsInline autoPlay >
                <source src="/ExpertiseVideo.mp4" type="video/mp4" />
            </video>
            <List />
        </main>
    );
};

export default ExpertisePage;