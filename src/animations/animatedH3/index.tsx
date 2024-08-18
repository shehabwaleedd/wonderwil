import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedH3Props {
    word: string;
}

const AnimatedH3: React.FC<AnimatedH3Props> = ({ word }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        if (containerRef.current) {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1256px)", () => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 99%', // Adjust start position
                        end: 'bottom 60%',
                        scrub: true,
                    }
                });

                lettersRef.current.forEach((letter, i) => {
                    timeline.fromTo(letter, {
                        opacity: 0.75,
                        y: 75
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power4.out',
                        delay: i * 0.05
                    }, 0);
                });

                return () => {
                    timeline.kill();
                };
            });


            mm.add("(max-width: 1255px)", () => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 95%', // Adjust start position
                        end: 'bottom 85%', // Adjust end position
                        scrub: true,
                    }
                });

                lettersRef.current.forEach((letter, i) => {
                    timeline.fromTo(letter, {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power4.out',
                        delay: i * 0.05
                    }, 0);
                });

                return () => {
                    timeline.kill();
                };
            });
        }
    }, [word]);

    return (
        <div ref={containerRef} className={styles.container}>
            {word.split('').map((char, i) => (
                <div
                    ref={el => {
                        if (el) lettersRef.current[i] = el;
                    }}
                    key={i}
                    className={`${styles.getChars} letter`}
                >
                    <h3>{char === ' ' ? '\u00A0' : char}</h3>
                </div>
            ))}
        </div>
    );
};

export default AnimatedH3;
