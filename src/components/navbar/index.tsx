'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./style.module.scss";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [hoverImage, setHoverImage] = useState<string | null>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { name: 'About', subItems: [], image: '/aboutPage.jpg' },
        { name: 'Expertise', subItems: ['Brand Strategy', 'Art Direction', 'Digital Design & Development', 'Photography', 'Film'] },
        { name: 'Wonder', subItems: [], image: '/wonderPage.jpg' }
    ];

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isCurrentPage = (itemName: string) => {
        return pathname === `/${itemName.toLowerCase()}`;
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (item: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveTab(item);
        setIsSubMenuVisible(true);
        const menuItem = menuItems.find(i => i.name === item);
        if (menuItem && menuItem.image) {
            setHoverImage(menuItem.image);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsSubMenuVisible(false);
            setActiveTab(null);
            setHoverImage(null);
        }, 1000);
    };

    const handleSubMenuEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleSubMenuLeave = () => {
        handleMouseLeave();
    };

    return (
        <>
            <header className={styles.navbar}>
                <nav className={styles.container}>
                    <div className={styles.left}>
                        <motion.button
                            onClick={toggleMenu}
                            className={styles.menuIcon}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.span
                                className={styles.menuDash}
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className={styles.menuDash}
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }}
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
                className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.nav
                    className={styles.menu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ul className={styles.menuItems}>
                        {menuItems.map((item) => (
                            <motion.li
                                key={item.name}
                                className={`${styles.menuItem} ${isCurrentPage(item.name) ? styles.disabled : ''}`}
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isCurrentPage(item.name) ? (
                                    <span>{item.name}</span>
                                ) : (
                                    <Link href={`/${item.name.toLowerCase()}`}>{item.name}</Link>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                    <AnimatePresence>
                        {isSubMenuVisible && activeTab && (
                            <motion.ul
                                className={styles.subItems}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={handleSubMenuEnter}
                                onMouseLeave={handleSubMenuLeave}
                            >
                                {menuItems.find(item => item.name === activeTab)?.subItems.map((subItem) => (
                                    <motion.li
                                        key={subItem}
                                        whileHover={{ scale: 1.025 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href={`/${activeTab.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {subItem}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </motion.nav>
                <AnimatePresence>
                    {hoverImage && (
                        <motion.div
                            key={hoverImage}
                            className={styles.hoverImageContainer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={hoverImage}
                                alt={`${activeTab} image`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Navbar;