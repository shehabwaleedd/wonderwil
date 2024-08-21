'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./style.module.scss";
import { useAccess } from '@/context/AccessContext';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const { hasAccess, navOpen, setNavOpen } = useAccess();
    const prevPathRef = useRef(pathname);
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuIconRef = useRef<HTMLButtonElement>(null);

    const menuItems = ['About', 'Expertise', 'Wonder'];

    useEffect(() => {
        if (pathname !== prevPathRef.current) {
            prevPathRef.current = pathname;
            const timer = setTimeout(() => {
                setNavOpen(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname, setNavOpen]);

    useEffect(() => {
        if (overlayRef.current && menuRef.current && menuIconRef.current) {
            const tl = gsap.timeline();
    
            if (navOpen) {
                gsap.set(overlayRef.current, { display: 'block', opacity: 0 });
                gsap.set(menuRef.current, { display: 'block', opacity: 0 });
                
                tl.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: 'power2.inOut' })
                    .to(menuRef.current, { opacity: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.3')
                    .to(menuIconRef.current.children[0], { rotation: 45, y: 5, duration: 0.3, ease: 'power2.inOut' }, 0)
                    .to(menuIconRef.current.children[1], { rotation: -45, y: -5, duration: 0.3, ease: 'power2.inOut' }, 0);
            } else {
                tl.to(menuRef.current, { 
                    opacity: 0, 
                    duration: 0.5, 
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.set(menuRef.current, { display: 'none' });
                    }
                })
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.set(overlayRef.current, { display: 'none', delay: 0.5 });
                    }
                }, '-=0.3')
                .to(menuIconRef.current.children[0], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' }, 0)
                .to(menuIconRef.current.children[1], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' }, 0);
            }
        }
    }, [navOpen]);
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
                        <button onClick={toggleMenu} className={styles.menuIcon} ref={menuIconRef}>
                            <span className={styles.menuDash} />
                            <span className={styles.menuDash} />
                        </button>
                    </div>
                    <div className={styles.center}>
                        <Link href="/">
                            <span>Wonderwil</span>
                        </Link>
                    </div>
                    <div className={styles.right}></div>
                </nav>
            </header>

            <div
                ref={overlayRef}
                className={`${styles.overlay} ${navOpen ? styles.active : ''}`}
                style={{ opacity: 0 }}
            >
                <div
                    ref={menuRef}
                    className={styles.menu}
                    style={{ opacity: 0 }}
                >
                    <ul className={styles.menuItems}>
                        {menuItems.map((item) => (
                            <li key={item} className={`${styles.menuItem} ${isCurrentPage(item) ? styles.disabled : ''}`}>
                                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;