'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

const QuoteOverlay = () => {
    return (
        <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className={styles.container}>
                <motion.p
                    className={styles.quote}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    Nothing is ever achieved alone
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
    );
};

export default QuoteOverlay;