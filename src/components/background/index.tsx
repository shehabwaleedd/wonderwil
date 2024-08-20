'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./style.module.scss"
import { useAccess } from '@/context/AccessContext';
import QuoteOverlay from '../quoteOverlay';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

const Background = () => {
    const { hasAccess } = useAccess();
    const [showQuote, setShowQuote] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (hasAccess) {
            const hasSeenOverlay = Cookies.get('has_seen_overlay');
            if (!hasSeenOverlay) {
                setShowQuote(true);
                Cookies.set('has_seen_overlay', 'true', { expires: 365 });

                // Sequence the animations
                setTimeout(() => setShowBackground(true), 1000); // Start showing background after 3s
                setTimeout(() => setShowQuote(false), 5000); // Hide quote after 5s
            } else {
                setShowBackground(true);
            }
        }
    }, [hasAccess]);

    useEffect(() => {
        if (pathname !== '/expertise') {
            setShowBackground(false);
        } else {
            setShowBackground(true);
        }
    }, [pathname]);


    if (!hasAccess) {
        return null;
    }

    return (
        <>
            <AnimatePresence>
                {showQuote && <QuoteOverlay />}
            </AnimatePresence>
            <motion.div
                className={styles.fixed}
                initial={{ opacity: 0 }}
                animate={{ opacity: showBackground ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <video autoPlay loop playsInline muted poster='/cover.png'>
                    <source src="/WonderIntro.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </>
    );
};

export default Background;