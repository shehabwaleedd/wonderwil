'use client'
import React, { useState, useEffect } from 'react';
import { useAccess } from '@/context/AccessContext';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';

const QuoteOverlay = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { hasAccess } = useAccess();

    useEffect(() => {
        if (hasAccess) {
            const hasSeenOverlay = Cookies.get('has_seen_overlay');
            if (!hasSeenOverlay) {
                setIsVisible(true);
                Cookies.set('has_seen_overlay', 'true', { expires: 365 });
                const timer = setTimeout(() => {
                    setIsVisible(false);
                }, 3000);

                return () => clearTimeout(timer);
            }
        }
    }, [hasAccess]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.container}>
                        <motion.p
                            className={styles.quote}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            &quot;Nothing is ever achieved alone&quot;
                        </motion.p>
                        <motion.p
                            className={styles.author}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            - Jean Prouvé
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuoteOverlay;