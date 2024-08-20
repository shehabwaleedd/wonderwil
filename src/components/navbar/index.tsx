'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./style.module.scss";
import { useAccess } from '@/context/AccessContext';

const Navbar: React.FC = () => {

    const pathname = usePathname();
    const { hasAccess, navOpen, setNavOpen } = useAccess();
    const prevPathRef = useRef(pathname);

    const menuItems = ['About', 'Expertise', 'Wonder'];

    useEffect(() => {
        // Check if the pathname has changed
        if (pathname !== prevPathRef.current) {
            prevPathRef.current = pathname;
            const timer = setTimeout(() => {
                setNavOpen(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname, setNavOpen]);

    const isCurrentPage = (itemName: string) => {
        return pathname === `/${itemName.toLowerCase()}`;
    };

    const toggleMenu = () => {
        setNavOpen(!navOpen);
    };




    if (!hasAccess) {
        return null;
    }

    return (
        <>
            <header className={styles.navbar}>
                <nav className={styles.container}>
                    <div className={styles.left}>
                        <motion.button
                            onClick={toggleMenu}
                            className={styles.menuIcon}
                            animate={{ rotate: navOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.span
                                className={styles.menuDash}
                                animate={{ rotate: navOpen ? 45 : 0, y: navOpen ? 5 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className={styles.menuDash}
                                animate={{ rotate: navOpen ? -45 : 0, y: navOpen ? -5 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </div>
                    <div className={styles.center}>
                        <Link href="/">
                            <span>Wonderwil</span>
                        </Link>
                    </div>
                    <div className={styles.right}></div>
                </nav>
            </header>



            <motion.div
                className={`${styles.overlay} ${navOpen ? styles.active : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: navOpen ? 1 : 0 }}
                exit={{ opacity: 0, transition: { duration: 0.5, delay: 1.5 } }}
                transition={{ duration: 0.5 }}>
                <motion.div
                    className={styles.menu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: navOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ul className={styles.menuItems}>
                        {menuItems.map((item) => (
                            <motion.li key={item} className={`${styles.menuItem} ${isCurrentPage(item) ? styles.disabled : ''}`}>
                                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div >


        </>
    );
};

export default Navbar;