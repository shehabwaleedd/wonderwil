'use client';
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import styles from "./style.module.scss";
import Cookies from 'js-cookie';
import { useAnimation } from '@/context/AnimationContext';

const Opening = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const counterRef = useRef<HTMLParagraphElement>(null);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const cairoRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { renderingOpening, setRenderingOpening, setHasAnimationShown } = useAnimation();

    useEffect(() => {
        let currentValue = 0;
        const updateCounter = () => {
            currentValue++;
            if (currentValue <= 100) {
                if (counterRef.current) {
                    counterRef.current.textContent = currentValue.toString();
                }
            } else {
                clearInterval(interval);
                setAnimationComplete(true);
            }
        };

        const interval = setInterval(updateCounter, 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (animationComplete && renderingOpening) {
            const tl = gsap.timeline({
                onComplete: () => {
                    Cookies.set('hasAnimationShown', 'true', { expires: 1 / 48 });
                    setRenderingOpening(false);
                    setHasAnimationShown(true);
                }
            });

            tl.to(counterRef.current, { duration: 0.5, opacity: 0, ease: 'power2.inOut' });

            titleRefs.current.forEach((title, index) => {
                if (title) {
                    tl.to(title, {
                        duration: 0.1,
                        opacity: 1,
                        ease: 'power2.inOut'
                    }, `+=${0.05 * index}`)
                        .to(title, {
                            duration: 0.1,
                            opacity: 0,
                            ease: 'power2.inOut'
                        });
                }
            });

            if (cairoRef.current) {
                tl.to(cairoRef.current, { opacity: 1, duration: 2, ease: 'power2.inOut' })
                    .to(cairoRef.current, { opacity: 0, duration: 1, ease: 'power2.inOut' });
            }

            // Animate the entire container
            if (containerRef.current) {
                tl.to(containerRef.current, {
                    duration: 2,
                    opacity: 0,
                    y: -400,
                    ease: 'power3.inOut'
                }, '+=0.5'); // Adjust this delay as needed
            }

            tl.play();
        }
    }, [animationComplete, renderingOpening, setHasAnimationShown, setRenderingOpening]);

    return (
        <>
            {renderingOpening && (
                <div className={styles.opening} ref={containerRef}>
                    <h1 ref={counterRef} className={styles.counter}>0</h1>
                    <div className={styles.openingAnimation__container}>
                        {['Graphic Design', 'UI/UX', 'Branding', 'Web Development'].map((title, index) => (
                            <h2 key={title} ref={el => { titleRefs.current[index] = el; }} className={styles.logoname}>{title}</h2>
                        ))}
                        <h2 ref={cairoRef} className={styles.cairostudio}>Cairo Studio</h2>
                    </div>
                    <div className={styles.overlay}></div>
                </div>
            )}
        </>
    );
};

export default Opening;
